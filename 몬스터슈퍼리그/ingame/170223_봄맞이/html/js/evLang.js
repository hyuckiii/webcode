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
      [
        '미션 50% 완료',
        '미션 100% 완료'
      ],
      [
        '에너지<br><span>300개</span> 사용',
        '에너지<br><span>1000개</span> 사용',
        '에너지<br><span>1500개</span> 사용',
        '에너지<br><span>2000개</span> 사용',
        '환생<br><span>5회</span> 진행',
        '환생<br><span>10회</span> 진행',
        '환생<br><span>20회</span> 진행',
        '환생<br><span>30회</span> 진행',
        '골렘던전<br><span>10회</span> 진행',
        '골렘던전<br><span>30회</span> 진행',
        '골렘던전<br><span>100회</span> 진행',
        '골렘던전<br><span>200회</span> 진행',
        '클랜전투<br><span>6회</span> 참여',
        '클랜전투<br><span>20회</span> 참여',
        '클랜전투<br><span>40회</span> 참여',
        '클랜전투<br><span>60회</span> 참여'
      ]
    ],
    rewardTitle: [
      [
        '[빛] 슈가 1개',
        '[전설] 비밀의 알 1개'
      ],
      [
        '30,000 골드',
        '50,000 골드',
        '70,000 골드',
        '100,000 골드',
        '에너지 30개',
        '에너지 50개',
        '에너지 100개',
        '에너지 150개',
        '스타잼 100개',
        '(상급) 비밀의 알 1개',
        '(물) 슈가 1개',
        '(상급) 빛어둠의 알 1개',
        '30,000 골드',
        '50,000 골드',
        '100,000 골드',
        '200,000 골드'
      ]
    ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu"></span>상품수령기간 : 3월 10일 (금) 09:00 ~ 4월 5일 (수) 08:59</li>'+
      '<li><span class="bu"></span>모든 선물을 최초 1회에 한하여 지급됩니다.</li>'+
      '<li><span class="bu"></span>선물을 게임 내 우편함으로 지급되며, 우편함을 통해 확인 부탁 드립니다.</li>'+
      '</ul>',
    btnName:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">완료</span>'
  }, langEn = {     // 영어
    questTitle: [
      [
        'Mission 50% Complete',
        'Mission 100% Complete'
      ],
      [
        'Use <span>300</span> Energy',
        'Use <span>1000</span> Energy',
        'Use <span>1500</span> Energy',
        'Use <span>2000</span> Energy',
        'Perform Rebirth <span>5</span> times',
        'Perform Rebirth <span>10</span> times',
        'Perform Rebirth <span>20</span> times',
        'Perform Rebirth <span>30</span> times',
        'Enter Golem Dungeon <span>10</span> times',
        'Enter Golem Dungeon <span>30</span> times',
        'Enter Golem Dungeon <span>100</span> times',
        'Enter Golem Dungeon <span>200</span> times',
        'Join Clan Battles <span>6</span> times',
        'Join Clan Battles <span>20</span> times',
        'Join Clan Battles <span>40</span> times',
        'Join Clan Battles <span>60</span> times'
      ]
    ],
    rewardTitle: [
      [
        '1 [Light] Bon',
        '1 [Legendary] Secret Egg'
      ],
      [
        '30,000 Gold',
        '50,000 Gold',
        '70,000 Gold',
        '100,000 Gold',
        '30 Energy',
        '50 Energy',
        '100 Energy',
        '150 Energy',
        '100 Astrogems',
        '1 [High] Secret Egg',
        '1 [Water] Bon',
        '1 [High] Light/Dark Egg',
        '30,000 Gold',
        '50,000 Gold',
        '100,000 Gold',
        '200,000 Gold'
      ]
    ],
    eventInfo:
    '<ul>'+
    '<li><span class="bu"></span>Gift Claim Duration: Mar. 10th 00:00 ~ Apr. 4th  23:59(UTC+0)</li>'+
    '<li><span class="bu"></span>All Gifts are awarded once only.</li>'+
    '<li><span class="bu"></span>Gifts are sent to your Inbox, please check your Inbox.</li>'+
    '</ul>',
    btnName:
    '<span class="btn_normal">Get Reward</span>'+
    '<span class="btn_end">Completed</span>'
    },
    langJa = {        // 일본어
      questTitle: [
        [
          'ミッション50%完了',
          'ミッション100%完了'
        ],
        [
          '<span>300</span>エネルギー使う',
          '<span>1,000</span>エネルギー使う',
          '<span>1,500</span>エネルギー使う',
          '<span>2,000</span>エネルギー使う',
          '再召喚<span>5</span>回行う',
          '再召喚<span>10</span>回行う',
          '再召喚<span>20</span>回行う',
          '再召喚<span>30</span>回行う',
          'ゴーレムダンジョンで<span>10</span>回プレイ',
          'ゴーレムダンジョンで<span>30</span>回プレイ',
          'ゴーレムダンジョンで<span>100</span>回プレイ',
          'ゴーレムダンジョンで<span>200</span>回プレイ',
          'クランバトル<span>6</span>回参加',
          'クランバトル<span>20</span>回参加',
          'クランバトル<span>40</span>回参加',
          'クランバトル<span>60</span>回参加'
        ]
      ],
      rewardTitle: [
        [
          '[光] ボン1個',
          '[伝説］秘密の卵1個'
        ],
        [
          '30,000ゴールド',
          '50,000ゴールド',
          '70,000ゴールド',
          '100,000ゴールド',
          'エネルギー30個',
          'エネルギー50個',
          'エネルギー100個',
          'エネルギー150個',
          'スタージュエル100個',
          '[上級]秘密の卵1個',
          '[水] ボン1個',
          '[上級]光/闇の卵1個',
          '30,000ゴールド',
          '50,000ゴールド',
          '100,000ゴールド',
          '200,000ゴールド'
        ]
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>商品受領期間：3月10日 09:00～4月5日 08:59</li>'+
        '<li><span class="bu"></span>すべてのギフトは最初の1回のみ獲得できます。</li>'+
        '<li><span class="bu"></span>ギフトはゲーム内の受信箱に支給されます。受信箱を確認してください。</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">受け取る</span>'+
        '<span class="btn_end">受け取り済み</span>'
    }, langTh = {       // 태국어
      questTitle: [
        [
          'สำเร็จมิชชั่น 50%',
          'สำเร็จมิชชั่น 100%'
        ],
        [
          'ใช้พลังงาน <span>300</span> หน่วย',
          'ใช้พลังงาน <span>1,000</span> หน่วย',
          'ใช้พลังงาน <span>1,500</span> หน่วย',
          'ใช้พลังงาน <span>2,000</span> หน่วย',
          'กำเนิดใหม่ <span>5</span> ครั้ง',
          'กำเนิดใหม่ <span>10</span> ครั้ง',
          'กำเนิดใหม่ <span>20</span> ครั้ง',
          'กำเนิดใหม่ <span>30</span> ครั้ง',
          'เข้าร่วมดันเจี้ยนโกเล็ม <span>10</span> ครั้ง',
          'เข้าร่วมดันเจี้ยนโกเล็ม <span>30</span> ครั้ง',
          'เข้าร่วมดันเจี้ยนโกเล็ม <span>100</span> ครั้ง',
          'เข้าร่วมดันเจี้ยนโกเล็ม <span>200</span> ครั้ง',
          'เข้าร่วมต่อสู้แบบกลุ่ม <span>6</span> ครั้ง',
          'เข้าร่วมต่อสู้แบบกลุ่ม <span>20</span> ครั้ง',
          'เข้าร่วมต่อสู้แบบกลุ่ม <span>40</span> ครั้ง',
          'เข้าร่วมต่อสู้แบบกลุ่ม <span>60</span> ครั้ง'
        ]
      ],
      rewardTitle: [
        [
          '[แสงสว่าง]บอน  1 ใบ',
          '[ระดับตำนาน] ไข่แห่งความลับ 1 ใบ'
        ],
        [
          '30,000 ทอง',
          '50,000 ทอง',
          '70,000 ทอง',
          '100,000 ทอง',
          'พลังงาน 30 หน่วย',
          'พลังงาน 50 หน่วย',
          'พลังงาน 100 หน่วย',
          'พลังงาน 150 หน่วย',
          'แอสโตรเจม 100 หน่วย',
          '[สูง] ไข่แห่งความลับ 1 ใบ',
          '[น้ำ]บอน  1 ใบ',
          '[สูง] ไข่แห่งแสงสว่าง/ความมืด 1 ใบ',
          '30,000 ทอง',
          '50,000 ทอง',
          '100,000 ทอง',
          '200,000 ทอง'
        ]
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>เวลารับรางวัล: เวลากิจกรรม: 10 มี.ค. 07:00น. ~ 5 เม.ย. 06:59น</li>'+
        '<li><span class="bu"></span>รางวัลทั้งหมดจะจ่ายครั้งแรกเพียงครั้งเดียวเท่านั้น</li>'+
        '<li><span class="bu"></span>รางวัลจะส่งไปยังกล่องข้อความในเกม กรุณาตรวจสอบผ่านทางกล่องข้อความ</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">รับรางวัล</span>'+
        '<span class="btn_end">รับแล้ว</span>'
    }, langHans = {       // 간체
      questTitle: [
        [
          '任务50%完成',
          '任务100%完成'
        ],
        [
          '使用<span>300</span>能量',
          '使用<span>1,000</span>能量',
          '使用<span>1,500</span>能量',
          '使用<span>2,000</span>能量',
          '进行重生<span>5</span>次',
          '进行重生<span>10</span>次',
          '进行重生<span>20</span>次',
          '进行重生<span>30</span>次',
          '进行魔像副本<span>10</span>次',
          '进行魔像副本<span>30</span>次',
          '进行魔像副本<span>100</span>次',
          '进行魔像副本<span>200</span>次',
          '参加<span>6</span>次帮会战',
          '参加<span>20</span>次帮会战',
          '参加<span>40</span>次帮会战',
          '参加<span>60</span>次帮会战'
        ]
      ],
      rewardTitle: [
        [
          '[光] 糖果子1个',
          '[传奇]神秘之蛋1个'
        ],
        [
          '30,000金币',
          '50,000金币',
          '70,000金币',
          '100,000金币',
          '能量30',
          '能量50',
          '能量100',
          '能量150',
          '星晶石100个',
          '[高级]神秘的蛋1个',
          '[水] 糖果子1个',
          '[高级]光暗之蛋1个',
          '30,000金币',
          '50,000金币',
          '100,000金币',
          '200,000金币'
        ]
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>礼包领取期间：3月10日 08:00～4月5日 07:59</li>'+
        '<li><span class="bu"></span>最初第1次可获得所有礼物。</li>'+
        '<li><span class="bu"></span>礼物将发送至我的邮箱，请在邮箱里确认。</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">领取奖励</span>'+
        '<span class="btn_end">已领取</span>'
  }, langHant = {         // 번체
    questTitle: [
      [
        '任務50%完成',
        '任務100%完成'
      ],
      [
        '使用<span>300</span>能量',
        '使用<span>1,000</span>能量',
        '使用<span>1,500</span>能量',
        '使用<span>2,000</span>能量',
        '進行重生<span>5</span>次',
        '進行重生<span>10</span>次',
        '進行重生<span>20</span>次',
        '進行重生<span>30</span>次',
        '進行魔偶地城<span>10</span>次',
        '進行魔偶地城<span>30</span>次',
        '進行魔偶地城<span>100</span>次',
        '進行魔偶地城<span>200</span>次',
        '參加<span>6</span>次家族戰鬥',
        '參加<span>20</span>次家族戰鬥',
        '參加<span>40</span>次家族戰鬥',
        '參加<span>60</span>次家族戰鬥'
      ]
    ],
    rewardTitle: [
      [
        '[光] 糖糖1個',
        '[傳說] 神秘卵1個'
      ],
      [
        '30,000金幣',
        '50,000金幣',
        '70,000金幣',
        '100,000金幣',
        '能量30',
        '能量50',
        '能量100',
        '能量150',
        '星寶石100個',
        '[高級]神秘卵1個',
        '[水] 糖糖1個',
        '[高級]光/暗卵1個',
        '30,000金幣',
        '50,000金幣',
        '100,000金幣',
        '200,000金幣'
      ]
    ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu"></span>禮包領取期間： 3月10日 08:00～4月5日 07:59</li>'+
      '<li><span class="bu"></span>只於最初第1次可獲得所有禮物。</li>'+
      '<li><span class="bu"></span>禮物將發送至我的收件匣，請經由收件匣確認吧。</li>'+
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