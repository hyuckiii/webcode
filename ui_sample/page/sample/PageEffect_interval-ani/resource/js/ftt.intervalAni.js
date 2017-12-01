/****************************************

 ftt.css3Anitiontool(가칭)

 [history]
 0.1 - 초기완성

****************************************/

(function(){
  var cssAniSet = {
    defaultOps: {
    aniName: 'noname',
    duration: 1000,
    delay: 0,
    loop: false,
    fillMode: true,
    beforeChange: function() { return true },
    afterChange: function() { return true }
  },
  playAni: function( data ) {
    var aniStep = 0,
      aniStepNum = data.aniData.length - 1;

      function ani(){
        if ( aniStep <= aniStepNum ){
          var aniData = $.extend( cssAniSet.defaultOps, data.aniData[aniStep] );
          var aniDuration = aniData.duration,
            aniName = parseInt(aniData.aniName),
            aniDurationCss = aniDuration / 1000+'s ',
            aniDelay = aniData.delay,
            aniLoop = ( aniData.loop == true ) ? 'infinite' : '1',
            aniFillMode = ( aniData.fillMode == true ) ? 'forwards' : 'none',
            aniBeforeChange = aniData.beforeChange,
            aniAfterChange = aniData.afterChange,
            currentIdx = aniStep,
            nextIdx = ( aniStep+1 <= aniStepNum ) ? aniStep+1 : 'none';
          
          setTimeout(function(){
            // css3 애니메이션 사용 시
            if ( aniName.length != 0 ){
              $(data.target).css({
                'animation-name': data.aniData[aniStep].aniName,
                'animation-duration': aniDurationCss,
                'animation-iteration-count': aniLoop,
                'animation-fill-mode': aniFillMode
              });
            }
            // before callback 실행
            aniBeforeChange( currentIdx, nextIdx );

            // 루프 여부체크 (루프 시 다음 애니메이션 미 작동)
            setTimeout(function(){
              aniAfterChange( currentIdx, nextIdx );
              if ( aniData.loop == false ) {
                aniStep++;
                ani();
              }
            }, aniDuration);
          }, aniDelay)
        }else{
          return false
        }
      }
      ani();
    }
  };

  $.fn.cssAniSet = function ( obj ) {

    /* 1. 선언 */
    var data = {
      target: $(this),
      aniData: obj
    };

    /* 2. 체크 */
    if ( data.target === undefined ) {
      console.log('대상이 없습니다.');
      return false
    }

    /* 3. 로직 */
    cssAniSet.playAni( data );

    /* 4. 결과 처리 */
  }

})(jQuery);