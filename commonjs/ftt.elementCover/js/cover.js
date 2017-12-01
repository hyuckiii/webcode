/****************************************

 element cover(like background-size cover)

 ver 0.1 - 초기완성

****************************************/

(function(){
  $.fn.cover = function (options) {
    var defaultOps = {
      target: $(this),
      parentEle: $(this).parent('div')
    };
    var options = $.extend({}, defaultOps, options);
    var evTimer = '';

    // default css
    $(options.target).css({
      'position': 'absolute',
      'left': '50%',
      'top': '50%'
    });

    // func resize
    function resize(){
      var targetWidth = $(options.target).width(),
        targetHeight = $(options.target).height(),
        parentWidth = $(options.parentEle).width(),
        parentHeight = $(options.parentEle).height(),
        widthDiff = (parentHeight / targetHeight) * targetWidth,
        heightDiff = (parentWidth / targetWidth) * targetHeight;

      if(heightDiff > parentHeight) {
        $(options.target).css({
          width: Math.round(parentWidth*1.3)+'px',
          height: Math.round(heightDiff*1.3)+'px',
          marginTop:-Math.round(heightDiff*1.3/2),
          marginLeft:-Math.round(parentWidth*1.3/2)
        });
      }else{
        $(options.target).css({
          width: Math.round(widthDiff*1.3)+'px',
          height: Math.round(parentHeight*1.3)+'px',
          marginTop:-Math.round(parentHeight*1.3/2),
          marginLeft:-Math.round(widthDiff*1.3/2)
        });
      }
    }

    // 초기 실행
    $(window).load(function(){
      resize();
    });

    // resize event timer(리사이즈 시 반복실행 제어)
    $(window).on('scroll resize',function () {
      if (evTimer){
        window.clearTimeout(evTimer)
      }
      evTimer = setTimeout(function(){
        resize();
      }, 100);
    })

  };

})(jQuery);