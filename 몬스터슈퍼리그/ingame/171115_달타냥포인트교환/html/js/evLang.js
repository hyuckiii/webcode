/****************************************

  *monsterSuperLeague eventLanguageSet - ui.js*

    [language set]
      langKo(한국어)
      langEn(영어)
      langJa(일본어)
      langTh(태국어)
      langHans(중국어 - 간체)
      langHant(중국어 - 번체)

 ****************************************/
function evLang (langType) {
  var langKo = {        // 한국어
    questTitle: [
      '500P 사용',
      '2000P 사용',
      '4500P 사용'
    ],
    rewardTitle: [
      '300,000 골드',
      '[나무]달타냥1마리',
      '[전설]비밀의알1개'
    ],
    btnName:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">받기완료</span>'
  }, langEn = {     // 영어
    questTitle: [
      '500 Points<br>Used',
      '2000 Points<br>Used',
      '4500 Points<br>Used'
    ],
    rewardTitle: [
      '300,000 Gold',
      '(Wood) D’Artagnan',
      '(Legendary)<br>Secret Egg x1'
    ],
    btnName:
    '<span class="btn_normal">Get Reward</span>'+
    '<span class="btn_end">Completed</span>'
    },
    langJa = {        // 일본어
      questTitle: [
        '500ポイント使用',
        '2000ポイント使用',
        '4500ポイント使用'
      ],
      rewardTitle: [
        '300,000ゴールド',
        '(木)ダルタニワン 1体',
        '<伝説>秘密の卵 1個'
      ],
      btnName:
        '<span class="btn_normal">受け取る</span>'+
        '<span class="btn_end">受取済み</span>'
    }, langTh = {       // 태국어
      questTitle: [
        'ใช้สะสม 500<br>คะแนน',
        'ใช้สะสม 2000<br>คะแนน',
        'ใช้สะสม 4500<br>คะแนน'
      ],
      rewardTitle: [
        '300,000 ทอง',
        'ดาตาญัง (ไม้) x1',
        '(ตำนาน) ไข่แห่งความลับ x1'
      ],
      btnName:
        '<span class="btn_normal">รับรางวัล</span>'+
        '<span class="btn_end">รับเรียบร้อย</span>'
    }, langHans = {       // 간체
      questTitle: [
        '使用500积分',
        '使用2000积分',
        '使用4500积分'
      ],
      rewardTitle: [
        '300,000金币',
        '(木) 火枪手 1只',
        '(传奇)神秘之蛋 1个'
      ],
      btnName:
        '<span class="btn_normal">领取奖励</span>'+
        '<span class="btn_end">已领取</span>'
  }, langHant = {         // 번체
    questTitle: [
      '使用500點數',
      '使用2000點數',
      '使用4500點數'
    ],
    rewardTitle: [
      '300,000金幣',
      '(木) 達太安 1隻',
      '(傳說)神秘卵 1個'
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