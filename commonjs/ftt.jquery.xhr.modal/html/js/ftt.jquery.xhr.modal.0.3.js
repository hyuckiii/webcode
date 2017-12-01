/****************************************

 [ ftt.jquery.xhr.modal.js ]

 - ajax통신 및 modallayer출력 기능

 [history]
 0.1 - 프로토타입 제작
 0.2 - 기능 통합(ajax통신 + modal layer)
 0.3 - 테스트 버전 - 프로젝트, 변수, 함수 이름 수정, ajax url 로직 변경

 ****************************************/

var FttXhrModal = function () {
  var evData = null;
  var defaultData = {
    url: null,              // location이 아닌 별도의 url이 입력되야하는 경우
    ssn: null,              // 게임 ssn
    options:{
      refresh: true,        // 모달 레이어의 확인 버튼 클릭 시 새로고침 여부
      langData: null,       // 몬슈리등 다국어가 존재하는 경우 다국어 값을 객체로 전달(자세한 내용은 몬슈리 웹이벤트 참고)
      useLayer: true,       // ajax 실행 후 모달레이어 사용 여부
      debug: false
    },
    modalMsg: {             // 모달 레이어의 메시지 지정(아래와 같이 단어로 설정하면 ftt.modalLayer.js에 선언되어 있는 게임별 기본 메시지 실행
      success: 'success',   // 보상 정상 획득 시
      end: 'end',           // 종료된 이벤트에 방문했을 경우 (사용 빈도 낮음)
      denied: 'denied',     // 이벤트 참여 대상자가 아닌 경우 (사용 빈도 낮음)
      fail: 'fail',         // 보상 획득 실패 시
      error: 'error'        // 어뷰징으로 의심되는 경우
    },
    errorMsg: null,
    callback: {                              // ajax 통신 시 사용되는 callback 함수 지정
      success: function () { return true },  // 통신 성공 시 실행
      fail: function () { return true },     // 통신은 성공하였으나 반환된 데이터 값에 이상이 있는 경우
      error: function(){ return true },      // 통신에 실패한 경우
      always: function () { return true }    // ajax 통신을 시도하는 경우 언제든 실행될 함수
    }
  };
  var _setting = {
    urlSet: function () {
      var evIdx = $(location).attr('pathname').split('/').pop(),
        urlObj = JSON.parse('{"' + decodeURI($(location).attr('search').substring(1).replace(/&/g, "\",\"").replace(/=/g, "\":\"")) + '"}');

      urlObj.url = '/ingame/main/rpc_get_reward/';
      urlObj.event_idx = evIdx;
      return urlObj;
    },
    // setData(데이터 가공)
    setData: function () {
      var exData = $.extend({}, true, defaultData, evData);
      var jsonUrl = _setting.urlSet();

      // url 미 입력 시 url 생성(location기준)
      if (exData.url === null) {
        exData.url = jsonUrl.url;
        exData.url = exData.url + jsonUrl.event_idx;
        exData.url = exData.url + '?' + jsonUrl.ssn;
        for (var key in jsonUrl) {
          if (key != 'url' && key != 'event_idx' && key != 'ssn') {
            exData.url = exData.url + '&' + key + '=' + jsonUrl[key];
          }
        }
      }
      // ssn 생성
      exData.ssn = jsonUrl.ssn;
      return exData
    },
    // runData(ajax 실행)
    runData: function (evData, itemNum) {
      var evData = evData;
      var ssn = evData.ssn;
      var formData = { 'pick_no' : itemNum };
      var evAjax = $.ajax({
        type: "POST",
        url: evData.url,
        data: formData
      });

      // ajax success
      evAjax.success(function (data) {
        // 성공 시
        if (data.code == 0) {
          // 통신 및 데이터 정상
          if (evData.options.useLayer) {
            _modalLayer.openLayer(ssn, evData.modalMsg['success'], evData.options.refresh, evData.options.langData);
          }
          evData.callback.success(data.code);
        } else if (data.code == 2) {
          // 데이터 비정상
          if (evData.options.useLayer) {
            _modalLayer.openLayer(ssn, evData.modalMsg['fail'], evData.options.refresh, evData.options.langData);
          }
          evData.callback.fail(data.code);
        } else {
          console.log('[에러] code:' + data.code + ' 잘못된 코드 입니다.')
        }
      });
      // ajax error
      evAjax.error(function (data, status) {
        if (evData.options.useLayer) {
          _modalLayer.openLayer(ssn, evData.modalMsg['error'], evData.options.refresh, evData.options.langData);
        }
        evData.callback.error(itemNum);
      });
      // ajax always
      evAjax.always(function (data, status) {
        if (evData.options.debug === true) console.log('[ajax] status: ' + status + ' / ' + 'data.code: ' + data.code);
        evData.callback.always();
      });
    }
  },
  _modalLayer = {
    layerEle:
    '<div id="fLayer">'+
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
    commonMsg: {
      // 게임별 공용 메시지
      common:{
        ssn: null,
        title: '',
        success: '보상이 우편함으로 지급되었습니다.<br><span>우편함을 확인해주세요.</span>',
        fail: '보상이 정상적으로 지급 되지 않았습니다.<br><span>다시 한 번 보상받기 진행해 주세요.</span>',
        error: '비정상적인 접근입니다.<br><span>다시 한 번 보상받기 진행해 주세요.</span>',
        end: '이벤트 기간이 종료되었습니다.<br><span>다음 기회에 참여해 주세요.</span>',
        denied: '보상지급 대상자가 아닙니다.<br><span>이벤트 미션을 확인해 주세요.</span>',
        btnName: '확인'
      },
      hero: {
        ssn: 30,
        title: '영웅',
        success: '지급이 완료되었습니다.',
        fail: '오류가 발생하였습니다.<br>죄송합니다.',
        error: '영웅님, 이벤트 참여에.<br>이상현상이 발견되었습니다.<br>고객센터로 문의해주세요.',
        end: '이벤트 기간이 종료되었습니다.<br><span>다음 기회에 참여해 주세요.</span>',
        denied: '보상지급 대상자가 아닙니다.<br><span>이벤트 미션을 확인해 주세요.</span>',
        btnName: '확인'
      },
      lostk: {
        ssn: 48,
        title: '로스트킹덤',
        success: '보상이 우편함으로<br>지급되었습니다.',
        fail: '정상적인 접근이 아닙니다.<br>고객센터로 문의해주시기 바랍니다.',
        error: '에러가 발생하였습니다.<br>고객센터로 문의해주시기 바랍니다.',
        end: '이벤트 기간이 종료되었습니다.<br><span>다음 기회에 참여해 주세요.</span>',
        denied: '보상지급 대상자가 아닙니다.<br><span>이벤트 미션을 확인해 주세요.</span>',
        btnName: '확인'
      },
      goldenk: {
        ssn: 55,
        title: '골든나이츠',
        success: '보상이 우편함으로<br>지급되었습니다.',
        fail: '정상적인 접근이 아닙니다.<br>고객센터로 문의해주시기 바랍니다.',
        error: '에러가 발생하였습니다.<br>고객센터로 문의해주시기 바랍니다.',
        end: '이벤트 기간이 종료되었습니다.<br><span>다음 기회에 참여해 주세요.</span>',
        denied: '보상지급 대상자가 아닙니다.<br><span>이벤트 미션을 확인해 주세요.</span>',
        btnName: '확인'
      },
      bladet: {
        ssn: 58,
        title: '삼국블레이드',
        success: '보상이 서신함으로 지급되었습니다.',
        fail: '시스템 오류가 발생했습니다.<br>죄송합니다.',
        error: '오류가 발생했습니다<br>고객센터에 문의해주세요',
        end: '이벤트 기간이<br>종료되어 아이템을<br>교환하실 수 없습니다.',
        denied: '보상지급 대상자가 아닙니다.<br><span>이벤트 미션을 확인해 주세요.</span>',
        btnName: '확인'
      },
      specialf: {
        ssn: 42,
        title: '스페셜포스',
        success: '보상이 <em>우편함</em>으로 <br> 지급 되었습니다.',
        fail: '정상적인 접근이 아닙니다.<br>고객센터로 <em>문의</em>해주시기 바랍니다.',
        error: '에러가 발생했습니다<br>고객센터로 <em>문의</em>해주시기 바랍니다.',
        end: '이벤트 기간이 종료되었습니다.<br><span>다음 기회에 참여해 주세요.</span>',
        denied: '보상지급 대상자가 아닙니다.<br><span>이벤트 미션을 확인해 주세요.</span>',
        btnName: '확인'
      }
    },
    openLayer: function (ssn, msg, isRefresh, langData) {
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
        layerLang = langData,
        msgType = ['success', 'fail', 'error', 'end', 'denied'],
        layerMsg = msg;

      var initMsg = function (str, data) {
        var layerMsg = null;

        $(msgType).each(function (idx, val) {
          if ( str === val ) {
            layerMsg = data[val];
            return false
          }else{
            layerMsg = str;
          }
        });
        if (data.btnName !== undefined) $(targetBtn).html(data.btnName);
        if (data.title !== undefined) $(targetTitle).html(data.title);
        return layerMsg
      };

      // init layerMsg
      if ( langData !== undefined ){
        // 외부 메시지를 가져오는 경우(다국어 등)
        layerMsg = initMsg(layerMsg, layerLang);
      }else{
        if ( ssn !== null ) {
          for ( var val in _modalLayer.commonMsg ) {
            // 기본 선언되어 있는 메시지를 사용하는 경우
            var gameMsg = _modalLayer.commonMsg[val];

            if ( gameMsg.ssn === ssn ) {
              layerMsg = initMsg(layerMsg, _modalLayer.commonMsg[val]);
              break;
            }else{
              layerMsg = initMsg(layerMsg, _modalLayer.commonMsg.common);
            }
          }
        }else{
          layerMsg = initMsg(layerMsg, _modalLayer.commonMsg.common);
        }
      }
      // refresh check
      if (isRefresh === true) $(targetBtn).attr('close-type', 'refresh');
      // visible layer
      $(wrapLayer).show(1, function () {
        $(wrapLayer).addClass('active');
      }, 0);
      // bg height init
      $(layerBg).height(docHeight);
      // layerMsg init
      $(targetMsg).html(layerMsg);
      // layer positions set
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
  };

  // method set
   function set( data ) {
    evData = $.extend( true, defaultData, data );
  }
  // method - init
  function init( num, userLayer ) {
    var evData = _setting.setData();
    evData.options.useLayer = ( userLayer === undefined ) ? evData.options.useLayer : userLayer;
    // error check
    if ( evData.errorMsg !== null ){
      console.log(evData.errorMsg);
      return false
    }else{
      if ( evData.options.debug === true ) {
        console.log('[ajax] URL: '+evData.url);
      }
      _setting.runData(evData, num);
    }
  }
  // method - modalLayer
  function modalMsg( strMsg, isRefresh ) {
    var evData = _setting.setData();
    isRefresh = (isRefresh === undefined) ? evData.options.refresh : isRefresh;
    evData.options.langData = (evData.options.langData === null) ? undefined : evData.options.langData;

    _modalLayer.openLayer(evData.ssn, strMsg, isRefresh, evData.options.langData);
  }

  // init prototype
  FttXhrModal.prototype.set = function ( data ) {
    return set( data );
  };
  FttXhrModal.prototype.init = function ( num, userLayer ) {
    return init( num, userLayer );
  };
  FttXhrModal.prototype.modalMsg= function ( strMsg, isRefresh ) {
    return modalMsg( strMsg, isRefresh );
  };

  // add modalLayer elements
  $(document).ready(function () {
    // element init
    if (!$('#fLayer').length) $('body > div').append(_modalLayer.layerEle);
    // closeLayer
    $('body').on('click','#fLayer .btn_close, #fLayer .bg_layer',function () {
      var btnType = $('#fLayer .btn_close').attr('close-type');
      _modalLayer.closeLayer(btnType);
    })
  });

};