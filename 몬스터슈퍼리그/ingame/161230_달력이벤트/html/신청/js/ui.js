/****************************************

 [msl calendar event(Registration) - ui.js]

 ****************************************/

// layout
function layoutSet( data ) {
  $('#header .title1').html(data.layout.title1);
  $('#header .title2').html(data.layout.title2);
  $('#header .date .date1').html(data.layout.date1);
  $('#header .date .date2').html(data.layout.date2);
  $('#sectionReg .country .btn_country').html(data.layout.btnCountry);
  $('#sectionReg .enter .btn_enter').html(data.layout.btnEnter);
  $('#sectionReg .check .btn_check').html(data.layout.btnCheck);
  $('#sectionCaution').html(data.layout.sectionCaution);
  $('#fLayer .btn_area .btn_close').html(data.layer.btnClose);
  $('#fLayer .btn_area .btn_address').html(data.layer.btnAddress);
  $('#sectionInfo .info1').html(data.layout.sectionInfo1);
  $('#sectionInfo .info2').html(data.layout.sectionInfo2);
};

// layerOpen
function layerOpen( msg, layerClass ) {
  var wrapLayer = $('#fLayer'),
    layerBg = $(wrapLayer).children('.bg_layer'),
    targetLayer =  $(wrapLayer).children('.modal_layer'),
    targetHeight = $(targetLayer).outerHeight(),
    targetMsg = $(targetLayer).find('.msg .wrap_msg'),
    winHeight = $(window).height(),
    docHeight = $(document).height(),
    layerPos = (winHeight - targetHeight) / 2;

  // layerType check
  if ( msg !== 'inpAddress' ) {
    // alert형태인 경우
    if ( layerClass !== undefined ) $(targetLayer).addClass(layerClass);
    $(wrapLayer).show( 1, function () {
      $(wrapLayer).addClass('active');
    }, 0 );
    $(layerBg).height(docHeight);
    $(targetMsg).html(msg);
  }else{
    // 주소입력 형태인 경우
    targetLayer =  $(wrapLayer).children('.address_layer');
  }
  // layerSet
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
}

// layerClose
function layerClose (btnType){
  var targetLayer = $("#fLayer .modal_layer");

  $(targetLayer).attr('class', 'modal_layer');
  if( btnType == 'refresh' ){
    location.reload();
  }else{
    $(document).unbind('touchmove');
    $("#fLayer").removeClass('active').hide();
    $(targetLayer).hide();
  }
}

// selectBox
(function () {
  var mobileSelect = $('#sectionReg .inp_country #countryList');
  mobileSelect.change(function(){
    var select_name = $(this).children('option:selected').text();
    $('#sectionReg .inp_country label .btn_country').text(select_name);
  });
})()
