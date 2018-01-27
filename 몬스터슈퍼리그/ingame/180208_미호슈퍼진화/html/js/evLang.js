/****************************************

 *monsterSuperLeague eventLanguageSet - ui.js*

 [language set]
 langKo(한국어)
 langEn(영어)
 langJa(일본어)
 langHans(중국어 - 간체)
 langHant(중국어 - 번체)

 ****************************************/
function evLang (langType) {
  var langKo = {        // 한국어
      questTitle: [
        '',
        ''
      ],
      rewardTitle: [
        '',
        ''
      ],
      btnName:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">받기완료</span>'
    }, langEn = {     // 영어
      questTitle: [
        '',
        ''
      ],
      rewardTitle: [
        '',
        ''
      ],
      btnName:
      '<span class="btn_normal">Get Reward</span>'+
      '<span class="btn_end">Completed</span>'
    },
    langJa = {        // 일본어
      questTitle: [
        '',
        ''
      ],
      rewardTitle: [
        '',
        ''
      ],
      btnName:
      '<span class="btn_normal">受け取る</span>'+
      '<span class="btn_end">受取済み</span>'
    }, langHans = {       // 간체
      questTitle: [
        '',
        ''
      ],
      rewardTitle: [
        '',
        ''
      ],
      btnName:
      '<span class="btn_normal">领取奖励</span>'+
      '<span class="btn_end">已领取</span>'
    }, langHant = {         // 번체
      questTitle: [
        '',
        ''
      ],
      rewardTitle: [
        '',
        ''
      ],
      btnName:[
        '<span class="btn_normal">領取獎勵</span>'+
        '<span class="btn_end">已領取</span>'
      ]
    };

  if (langType == 'ko'){
    return langKo
  }else if (langType == 'en'){
    return langEn
  }else if(langType == 'ja'){
    return langJa
  }else if (langType == 'zh-CN'){
    return langHans
  }else if (langType == 'zh-TW'){
    return langHant
  }else{
    console.log('evLang.js - [ 기본 언어 값인 영어로 설정되었습니다. ]');
    $('#fWrap').attr('class', 'en');
    return langEn
  }
}