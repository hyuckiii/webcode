/****************************************

  monsterSuperLeague eventLanguageSet - ui.js
  (USE ENERGY AND CHEER UP!)

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
      '에너지 10개 사용',
      '에너지 25개 사용',
      '에너지 50개 사용',
      '에너지 100개 사용',
      '에너지 200개 사용',
      '에너지 500개 사용',
      '에너지 1000개 사용',
      '에너지 2000개 사용',
      '에너지 3000개 사용',
      '비공정에 숨겨진 보물<br>3회 찾기',
      '비공정에 숨겨진 보물<br>30회 찾기',
      '비공정에 숨겨진 보물<br>100회 찾기',
      '',
      ''
    ],
    rewardTitle: [
      '에너지 20개',
      '에너지 50개',
      '에너지 100개',
      '100,000 골드',
      '200,000 골드',
      '300,000 골드',
      '스타젬 100개',
      '스타젬 100개',
      '스타젬 100개',
      '(상급) 비밀의 알 1개',
      '(상급) 비밀의 알 2개',
      '(상급) 비밀의 알 3개',
      '',
      ''
    ],
    btnName:
    '<span class="btn_normal">보상받기</span>'+
    '<span class="btn_end">완료</span>'
  }, langEn = {     // 영어
      questTitle: [
        'Use Energy x10',
        'Use Energy x25',
        'Use Energy x50',
        'Use Energy x100',
        'Use Energy x200',
        'Use Energy x500',
        'Use Energy x1000',
        'Use Energy x2000',
        'Use Energy x3000',
        'Find hidden items x3',
        'Find hidden items x30',
        'Find hidden items x100',
        '',
        ''
      ],
      rewardTitle: [
        'Energy x20',
        'Energy x50',
        'Energy x100',
        '100,000 Gold',
        '200,000 Gold',
        '300,000 Gold',
        'Astrogem x100',
        'Astrogem x100',
        'Astrogem x100',
        '(High) Secret Egg x1',
        '(High) Secret Egg x2',
        '(High) Secret Egg x3',
        '',
        ''
      ],
      btnName:
      '<span class="btn_normal">Get Reward</span>'+
      '<span class="btn_end">Completed</span>'
    },
    langJa = {        // 일본어
      questTitle: [
        'エネルギー10個使用',
        'エネルギー25個使用',
        'エネルギー50個使用',
        'エネルギー100個使用',
        'エネルギー200個使用',
        'エネルギー500個使用',
        'エネルギー1,000個使用',
        'エネルギー2,000個使用',
        'エネルギー3,000個使用',
        '飛行船で隠しアイテム<br>3回発見',
        '飛行船で隠しアイテム<br>30回発見',
        '飛行船で隠しアイテム<br>100回発見',
        '',
        ''
      ],
      rewardTitle: [
        'エネルギー20個',
        'エネルギー50個',
        'エネルギー100個',
        '100,000ゴールド',
        '200,000ゴールド',
        '300,000ゴールド',
        'スタージュエル100個',
        'スタージュエル100個',
        'スタージュエル100個',
        '(上級)秘密の卵1個',
        '(上級)秘密の卵2個',
        '(上級)秘密の卵3個',
        '',
        ''
      ],
      btnName:
      '<span class="btn_normal">受け取る</span>'+
      '<span class="btn_end">受取済み</span>'
    }, langTh = {       // 태국어
      questTitle: [
        'ใช้ 10 พลังงาน',
        'ใช้ 25 พลังงาน',
        'ใช้ 50 พลังงาน',
        'ใช้ 100 พลังงาน',
        'ใช้ 200 พลังงาน',
        'ใช้ 500 พลังงาน',
        'ใช้ 1000 พลังงาน',
        'ใช้ 2000 พลังงาน',
        'ใช้ 3000 พลังงาน',
        'ค้นหาไอเท็มลับบนเรือเหาะ<br>3 ครั้ง',
        'ค้นหาไอเท็มลับบนเรือเหาะ<br>30 ครั้ง',
        'ค้นหาไอเท็มลับบนเรือเหาะ<br>100 ครั้ง',
        '',
        ''
      ],
      rewardTitle: [
        '20 พลังงาน',
        '50 พลังงาน',
        '100 พลังงาน',
        '100,000 ทอง',
        '200,000 ทอง',
        '300,000 ทอง',
        '100 แอสโตรเจม',
        '100 แอสโตรเจม',
        '100 แอสโตรเจม',
        '(สูง) ไข่แห่งความลับ 1 ชิ้น',
        '(สูง) ไข่แห่งความลับ 2 ชิ้น',
        '(สูง) ไข่แห่งความลับ 3 ชิ้น',
        '',
        ''
      ],
      btnName:
      '<span class="btn_normal">รับรางวัล</span>'+
      '<span class="btn_end">รับแล้ว</span>'
    }, langHans = {       // 간체
      questTitle: [
        '使用能量10次',
        '使用能量25次',
        '使用能量50次',
        '使用能量100次',
        '使用能量200次',
        '使用能量500次',
        '使用能量1000次',
        '使用能量2000次',
        '使用能量3000次',
        '在飞空艇上找到隐藏物品<br>3次',
        '在飞空艇上找到隐藏物品<br>30次',
        '在飞空艇上找到隐藏物品<br>100次',
        '',
        ''
      ],
      rewardTitle: [
        '能量x20',
        '能量x50',
        '能量x100',
        '100,000金币',
        '200,000金币',
        '300,000金币',
        '星晶石100颗',
        '星晶石100颗',
        '星晶石100颗',
        '(高级)神秘的蛋1个',
        '(高级)神秘的蛋2个',
        '(高级)神秘的蛋3个',
        '',
        ''
      ],
      btnName:
      '<span class="btn_normal">领取奖励</span>'+
      '<span class="btn_end">已领取</span>'
  }, langHant = {         // 번체
      questTitle: [
        '使用能量10次',
        '使用能量25次',
        '使用能量50次',
        '使用能量100次',
        '使用能量200次',
        '使用能量500次',
        '使用能量1000次',
        '使用能量2000次',
        '使用能量3000次',
        '在飛船上找到隱藏物品<br>3次',
        '在飛船上找到隱藏物品<br>30次',
        '在飛船上找到隱藏物品<br>100次',
        '',
        ''
      ],
      rewardTitle: [
        '能量x20',
        '能量x50',
        '能量x100',
        '100,000金幣',
        '200,000金幣',
        '300,000金幣',
        '星寶石100顆',
        '星寶石100顆',
        '星寶石100顆',
        '(高級)神秘卵1個',
        '(高級)神秘卵2個',
        '(高級)神秘卵3個',
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