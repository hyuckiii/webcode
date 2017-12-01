/****************************************

 [msl calendar event(Registration) - commonLang.js]

 [languageSet]
 langKo(한국어)
 langEn(영어)
 langJa(일본어)
 langTh(태국어)
 langHans(중국어 - 간체)
 langHant(중국어 - 번체)

 ****************************************/

function commonLang (langType) {
  var langKo = {
      success: '정상적으로 신청 되었습니다!<br><span>참여해 주셔서 감사합니다.</span>',
      already: '이미 신청하셨네요!<br><span>참여해 주셔서 감사합니다.</span>',
      country: '먼저 국가를 선택해 주세요!<br><span>게임 이용 중인 국가를 선택하시면 됩니다.</span>',
      btnClose: '확인'
    },
    langEn = {
      success: 'Your entry have been successfully sent!<br><span>Thank you for your participation.</span>',
      already: 'You have already applied to this event!<br><span>Thank you for your participation.</span>',
      country: 'Please select your Country first!<br><span>Select your game usage country.</span>',
      btnClose: 'OK'
    },
    langJa = {
      success: '正常に応募されました！<br><span>ありがとうございます。</span>',
      already: '応募済みです。<br><span>ありがとうございます。</span>',
      country: 'まず国を選んでください。<br><span>ゲーム利用中の国を選んでください。</span>',
      btnClose: 'OK'
    },
    langTh = {
      success: 'ส่งข้อมูลของคุณเรียบร้อยแล้ว!<br><span>ขอบคุณที่ร่วมสนุกกับเรา</span>',
      already: 'คุณเข้าร่วมในอีเว้นท์นี้แล้ว!<br><span>ขอบคุณที่ร่วมสนุกกับเรา</span>',
      country: 'กรุณาเลือกประเทศของคุณก่อน!<br><span>เลือกประเทศที่คุณใช้งาน</span>',
      btnClose: 'ตกลง'
    },
    langHans = {
      success: '恭喜您已成功参与活动！<br><span>感谢您的参与。</span>',
      already: '您已经参与过本次活动！<br><span>感谢您的参与。</span>',
      country: '请先选择所在国家！<br><span>选择登录游戏的所在国家即可。</span>',
      btnClose: '确认'
    },
    langHant = {
      success: '恭喜您已成功參與活動！<br><span>感謝您的參與。</span>',
      already: '您已經參與過本次活動！<br><span>感謝您的參與。</span>',
      country: '請先選擇所在國家！<br><span>選擇您登入遊戲的所在國家即可。</span>',
      btnClose: '確認'
    };

  if (langType == 'ko'){
    return langKo
  }else if (langType == 'en'){
    return langEn
  }else if(langType == 'ja'){
    return langJa
  }else if(langType == 'th'){
    return langTh
  }else if (langType == 'zh-CN'){
    return langHans
  }else if (langType == 'zh-TW'){
    return langHant
  }else{
    return '존재하지 않는 언어입니다.'
  }
}