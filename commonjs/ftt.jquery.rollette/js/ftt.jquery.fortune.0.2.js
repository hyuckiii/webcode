/*
 [ ftt.jquery.fortune.js ]

 < history >
 ver 0.1
 - 초기 제작

 ver 0.2
 - 초기 선언 시 버튼활성화 여부 체크
 - 버튼 활성화 처리 로직 수정
 - 변수 명 변경 price -> prize
 - done callback 시 인자에 룰렛 값 추가(prize)

*/

(function($) {
  $.fn.fortune = function(options) {
    var fortune = this;
    var prize = options.prize ? options.prize : options;
    var duration = options.duration || 1000;
    var separation = options.separation || 0;
    var prize_amount = Array.isArray(prize) ? prize.length : prize;
    var prize_delta = 360 / prize_amount;
    var is_spinning = false;
    var min_random_spins = options.min_spins || 10;
    var max_random_spins = options.max_spins || 15;
    var onSpinBounce = options.onSpinBounce || function() {};
    // determine direction of spin
    var clockWise = true;
    if (undefined !== options.clockWise) {
        clockWise = options.clockWise;
    }

    // sub_prize allows a wedge to be subdivided into smaller pieces
    fortune.spin = function(prize, sub_prize) {
      if ( 'undefined' == typeof sub_prize || sub_prize === null ) { 
          sub_prize = -1; 
      }
      var directionModifier = 1;
      if (!clockWise) {
          directionModifier = -1;
      }

      prize = typeof prize === "number"?prize:Math.floor(Math.random() * prize_amount);
      var deferred = $.Deferred();
      var position = Math.floor(prize_delta * (prize));

    //var position = Math.floor(prize_delta * (prize - 1/2) + randomBetween(separation, prize_delta - separation));
      if ( prize < prize.length && undefined !== prize[prize].length ) {
          sub_amount = prize[prize].length;
          sub_prize = Math.floor(Math.random() * sub_amount);
          position = Math.floor(prize_delta * (prize - 1/2) + (prize_delta/sub_amount) * sub_prize + randomBetween(separation, prize_delta/sub_amount - separation));  
      }
      var spins = randomBetween(min_random_spins, max_random_spins);
      var final_position = directionModifier * (360 * spins + directionModifier * position);
      var prev_position = 0;
      var is_bouncing = false;

      is_spinning = true;

      fortune
        .css({
          "transform": "rotate(" + final_position + "deg)",
          "-webkit-transform": "rotate(" + final_position + "deg)",
          "transition": "transform " + duration + "ms cubic-bezier(0.215, 0.610, 0.355, 1.000)",
          "-webkit-transition": "-webkit-transform " + duration + "ms cubic-bezier(0.215, 0.610, 0.355, 1.000)"
        })
        .siblings('.spin').removeClass('bounce');

      var bounceSpin = function() {
        var curPosition = Math.floor(getRotationDegrees(fortune)),
            mod = Math.floor((curPosition + prize_delta*0.5) % prize_delta),
            diff_position,
            position_threshold = prize_delta/5,
            distance_threshold = prize_delta/10;

        prev_position = Math.floor(curPosition < prev_position ? prev_position - 360 * directionModifier : prev_position);
        diff_position = curPosition - prev_position;

        if ((mod < position_threshold && diff_position < distance_threshold) ||
            (mod < position_threshold*3 && diff_position >= distance_threshold)) {
          if (!is_bouncing) {
            fortune.siblings('.spin').addClass('bounce');
            onSpinBounce(fortune.siblings('.spin'));
            is_bouncing = true;
          }
        } else {
          fortune.siblings('.spin').removeClass('bounce');
          is_bouncing = false;
        }

        if (is_spinning) {
          prev_position = curPosition;
          requestAnimationFrame(bounceSpin);
        }
      };

      var animSpin = requestAnimationFrame(bounceSpin);

      setTimeout(function() {
        fortune
          .css({
            "transform": "rotate(" + position + "deg)",
            "-webkit-transform": "rotate(" + position + "deg)",
            "transition": "",
            "-webkit-transition": ""
          })
          .siblings('.spin').removeClass('bounce');

        cancelAnimationFrame(animSpin);
        result = prize[prize] || prize;
        if (sub_prize != -1) {
            result = prize[prize][sub_prize];
        }
        deferred.resolve(result);
        is_spinning = false;
      }, duration);
       
      return deferred.promise();
    };
    
    var getRotationDegrees = function(obj) {
      var angle = 0,
          matrix = obj.css("-webkit-transform") ||
                   obj.css("-moz-transform")    ||
                   obj.css("-ms-transform")     ||
                   obj.css("-o-transform")      ||
                   obj.css("transform");
      if (matrix !== 'none') {
        var angle,
            values = matrix.split('(')[1].split(')')[0].split(','),
            a = values[0],
            b = values[1],
            radians = Math.atan2(b, a);

        if ( radians < 0 ) {
          radians += (2 * Math.PI);
        }

        angle = Math.round( radians * (180/Math.PI));
      }

      return angle;
    };
    
    var randomBetween = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    fortune.getCurrentPosition = function() {
      return getRotationDegrees( fortune );
    };
    
    return fortune;
  };
}) (jQuery);


// roulette 공통코드
function roulette(data) {
  var defaultOpt = {
      point:{
        prize: null,    // 도착할 위치(num)
        require: null,  // 1회 사용에 필요한 포인트(num)
        current: null,  // 현재 나의 포인트
        use: null,      // 총 사용한 포인트
        total: null,    // 총 획득한 포인트
        chance: null    // 참여 가능 횟수
      },
      element:{
        wrap: $('#roulette'),
        target: $('#roulette .spinner'),
        btn: $('#roulette .btn_start'),
        btnMsg: $('#roulette .btn_start span'),
        currentPoint: $('#roulette .left_point'),
        usePoint: $('#roulette .use_point'),
        totalPoint: $('#roulette .total_point'),
        chance: $('#roulette .chance_point')
      },
      options:{                 // fortune options
        separation: 0,          // 도착 값
        prize: null,            // 룰렛 목록 갯수
        duration: 2000,         // 룰렛 애니메이션 시간
        clockWise: false,       // 룰렛 애니메이션 방향
        comma: true,            // 누적포인트에 일천단위 콤마
        afterLayout: false,     // 룰렛이 돈후에 포인트 차감인지, 선차감 표시제어
        resetDelay: 0,          // 룰렛동작후 모달팝업 표시동안 딜레이
        itemDirection: 'right'  // 룰렛 아이템 목록 순서
      },
      callback:{
        start: function () {
          return true
        },
        done: function () {
          return true
        }
      },
      msg:{
        point: function () {
          return true
        },
        chance: function (){
          return true
        },
        ing: function () {
          return false
        }
      }
    },
    getData = data;

  // func addComma
  function addComma(num) {
    if ( num === null ){
      return null
    }else{
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }

  // func layoutSet
  function layoutSet(data) {
    var $roll ={
        target: $(data.element.target).fortune(data.options),
        point: {
          num: {
            chance: ( data.init !== true && data.point.chance != null) ? data.point.chance - 1 : data.point.chance,
            current: ( data.init !== true ) ? data.point.current - data.point.require : data.point.current,
            use: ( data.init !== true ) ? data.point.use + data.point.require : data.point.use,
            total: data.point.total,
            require: data.point.require,
            score: data.score
          },
          text: {
            chance: null,
            current: null,
            use: null,
            total: null
          }
        },
        isRun: ( data.element.btn.hasClass('disabled') ) ? true : false
    };

    $roll.point.text = {
      chance: ( data.options.comma && data.point.chance != null) ? addComma($roll.point.num.chance) : $roll.point.num.chance,
      current: ( data.options.comma ) ? addComma($roll.point.num.current) : $roll.point.num.current,
      use: ( data.options.comma ) ? addComma($roll.point.num.use) : $roll.point.num.use,
      total: ( data.options.comma ) ? addComma($roll.point.num.total) : $roll.point.num.total
    };

    // 초기 입력
    if( data.init === true ) {
      $(data.element.chance).html($roll.point.text.chance);
      $(data.element.currentPoint).html($roll.point.text.current);
      $(data.element.usePoint).html($roll.point.text.use);
      $(data.element.totalPoint).html($roll.point.text.total);
      $(data.element.target).addClass("item"+data.point.lastScore);
      if ( data.point.chance === 0 || data.point.current - data.point.require < 0 ) {
        $(data.element.btn).addClass('disabled');
      }
    }

    return $roll
  }

  // constructor
  (function () {
    var data = $.extend(true, {}, defaultOpt, getData);
    // 초기 데이터 여부 확인
    data.init = true;
    layoutSet(data);
  })();

  // methos - spin
  this.spin = function (rData) {
    var data = $.extend(true, {}, defaultOpt, rData);
    var $roll = layoutSet(data);
    var setPoint = function () {
        $(data.element.chance).html($roll.point.text.chance);
        $(data.element.currentPoint).html($roll.point.text.current);
        $(data.element.usePoint).html($roll.point.text.use);
        $(data.element.totalPoint).html($roll.point.text.total);
      },
      rollBtn = $(data.element.btn),
      isCurrentPoint = $roll.point.num.current > -1,
      isChance = $roll.point.num.chance !== null && $roll.point.num.chance > 0,
      isEnabled = !$roll.isRun && isCurrentPoint && isChance;
      score = (data.options.itemDirection == 'left') ? data.score : data.options.prize - data.score;

    // 실행 중이 아닌 경우(정상실행)
    if ( isEnabled ) {
      // start
      (function () {
        $(rollBtn).addClass('disabled');
        if ( !data.options.afterLayout ) setPoint();
        data.callback.start($roll.point.num);
      })();
      // spin / done
      $roll.target.spin(score).done(function () {
        // pointSet
        if ( data.options.afterLayout ) setPoint();
        data.callback.done($roll.point.num);
        setTimeout(function () {
          if( $roll.point.num.current - data.point.require > -1  && isChance ) {
            $(rollBtn).removeClass('disabled');
          }
        }, data.options.resetDelay);
      });

    }else{
      if ( isCurrentPoint ) {
        // 포인트 부족 메시지
        data.msg.point();
      }else if( isChance ) {
        // 참여 기회 부족 메시지
        data.msg.chance();
      }else if ( !isEnabled ) {
        // 룰렛 진행 중 메시지
        data.msg.ing();
      }
      return false
    }
  };
}