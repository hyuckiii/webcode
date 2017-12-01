(function($) {
  $.fn.fortune = function(options) {

    var fortune = this;
    var prices = options.prices?options.prices:options;

    var duration = options.duration || 1000;
    var separation = options.separation || 0;
    var prices_amount = Array.isArray(prices) ? prices.length : prices;
    var prices_delta = 360 / prices_amount;
    var is_spinning = false;
    var min_random_spins = options.min_spins || 10;
    var max_random_spins = options.max_spins || 15;
    var onSpinBounce = options.onSpinBounce || function() {};
    // determine direction of spin
    var clockWise = true;
    if (undefined !== options.clockWise) {
        clockWise = options.clockWise;
    }    
 
    // sub_price allows a wedge to be subdivided into smaller pieces
    fortune.spin = function(price, sub_price) {
      if ( 'undefined' == typeof sub_price || sub_price === null ) { 
          sub_price = -1; 
      }
      var directionModifier = 1;
      if (!clockWise) {
          directionModifier = -1;
      }

      price = typeof price === "number"?price:Math.floor(Math.random() * prices_amount);
      var deferred = $.Deferred();
      var position = Math.floor(prices_delta * (price));

    //var position = Math.floor(prices_delta * (price - 1/2) + randomBetween(separation, prices_delta - separation));
      if ( price < prices.length && undefined !== prices[price].length ) {
          sub_amount = prices[price].length;
          sub_price = Math.floor(Math.random() * sub_amount);
          position = Math.floor(prices_delta * (price - 1/2) + (prices_delta/sub_amount) * sub_price + randomBetween(separation, prices_delta/sub_amount - separation));  
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
            mod = Math.floor((curPosition + prices_delta*0.5) % prices_delta),
            diff_position,
            position_threshold = prices_delta/5,
            distance_threshold = prices_delta/10;

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
        result = prices[price] || price;
        if (sub_price != -1) {
            result = prices[price][sub_price];
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
        price: null,    // 도착할 위치(num)
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
      options:{
        prices: null,
        duration: 2000,
        clockWise: false,
        comma: true,
        afterLayout: false,
        resetDelay: 0
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
            total: data.point.total
          },
          text: {
            chance: null,
            current: null,
            use: null,
            total: null
          }
        },
        isRun: ( data.element.btn.hasClass('disabled') ) ? false : true
    };

    $roll.point.text = {
      chance: ( data.options.comma && data.point.chance != null) ? addComma($roll.point.num.chance) : $roll.point.num.chance,
      current: ( data.options.comma ) ? addComma($roll.point.num.current) : $roll.point.num.current,
      use: ( data.options.comma ) ? addComma($roll.point.num.use) : $roll.point.num.use,
      total: ( data.options.comma ) ? addComma($roll.point.num.total) : $roll.point.num.total
    };

    if( data.init === true ) {
      $(data.element.chance).html($roll.point.text.chance);
      $(data.element.currentPoint).html($roll.point.text.current);
      $(data.element.usePoint).html($roll.point.text.use);
      $(data.element.totalPoint).html($roll.point.text.total);
    }
    return $roll
  }

  // init
  (function () {
    var data = $.extend(true, {}, defaultOpt, getData);
    data.init = true;
    $(data.element.target).addClass("item"+data.point.lastScore);
    layoutSet(data);
  })();

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
      isCurrentPoint = $roll.point.num.current < 0,
      isChance = $roll.point.num.chance !== null && $roll.point.num.chance < 0,
      isEnabled = $roll.isRun && !isCurrentPoint && !isChance;

    // 룰렛 사용가능여부 체크
    if( isCurrentPoint || isChance ) $(data.element.btn).addClass('disabled');

    // 실행 중이 아닌 경우(정상실행)
    if ( isEnabled ) {
      // start
      (function () {
        $(rollBtn).addClass('disabled');
        if ( !data.options.afterLayout ) setPoint();
        data.callback.start($roll.point.num);
      })();
      // spin / done
      $roll.target.spin(data.score).done(function () {
        // pointSet
        if ( data.options.afterLayout ) setPoint();
        data.callback.done($roll.point.num);
        setTimeout(function () {
          $(rollBtn).removeClass('disabled');
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