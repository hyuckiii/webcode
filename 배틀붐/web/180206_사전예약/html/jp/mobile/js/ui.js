// layer open func
function layerOpen(data){
  var docHeight = $(document).height(),
    target = "#fLayer ."+data.layerType,
    layerType = data.layerType,
    contUrl = data.contUrl,
    contMsg = data.contMsg,
    slickOpts = {
    dots: true,
      swipe: true,
      adaptiveHeight: true
    },
    slickIdx = data.slickIdx,
    targetSlide;
  // layerClose func
  function layerClose(e){
    if(e.target.id != 'fLayer') {
      if ( $('#fLayer .image-list').is(':visible') ) {
        $('#fLayer .image-list .viewer > div').slick('unslick');
      }
      $("#fLayer .viewer div").children().remove();
      $('#fLayer, #fLayer .wrap_layer > div').hide();
    }
  }

  // rSetList (str->arr)
  function rSetList(str) {
    return str.replace(/ /gi, "").split(',');
  }

  // init layer
  if( layerType === 'video' ){
    // type video
    var facebookUrl = 'http://www.facebook.com/sharer/sharer.php?u=https://youtu.be/' + contUrl,
      twitterUrl = 'https://twitter.com/intent/tweet?text='+ contMsg +'&url=https://youtu.be/' + contUrl,
      sourceUrl = '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+contUrl+'" frameborder="0" allowfullscreen></iframe>',
      gplusUrl = 'https://plus.google.com/share?url=https://youtu.be/' + contUrl,
      clipboard = new Clipboard( target+' .share .btn_blog' );

    // add youtube element
    $(target).find('.viewer div').append(
      '<iframe width="310" height="171" src="https://www.youtube.com/embed/'+contUrl+'?rel=0&amp;vq=hd480;wmode=transparent&autoplay=1" ' + 'frameborder="0" allowfullscreen></iframe>'
    );
    // init clipboard.js
    clipboard.on('success', function (e) {
      alert( "클립보드에 복사되었습니다.\n ‘붙여넣기’로 원하시는 곳에 Ctrl + V 또는 마우스 오른쪽 버튼 클릭 후 붙여 넣기는 선택해주세요." );
    });
    clipboard.on('error', function (e) {
      window.prompt ( "선택된 글자를 복사해주세요" , sourceUrl);
    });
    // init shareData
    $('#fLayer .share .btn_facebook').attr('href', facebookUrl);
    $('#fLayer .share .btn_twitter').attr('href', twitterUrl);
    $('#fLayer .share .btn_gplus').attr('href', gplusUrl);
    $('#fLayer .share .btn_blog').attr('data-clipboard-text', sourceUrl);
  }else if (layerType === 'image-list') {
    var imgEle;

    targetSlide = $(target).find('.viewer div');
    contUrl = rSetList(contUrl);
    contMsg = rSetList(contMsg);

    // imgEle set
    $(contUrl).each(function (idx, target) {
      var imgData = {
        src: target,
        alt: $(contMsg)[idx]
      };
      imgEle += '<div><span><img src="' + imgData.src + '" alt="' + imgData.alt + '"></span></div>';
    });
    $(targetSlide).slick(slickOpts);
    $(targetSlide).slick('slickAdd', imgEle);
  }else{
    // type image or text
    if (contUrl !== undefined) {
      $(target).find('.viewer div').append('<img src="' + contUrl + '" alt="' + contMsg + '">');
    } else if ( contMsg !== undefined ) {
      $(target).find('.viewer div').empty().append(contMsg);
    }
  }

  // display
  $("#fLayer").show();
  $("#fLayer .bg_layer").css({
    "height":docHeight,
    "opacity":0.8
  }).show();

  // set position
  if( $(target).actual("height") >= $(window).height() * 0.9 ){
    $(window).scrollTop(0);
    $(target).css("top","80px").show();
    return false;
  }else{
    $(target).css({
      "top":($(window).height() - $(target).actual("height")) / 2,
      "position":"fixed"
    }).show();
    $(target).show();
  }
  if ($(target).hasClass('image-list')) {
    $(targetSlide).slick('slickGoTo', slickIdx, true);
    $(targetSlide).slick('setPosition');
  }

  // bind close
  $('#fLayer .btn_close, #fLayer .btn_close2, #fLayer .bg_layer').on('click', layerClose);
}


$(document).ready(function () {
  var slickOpts = {
    infinite: true,
    arrows: true,
    dots: true,
    lazyLoad: 'ondemand'
  };

  // init slide(slick.js)
    var slides = (function(){
      var slides = $('#fWrap .section .carousel');

      slides.on('init', function(event, slick){
        var target = slick.$list;
        $(target).append('<span class="bg" />');
      });

      $(slides).slick(slickOpts);
      return slides;
    })();

  // detect videoBg
  (function(){
    if ( !!document.createElement('video').canPlayType && document.getElementsByTagName('video').length) {
      var video = $('#bgVideo video')[0];

      video.onloadstart = function () {
        $(video).css('opacity', 1);
      };
    }
  })();

  // init ezMark
  $('#register #regForm input[type=checkbox], #register #regForm input[type=radio]').ezMark();

  // bind layerOpen
  $('button[data-layer]').on('click', function () {
    layerOpen({
      layerType: $(this).attr('data-layer'),
      contUrl: $(this).attr('data-url'),
      contMsg: $(this).attr('data-msg'),
      slickOpts: slickOpts
    });
  });

  // slick in bind layerOpen
  $('.section').on('click', '.slick-slider .slick-list .bg', function () {
    var target = $(this).parent('div').find('.slick-active button[data-layer]'),
      slideIdx = $(this).parent('.slick-list').find('.slick-active').attr('data-slick-index');

    if ( target.length ) {
      layerOpen({
        layerType: $(target).attr('data-layer'),
        contUrl: $(target).attr('data-url'),
        contMsg: $(target).attr('data-msg'),
        slickIdx: slideIdx
      });
    }
  });

  // move to #register
  $('button.btn_reg').on('click', function () {
    var headerHeight = $('#header').height();
    var targetPos = $('#register').offset().top - headerHeight;

    $('html, body').animate({
      scrollTop: targetPos
    });
    return false
  });

});

// ios detect
$(function(){
  if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
    $("#fWrap").addClass("ios");
  }
});