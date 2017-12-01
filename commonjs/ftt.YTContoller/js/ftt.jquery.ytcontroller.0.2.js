/****************************************

 ftt.jquery.YTController.js (youtube 영상 제어)

 [ info ]
   - 간소화된 사용 방식
   - 무음, 반복 기능
   - youtube api를 사용 추가 제어가능

 [ history ]
 0.1 - 초기완성
 0.2 - 옵션 추가
   cover: (like background-size:cover)
   onReady: callback
   onStateChange: callback

****************************************/
;(function (factory) {
  factory(jQuery);
})(function ($) {
  var YTController = function () {

    var ytController = function (el, opts) {
      var _ = this;
      var defaultOps = {
        el: (el).attr('id'),
        width: null,
        height: null,
        videoId: null,
        playerVars: {
          controls: 0,
          disablekb: 0,
          enablejsapi: 1,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          showinfo: 0,
          fs: 0
        },
        loop: true,
        mute: true,
        cover: null,
        onReady: function () {
          return true
        },
        onStateChange: function () {
          return true
        }
      };
      var options = {};
      _.video = null;

      // factory funcs
      var _factory = {
        init: function () {
          var tag = document.createElement('script');
          tag.src = "https://www.youtube.com/player_api";
          var firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        },
        setOpts: function(){
          options = $.extend(true, defaultOps, opts);
        },
        setVideo: function(){
          window.onYouTubeIframeAPIReady = function() {
            _.video = new YT.Player(options.el, {
              width: (options.cover == null) ? options.width : '',
              height: (options.cover == null) ? options.width : '',
              videoId: options.videoId,
              playerVars: options.playerVars,
              events: {
                'onReady': _factory.videoReady,
                'onStateChange': _factory.videoStateChange
              }
            });
          };
        },
        setCover: function () {
          var mainVideo = $('#' + options.el);

          // func resize
          function resize(){
            var targetWidth = $(mainVideo).width();
            var targetHeight = $(mainVideo).height();
            var parentWidth = $(options.cover.parentEle).width();
            var parentHeight = $(options.cover.parentEle).height();
            var widthDiff = (parentHeight / targetHeight) * targetWidth;
            var heightDiff = (parentWidth / targetWidth) * targetHeight;
            var resultPos = {
              width: Math.round(widthDiff * options.cover.ratio),
              height: Math.round(parentHeight * options.cover.ratio),
              marginTop:-Math.round(parentHeight * options.cover.ratio / 2),
              marginLeft:-Math.round(widthDiff * options.cover.ratio / 2)
            };
            if (heightDiff > parentHeight) {
              resultPos ={
                width: Math.round(parentWidth * options.cover.ratio),
                height: Math.round(heightDiff * options.cover.ratio),
                marginTop:-Math.round(heightDiff * options.cover.ratio / 2),
                marginLeft:-Math.round(parentWidth * options.cover.ratio / 2)
              };
            }
            $(mainVideo).css(resultPos);
          }

          // constructor
          (function(){
            // set default css
            $(mainVideo).css({
              'position': 'absolute',
              'left': '50%',
              'top': '50%'
            });

            // init
            resize();
            // bind resize event
            $(window).on('resize',function () {
              resize();
            })
          })();
        },
        videoReady: function(e){
          if (options.loop) _.video.playVideo();
          if (options.mute) _.video.mute();
          if (options.cover !== null) {
            _factory.setCover();
          }
          options.onReady(e);
        },
        videoStateChange: function(e){
          if (e.data == 0 && options.loop) _.video.playVideo();
          options.onStateChange(e);
        }
      };

      // constructor
      (function(){
        _factory.init();
        _factory.setOpts();
        _factory.setVideo();
      })();
    };

    return ytController
  }();


  $.fn.YTController = function ( data ) {
    var _ = this;

    _.YTController = new YTController(_, data);
    return _.YTController;
  };

});
