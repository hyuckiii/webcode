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
      '누적 포인트 <br>10개',
      '누적 포인트 <br>50개',
      '누적 포인트 <br>100개',
      '누적 포인트 <br>300개',
      '누적 포인트 <br>500개',
      '누적 포인트 <br>1000개',
      '누적 포인트 <br>1500개',
      '누적 포인트 <br>2000개',
      '누적 포인트 <br>3000개',
      '누적 포인트 <br>4330개'
    ],
    rewardTitle: [
      '에너지 <br>50개',
      '(상급) <br>비밀의 알 1개',
      '에너지 <br>100개',
      '(하급) 별의 <br>초월석 20개',
      '(빛) 미니 세이라 <br>영혼석 15개',
      '(중급) 별의 <br>초월석 20개',
      '(빛) 미니 세이라 <br>영혼석 15개',
      '(상급) 별의 <br>초월석 10개',
      '(빛) 미니 세이라 <br>영혼석 20개',
      '(전설) <br>비밀의 알 1개'
    ],
    btnName:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">받기완료</span>'
  }, langEn = {     // 영어
    questTitle: [
      'Accumulate <br>10 points',
      'Accumulate <br>50 points',
      'Accumulate <br>100 points',
      'Accumulate <br>300 points',
      'Accumulate <br>500 points',
      'Accumulate <br>1,000 points',
      'Accumulate <br>1,500 points',
      'Accumulate <br>2,000 points',
      'Accumulate <br>3,000 points',
      'Accumulate <br>4,330 points'
    ],
    rewardTitle: [
      'Energy x50',
      '(High) <br>Secret Egg x1',
      'Energy x100',
      '(Low) <br>Starstone x20',
      '(Light) Mini Seira Soulstone x15',
      '(Mid) <br>Starstone x20',
      '(Light) Mini Seira Soulstone x15',
      '(High) <br>Starstone x10',
      '(Light) Mini Seira Soulstone x20',
      '(Legendary) <br>Secret Egg x1'
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
        '累積 <br>3000ポイント',
        '累積 <br>4330ポイント'
      ],
      rewardTitle: [
        'エネルギー50個',
        '(上級)秘密の卵1個',
        'エネルギー100個',
        '(下級)<br>スターストーン20個',
        '(光)ミニセイラソウルストーン 15個',
        '(中級)<br>スターストーン20個',
        '(光)ミニセイラソウルストーン 15個',
        '(上級)<br>スターストーン10個',
        '(光)ミニセイラソウルストーン 20個',
        '(伝説)秘密の卵1個'
      ],
      btnName:
        '<span class="btn_normal">受け取る</span>'+
        '<span class="btn_end">受取済み</span>'
    }, langTh = {       // 태국어
      questTitle: [
        'สะสมเหรียญครบ 10 เหรียญ',
        'สะสมเหรียญครบ 50 เหรียญ',
        'สะสมเหรียญครบ 100 เหรียญ',
        'สะสมเหรียญครบ 300 เหรียญ',
        'สะสมเหรียญครบ 500 เหรียญ',
        'สะสมเหรียญครบ 1000 เหรียญ',
        'สะสมเหรียญครบ 1500 เหรียญ',
        'สะสมเหรียญครบ 2000 เหรียญ',
        'สะสมเหรียญครบ 3000 เหรียญ',
        'สะสมเหรียญครบ 4330 เหรียญ'
      ],
      rewardTitle: [
        '50 พลังงาน',
        '(สูง) <br>ไข่แห่งความลับ 1 ชิ้น',
        '100 พลังงาน',
        '(ต่ำ)<br>ศิลาดวงดาว 20 ชิ้น',
        '(แสง) <br>ศิลาวิญญาณเซร่าจิ๋ว x15',
        '(กลาง) <br>ศิลาดวงดาว 20 ชิ้น',
        '(แสง) <br>ศิลาวิญญาณเซร่าจิ๋ว x15',
        '(สูง) <br>ศิลาดวงดาว 10 ชิ้น',
        '(แสง) <br>ศิลาวิญญาณเซร่าจิ๋ว x20',
        '(ตำนาน) <br>ไข่แห่งความลับ 1 ชิ้น'
      ],
      btnName:
        '<span class="btn_normal">รับรางวัล</span>'+
        '<span class="btn_end">รับเรียบร้อย</span>'
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
        '累积积分 <br>3000个',
        '累积积分 <br>4330个'
      ],
      rewardTitle: [
        '能量50个',
        '(高级)神秘的蛋1个',
        '能量100个',
        '(低级)星石20颗',
        '(光) 迷你星罗灵魂石15个',
        '(中级)星石20颗',
        '(光) 迷你星罗灵魂石15个',
        '(高级)星石10颗',
        '(光) 迷你星罗灵魂石20个',
        '(传奇)神秘之蛋1个'
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
      '累計點數 <br>3000個',
      '累計點數 <br>4330個'
    ],
    rewardTitle: [
      '能量50個',
      '(高級)神秘卵1個',
      '能量100個',
      '(低級)星石20顆',
      '(光) 迷你星羅靈魂石15個',
      '(中級)星石20顆',
      '(光) 迷你星羅靈魂石15個',
      '(高級)星石10顆',
      '(光) 迷你星羅靈魂石20個',
      '(傳說)神秘卵1個'
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