$(document).ready(function(){
  init(); // 페이지 초기화
  initModal(); // Modalpopup
  initdatepicker(); //Init datepicker

  //내정보변경
  $('#birth-change').on('click',function(e) {
    $(this).addClass('btn-disabled').parent().find('.b-change').show();
  });
  $('#passwd-change').on('click',function(e) {
    $(this).addClass('btn-disabled').next().show();
  });

  //disable basic datepicker
  $(document).off('.datepicker.data-api');

});

// 요소 초기화
function init(){
  //body.modalpopup Setting
  $('body').append(modalLayer.layerDetail, modalLayer.layerGift, modalLayer.layerMsg);
  //tooltip 
  $('[data-toggle="tooltip"]').tooltip(); 
  $('.counter').countUp({
    'time': 500
  });
  //상품수량 수정
  // 170531 추가
  $(".cnt-wrap span").on("click",function() {
    var $count = $(this).parent();
    if(!$count.hasClass("disable")) {
      var numobj = $count.find("input"),
      num = parseInt(numobj.val()),
      oper = $(this).data("operator");
      if(oper == "minus" && (num != 1)) numobj.val(num-1);
      if(oper == "plus") numobj.val(num+1);    
    }else {
      alert("본 상품은 1회만 신청이 가능합니다.");
    }
  });
  $(".cnt-wrap").mousedown(function(){ return false; })

}

//모달팝업
function initModal(){
  $('a.modal-show, button.modal-show').on('click',function(e) {
      var data = e.delegateTarget.dataset;
      if(data.type == "img") modalLayer.showGift(data);
      else if(data.type == "detail") modalLayer.showDetail(data);
      else if(data.type == "msg") modalLayer.showMsg(data);
      else alert("팝업 호출이 잘못되었습니다. 관리자께 문의 바랍니다.");
  });
}

var modalLayer = {
  layerDetail: '<!-- // 모달 팝업 -->'+
  '<div class="modal fade ftt-modal-detail">'+
  '  <div class="modal-dialog">'+
  '    <div class="modal-content">'+
  '      <div class="modal-header">'+
  '        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="blind" aria-hidden="true">close</span></button>'+
  '        <h4 class="modal-title">title</h4>'+
  '      </div>'+
  '      <div class="modal-body">'+
  '        <div class="ftt-gift-wrap">'+
  '          <div class="ftt-gift"></div>'+
  '          <div class="ftt-giftname"><img src="" alt=""  /></div>'+
  '          <div class="ftt-giftdesc"></div>'+
  '        </div>'+
  '      </div>'+
  '    </div>'+
  '  </div>'+
  '</div>',
  layerGift: '<!-- // 모달 팝업 -->'+
  '<div class="modal fade ftt-modal-gift">'+
  '  <div class="modal-dialog modal-sm">'+
  '    <div class="modal-content">'+
  '      <div class="modal-header">'+
  '        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="blind" aria-hidden="true">close</span></button>'+
  '        <h4 class="modal-title">title</h4>'+
  '      </div>'+
  '      <div class="modal-body">'+
  '        <div class="ftt-gift-wrap">'+
  '          <div class="ftt-gift"></div>'+
  '          <div class="ftt-giftname"><img src="" alt=""  /></div>'+
  '          <div class="ftt-giftdesc"></div>'+
  '        </div>'+
  '      </div>'+
  '    </div>'+
  '  </div>'+
  '</div>',
  layerMsg: '<!-- // 모달 팝업 -->'+
  '<div class="modal fade ftt-modal-msg">'+
  '  <div class="modal-dialog ">'+
  '    <div class="modal-content">'+
  '      <div class="modal-header">'+
  '        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="blind" aria-hidden="true">close</span></button>'+
  '        <h4 class="modal-title">title</h4>'+
  '      </div>'+
  '      <div class="modal-body">'+
  '        <div class="ftt-msg-wrap">'+
  '          <div class="ftt-msg-subtitle"></div>'+
  '          <div class="ftt-msg-desc"></div>'+
  '        </div>'+
  '      </div>'+
  '      <div class="modal-footer">'+
  '        <button type="button" class="btn btn-primary btn-popup" data-dismiss="modal">확인</button>'+
  '      </div>'+
  '    </div>'+
  '  </div>'+
  '</div>',
  showContent: function(data) { 
    //Modal pop에서 Content Type 모달팝업

  },
  showMsg: function(data) { 
    //단순 메시지 모달팝업
    var $modal = $('.ftt-modal-msg');
    $modal.on('show.bs.modal', function(e) {
      $(this).find('.modal-title').html(data.tit);
      $(this).find('.ftt-msg-subtitle').html(data.subtit);
      $(this).find('.ftt-msg-desc').html(data.desc);
      $(this).modal('handleUpdate');
    });
    $(".ftt-modal-msg").modal();
  },
  showGift: function(data) {
    //################
    //var serverUrl = "",
    var serverUrl = "../images/item/",
    imgSrc = serverUrl+data.img;
    var $modal = $('.ftt-modal-gift');
    $modal.on('show.bs.modal', function(e) {
      $(this).find('.modal-title').html(data.tit);
      $(this).find('.ftt-giftname >img').attr("src",imgSrc).attr("alt",data.alt);
      $(this).find('.ftt-giftdesc').html(data.alt);
      $(this).modal('handleUpdate');
    });
    $(".ftt-modal-gift").modal();
   },
  showDetail: function(data) {
    //################
    //var serverUrl = "",
    var serverUrl = "../images/item/",
    imgSrc = serverUrl+data.img;
    var $modal = $('.ftt-modal-detail');
    $modal.on('show.bs.modal', function(e) {
      $(this).find('.modal-title').html(data.tit);
      $(this).find('.ftt-giftname >img').attr("src",imgSrc).attr("alt",data.alt);
      $(this).find('.ftt-giftdesc').html(data.alt);
      $(this).modal('handleUpdate');
    });
    $(".ftt-modal-detail").modal();
   }
};

function initdatepicker(){ 
  $('.input-group.date.ftt-dd').datepicker({
    format: "yyyy-mm-dd",
    language: "ko",
    orientation: "bottom auto",
    daysOfWeekHighlighted: "0,6",
    autoclose: true,
    todayHighlight:true,
    templates : {
      leftArrow: '<span class="ico ico-arrow-left"></span>',
      rightArrow: '<span class="ico ico-arrow-right"></span>'
    }
  });
  $('.input-group.date.ftt-mm').datepicker({
    format: "yyyy-mm",
    startView: 1,
    minViewMode: 1,
    language: "ko",
    orientation: "bottom auto",
    daysOfWeekHighlighted: "0,6",
    autoclose: true,
    todayHighlight:true,
    templates : {
      leftArrow: '<span class="ico ico-arrow-left"></span>',
      rightArrow: '<span class="ico ico-arrow-right"></span>'
    }
  });
}

//modal mobile debug
function setModalMaxHeight(element) {
  this.$element     = $(element);  
  this.$content     = this.$element.find('.modal-content');
  var borderWidth   = this.$content.outerHeight() - this.$content.innerHeight();
  var dialogMargin  = $(window).width() < 768 ? 20 : 60;
  var contentHeight = $(window).height() - (dialogMargin + borderWidth);
  var headerHeight  = this.$element.find('.modal-header').outerHeight() || 0;
  var footerHeight  = this.$element.find('.modal-footer').outerHeight() || 0;
  var maxHeight     = contentHeight - (headerHeight + footerHeight);

  this.$content.css({
      'overflow': 'hidden'
  });
  
  this.$element
    .find('.modal-body').css({
      'max-height': maxHeight,
      'overflow-y': 'auto'
  });
}

$('.modal').on('show.bs.modal', function() {
  $(this).show();
  setModalMaxHeight(this);
});

$(window).resize(function() {
  if ($('.modal.in').length != 0) {
    setModalMaxHeight($('.modal.in'));
  }
});