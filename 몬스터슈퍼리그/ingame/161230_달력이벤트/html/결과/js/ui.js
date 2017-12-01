/****************************************

 [msl calendar event(Result) - ui.js]

 ****************************************/
// layout
function layoutSet( data ) {
  var targetWrap = $('#formAddress .type_common');

  $('#header .title1').html(data.layout.title1);
  $('#header .title2').html(data.layout.title2);
  $('#header .date div').html(data.layout.date);
  $('#sectionReg .country .btn_country').html(data.layout.btnCountry);
  $('#sectionReg .enter .btn_enter').html(data.layout.btnEnter);
  $('#sectionReg .check .btn_check').html(data.layout.btnCheck);
  $('#sectionCaution .caution').html(data.layout.sectionCaution);
  $('#fLayer .btn_area .btn_close').html(data.layer.btnClose);
  $('#fLayer .btn_area .btn_address').html(data.layer.btnAddress);
  $('#sectionInfo .info').html(data.layout.sectionInfo);
  // address form
  if ( $('#formAddress .type_common').length ) {
    $(targetWrap).find('.tit_form').html(data.layout.inpAddress.titForm);
    $(targetWrap).find('.name .tit_name').html(data.layout.inpAddress.titName);
    $(targetWrap).find('.name .inp_name').prop('placeholder', data.layout.inpAddress.textName);
    $(targetWrap).find('.mobile .tit_mobile').html(data.layout.inpAddress.titMobile);
    $(targetWrap).find('.mobile .inp_mobile').prop('placeholder', data.layout.inpAddress.textMobile);
    $(targetWrap).find('.address .tit_address').html(data.layout.inpAddress.titAddress);
    $(targetWrap).find('.address .wrap_address .inp_code').prop('placeholder', data.layout.inpAddress.textCode);
    $(targetWrap).find('.address .wrap_address .inp_address').prop('placeholder', data.layout.inpAddress.textAddress);
    $(targetWrap).find('.address .wrap_address .inp_city').prop('placeholder', data.layout.inpAddress.textCity);
    $(targetWrap).find('.address .wrap_address .inp_country').prop('placeholder', data.layout.inpAddress.textCountry);
    $(targetWrap).find('.caution1').html(data.layout.inpAddress.textCaution1);
    $(targetWrap).find('.caution2').html(data.layout.inpAddress.textCaution2);
    $(targetWrap).find('.btn_area .btn_submit').text(data.layer.btnClose);
  }
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
  if(targetHeight < winHeight && layerClass != 'policy'){
    $(targetLayer).css({
      'position': 'fixed',
      "top": layerPos
    }).show();
    // touch scroll disable
    $(document).bind("touchmove",function(event){
      event.preventDefault();
    });
  }else{
    // 레이어가 창보다 큰 경우
    $(window).scrollTop(0);
    $(targetLayer).css({
      'position': 'absolute',
      "top": 30
    }).show();
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

// 주소 입력창 열기
function regAddress() {
  var hideTarget = $('#fWrap #container #sectionInfo, #fWrap #container #sectionReg'),
    showTarget = $('#fWrap #container #sectionAddress');

  $(hideTarget).hide();
  $(showTarget).show();
}

// daum postcode
function daumPostCode() {
  // 현재 scroll 위치를 저장해놓는다.
  var targetPostCode = document.getElementById('daumPostCode'),
    currentScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop),
    inpPostCode = $('#sectionAddress .type_ko .inp_postCode'),
    inpAddress = $('#sectionAddress .type_ko .inp_address');

  new daum.Postcode({
    oncomplete: function(data) {
      var fullAddr = data.address; // 최종 주소 변수
      var extraAddr = ''; // 조합형 주소 변수

      // 기본 주소가 도로명 타입일때 조합한다.
      if(data.addressType === 'R'){
        //법정동명이 있을 경우 추가한다.
        if(data.bname !== ''){
          extraAddr += data.bname;
        }
        // 건물명이 있을 경우 추가한다.
        if(data.buildingName !== ''){
          extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
        }
        // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
        fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
      }
      // 우편번호와 주소 정보를 해당 필드에 넣는다.
      $(inpPostCode).val(data.zonecode);
      $(inpAddress).val(fullAddr);
      //$(inpAddress).val(data.jibunAddress); // 지번만 받는 경우

      $('#sectionAddress .type_ko .btn_find.active').removeClass('active');
      // iframe을 넣은 element를 안보이게 한다.
      $(targetPostCode).hide();
      // 우편번호 찾기 화면이 보이기 이전으로 scroll 위치를 되돌린다.
      document.body.scrollTop = currentScroll;
    },
    // 우편번호 찾기 화면 크기가 조정되었을때 실행할 코드를 작성하는 부분. iframe을 넣은 element의 높이값을 조정한다.
    onresize : function(size) {
      targetPostCode.style.height = size.height+'px';
    },
    width : '100%',
    height : '100%'
  }).embed(targetPostCode);

  // iframe을 넣은 element를 보이게 한다.
  $(targetPostCode).show();
}

// closeLayer
$('body').on('click','#fLayer .btn_area button, #fLayer .bg_layer',function () {
  var isAddress = $(this).hasClass('btn_address');
  if ( isAddress ) {
    layerClose();
    regAddress();
  }else{
    layerClose();
    //layerClose('refresh');  // 새로고침 필요 시
  }
});
// detect ios
(function(){
  if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
    $("body").addClass("ios");
  }
})();

// selectBox
(function () {
  var mobileSelect = $('#sectionReg .inp_country #countryList');
  mobileSelect.change(function(){
    var select_name = $(this).children('option:selected').text();
    $('#sectionReg .inp_country label .btn_country').text(select_name);
  });
})();

// btn_find
$('#sectionAddress .type_ko .btn_find, #sectionAddress .type_ko .address .address1, #sectionAddress .type_ko .address .address2').on('click', function(){
  var targetScroll = $('#fWrap #sectionAddress .address2').offset().top + ($('#fWrap #sectionAddress .address2').outerHeight() / 2);

  if ( $('#sectionAddress #daumPostCode').is(':visible') && $(this).hasClass('btn_find') ) {
    $('#sectionAddress .type_ko .btn_find').removeClass('active');
    $('#daumPostCode').hide();
  }else{
    $('#sectionAddress .type_ko .btn_find').addClass('active');
    daumPostCode();
    $('body, html').scrollTop(targetScroll);
  }
  return false
});

