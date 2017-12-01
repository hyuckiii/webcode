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
      '드래곤 던전<br><span>1회</span> 진행',
      '드래곤 던전<br><span>2회</span> 진행',
      '드래곤 던전<br><span>3회</span> 진행',
      '드래곤 던전<br><span>4회</span> 진행',
      '시나리오<br><span>50회</span> 진행',
      '시나리오<br><span>100회</span> 진행',
      '시나리오<br><span>300회</span> 진행',
      '시나리오<br><span>500회</span> 진행',
      '스타몬리그<br><span>30회</span> 참여',
      '스타몬리그<br><span>50회</span> 참여',
      '스타몬리그<br><span>100회</span> 참여',
      '스타몬리그<br><span>300회</span> 참여',
      '고대골렘 던전<br><span>30회</span> 진행',
      '고대골렘 던전<br><span>50회</span> 진행',
      '고대골렘 던전<br><span>100회</span> 진행',
      '고대골렘 던전<br><span>300회</span> 진행',
      '과일<br><span>500개</span> 사용',
      '보석 강화<br><span>100회</span> 진행',
      '진화<br><span>10회</span> 진행',
      '초월<br><span>10회</span> 진행'
    ],
    rewardTitle: [
      '[하급] 비밀의 알 1개',
      '[하급] 빛/어둠의 알 1개',
      '[상급] 비밀의 알 1개',
      '[상급] 빛/어둠의 알 1개',
      '50,000 골드',
      '70,000 골드',
      '100,000 골드',
      '300,000 골드',
      '스타젬 20개',
      '스타젬 50개',
      '스타젬 100개',
      '스타젬 200개',
      '[하급] 별의 과일 10개',
      '[중급] 별의 과일 3개',
      '[중급] 별의 과일 5개',
      '[중급] 별의 과일 10개',
      '에너지 100개',
      '에너지 100개',
      '에너지 200개',
      '에너지 200개'
    ],
    eventInfo:
      '<ul>'+
      '<li>선물 받기 진행 시 진행한 미션 클리어 횟수는 초기화 됩니다.</li>'+
      '<li>모든 선물은 최초 1회에 한하여 지급됩니다.</li>'+
      '<li>선물은 게임 내 우편함으로 지급되며, 우편함을 통해 확인 부탁 드립니다.</li>'+
      '</ul>',
    btnName:
      '<span class="btn_normal">받기</span>'+
      '<span class="btn_end">완료</span>'
  }, langEn = {     // 영어
    questTitle: [
      'Enter Dragon Dungeon <span>1 time</span>',
      'Enter Dragon Dungeon <span>2 times</span>',
      'Enter Dragon Dungeon <span>3 times</span>',
      'Enter Dragon Dungeon <span>4 times</span>',
      'Enter Story mode <span>50 times</span>',
      'Enter Story mode <span>100 times</span>',
      'Enter Story mode <span>300 times</span>',
      'Enter Story mode <span>500 times</span>',
      'Enter Astromon League <span>30 times</span>',
      'Enter Astromon League <span>50 times</span>',
      'Enter Astromon League <span>100 times</span>',
      'Enter Astromon League <span>300 times</span>',
      'Enter Golem Dungeon <span>30 times</span>',
      'Enter Golem Dungeon <span>50 times</span>',
      'Enter Golem Dungeon <span>100 times</span>',
      'Enter Golem Dungeon <span>300 times</span>',
      'Feed an Astromon <span>500 Fruits</span>',
      'Upgrade a Gem <span>100 times</span>',
      'Evolve an Astromon <span>10 times</span>',
      'Ascend an Astromon <span>10 times</span>',
      'Feed an Astromon <span>500 Fruits</span>',
      'Upgrade a Gem <span>100 times</span>',
      'Evolve an Astromon <span>10 times</span>',
      'Ascend an Astromon <span>10 times</span>'
    ],
    rewardTitle: [
      '[Low] Secret Egg x1',
      '[Low] Light/Dark Egg x1',
      '[High] Secret Egg x1',
      '[High] Light/Dark Egg x1',
      '50,000 Gold',
      '70,000 Gold',
      '100,000 Gold',
      '300,000 Gold',
      'Astrogem x20',
      'Astrogem x50',
      'Astrogem x100',
      'Astrogem x200',
      '[Low] Star Fruit x10',
      '[Mid] Star Fruit x3',
      '[Mid] Star Fruit x5',
      '[Mid] Star Fruit x10',
      'Energy x100',
      'Energy x100',
      'Energy x200',
      'Energy x200'
    ],
    eventInfo:
    '<ul>'+
    '<li>The number of stages cleared will reset when mission rewards are claimed.</li>'+
    '<li>Rewards can be claimed only once per each mission.</li>'+
    '<li>Received gifts will be sent to your inbox.</li>'+
    '</ul>',
    btnName:
    '<span class="btn_normal">Get Reward</span>'+
    '<span class="btn_end">Completed</span>'
    },
    langJa = {        // 일본어
      questTitle: [
        'ドラゴンダンジョンに<span>1回</span>挑戦',
        'ドラゴンダンジョンに<span>2回</span>挑戦',
        'ドラゴンダンジョンに<span>3回</span>挑戦',
        'ドラゴンダンジョンに<span>4回</span>挑戦',
        'ストーリーを<span>50回</span>進める',
        'ストーリーを<span>100回</span>進める',
        'ストーリーを<span>300回</span>進める',
        'ストーリーを<span>500回</span>進める',
        'スターモンリーグに<span>30回</span>参加',
        'スターモンリーグに<span>50回</span>参加',
        'スターモンリーグに<span>100回</span>参加',
        'スターモンリーグに<span>300回</span>参加',
        'ゴーレムダンジョンに<span>30回</span>挑戦',
        'ゴーレムダンジョンに<span>50回</span>挑戦',
        'ゴーレムダンジョンに<span>100回</span>挑戦',
        'ゴーレムダンジョンに<span>300回</span>挑戦',
        'フルーツを500個食べさせる',
        'ジュエルの強化に100回挑戦',
        '進化を10回行う',
        '昇級を10回行う'
      ],
      rewardTitle: [
        '[下級]秘密の卵1個',
        '[下級]光/闇の卵1個',
        '[上級]秘密の卵1個',
        '[上級]光/闇の卵1個',
        '50,000ゴールド',
        '70,000ゴールド',
        '100,000ゴールド',
        '300,000ゴールド',
        'スタージュエル20個',
        'スタージュエル50個',
        'スタージュエル100個',
        'スタージュエル200個',
        '[下級]スターフルーツ10個',
        '[中級]スターフルーツ3個',
        '[中級]スターフルーツ5個',
        '[中級]スターフルーツ10個',
        'エネルギー100個',
        'エネルギー100個',
        'エネルギー200個',
        'エネルギー200個'
      ],
      eventInfo:
        '<ul>'+
        '<li>アイテムを受け取ると、ミッションのクリア回数は初期化されます。</li>'+
        '<li>全てのボーナスアイテムは初回1回のみ配布されます。</li>'+
        '<li>ボーナスアイテムはゲーム内の受信箱に届きます。受信箱を確認してください。</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">受け取る</span>'+
        '<span class="btn_end">受取済み</span>'
    }, langTh = {       // 태국어
      questTitle: [
        'เล่นดันเจี้ยนมังกร <span>1 ครั้ง</span>',
        'เล่นดันเจี้ยนมังกร <span>2 ครั้ง</span>',
        'เล่นดันเจี้ยนมังกร <span>3 ครั้ง</span>',
        'เล่นดันเจี้ยนมังกร <span>4 ครั้ง</span>',
        'เล่นด่านเนื้อเรื่อง <span>50 ครั้ง</span>',
        'เล่นด่านเนื้อเรื่อง <span>100 ครั้ง</span>',
        'เล่นด่านเนื้อเรื่อง <span>300 ครั้ง</span>',
        'เล่นด่านเนื้อเรื่อง <span>500 ครั้ง</span>',
        'ร่วมแอสโตรม่อนลีก <span>30 ครั้ง</span>',
        'ร่วมแอสโตรม่อนลีก <span>50 ครั้ง</span>',
        'ร่วมแอสโตรม่อนลีก <span>100 ครั้ง</span>',
        'ร่วมแอสโตรม่อนลีก <span>300 ครั้ง</span>',
        'เล่นดันเจี้ยนโกเลม <span>30 ครั้ง</span>',
        'เล่นดันเจี้ยนโกเลม <span>50 ครั้ง</span>',
        'เล่นดันเจี้ยนโกเลม <span>100 ครั้ง</span>',
        'เล่นดันเจี้ยนโกเลม <span>300 ครั้ง</span>',
        'ใช้ผลไม้ <span>500 ชิ้น</span>',
        'อัพเกรดอัญมณี <span>100 ครั้ง</span>',
        'วิวัฒนาการ <span>10 ครั้ง</span>',
        'ก้าวข้ามขีดจำกัด <span>10 ครั้ง</span>'
      ],
      rewardTitle: [
        '(ต่ำ)ไข่แห่งความลับ 1 ชิ้น',
        '(ต่ำ) ไข่แห่งแสงสว่าง/ความมืด 1 ชิ้น',
        '(สูง) ไข่แห่งความลับ 1 ชิ้น',
        '(สูง) ไข่แห่งแสงสว่าง/ความมืด 1 ชิ้น',
        '50,000 ทอง',
        '70,000 ทอง',
        '100,000 ทอง',
        '300,000 ทอง',
        '20 แอสโตรเจม',
        '50 แอสโตรเจม',
        '100 แอสโตรเจม',
        '200 แอสโตรเจม',
        '(ต่ำ) ผลไม้แห่งดวงดาว 10 ชิ้น',
        '(ปานกลาง) ผลไม้แห่งดวงดาว 3 ชิ้น',
        '(ปานกลาง) ผลไม้แห่งดวงดาว 5 ชิ้น',
        '(ปานกลาง) ผลไม้แห่งดวงดาว 10 ชิ้น',
        '100 พลังงาน',
        '100 พลังงาน',
        '200 พลังงาน',
        '200 พลังงาน'
      ],
      eventInfo:
        '<ul>'+
        '<li>เมื่อกดรับรางวัล จำนวนภารกิจที่สำเร็จจะถูกรีเซ็ต</li>'+
        '<li>ของรางวัลทั้งหมดจะส่งให้ครั้งเดียว</li>'+
        '<li>ของรางวัลจะถูกส่งให้ทางตู้จดหมาย กรุณาตรวจสอบที่ตู้จดหมาย</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">รับรางวัล</span>'+
        '<span class="btn_end">รับแล้ว</span>'
    }, langHans = {       // 간체
      questTitle: [
        '挑战巨龙副本<span>1次</span>',
        '挑战巨龙副本<span>2次</span>',
        '挑战巨龙副本<span>3次</span>',
        '挑战巨龙副本<span>4次</span>',
        '开启剧情<span>50次</span>',
        '开启剧情<span>100次</span>',
        '开启剧情<span>300次</span>',
        '开启剧情<span>500次</span>',
        '参与星兽联赛<span>30次</span>',
        '参与星兽联赛<span>50次</span>',
        '参与星兽联赛<span>100次</span>',
        '参与星兽联赛<span>300次</span>',
        '挑战魔像副本<span>30次</span>',
        '挑战魔像副本<span>50次</span>',
        '挑战魔像副本<span>100次</span>',
        '挑战魔像副本<span>300次</span>',
        '使用<span>500颗</span>水果',
        '强化宝石<span>100次</span>',
        '进化<span>10次</span>',
        '晋升<span>10次</span>'
      ],
      rewardTitle: [
        '[低级]神秘的蛋1个',
        '[低级]光暗之蛋1个',
        '[高级]神秘的蛋1个',
        '[高级]光暗之蛋1个',
        '50,000金币',
        '70,000金币',
        '100,000金币',
        '300,000金币',
        '星晶石20颗',
        '星晶石50颗',
        '星晶石100颗',
        '星晶石200颗',
        '[低级]星之果10个',
        '[中级]星之果3个',
        '[中级]星之果5个',
        '[中级]星之果10个',
        '能量x100',
        '能量x100',
        '能量x200',
        '能量x200'
      ],
      eventInfo:
        '<ul>'+
        '<li>领取奖励后任务完成次数将初始化。</li>'+
        '<li>所有奖励限领一次。</li>'+
        '<li>奖励将寄至游戏内收件箱，请至收件箱确认。</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">领取奖励</span>'+
        '<span class="btn_end">已领取</span>'
  }, langHant = {         // 번체
    questTitle: [
      '挑戰龍之地城<span>1次</span>',
      '挑戰龍之地城<span>2次</span>',
      '挑戰龍之地城<span>3次</span>',
      '挑戰龍之地城<span>4次</span>',
      '開啟劇情<span>50次</span>',
      '開啟劇情<span>100次</span>',
      '開啟劇情<span>300次</span>',
      '開啟劇情<span>500次</span>',
      '參與星獸聯賽<span>30次</span>',
      '參與星獸聯賽<span>50次</span>',
      '參與星獸聯賽<span>100次</span>',
      '參與星獸聯賽<span>300次</span>',
      '挑戰魔偶地城<span>30次</span>',
      '挑戰魔偶地城<span>50次</span>',
      '挑戰魔偶地城<span>100次</span>',
      '挑戰魔偶地城<span>300次</span>',
      '使用<span>500顆</span>果實',
      '強化寶石<span>100次</span>',
      '進化<span>10次</span>',
      '升階<span>10次</span>'
    ],
    rewardTitle: [
      '[低級]神秘卵1個',
      '[低級]光/暗卵1個',
      '[高級]神秘卵1個',
      '[高級]光/暗卵1個',
      '50,000金幣',
      '70,000金幣',
      '100,000金幣',
      '300,000金幣',
      '星寶石20顆',
      '星寶石50顆',
      '星寶石100顆',
      '星寶石200顆',
      '[低級]星果10個',
      '[中級]星果3個',
      '[中級]星果5個',
      '[中級]星果10個',
      '能量x100',
      '能量x100',
      '能量x200',
      '能量x200'
    ],
    eventInfo:
      '<ul>'+
      '<li>領取獎勵後任務完成次數將重置。</li>'+
      '<li>所有獎勵限領一次。</li>'+
      '<li>獎勵將寄至遊戲內收件匣，請至收件匣確認。</li>'+
      '</ul>',
    btnName:[
    '<span class="btn_normal">領取獎勵</span>'+
    '<span class="btn_end">完成領取</span>'
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