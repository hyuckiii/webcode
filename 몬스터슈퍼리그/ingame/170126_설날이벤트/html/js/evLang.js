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
      '누적 복주머니<br><span>50개</span>',
      '누적 복주머니<br><span>100개</span>',
      '누적 복주머니<br><span>200개</span>',
      '누적 복주머니<br><span>300개</span>',
      '누적 복주머니<br><span>500개</span>',
      '누적 복주머니<br><span>1,000개</span>',
      '누적 복주머니<br><span>2,000개</span>',
      '누적 복주머니<br><span>3,000개</span>',
      '누적 복주머니<br><span>5,000개</span>',
      '누적 복주머니<br><span>7,777개</span>'
    ],
    rewardTitle: [
      '에너지 50개',
      '50,000골드',
      '에너지 150개',
      '100,000골드',
      '에너지200개<br>150,000골드',
      '에너지250개<br>[상급]비밀의 알 1개',
      '300,000골드<br>[상급]비밀의 알 1개',
      '에너지300개<br>500,000골드<br>[상급]비밀의 알 1개',
      '에너지300개<br>700,000골드<br>[상급]빛어둠의 알 1개',
      '에너지300개<br>1,000,000골드<br>[전설]비밀의 알 1개'
    ],
    eventInfo:
      '<ul>'+
      '<li>* 계정 당 1회 참여 가능합니다.</li>'+
      '<li>* 누적된 복주머니에 따라 보상을 받을 수 있습니다.</li>'+
      '<li>* 이벤트 보상은 우편함으로 지급됩니다.</li>'+
      '</ul>',
    btnName:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">완료</span>'
  }, langEn = {     // 영어
    questTitle: [
      '<span>50</span> Points',
      '<span>100</span> Points',
      '<span>200</span> Points',
      '<span>300</span> Points',
      '<span>500</span> Points',
      '<span>1,000</span> Points',
      '<span>2,000</span> Points',
      '<span>3,000</span> Points',
      '<span>5,000</span> Points',
      '<span>7,777</span> Points'
    ],
    rewardTitle: [
      'Energy x50',
      '50,000 Gold',
      'Energy x150',
      '100,000 Gold',
      'Energy x200<br>150,000 Gold',
      'Energy x250<br>[High] Secret Egg x1',
      '300,000 Gold<br>[High] Secret Egg x1',
      'Energy x300<br>500,000 Gold<br>[High] Secret Egg x1',
      'Energy x300<br>700,000 Gold<br>[High] Light/Dark Egg x1',
      'Energy x300<br>1,000,000 Gold<br>[Legendary] Secret Egg x1',
    ],
    eventInfo:
    '<ul>'+
    '<li>* You can only participate once per account.</li>'+
    '<li>* You can claim various rewards depending on your total Points.</li>'+
    '<li>* Received gifts will be sent to your Inbox.</li>'+
    '</ul>',
    btnName:
    '<span class="btn_normal">Get Reward</span>'+
    '<span class="btn_end">Completed</span>'
    },
    langJa = {        // 일본어
      questTitle: [
        '合計福袋 <span>50個</span>',
        '合計福袋 <span>100個</span>',
        '合計福袋 <span>200個</span>',
        '合計福袋 <span>300個</span>',
        '合計福袋 <span>500個</span>',
        '合計福袋 <span>1,000個</span>',
        '合計福袋 <span>2,000個</span>',
        '合計福袋 <span>3,000個</span>',
        '合計福袋 <span>5,000個</span>',
        '合計福袋 <span>7,777個</span>'
      ],
      rewardTitle: [
        'エネルギー50個',
        '50,000ゴールド',
        'エネルギー150個',
        '100,000ゴールド',
        'エネルギー200個<br>150,000ゴールド',
        ' エネルギー250個<br>[上級]秘密の卵1個',
        '300,000ゴールド<br>[上級]秘密の卵1個',
        'エネルギー300個<br>500,000ゴールド<br>[上級]秘密の卵1個',
        'エネルギー300個<br>700,000ゴールド<br>[上級]光/闇の卵1個',
        'エネルギー300個<br>1,000,000ゴールド<br>[伝説]秘密の卵1個',
      ],
      eventInfo:
        '<ul>'+
        '<li>* アカウント1つにつき1回のみ参加できます。</li>'+
        '<li>* 合計福袋に応じてアイテムがもらえます。</li>'+
        '<li>* イベントボーナスは受信箱に届きます。</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">受け取る</span>'+
        '<span class="btn_end">受取済み</span>'
    }, langTh = {       // 태국어
      questTitle: [
        'สะสมครบ <span>50 แต้ม</span>',
        'สะสมครบ <span>100 แต้ม</span>',
        'สะสมครบ <span>200 แต้ม</span>',
        'สะสมครบ <span>300 แต้ม</span>',
        'สะสมครบ <span>500 แต้ม</span>',
        'สะสมครบ <span>1,000 แต้ม</span>',
        'สะสมครบ <span>2,000 แต้ม</span>',
        'สะสมครบ <span>3,000 แต้ม</span>',
        'สะสมครบ <span>5,000 แต้ม</span>',
        'สะสมครบ <span>7,777 แต้ม</span>'
      ],
      rewardTitle: [
        'พลังงาน 50 ชิ้น',
        '50,000 ทอง',
        'พลังงาน 150 ชิ้น',
        '100,000 ทอง',
        'พลังงาน 200 ชิ้น<br>150,000 ทอง',
        'พลังงาน 250 ชิ้น<br>[สูง] ไข่แห่งความลับ 1 ชิ้น',
        '300,000 ทอง<br>[สูง] ไข่แห่งความลับ 1 ชิ้น',
        'พลังงาน 300 ชิ้น<br>500,000 ทอง<br>[สูง] ไข่แห่งความลับ 1 ชิ้น',
        'พลังงาน 300 ชิ้น<br>700,000 ทอง<br>[สูง] ไข่แสงสว่าง/ความมืด 1 ชิ้น',
        'พลังงาน 300 ชิ้น<br>1,000,000 ทอง<br>[ระดับตำนาน] ไข่แห่งความลับ 1 ชิ้น'
      ],
      eventInfo:
        '<ul>'+
        '<li>* กิจกรรมสามารถเข้าร่วมได้บัญชีละหนึ่งครั้งเท่านั้น</li>'+
        '<li>* คุณสามารถรับของรางวัลตามคะแนนที่สะสมได้</li>'+
        '<li>* รางวัลกิจกรรมจะถูกส่งให้ทางกล่องจดหมาย</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">รับรางวัล</span>'+
        '<span class="btn_end">รับแล้ว</span>'
    }, langHans = {       // 간체
      questTitle: [
        '累积福袋 <span>50个</span> ',
        '累积福袋 <span>100个</span> ',
        '累积福袋 <span>200个</span> ',
        '累积福袋 <span>300个</span> ',
        '累积福袋 <span>500个</span> ',
        '累积福袋 <span>1,000个</span> ',
        '累积福袋 <span>2,000个</span> ',
        '累积福袋 <span>3,000个</span> ',
        '累积福袋 <span>5,000个</span> ',
        '累积福袋 <span>7,777个</span> '
      ],
      rewardTitle: [
        '能量x50',
        '50,000金币',
        '能量x150',
        '100,000金币',
        '能量x200<br>150,000金币',
        '能量x250<br>[高级]神秘的蛋1个',
        '300,000金币<br>[高级]神秘的蛋1个',
        '能量x300<br>500,000金币<br>[高级]神秘的蛋1个',
        '能量x300<br>700,000金币<br>[高级]光暗之蛋1个',
        '能量x300<br>1,000,000金币<br>[传奇]神秘的蛋1个'
      ],
      eventInfo:
        '<ul>'+
        '<li>* 单一帐号限参与一次。</li>'+
        '<li>* 依照累积的福袋兑换奖励。</li>'+
        '<li>* 活动奖励将发送至收件箱内。</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">领取奖励</span>'+
        '<span class="btn_end">已领取</span>'
  }, langHant = {         // 번체
    questTitle: [
      '累積福袋 <span>50個</span>',
      '累積福袋 <span>100個</span>',
      '累積福袋 <span>200個</span>',
      '累積福袋 <span>300個</span>',
      '累積福袋 <span>500個</span>',
      '累積福袋 <span>1,000個</span>',
      '累積福袋 <span>2,000個</span>',
      '累積福袋 <span>3,000個</span>',
      '累積福袋 <span>5,000個</span>',
      '累積福袋 <span>7,777個</span>'
    ],
    rewardTitle: [
      '能量x50',
      '50,000金幣',
      '能量x150',
      '100,000金幣',
      '能量x200<br>150,000金幣',
      '能量x250<br>[高級]神秘卵1個',
      '300,000金幣<br>[高級]神秘卵1個',
      '能量x300<br>500,000金幣<br>[高級]神秘卵1個',
      '能量x300<br>700,000金幣<br>[高級]光/暗卵1個',
      '能量x300<br>1,000,000金幣<br>[傳說]神秘卵1個'
    ],
    eventInfo:
      '<ul>'+
      '<li>* 單一帳號限參與一次。</li>'+
      '<li>* 依照累積的福袋兌換獎勵。</li>'+
      '<li>* 活動獎勵將發送至收件匣內。</li>'+
      '</ul>',
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
