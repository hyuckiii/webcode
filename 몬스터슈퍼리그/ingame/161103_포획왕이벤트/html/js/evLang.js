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
      '포획 300회 진행',
      '포획 200회 성공',
      '희귀 스타몬 포획<br> 10회 성공',
      '초희귀 스타몬 포획<br> 5회 성공',
      '전설 스타몬 포획<br> 1회 성공',
      '스타몬 각성<br> 50회 진행',
      '스타몬 진화<br> 20회 진행',
      '스타몬 초월<br> 10회 진행',
      '스타몬 과일<br> 500회 사용',
      '모든 미션 클리어'
    ],
    rewardTitle: [
      '스타젬 100개',
      '스타젬 100개',
      '스타젬 150개',
      '스타젬 150개',
      '[상급] 빛/어둠의 알 1개',
      '에너지 200개',
      '100,000 골드',
      '[상급] 별의 초월석 10개',
      '[중급] 별의 과일 5개',
      '[전설] 비밀의 알 1개'
    ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu">● </span>스타몬 각성 미션의 경우 각성 재료 개수로 진행 횟수가 추가 됩니다. </li>'+
      '<li><span class="bu">● </span>모든 선물은 최초 1회에 한하여 지급됩니다.</li>'+
      '<li><span class="bu">● </span>선물은 게임 내 우편함으로 지급되며, 우편함을 통해 확인 부탁 드립니다.</li>'+
      '</ul>',
    btnName:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">완료</span>'
  }, langEn = {     // 영어
    questTitle: [
      'Use 300 Astrochips',
      'Catch 200 Astromons',
      'Catch 10 Rare Astromons',
      'Catch 5 S.Rare Astromons',
      'Catch a Legendary Astromon',
      'Awaken Astromon 50 times',
      'Evolve Astromon 20 times',
      'Ascend Astromon 10 times',
      'Feed Astromon 500 Fruits',
      'Clear all Missions'
    ],
    rewardTitle: [
      'Astrogem x100',
      'Astrogem x100',
      'Astrogem x150',
      'Astrogem x150',
      '[High] Light/Dark Egg x1',
      'Energy x 200',
      '100,000 Gold',
      '[High] Starstone x10',
      '[Mid] Star Fruit x5',
      '[Legendary] Secret Egg x1'
    ],
    eventInfo:
    '<ul>'+
    '<li><span class="bu">● </span>Number of Astromons used for Awakening will be counted as number of mission cleared.</li>'+
    '<li><span class="bu">● </span>Rewards can be claimed only once per each mission.</li>'+
    '<li><span class="bu">● </span>Received gifts will be sent to your inbox.</li>'+
    '</ul>',
    btnName:
    '<span class="btn_normal">Get Reward</span>'+
    '<span class="btn_end">Completed</span>'
    },
    langJa = {        // 일본어
      questTitle: [
        '捕獲を300回行う',
        '捕獲に200回成功する',
        'レアスターモンの 捕獲に10回成功する',
        'Sレアスターモンの 捕獲に5回成功する',
        '伝説スターモンの 捕獲に1回成功する',
        'スターモンの覚醒を 50回行う',
        'スターモンの進化を20回行う',
        'スターモンの昇級を10回行う',
        'スターモンにフルーツを 500回食べさせる',
        'ミッションをすべてクリアする'
      ],
      rewardTitle: [
        'スタージュエル100個',
        'スタージュエル100個',
        'スタージュエル150個',
        'スタージュエル150個',
        '[上級]光/闇の卵1個',
        'エネルギー200個',
        '100,000ゴールド',
        '[上級]スターストーン 10個',
        '[中級]スターフルーツ 5個',
        '[伝説]秘密の卵1個'
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu">● </span>スターモン覚醒ミッションは覚醒素材の個数が覚醒回数になります</li>'+
        '<li><span class="bu">● </span>ボーナスアイテムはすべて初回1回のみ受け取ることができます</li>'+
        '<li><span class="bu">● </span>ボーナスアイテムはゲーム内の受信箱に届きます。受信箱を確認してください</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">受け取る</span>'+
        '<span class="btn_end">受取済み</span>'
    }, langTh = {       // 태국어
      questTitle: [
        'จับแอสโตรมอน 300 ครั้ง',
        'จับแอสโตรมอนสำเร็จ 300 ครั้ง',
        'จับแอสโตรมอนหายากสำเร็จ 10 ครั้ง',
        'จับแอสโตรมอนหายากมากสำเร็จ 5 ครั้ง',
        'จับมอนสเตอร์ในตำนาน<br>สำเร็จ 1ครั้ง',
        'ปลุกพลัง<br>50ครั้ง',
        'วิวัฒนาการ<br>20ครั้ง',
        'ข้ามขีดกำจัด<br>10ครั้ง',
        'ป้อนผลไม้ 500 ครั้ง',
        'เคลียร์ภารกิจทั้งหมด'
      ],
      rewardTitle: [
        'แอสโตรเจม 100 ชิ้น',
        'แอสโตรเจม 100 ชิ้น',
        'แอสโตรเจม 150 ชิ้น',
        'แอสโตรเจม 150 ชิ้น',
        '[สูง] ไข่แห่งแสงสว่าง/ความมืด 1 ชิ้น',
        'พลังงาน 200 ชิ้น',
        '100,000 ทอง',
        '[สูง] ศิลาดวงดาว 10 ชิ้น',
        '[ปานกลาง] ผลไม้แห่งดวงดาว 5 ชิ้น',
        '[ตำนาน] ไข่แห่งความลับ 1 ชิ้น'
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu">● </span>ภารกิจปลุกพลังแอสโตรมอน สามารถปลุกพลังด้วยวัตถุดิบหลายตัวในครั้งเดียวได้ เควสจะนับให้อัตโนมัติ</li>'+
        '<li><span class="bu">● </span>ของรางวัลจะสามารถรับได้แค่ครั้งเดียวเท่านั้น</li>'+
        '<li><span class="bu">● </span>ของรางวัลจะถูกส่งไปทางกล่องจดหมาย กรุณาตรวจสอบของรางวัลในกล่องจดหมาย</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">รับรางวัล</span>'+
        '<span class="btn_end">รับแล้ว</span>'
    }, langHans = {       // 간체
      questTitle: [
        '进行捕捉300次',
        '成功捕获200次',
        '成功捕获稀有星兽10次',
        '成功捕获超稀有星兽5次',
        '成功捕获传说星兽1次',
        '进行星兽觉醒50次',
        '进行星兽进化20次',
        '进行星兽晋升10次',
        '使用星兽水果500次',
        '达成所有任务'
      ],
      rewardTitle: [
        '星晶石100颗',
        '星晶石100颗',
        '星晶石150颗',
        '星晶石150颗',
        '[高级]光暗之蛋1个',
        '能量x200',
        '100,000金币',
        '[高级]星石10颗',
        '[中级]星之果5个',
        '[传说]神秘的蛋1个'
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu">● </span>依照作为材料的星兽数量来计算觉醒次数。</li>'+
        '<li><span class="bu">● </span>所有奖励限领取一次。</li>'+
        '<li><span class="bu">● </span>奖励将寄至收件匣内，请至收件匣确认。</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">领取奖励</span>'+
        '<span class="btn_end">已领取</span>'
  }, langHant = {         // 번체
    questTitle: [
      '進行捕捉300次',
      '成功捕獲200次',
      '成功捕獲稀有星獸10次',
      '成功補獲超稀有星獸5次',
      '成功捕獲傳說星獸1次',
      '進行星獸覺醒50次',
      '進行星獸進化20次',
      '進行星獸升階10次',
      '使用星獸果實500次',
      '達成所有任務'
    ],
    rewardTitle: [
      '星寶石100顆',
      '星寶石100顆',
      '星寶石150顆',
      '星寶石150顆',
      '[高級]光/暗卵1個',
      '能量x200',
      '100,000金幣',
      '[高級]星石10顆',
      '[中級]星果5個',
      '[傳說]神秘卵1個'
    ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu">● </span>依照作為素材的星獸數量來計算覺醒次數。</li>'+
      '<li><span class="bu">● </span>所有獎勵限領取一次。</li>'+
      '<li><span class="bu">● </span>獎勵將寄至收件匣內，請至收件匣確認。</li>'+
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