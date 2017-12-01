function setCookie(name, value, expiredays){
  var todayDate = new Date();
    todayDate.setDate (todayDate.getDate() + expiredays);
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}

function getCookie(name){
  var nameOfCookie = name + "=";
  var x = 0;
  while (x <= document.cookie.length){
    var y = (x + nameOfCookie.length);
    if (document.cookie.substring(x, y) == nameOfCookie){
    if ((endOfCookie = document.cookie.indexOf(";", y)) == -1){
    endOfCookie = document.cookie.length;
    }
    return unescape (document.cookie.substring(y, endOfCookie));
    }
    x = document.cookie.indexOf (" ", x) + 1;
    if (x == 0) break;
  }
  return "";
}

function singlePageSet(element, url){
  var singlePage = {
      element:'<div class="title"></div>' +
      '<div class="info">' +
      '<ul>'+
      '<li class="caption"><strong class="tit">카테고리</strong></li>'+
      '<li class="tech"><strong class="tit">사용 언어</strong></li>'+
      '<li class="browser"><strong class="tit">호환 브라우저</strong></li>'+
      '<li class="note"><strong class="tit">비고</strong></li>'+
      '</ul>'+
      '</div>'+
      '<div class="content"></div>',
      addElements:{
        content: {
          title: $(element).find('.cbp-l-caption-title').clone(),
          caption: $(element).find('.cbp-l-caption-desc').clone(),
          tech: $(element).find('.cbp-tech-desc').clone(),
          browser: $(element).find('.cbp-browser-support').clone(),
          note: $(element).find('.cbp-note').clone(),
          screenShot: $(element).find('.cbp-caption-defaultWrap').clone(),
          pageView: $(element).find('.new-window').clone()
        },
        targets: {
          title: '.cbp-popup-singlePage .cbp-popup-content .title',
          caption: '.cbp-popup-singlePage .cbp-popup-content .info .caption',
          tech: '.cbp-popup-singlePage .cbp-popup-content .info .tech',
          browser: '.cbp-popup-singlePage .cbp-popup-content .info .browser',
          note: '.cbp-popup-singlePage .cbp-popup-content .info .note',
          screenShot: '.cbp-popup-singlePage .cbp-popup-content .content a',
          pageView: '.cbp-popup-singlePage .cbp-popup-content .content a'
        }
      }
    },
    isNewWindow = $(element).attr('target');

  $('.cbp-popup-singlePage .cbp-popup-content').append(singlePage.element)

  if( isNewWindow === undefined ) {
    $('.cbp-popup-singlePage .cbp-popup-content .content').append(
      '<iframe src="'+url+'" style="width:100%;" scrolling="no"></iframe>'
    );
    $('.cbp-popup-singlePage .cbp-popup-content .content iframe').load(function() {
      var iframeHeight = $(this).contents().find('body').prop('scrollHeight');
      $(this).height(iframeHeight);
    })

  }else{
    $('.cbp-popup-singlePage .cbp-popup-content .content').append('<a href="'+url+'" target="_blank"></a>');
  }

  // appendElements
  for (var keyName in singlePage.addElements.content){
    var target = singlePage.addElements.targets[keyName],
      content = singlePage.addElements.content[keyName];

    if ( keyName == 'note' && content.length == 0 ) $(target).hide();

    $(target).append(content);
  }
}

$(document).ready(function () {

  $('#checkbox').on('click',function(){
    if($(this).prop("checked")) {
      setCookie("help", "no-show", 365);
      $('.overlay, .help-layer').fadeOut();
    }
  });
  $('body').on('click','.overlay, .help-layer button.close',function () {
      $('.overlay, .help-layer').fadeOut();
  });
  $('.help-layer').on('click','span.ani',function () {
      $(this).fadeOut();
  });
  $('.wb-grid .help-icon').on('click',function () {
      $('.overlay').show().next().fadeIn();
  });

  console.log(getCookie("help"));
  if (getCookie("help") != "no-show"){
      $('.overlay').show().next().fadeIn();
  }
});