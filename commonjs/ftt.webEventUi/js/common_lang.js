/*

  *seven Guardians layer.js*
   [language set]
     layerEn(영어)
     layerJa(일본어)
     layerTh(태국어)
     layerHans(중국어 - 간체)
     layerHant(중국어 - 번체)

   [layer message]
    success(정상지급)
    fail(지급실패)
    already(중복보상신청)
    error(오류발생)
    btnName(확인버튼명)

*/

// 언어반환
function commonLang (langType){
  var langEn = {
      success: 'Rewards have been sent',                                       // 보상이 정상적으로 지급되었습니다
      fail: 'You cannot claim rewards',                                        // 보상을 획득 하실 수 없습니다.
      already: 'You have already claimed this reward',                         // 이미 획득하신 보상 입니다.
      error: 'An error has occurred.<br>(Please contact our support team)',    // 오류가 발생하였습니다.(고객센터로 문의해 주세요)
      btnName: 'OK'                                                            // 확인
    },
    langJa = {
      success: '報酬が支給されました',
      fail: '報酬を受け取れません',
      already:'すでに受け取った報酬です',
      error:'エラーが発生しました。<br>(サポートセンターにお問い合わせください）',
      btnName: 'OK'
    },
    langTh = {
      success: 'ได้รับรางวัลแล้ว',
      fail: 'ไม่สามารถรับรางวัลได้',
      already: 'ท่านรับรางวัลไปแล้ว',
      error: 'เกิดข้อผิดพลาด<br>(กรุณาติดต่อทีมงาน)',
      btnName: 'ยืนยัน'
    },
    langHans = {
      success: '已正常领取奖励',
      fail: '无法获得奖励',
      already: '已经获得的奖励',
      error: '发生错误<br>(请谘询客服中心)',
      btnName: 'OK'
    },
    langHant = {
      success: '已正常領取獎勵',
      fail: '無法獲得獎勵',
      already: '已經獲得的獎勵',
      error: '發生錯誤<br>(請諮詢客服中心)',
      btnName: 'OK'
    };

  if (langType == 'en'){
    return langEn
  }else if(langType == 'ja'){
    return langJa
  }else if(langType == 'th'){
    return langTh
  }else if (langType == 'zh-cn'){
    return langHans
  }else if (langType == 'zh-tw'){
    return langHant
  }else{
    return '존재하지 않는 언어입니다.'
  }
  
};

// func loading
function loading (str) {
  var docHeight = $(document).height(),
    type = str;
  if (type == 'open'){
    $('body').append('<div id="loading"><img src="http://static.four33.co.kr/event/game/seveng/ingame/common/images/img-loading.gif" alt="loading"></div>');
    $('#loading').css({
      'height': docHeight,
      'position': 'absolute',
      'left': 0,
      'top': 0,
      'width': '100%',
      'background-color': 'rgba(0,0,0,0.6)'
    });
    $('#loading img').css({
      'position': 'absolute',
      'left': '50%',
      'top': '50%',
      'margin': '-100px 0 0 -100px'
    })
  }else if(type == 'close'){
    $('#loading').remove();
  }
}