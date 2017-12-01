/****************************************

 Boardgame(Boardgame.js)

 ver 0.1 - 초기완성

 ****************************************/

(function(){
  $.fn.Boardgame = function (obj ,loopNum, diceCount) {
    var defaultOps = {
        target: $(this),
        diceSet: 6,                               // 주사위 단위 (1부터 ~ n)
        pauseStart: 500,                          // 말 이동 시작까지 시간
        pauseMove: 500,                           // 말 이동 시간 간격 (1칸당의 시간)
        mapSet: null,
        onStart: function () { return true },     // 주사위 굴릴 시 (callback)
        onMove: function () { return true },      // 말 이동 시 (callback)
        onAfter: function () { return true }      // 말 이동 완료 후(callback)
      },
      data = $.extend({}, defaultOps, obj);

    if ( !$(data.target).hasClass('disable') ) {
      var map = $(data.target).find('.map'),
        activeMap = $(data.target).find('.map.active'),
        diceScore = Math.floor((Math.random() * data.diceSet) + 1),
        diceStatus = diceScore,
        startPos = parseInt($(activeMap).attr('data-step')),
        userPos = startPos,
        arrivePos = startPos + diceScore,
        typeMap = $(map).eq(arrivePos).attr('data-event'),
        mapAmount = $(map).length,
        returnData;

      // mapSet(말의 위치를 임의로 정할 경우)
      if (data.mapSet != null){
        if (data.mapSet > 0 && data.mapSet < mapAmount) $(map).removeClass('active').eq(data.mapSet).addClass('active');
        return false
      }
      diceCount++;                             // 주사위 굴린 횟수 증가
      if (arrivePos >= mapAmount) {          // 한바퀴 도는 경우 체크
        arrivePos = arrivePos - (mapAmount);
        loopNum++;
      }
      if (typeMap == undefined) typeMap = 'normal'; // 도착 위치에 이벤트가 없다면 'normal'을 출력
      
      returnData = {                         // 기본 반환 값들
        diceScore: diceScore,                // 주사위 값
        startPos: startPos,                  // 시작위치
        arrivePos: arrivePos,                // 도착위치
        loopNum: loopNum,                    // 전체 바퀴 수
        diceCount: diceCount,                // 주사위를 굴린 총 횟수
        typeMap: typeMap                     // 도착 위치에 이벤트
      };

      data.onStart(returnData);                         // (callback)onStart - 주사위를 굴릴때 실행
      start = setTimeout(function () {        // 말 이동 함수 실행(주사위 안내 시간 추가가능)
        data.onMove(returnData);                        // (callback)onMove - 말이 움직이기 시작할때 실행
        move();
      }, data.pauseStart);
      $(data.target).addClass('disable');     // 진행 중 실행되지 않도록 class변경

      // func move(주사위 이동 함수)
      function move() {
        if (diceStatus > 0) {
          var diceLoop = setTimeout(function () {
            userPos++;
            if (userPos == mapAmount) {
              userPos = 0;
            }
            $(map).removeClass('active').eq(userPos).addClass('active');
            diceStatus--;
            move();
          }, data.pauseMove);
        } else {
          data.onAfter(returnData);                                  // (callback)onAfter - 말의 이동이 끝난 후 실행
          $(data.target).removeClass('disable');
        }
      }
      return returnData
    }else{  // 비정상 실행 시
      return '진행 중 입니다.'
    }
  }
})(jQuery);