/* Page UI */

// 사전예약자 게이지
function gauge(num) {
  var sum, smallSum, type;
  var step = [51, 47, 47, 47, 53];

  if(num >= 50000 && num < 100000){
    $('#event .event1').addClass('step1');
  }else if (num >= 100000 && num < 200000){
    $('#event .event1').addClass('step2');
  }else if (num >= 200000 && num < 300000){
    $('#event .event1').addClass('step3');
  }else if (num >= 300000 && num < 500000){
    $('#event .event1').addClass('step4');
  }else if (num >= 500000){
    $('#event .event1').addClass('step5');
  }

  if ( $('#event .gauge .large').width() == 490 ){
    $(step).each(function (i) {
      step[i] = step[i] * 2;
    })
    type = 'tablet';
  }else{
    type = 'mobile';
  }
  if (num <= 50000){          // 0 ~ 5만 구간
    sum = step[0] * (num / 50000);
  }else if (num <= 100000){   // 5만 ~ 10만 구간
    num = num - 50000;
    sum = step[1] * (num / 50000) + step[0];
  }else if (num <= 200000){   // 10만 ~ 20만 구간
    num = num - 100000;
    sum = step[2] * (num / 100000) + step[0] + step[1];
  }else if (num <= 300000){   // 20만 ~ 30만 구간
    num = num - 200000;
    sum = step[3] * (num / 100000) + step[0] + step[1] + step[2];
  }else{                      // 30만 이상 구간
    if (num < 500000) {
      num = num - 300000;
      sum = step[3] * (num / 200000) + step[0] + step[1] + step[2] + step[3];
    }else if (num >= 500000) {
      sum = '100%';
    }
  }
  (sum == '100%') ? smallSum = '100%' : smallSum = sum * 0.987;
  $('#event .event1 .gauge .large span').width(sum);
  $('#event .event1 .gauge .small span').width(smallSum);
}

// layer open func
function layerOpen(target, videoUrl){
  var docHeight = $(document).height();
  target = "#fLayer ."+target;

  $("#fLayer").show();
  $("#fLayer .bg_layer").css({
    "height":docHeight,
    "opacity":0.8
  }).show();

  if( target  == '#fLayer .layer_movie' ){
    $('#fLayer .layer_movie .video div').append(
      '<iframe width="310" height="171" src="https://www.youtube.com/embed/'+videoUrl+'?rel=0&amp;vq=hd480;wmode=transparent&autoplay=1" ' + 'frameborder="0" allowfullscreen></iframe>'
    );
  }

  if( $(target).css("height") >= $(window).height() * 0.9 ){
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
  return false;
}

// layerClose func
function layerClose(e){
  if(e.target.id != 'fLayer') {
    var target = $("#fLayer > div:visible");
    if($(".layer_movie").is(":visible") == 1){   // visible로 체크
      $('#fLayer .layer_movie .wrap_layer iframe').remove();
      target = $("#fLayer .layer_movie");
      if( $(".sns_menu .btn_mute").hasClass("mute") == 0){
        $("#videoBg").prop('muted', false);
      }
    }
    $("#fLayer").hide();
    $(target).hide();
  }
}


$(document).ready(function(){
  // gnb
  $('#gnb').navPos({
    menuNum: 5,
    menuHeight: $('#gnb').height()
  });

  // checkBox
  $('#regForm #chk_agree').ezMark();

  // selectBox
  var mobileSelect = $('#regForm .inp_mobile1 select');
  mobileSelect.change(function(){
    var select_name = $(this).children('option:selected').text();
    $(this).siblings('label').text(select_name);
  })

  // input placeholder
  $('#regForm .mobile input').focus(function(){
    $(this).addClass('active');
  }).blur(function(){
    if($(this).val().length == 0){
      $(this).removeClass('active');
    }
  })

  // header reg3
  $('#header .btn_reg').on('click', function () {
    var target = $(this).attr('href');
    target = $(target).offset().top - $('#gnb').height();
    $('html body').animate({scrollTop: target}, 600, 'swing');
  })
  
  // header movie
  $('#header .movie .btn_play').bind('click', function () {
    var target = $('#header .movie .wrap_movie');
    layerOpen('layer_movie', 'gQy2Kka4yj0');
  })

  // btn agree
  $('#regForm .btn_detail').bind('click', function () {
    layerOpen('layer_privacy');
  })

  // layerclose
  $('#fLayer .btn_close, #fLayer .btn_close2').bind('click', function (e) {
    layerClose(e);
  })

  // btn top
  $("#footer .btn_top").on("click",function(){
    $('html, body').animate({
      scrollTop:-1
    }, 400, "swing");
    return false;
  });
  
  // install slide
  $("#slide ul").bxSlider({
    auto: true,
    pause: 6000,
    nextText: "",
    prevText:""
  });

});