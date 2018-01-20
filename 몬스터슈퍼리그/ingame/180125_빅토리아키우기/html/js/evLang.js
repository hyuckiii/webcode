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
        '누적 포인트<br>10개',
        '누적 포인트<br>50개',
        '누적 포인트<br>100개',
        '누적 포인트<br>300개',
        '누적 포인트<br>500개',
        '누적 포인트<br>1000개',
        '누적 포인트<br>1500개',
        '누적 포인트<br>2000개',
        '누적 포인트<br>3000개'
      ],
      rewardTitle: [
        '★4~6<br>보석상자 1개',
        '에너지<br>100개',
        '★6<br>보석상자 1개',
        '에너지<br>150개',
        '(상급)<br>비밀의 알 3개',
        '에너지<br>200개',
        '500,000<br>골드',
        '(전설)<br>비밀의 알 1개',
        '★4<br>확정 스킬북 1개'
      ],
      btnName:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">받기완료</span>'
    }, langEn = {     // 영어
      questTitle: [
        '10 Accumulated<br>Points',
        '50 Accumulated<br>Points',
        '100 Accumulated<br>Points',
        '300 Accumulated<br>Points',
        '500 Accumulated<br>Points',
        '1000 Accumulated<br>Points',
        '1500 Accumulated<br>Points',
        '2000 Accumulated<br>Points',
        '3000 Accumulated<br>Points'
      ],
      rewardTitle: [
        '4★~6★<br>Gem Chest X 1',
        '100 Energy',
        '6★<br>Gem Chest X 1',
        '150 Energy',
        '(High)<br>Secret Egg X 3',
        '200 Energy',
        '500,000<br>Gold',
        '(Legendary)<br>Secret Egg X 1',
        '4★<br>Skill Book X 1'
      ],
      btnName:
      '<span class="btn_normal">Get Reward</span>'+
      '<span class="btn_end">Completed</span>'
    },
    langJa = {        // 일본어
      questTitle: [
        '累積 <br>10ポイント',
        '累積 <br>50ポイント',
        '累積 <br>100ポイント',
        '累積 <br>300ポイント',
        '累積 <br>500ポイント',
        '累積 <br>1000ポイント',
        '累積 <br>1500ポイント',
        '累積 <br>2000ポイント',
        '累積 <br>3000ポイント'
      ],
      rewardTitle: [
        '★4～6<br>ジュエルの箱 1個',
        'エネルギー 100個',
        '★6<br>ジュエルの箱 1個',
        'エネルギー 150個',
        '(上級)<br>秘密の卵 3個',
        'エネルギー 200個',
        '500,000<br>ゴールド',
        '(伝説)<br>秘密の卵 1個',
        '★4<br>スキルブック 1個'
      ],
      btnName:
      '<span class="btn_normal">受け取る</span>'+
      '<span class="btn_end">受取済み</span>'
    }, langHans = {       // 간체
      questTitle: [
        '累积积分 <br>10个',
        '累积积分 <br>50个',
        '累积积分 <br>100个',
        '累积积分 <br>300个',
        '累积积分 <br>500个',
        '累积积分 <br>1000个',
        '累积积分 <br>1500个',
        '累积积分 <br>2000个',
        '累积积分 <br>3000个'
      ],
      rewardTitle: [
        '4~6★<br>宝石箱1个',
        '能量100个',
        '6★<br>宝石箱1个',
        '能量150个',
        '(高级)<br>神秘的蛋 3个',
        '能量200个',
        '500,000<br>金币',
        '(传奇)<br>神秘之蛋 1个',
        '4★<br>技能书1本'
      ],
      btnName:
      '<span class="btn_normal">领取奖励</span>'+
      '<span class="btn_end">已领取</span>'
    }, langHant = {         // 번체
      questTitle: [
        '累計點數 <br>10個',
        '累計點數 <br>50個',
        '累計點數 <br>100個',
        '累計點數 <br>300個',
        '累計點數 <br>500個',
        '累計點數 <br>1000個',
        '累計點數 <br>1500個',
        '累計點數 <br>2000個',
        '累計點數 <br>3000個'
      ],
      rewardTitle: [
        '4~6★<br>寶石箱1個',
        '能量100個',
        '6★<br>寶石箱1個',
        '能量150個',
        '(高級)<br>神秘卵 3個',
        '能量200個',
        '500,000<br>金幣',
        '(傳說)<br>神秘卵 1個',
        '4★<br>技能秘笈1本'
      ],
      btnName:[
        '<span class="btn_normal">領取獎勵</span>'+
        '<span class="btn_end">已領取</span>'
      ]
    }

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