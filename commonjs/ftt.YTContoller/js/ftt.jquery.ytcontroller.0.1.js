/****************************************

 ftt.jquery.YTController.js (youtube 영상 제어)

 [ info ]
   - 간소화된 사용 방식
   - 무음, 반복 기능
   - youtube api를 사용 추가 제어가능

 [ history ]
 0.1 - 초기완성

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
        mute: true
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
          options = $.extend({}, defaultOps, opts);
        },
        setVideo: function(){
          window.onYouTubeIframeAPIReady = function() {
            _.video = new YT.Player(options.el, {
              width: options.width,
              height: options.width,
              videoId: options.videoId,
              playerVars: options.playerVars,
              events: {
                'onReady': _factory.videoReady,
                'onStateChange': _factory.videoStateChange
              }
            });
          };
        },
        videoReady: function(e){
          if (options.loop) _.video.playVideo();
          if (options.mute) _.video.mute();
        },
        videoStateChange: function(e){
          if (e.data == 0 && options.loop) _.video.playVideo();
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
