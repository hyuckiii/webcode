/* Page UI */

// layer open func
function layerOpen(data){

  var defaultOps = {
    target: '#fLayer',              // #layer_modal, .layer_modal의 형태로 입력
    type: 'alert',                  // 'alert(기본 값)' ,'video', apply(이벤트참여), policy(개인정보동의)
    eleClass: 'default',                      // css제어를 위해 class가 필요한 경우 사용('alert(기본 값)' ,'video', apply(이벤트참여), policy(개인정보동의)에 추가됨)
    title: '확인해 주세요!',         // layer의 제목
    msg: '에러가 발생하였습니다.',    // layer의 메시지(string(html가능)로 입력
    videoList: ''                  // type이 'video'인 경우 video의 목록
  };
  var data = $.extend({}, defaultOps, data),
    docHeight = $(document).height(),
    headerHeight = $('#header').outerHeight(),
    target = data.target+' .'+data.type,
    videoTarget = $(target).find('.viewer'),
    applyMsg = '';

  if ( data.target.length > 0){

    // layer show
    $('#fLayer').show();
    $('#fLayer .bg_layer').css({
      'height':docHeight,
      'opacity':0.8
    }).show();

    // type check
    if (data.type == 'video') {
      // video
      var viewEle = '<iframe width="310" height="171" src="https://www.youtube.com/embed/'+data.videoList[0]+'?rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;vq=hd720;wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>',
        listTarget = $(target).find('.list li'),
        btnList = $(listTarget).children('button');

      $(videoTarget).html(viewEle);
      if (data.videoList.length >= 2){
        // data.videoList가 2개 이상인 경우
        $(listTarget).each(function (i,ele) {
          var listBtn = $(ele).children('button');
          if (typeof(data.videoList[i]) != 'undefined'){
            $(listBtn).attr('data-video',data.videoList[i]);
          }else{
            $(ele).hide();
          }
        })
        $(btnList).bind('click',function () {
          var dataVideo = $(this).attr('data-video'),
            viewEle = '<iframe width="310" height="171" src="https://www.youtube.com/embed/'+dataVideo+'?rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;vq=hd720;wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
          $(videoTarget).empty().html(viewEle);
          $(btnList).removeClass('active');
          $(this).addClass('active');
        })
      }else{
        // data.videoList가 1개인 경우
        var listWrap = $(target).find('.list');
        $(listWrap).hide();
      }
    }else if (data.type == 'alert') {
      // alert
      var targetTit = $(target).find('.cont .tit'),
        targetMsg = $(target).find('.cont .msg');
      if (data.title != 'undefined') $(targetTit).html(data.title);
      //$(target).attr('class',data.type);
      $(targetMsg).html(data.msg);
    }

    // addClass
    if (data.eleClass != 'default') $(target).addClass(data.eleClass);

    $('body').addClass('modal');
    // layer height check
    if( parseInt($(target).height()) >= $(window).height() * 0.9 ){
      $(window).scrollTop(0);
      $(target).css({
        'position': 'absolute',
        'top':headerHeight
      }).show();
      return false;
    }else{
      $(target).css({
        'top':($(window).height() - $(target).actual('height')) / 2,
        'position':'fixed'
      }).show();
      $(target).children('.wrap_layer').show();
    }
    return false;
  }
}

function deviceType(){
  var device = new RegExp('Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile', 'i');
  if (device.test(navigator.userAgent)) $('body').addClass('mobile');
}

// layer close func
function layerClose(e){
  if(e.target.id != 'fLayer') {
    var target = $('#fLayer .wrap_layer > div:visible').not('.bg_layer'),
      applyMsg = $('#fLayer .apply .contain .msg');
    $('#fLayer .video .viewer').empty();
    $(applyMsg).attr('class','msg');
    $('#fLayer').hide();
    $(target).hide();
    $('body').removeClass('modal');
  }
}



$(document).ready(function(){

  // mobile detect(mobile인경우만 body에 class를 추가)
  deviceType();

  // mainVideoCover
  if ($('#sectionMain').hasClass('type_bg')){
    $('#videoMain').cover({
      parentsEle: $('#sectionMain .bg_video'),  // 입력하지 않을 경우 대상의 부모 'div'를 선택
      zoom:1.3                                  // 1.3미만은 고해상도에서 짤리는 문제 있음
    });
  }

  // event bg
  if ($('.section_event').length > 1) $('.section_event:odd').addClass('even');

  // selectBox
  var mobileSelect = $('#regForm .inp_mobile1 select, #fLayer .apply select');
  mobileSelect.change(function(){
    var select_name = $(this).children('option:selected').text();
    $(this).siblings('label').text(select_name);
  });
  
  // checkBox
  $('#regForm #chk_agree').ezMark();
  
  // install slideInfo
  $('#slide .wrap_slide ul').bxSlider({
    auto: true,
    pause: 4000,
    nextText: '',
    prevText:''
  });

  // input placeholder
  $('#regForm .mobile input, #regForm .auth input, #fLayer .apply .inp_mobile2 input').focus(function(){
    $(this).addClass('active');
  }).blur(function(){
    if($(this).val().length == 0){
      $(this).removeClass('active');
    }
  });

  //down
  $('#download button.btn_download').click(function() {
    window.location='http://433.co/tcuow1840l';
  });

  // btn_reg - scroll
  $('#sectionMain .reg .btn_reg').on('click',function(){
    var targetPos = $('#sectionReg').offset().top - $('#header').outerHeight();
    $('html, body').animate({'scrollTop':targetPos});
  });

  // btn_top - scroll
  $('#footer .btn_top').bind('click',function () {
    $('html, body').animate({'scrollTop':0});
  })

  // itemlist side
  $('#container .section_event .reward .item_list.type1:nth-of-type(1n)').addClass('side');
  $('#container .section_event .reward .item_list.type2:nth-of-type(2n)').addClass('side');
  $('#container .section_event .reward .item_list.type3:nth-of-type(3n)').addClass('side');
  $('#container .section_event .reward .item_list.type4:nth-of-type(4n)').addClass('side');
  $('#container .section_event .btn_area button:last-child').addClass('side');
  $('#fLayer .video .list li:last-child').addClass('side');

  // layerOpen - video
  $('#sectionMain button.btn_play').on('click',function () {
    layerOpen({
      type: 'video',
      videoList: ['iTv5pghBttU','iTv5pghBttU','iTv5pghBttU']    // 최대 3개까지
    })
  });

  // layerOpen - policy
  $('#sectionReg #regForm .agree .btn_detail').on('click',function () {
    layerOpen({type: 'policy'});
  });

  // layer - close
  $(document).on('click', '#fLayer .bg_layer, #fLayer .btn_close, #fLayer .game_dl', function(e){
    layerClose(e);
  });
  
})