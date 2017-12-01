/****************************************

 ftt webEventModalLayer

 [history]
 0.2 - 활성화 시 #flayer네 class "active" 추가(비활성화 시 삭제)

 ****************************************/

var modalLayer = {
  layerEle: '<div id="fLayer">'+
    '<div class="modal_layer">' +
    '<div class="wrap_layer">' +
    '<span class="bg top"></span>'+
    '<span class="bg bottom"></span>'+
    '<div class="layer_cont">'+
    '<div class="title"></div>'+
    '<div class="msg">'+
    '<div class="wrap_msg"></div>'+
    '</div>'+
    '<div class="btn_area">'+
    '<button class="btn_close" type="button"></button>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '<div class="bg_layer"></div>'+
    '</div>',
  openLayer: function (msg, closeType, langData) {
    var wrapLayer = $('#fLayer'),
      layerBg = $(wrapLayer).children('.bg_layer'),
      targetLayer =  $(wrapLayer).children('.modal_layer'),
      targetHeight = $(targetLayer).outerHeight(),
      targetTitle = $(targetLayer).find('.layer_cont .title'),
      targetMsg = $(targetLayer).find('.msg .wrap_msg'),
      targetBtn = $(targetLayer).find('.btn_area .btn_close'),
      winHeight = $(window).height(),
      docHeight = $(document).height(),
      layerPos = (winHeight - targetHeight) / 2,
      layerLang = langData;

    // 다국어인 경우
    if (langData !== undefined){
      if (msg == 'success') msg = layerLang.success;
      if (msg == 'fail') msg = layerLang.fail;
      if (msg == 'already') msg = layerLang.already;
      if (msg == 'error') msg = layerLang.error;
      if (layerLang.btnName !== undefined) $(targetBtn).html(layerLang.btnName);
      if (layerLang.title !== undefined) $(targetTitle).html(layerLang.title);
    }
    if (closeType !== undefined) $(targetBtn).attr('close-type', closeType);
    $(wrapLayer).show(1, function () {
      $(wrapLayer).addClass('active');
    }, 0);
    $(layerBg).height(docHeight);
    $(targetMsg).html(msg);
    if(targetHeight < winHeight){
      $(targetLayer).css("top",layerPos).show();
      // touch scroll disable
      $(document).bind("touchmove",function(event){
        event.preventDefault();
      });
    }else{
      // 레이어가 창보다 큰 경우
      $(window).scrollTop(0);
      $(targetLayer).css("top", 30).show();
    }
  },
  closeLayer : function(btnType){
    var targetLayer = $("#fLayer .modal_layer");

    if( btnType == 'refresh' ){
      location.reload();
    }else{
      $(document).unbind('touchmove');
      $("#fLayer").removeClass('active').hide();
      $(targetLayer).hide();
    }
  }
}

$(document).ready(function () {
  // element init
  if (!$('#fLayer').length) $('body > div').append(modalLayer.layerEle);

  // closeLayer
  $('body').on('click','#fLayer .btn_close, #fLayer .bg_layer',function () {
    var btnType = $('#fLayer .btn_close').attr('close-type');
    modalLayer.closeLayer(btnType);
  })
});


