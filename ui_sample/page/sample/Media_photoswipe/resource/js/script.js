/***************************************

 [photoswipe demo] script.js

 **************************************/

$(document).ready(function(){

  // init photoswipe
  var pswpElement = $('.pswp')[0],
    targetImages = $('#photoSwipe li'),
    items = new Array;

  $(targetImages).each(function(idx, ele){
    var isVideo = ( $(ele).attr('media-type') == 'video' ) ? true : false,
      itemImg = $(ele).children('img'),
      itemSrc = $(itemImg).attr('src'),
      itemWidth = $(itemImg).prop("naturalWidth"),
      itemHeight = $(itemImg).prop("naturalHeight"),
      itemVideo = $(ele).attr('media-src');

    if ( !isVideo ) {
      // 이미지인 경우
      items[idx] = {
        src: itemSrc,
        w: itemWidth,
        h: itemHeight
      };
    }else{
      // 비디오인 경우
      items[idx] = {
        html: '<iframe class="pswp__video" src="'+itemVideo+'" frameborder="0" allowfullscreen></iframe>'
      }
    }
  });

  // bind photoswipe
  $(targetImages).on('click', function(){
    var imgIdx = $(this).index('li');
    var options = {
      index: imgIdx,
      closeOnScroll: false
    };
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);

    // run photoswipe
    gallery.init();

    // youtube video stop
    gallery.listen('afterChange', function( btnType ) {
      var videoTarget = $('iframe.pswp .pswp__video');

      if ( $(videoTarget).length != 0 ) {
        $(videoTarget).each(function(idx, ele){
          var videoParent = $(ele).parent('div'),
            videoClone = $(ele).clone();
          $(videoParent).empty().append(videoClone);
        });
      }
    });

  });


})

