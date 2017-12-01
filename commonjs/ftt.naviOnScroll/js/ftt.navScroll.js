/****************************************

 ftt.navigation on scrolling plug-in(ftt.navScroll.js)

 [history]
 0.1 - 초기완성
 0.2 - 이벤트 간격 설정 기능 추가(evDelay)

****************************************/
(function(){
  $.fn.navPos = function (options) {
    var defaultOps = {
      target: $(this),
      menuList: $(this).children('ul').children('li'),
      menuBtn: $(this).children('ul').children('li').children('a'),
      menuNum: $(this).children('ul').children('li').children('a').length,
      menuHeight: $(this).height(),
      menuClass: 'step',
      detailPos: 0,
      aniDuration: 600,
      aniEase: 'swing',
      evDelay: 0
    };
    var options = $.extend({}, defaultOps, options);
    var evTimer;

    function animate(type, idx) {
      var winPos = $(window).scrollTop();

      if( $('html, body').is(":animated") == 0 ){
        if(type == "click"){
          var target = $(options.menuList).eq(idx).find('a'),
            targetPos = $(target).attr('href');

          $(options.menuBtn).removeClass("active");
          $(target).addClass("active");
          $(options.target).attr("class","").addClass(options.menuClass+$(target).parent("li").index());
          $('html, body').animate({
            scrollTop: $(targetPos).offset().top - options.menuHeight + options.detailPos
          }, options.aniDuration, options.aniEase);
          return false;
        }else{  // scroll, resize
          for(i=0; i < options.menuNum; i++) {
            var nav = $(options.target).find('li:eq('+i+') a'),
              firstTarget = $(options.target).find('li:eq(0) a').attr('href'),
              target = $(nav).attr("href"),
              nextTarget;
            if(i == options.menuNum-1){
              nextTarget = $(options.target).find('li:eq('+i+') a').attr("href");
            }else{
              nextTarget = $(options.target).find('li:eq('+(i+1)+') a').attr("href");
            }
            firstTarget = $(firstTarget).offset().top - options.menuHeight + options.detailPos;
            target = $(target).offset().top - options.menuHeight + options.detailPos;
            nextTarget = $(nextTarget).offset().top - options.menuHeight + options.detailPos;
            $(options.menuBtn).removeClass("active");
            $(options.target).attr("class","");
            if( winPos < firstTarget ){
            }else if( target == nextTarget || $(window).scrollTop() >= ( $(document).height() - $(window).height() ) ){
              $(options.menuBtn).removeClass("active");
              $(options.target).find('li:eq('+(options.menuNum-1)+') a').addClass("active");
              $(options.target).attr("class","").addClass(options.menuClass+(options.menuNum));
            }else if( (target <= winPos) && (winPos < nextTarget) ){
              $(options.target).find('ul > li:eq('+i+') a').addClass("active");
              $(options.target).addClass(options.menuClass+(i+1));
              return false;
            }
          }

        }
      }
    }
    $(document).ready(function () {
      // ev click
      $(options.menuBtn).bind('click',function(){
        var menuIdx = $(this).parent('li').index();
        animate('click', menuIdx);
        return false;
      })

      // ev scroll
      $(window).on('scroll resize',function () {
        if (evTimer){
          window.clearTimeout(evTimer)
        }
        evTimer = setTimeout(function(){
          animate();
        }, defaultOps.evDelay);
      })
    });

  };
})(jQuery);