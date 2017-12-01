/*

 [ ftt.jquery.modallayer.js ]

   < doc >
     - modalLayer 출력도구
     - 함께 사용되는 필수 요소: slick.js / clipboard.js
     - 버튼 혹은 a엘리먼트에만 사용할 수 있으며 엘리먼트 내 data-layer 필수 추가

     - 함께 사용되는 관련속성 종류
       - data-layer: 사용되는 레이어의 형태를 입력하며 #fLayer의 하위 클래스 이름으로 매칭하여 출력( EX> data-layer="video-list" => #fLayer .video-list가 출력 )
         - data-layer값을 종류
         - 'video'      : youtube 비디오 재생, 공유 버튼 url 자동 생성
         - 'video-list' : youtube 비디오 다수를 하단 버튼을 이용하여 볼 수 있는 형태
         - 'image-list' : 다수의 이미지를 slick.js를 이용하여 레이어 형태로 출력
         - ETC          : 그 외에는 하위 클래스 이름에 맞게 출력 (엘리먼트 속성 중 data-url정보가 없는경우 data-msg만 출력)

       - data-url: 레이어에 출력될 미디어(이미지, 비디오)의 값을 입력, 다수인 경우 ','로 구분 (EX> data-url="cZdjlkopiWE, cZdjlkopiWE, cZdjlkopiWE")
       - data-thumb: 'video-list'에서만 사용되는 값으로 하단 썸네일 이미지의 url을 절대경로로 입력 ( EX>data-thumb="images/asd.jpg, images/asd.jpg, images/asd.jpg" )
       - data-msg: 미디어의 정보를 입력 생략가능하며 data-layer의 형태에 따라서 다른형태로 사용되며 생략가능 ( EX> data-msg="aaa, bbb, ccc" )

   < history >
     ver 0.1
       - 초기 제작
       - 트위터 공유 링크 내 한글 인코딩처리 추가


   < todoList(작업 우선순위 순서대로) >
     1> image-list 기능 구현 - X
     2> 모듈 전체를 더 세련된 형태로 구현
     3> 연관되는 필수 모듈 관리
     4> 엘리먼트 관련 기능 최적화
     5> 기능 추가

   < issueList >
     1> 하기 너무 싫은게 문제
*/

;( function (factory) {

  // 연관파일 존재 여부 확인
  if ( !window.Clipboard ) {
    console.log('[에러] clipboard.js가 존재하지 않습니다.');
  }else if ( !$.fn.slick ) {
    console.log('[에러] slick.js가 존재하지 않습니다.');
  }else if ( !$.fn.actual ) {
    console.log('[에러] actual.js가 존재하지 않습니다.');
  }
  factory(jQuery);

})(function ($) {

  var ModalLayer = (function(){
    function ModalLayer(ele, method) {
      var _ = this;
      var target = ele;

      // default options
      _.defaultOpts = {
        layerWrap: '#fLayer',
        layerEle: null,
        viewerEle: null,
        shareEle: null,
        layerType: null,
        layerUrl: null,
        layerMsg: null,
        layerThumb: null,
        layerIdx: null,
        slickOpts: {
          dots: true,
          swipe: true,
          adaptiveHeight: false
        },
        bgEle: '#fLayer .bg_layer',
        bgOpacity: 0.7,
        clipboard: null,
        fixed: false
      };

      // options
      _.options = _.defaultOpts;

      // setList (str->arr)
      _.setList = function (str) {
        return str.replace(/ /gi, "").split(',');
      };

      // init video element
      _.videoInit = function (target, url) {
        var videoEle = '<iframe width="310" height="171" src="https://www.youtube.com/embed/' + url + '?rel=0&amp;vq=hd480;wmode=transparent&autoplay=1" ' + 'frameborder="0" allowfullscreen></iframe>';
        $(target).empty().append(videoEle);
      };

      // openLayer
      _.openLayer = function (obj) {
        var options = obj,
          winHeight = $(window).height(),
          docHeight = $(document).height(),
          layerHeight = $(options.layerEle).actual('height'),
          layerPos = {
            'top': null,
            'position': null
          },
          bgPos = {
            'height': docHeight,
            'opacity': options.bgOpacity
          };

        // set position
        if (layerHeight >= winHeight * 0.9) {
          $(window).scrollTop(0);
          layerPos.top = 80;
          layerPos.position = 'absolute';
        } else {
          layerPos.top = ( winHeight - layerHeight ) / 2;
          layerPos.position = 'fixed';
        }

        // display
        $(options.layerEle).css(layerPos).show();
        $(options.layerWrap).show();
        $(options.bgEle).css(bgPos).show();
        if( $(options.layerEle).hasClass('image-list') ) {
          $(options.viewerEle).slick('slickGoTo', options.layerIdx, true);
          $(options.viewerEle).slick('setPosition');
        }
      };

      _.setOpts = function (target) {
        var targetOpts;
        var isElements = ( $(target).attr('data-layer') !== undefined ) ? true : false;

        if ( isElements ) {
          targetOpts = {
            docHeight: $(document).height(),
            layerEle: _.defaultOpts.layerWrap + ' .' + $(target).attr('data-layer'),
            viewerEle: $(_.defaultOpts.layerWrap + ' .' + $(target).attr('data-layer') + ' .viewer div'),
            shareEle: $(_.defaultOpts.layerWrap).find('.video .share'),
            layerType: $(target).attr('data-layer'),
            layerUrl: ( $(target).attr('data-url') === undefined ) ? null : _.setList($(target).attr('data-url')),
            layerMsg: ( $(target).attr('data-msg') === undefined ) ? null : _.setList($(target).attr('data-msg')),
            layerThumb: ( $(target).attr('data-thumb') === undefined ) ? null : _.setList($(target).attr('data-thumb')),
            layerIdx: ( $(target).attr('data-index') === undefined ) ? null : _.setList($(target).attr('data-index'))
          };
        }else{
          targetOpts = target;
        }
        _.options = $.extend({}, _.defaultOpts, targetOpts);
      };

      // constructor
      (function () {

        if ( method !== undefined ) {
          _.setOpts( method );
          _.open();
        }else{
          // bind layerEvent
          $(target).on('click', function () {
            _.setOpts(this);
            _.open();
            return false
          });
        }

        // bind close
        $(_.options.bgEle+', #fLayer .btn_close').on('click', function (e) {
          _.close.call(_, e);
          return false
        });
      })();
    }

    return ModalLayer;

  })();

  // ModalLayer.open
  ModalLayer.prototype.open = function () {
    var _ = this;
    var options = this.options;

    if( options.layerType === 'video' ){
      // type video
      var facebookEle = $(options.shareEle).find('.btn_facebook'),
        twitterEle = $(options.shareEle).find('.btn_twitter'),
        gplusEle = $(options.shareEle).find('.btn_gplus'),
        blogEle = $(options.shareEle).find('.btn_blog'),
        facebookUrl = 'http://www.facebook.com/sharer/sharer.php?u=https://youtu.be/' + options.layerUrl,
        twitterUrl = 'https://twitter.com/intent/tweet?text='+ encodeURI( options.layerMsg ) +'&url=https://youtu.be/' + options.layerUrl,
        sourceUrl = '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+ options.layerUrl +'" frameborder="0" allowfullscreen></iframe>',
        gplusUrl = 'https://plus.google.com/share?url=https://youtu.be/' + encodeURI( options.layerUrl );

      // init video
      _.videoInit( options.viewerEle, options.layerUrl );

      // init clipboard.js
      options.clipboard = new Clipboard( options.layerEle + ' .share .btn_blog' );
      options.clipboard.on('success', function () {
        alert( "클립보드에 복사되었습니다.\n ‘붙여넣기’로 원하시는 곳에 Ctrl + V 또는 마우스 오른쪽 버튼 클릭 후 붙여 넣기는 선택해주세요." );
      });
      options.clipboard.on('error', function () {
        window.prompt ( "선택된 글자를 복사하여 공유해주세요" , sourceUrl);
      });

      // init shareData
      $(facebookEle).attr('href', facebookUrl);
      $(twitterEle).attr('href', twitterUrl);
      $(gplusEle).attr('href', gplusUrl);
      $(blogEle).attr('data-clipboard-text', sourceUrl);

    }else if ( options.layerType === 'video-list' ) {

      // add youtube element
      _.videoInit(options.viewerEle, options.layerUrl[0]);

      // add thumbnail
      (function(){
        var thumbListEle = '';

        $(options.layerUrl).each( function (i) {
          var thumbMsg = $(options.layerMsg)[i] || '';
          var thumbImg = ( $(options.layerThumb)[i] !== undefined ) ? '<img src="' + $(options.layerThumb)[i] + '" alt="'+thumbMsg+'">' : '';

          thumbListEle+= '<button class="btn_list'+ (i + 1) +'" type="button" data-url="'+options.layerUrl[i]+'">'+ thumbImg + '</button>';
        } );
        $(options.layerEle).find('.list').empty().append(thumbListEle);
        $(options.layerEle).find('.list button:eq(0)').addClass('active');
        $(options.layerWrap).off( 'click', '.list button' ).on( 'click', '.list button', function () {
          if ( $(this).attr('data-url') !== 'disabled' && !$(this).hasClass('active') ) {
            $(options.layerWrap).find('.list button').removeClass('active');
            $(this).addClass('active');
            _.videoInit( options.viewerEle, $(this).attr('data-url') );
          }else{
            return false
          }
        } );
      })();

    }else if ( options.layerType === 'image-list' ) {
      var imgEle = '';

      // imgEle set
      $(options.layerUrl).each(function (idx, target) {
        var imgData = {
          src: target,
          alt: $(options.layerMsg)[idx]
        };
        imgEle+= '<div><div><span><img src="' + imgData.src + '" alt="' + imgData.alt + '"><span></div></div>';
      });
      $(options.viewerEle).slick( options.slickOpts );
      $(options.viewerEle).slick( 'slickAdd', imgEle );

    }else{    // type image & ETC
      var contEle = ( options.layerUrl === null ) ? ''  : '<img src="' + options.layerUrl + '" alt="' + options.layerMsg + '">';

      if ( !options.fixed ) $(options.layerEle).find('.viewer div').empty().append( contEle );
    }

    // open layer
    _.openLayer(options);
  };

  // ModalLayer.close
  ModalLayer.prototype.close = function (e) {
    var _ = this;
    var options = _.options;

    // layerClose func
    if ( e.target.id != 'fLayer' ) {
      var layerImageList = $(options.layerEle).hasClass('image-list'),
        layerVideo = $(options.layerEle).hasClass('video');

      if ( layerImageList ) $(options.viewerEle).slick('unslick');
      if ( layerVideo) options.clipboard.destroy();
      // common
      if( !options.fixed ) $(options.viewerEle).empty();

      $(options.layerWrap).hide();
      $(options.layerEle).hide();
    }
  };

  $.fn.modalLayer = function ( method ) {
    // _는 jquery selector
    var _ = this;

    // _에 jquery selector와 options값(매개변수)를 넣어 ModalLayer를 생성
    // 다수의 기능이 동시에 돌아가는 구조가 아니므로 jquery selector의 갯수에 관계 없이 1회만 실행
    _.modalLayer = new ModalLayer(_, method);

    // _를 반환
    return _;
  };

});