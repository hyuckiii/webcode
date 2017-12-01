/****************************************

 Boardgame(Boardgame.js)

 ver 0.1
 - 초기완성

 ver 1.0
 - 주사위 값(diceCount) 지정기능 추가
 - 기타 버그 수정

 ver 1.1
 - mapSet 실행 시 0번째 항목은 무시되던 문제 수정

 ****************************************/

(function(){
  var Boardgame = {
    defaultOps : {
      diceSet: 6,                               // 주사위 단위 (1부터 ~ n)
      pauseStart: 500,                          // 말 이동 시작까지 시간
      pauseMove: 500,                           // 말 이동 시간 간격 (1칸당의 시간)
      mapSet: null,
      diceStatus: 0,
      onStart: function () { return true },     // 주사위 굴릴 시 (callback)
      onMove: function () { return true },      // 말 이동 시 (callback)
      onAfter: function () { return true }      // 말 이동 완료 후(callback)
    },
    // func move(주사위 이동 함수)
    move : function(diceStatus, userPos, map, mapAmount, data, returnData) {
      if (diceStatus > 0) {
        setTimeout(function () {
          userPos++;
          if (userPos == mapAmount) {
            userPos = 0;
          }
          $(map).removeClass('active').eq(userPos).addClass('active');
          Boardgame.defaultOps.diceStatus--;
          Boardgame.move(Boardgame.defaultOps.diceStatus, userPos, map, mapAmount, data, returnData);
        }, data.pauseMove);
      } else {
        // (callback)onAfter - 말의 이동이 끝난 후 실행
        data.onAfter(returnData);
        $(data.target).removeClass('disable');
      }
    }
  };

  // $.fn(jquery.fn.extend)는 jquery엘리먼트에 새로운 함수를 추가하는데 사용되며, 일반적으로 플러그인 작성에 사용, http://hmmim.tistory.com/17참고)
  $.fn.Boardgame = function (obj ,loopNum, diceCount, diceScore) {
    /* 1. 선언 */
    Boardgame.defaultOps.target = $( this );
      data = $.extend({}, Boardgame.defaultOps, obj);
      var map = $(data.target).find('.map'),
        activeMap = $(data.target).find('.map.active'),
        diceScore = (diceScore != undefined) ? diceScore : Math.floor((Math.random() * data.diceSet) + 1),
        startPos = parseInt($(activeMap).attr('data-step')),
        userPos = startPos,
        arrivePos = startPos + diceScore,
        typeMap = $(map).eq(arrivePos).attr('data-event'),
        mapAmount = $(map).length,
        returnData;

    /* 2. 체크 */
    if ( $(data.target).hasClass('disable') ) return '진행 중 입니다.';
      // mapSet(말의 위치를 임의로 정할 경우)
      if (data.mapSet != null){
        if (data.mapSet >= 0 && data.mapSet < mapAmount) $(map).removeClass('active').eq(data.mapSet).addClass('active');
        return false
      }

    /* 3. 로직 */
    Boardgame.defaultOps.diceStatus = diceScore;

      diceCount++;                             // 주사위 굴린 횟수 증가
      if (arrivePos >= mapAmount) {            // 한바퀴 도는 경우 체크
        arrivePos = arrivePos - (mapAmount);
        loopNum++;
      }
      if (typeMap == undefined) typeMap = 'normal'; // 도착 위치에 이벤트가 없다면 'normal'을 출력
      
    /* 4. 결과 처리 */
      // 기본 반환 값들
      returnData = {
        diceScore: diceScore,                // 주사위 값
        startPos: startPos,                  // 시작위치
        arrivePos: arrivePos,                // 도착위치
        loopNum: loopNum,                    // 전체 바퀴 수
        diceCount: diceCount,                // 주사위를 굴린 총 횟수
        typeMap: typeMap                     // 도착 위치에 이벤트
      };

      // (callback)onStart - 주사위를 굴릴때 실행
      data.onStart(returnData);

      // 말 이동 함수 실행(주사위 안내 시간 추가가능)
      setTimeout(function () {
        // (callback)onMove - 말이 움직이기 시작할때 실행
        data.onMove(returnData);
        Boardgame.move(Boardgame.defaultOps.diceStatus, userPos, map, mapAmount, data, returnData);
      }, data.pauseStart);
      $(data.target).addClass('disable');     // 진행 중 실행되지 않도록 class변경
      return returnData
  }
})(jQuery);