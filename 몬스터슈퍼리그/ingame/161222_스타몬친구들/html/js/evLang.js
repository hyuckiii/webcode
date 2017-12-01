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
      '에너지<br><span>50개</span> 사용',
      '에너지<br><span>300개</span> 사용',
      '에너지<br><span>1000개</span> 사용',
      '에너지<br><span>3000개</span> 사용',
      '스타몬<br><span>200개</span> 획득',
      '포획<br><span>75회</span> 진행',
      '환생 소환<br><span>10회</span> 진행',
      '영혼석 소환<br><span>5회</span> 진행',
      '스타몬 각성<br><span>30회</span> 진행',
      '스타몬 진화<br><span>10회</span> 진행',
      '스타몬 초월<br><span>10회</span> 진행',
      '<span>모든 미션</span><br>클리어'
    ],
    rewardTitle: [
      '50,000 골드',
      '100,000 골드',
      '150,000 골드',
      '스타젬 200개',
      '[상급]<br>빛어둠의 알 1개',
      '에너지 100개',
      '에너지 100개',
      '에너지 100개',
      '[상급]<br>비밀의 알 3개',
      '[상급]<br>비밀의 알 3개',
      '[상급]<br>비밀의 알 3개',
      '[전설]<br>비밀의 알 1개'
    ],
    btnName:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">완료</span>'
  }, langEn = {     // 영어
    questTitle: [
      'Use Energy x50',
      'Use Energy x300',
      'Use Energy x1,000',
      'Use Energy x3,000',
      'Obtain Astromon x200',
      'Use Starchip x75',
      '<small>Summon Astromon via Rebirth x10</small>',
      '<small>Summon Astromon via Soulstone x5</small>',
      'Awaken Astromon x30',
      'Evolve Astromon x10',
      'Ascend Astromon x10',
      'Clear All Mission'
    ],
    rewardTitle: [
      '50,000 Gold',
      '100,000 Gold',
      '150,000 Gold',
      'Astrogem x200',
      '[High] Light/Dark Egg x1',
      'Energy x100',
      'Energy x100',
      'Energy x100',
      '[High] Secret Egg x3',
      '[High] Secret Egg x3',
      '[High] Secret Egg x3',
      '[Legendary] Secret Egg x1'
    ],
    btnName:
    '<span class="btn_normal">Get Reward</span>'+
    '<span class="btn_end">Completed</span>'
    },
    langJa = {        // 일본어
      questTitle: [
        'エネルギーを50個使う',
        'エネルギーを300個使う',
        'エネルギーを1,000個使う',
        'エネルギーを3,000個使う',
        'スターモンを200匹手に入れる',
        '捕獲に75回挑戦する',
        '再召喚を10回行う',
        'ソウルストーンで5回召喚する',
        'スターモンを30回覚醒させる',
        'スターモンを10回進化させる',
        'スターモンを10回昇級させる',
        'ミッションをすべてクリアする'
      ],
      rewardTitle: [
        '50,000ゴールド',
        '100,000ゴールド',
        '150,000ゴールド',
        'スタージュエル200個',
        '[上級]光/闇の卵1個',
        'エネルギー100個',
        'エネルギー100個',
        'エネルギー100個',
        '[上級]秘密の卵3個',
        '[上級]秘密の卵3個',
        '[上級]秘密の卵3個',
        '[伝説]秘密の卵1個'

      ],
      btnName:
        '<span class="btn_normal">受け取る</span>'+
        '<span class="btn_end">受取済み</span>'
    }, langTh = {       // 태국어
      questTitle: [
        'ใช้ 50 พลังงาน',
        'ใช้ 300 พลังงาน',
        'ใช้ 1,000 พลังงาน',
        'ใช้ 3,000 พลังงาน',
        'ได้รับ 200 แอสโตรมอน',
        'จับแอสโตรมอน 75 ครั้ง',
        'เรียกกำเนิดใหม่ 10 ครั้ง',
        'เรียกศิลาวิญญาณ 5 ครั้ง',
        'ปลุกพลังแอสโตรมอน 30 ครั้ง',
        'วิวัฒนาการแอสโตรมอน 10 ครั้ง',
        'ข้ามขีดจำกัดแอสโตรมอน 10 ครั้ง',
        'สำเร็จภารกิจทั้งหมด'
      ],
      rewardTitle: [
        '50,000 ทอง',
        '100,000 ทอง',
        '150,000 ทอง',
        '200 แอสโตรเจม',
        '[สูง] ไข่แห่งแสงสว่าง/ความมืด 1 ชิ้น',
        '100 พลังงาน',
        '100 พลังงาน',
        '100 พลังงาน',
        '[สูง] ไข่แห่งความลับ 3 ชิ้น',
        '[สูง] ไข่แห่งความลับ 3 ชิ้น',
        '[สูง] ไข่แห่งความลับ 3 ชิ้น',
        '[ตำนาน] ไข่แห่งความลับ 1 ชิ้น'
      ],
      btnName:
        '<span class="btn_normal">รับรางวัล</span>'+
        '<span class="btn_end">รับแล้ว</span>'
    }, langHans = {       // 간체
      questTitle: [
        '使用能量x50',
        '使用能量x300',
        '使用能量x1,000',
        '使用能量x3,000',
        '获得200只星兽',
        '捕捉星兽75次',
        '通过重生召唤星兽10次',
        '使用灵魂石召唤星兽5次',
        '进行星兽觉醒30次',
        '进行星兽进化10次',
        '进行星兽晋升10次',
        '达成所有任务'
      ],
      rewardTitle: [
        '50,000金币',
        '100,000金币',
        '150,000金币',
        '星晶石200颗',
        '[高级>光暗之蛋1个',
        '能量x100',
        '能量x100',
        '能量x100',
        '[高级]神秘的蛋3个',
        '[高级]神秘的蛋3个',
        '[高级]神秘的蛋3个',
        '[传奇]神秘的蛋1个'
      ],
      btnName:
        '<span class="btn_normal">领取奖励</span>'+
        '<span class="btn_end">已领取</span>'
  }, langHant = {         // 번체
    questTitle: [
      '使用能量x50',
      '使用能量x300',
      '使用能量x1,000',
      '使用能量x3,000',
      '獲得200隻星獸',
      '捕捉星獸75次',
      '經由重生召喚星獸10次',
      '使用魂石召喚星獸5次',
      '進行星獸覺醒30次',
      '進行星獸進化10次',
      '進行星獸升階10次',
      '達成所有任務'
    ],
    rewardTitle: [
      '50,000金幣',
      '100,000金幣',
      '150,000金幣',
      '星寶石200顆',
      '[高級]光/暗卵1個',
      '能量x100',
      '能量x100',
      '能量x100',
      '[高級]神秘卵3個',
      '[高級]神秘卵3個',
      '[高級]神秘卵3個',
      '[傳說]神秘卵1個'

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