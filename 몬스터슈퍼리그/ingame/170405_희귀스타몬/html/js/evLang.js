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
        '',
        ''
      ],
      [
        '희귀 스타몬 1회 포획 성공',
        '희귀 스타몬 3회 포획 성공',
        '희귀 스타몬 5회 포획 성공',
        '희귀 스타몬 10회 포획 성공',
        '희귀 스타몬 20회 포획 성공',
        '희귀 스타몬 30회 포획 성공',
        '에너지 1000개 사용',
        '에너지 2000개 사용',
        '에너지 3000개 사용',
        '네즈 10회 찾기',
        '네즈 20회 찾기',
        '네즈 30회 찾기'
      ]
    ],
    rewardTitle: [
      [
        '(상급)빛/어둠의 알 1개',
        '(전설)비밀의 알 1개'
      ],
      [
        '에너지 100개',
        '에너지 150개',
        '에너지 200개',
        '200,000 골드',
        '300,000 골드',
        '(상급) 불꽃의 알 1개<br>(상급) 바다의 알 1개<br>(상급) 초원의 알 1개',
        '스타젬 100개',
        '스타젬 200개',
        '스타젬 300개',
        '(상급)비밀의 알 1개',
        '(상급)비밀의 알 2개',
        '(상급)비밀의 알 3개'
      ]
    ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu">●</span> 계정 당 1회만 참여 가능하며, 보상은 우편함으로 지급됩니다.</li>'+
      '</ul>',
    btnName:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">완료</span>'
  }, langEn = {     // 영어
    questTitle: [
      [
        '',
        ''
      ],
      [
        'Capture Rare Astromon x1',
        'Capture Rare Astromon x3',
        'Capture Rare Astromon x5',
        'Capture Rare Astromon x10',
        'Capture Rare Astromon x20',
        'Capture Rare Astromon x30',
        'Use Energy x1000',
        'Use Energy x2000',
        'Use Energy x3000',
        'Find Nezz x10',
        'Find Nezz x20',
        'Find Nezz x30'
      ]
    ],
    rewardTitle: [
      [
        '(High) Light/Dark Egg x1',
        '(Legendary) Secret Egg x1'
      ],
      [
        'Energy x100',
        'Energy x150',
        'Energy x200',
        '200,000 Gold',
        '300,000 Gold',
        '(High) Fiery Egg x1<br>(High) Ocean Egg x1<br>(High) Grassy Egg x1',
        'Astrogem x100',
        'Astrogem x200',
        'Astrogem x300',
        '(High) Secret Egg x1',
        '(High) Secret Egg x2',
        '(High) Secret Egg x3'
      ]
    ],
    eventInfo:
    '<ul>'+
    '<li><span class="bu">●</span> Event will be paticipable only once per account and rewards will be deliverd through mail box</li>'+
    '</ul>',
    btnName:
    '<span class="btn_normal">Get Reward</span>'+
    '<span class="btn_end">Completed</span>'
    },
    langJa = {        // 일본어
      questTitle: [
        [
          '',
          ''
        ],
        [
          'レアスターモン1回捕獲成功',
          'レアスターモン3回捕獲成功',
          'レアスターモン5回捕獲成功',
          'レアスターモン10回捕獲成功',
          'レアスターモン20回捕獲成功',
          'レアスターモン30回捕獲成功',
          'エネルギーを1000個使う',
          'エネルギーを2000個使う',
          'エネルギーを3000個使う',
          'ネズ10回発見',
          'ネズ20回発見',
          'ネズ30回発見'
        ]
      ],
      rewardTitle: [
        [
          '(上級)光/闇の卵1個',
          '(伝説)秘密の卵1個'
        ],
        [
          'エネルギー100個',
          'エネルギー150個',
          'エネルギー200個',
          '200,000ゴールド',
          '300,000ゴールド',
          '(上級)火の卵1個<br>(上級)海の卵1個<br>(上級)草の卵1個',
          'スタージュエル100個',
          'スタージュエル200個',
          'スタージュエル300個',
          '(上級)秘密の卵1個',
          '(上級)秘密の卵2個',
          '(上級)秘密の卵3個'
        ]
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu">●</span> アカウントごとに1回だけ参加が可能です。報酬は受信箱に届きます。</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">受け取る</span>'+
        '<span class="btn_end">受け取り済み</span>'
    }, langTh = {       // 태국어
      questTitle: [
        [
          '',
          ''
        ],
        [
          'จับแอสโตรมอนหายาก x1',
          'จับแอสโตรมอนหายาก x3',
          'จับแอสโตรมอนหายาก x5',
          'จับแอสโตรมอนหายาก x10',
          'จับแอสโตรมอนหายาก x20',
          'จับแอสโตรมอนหายาก x30',
          'ใช้ 1000 พลังงาน',
          'ใช้ 2000 พลังงาน',
          'ใช้ 3000 พลังงาน',
          'ค้นหาเนซ 10 ครั้ง',
          'ค้นหาเนซ 20 ครั้ง',
          'ค้นหาเนซ 30 ครั้ง'
        ]
      ],
      rewardTitle: [
        [
          '(สูง) ไข่แสงสว่าง/ความมืด 1 ชิ้น',
          '(ตำนาน) ไข่แห่งความลับ 1 ชิ้น'
        ],
        [
          '100 พลังงาน',
          '150 พลังงาน',
          '200 พลังงาน',
          '200,000 ทอง',
          '300,000 ทอง',
          '(สูง) ไข่แห่งเพลิง 1 ชิ้น<br>(สูง) ไข่แห่งมหาสมุทร 1 ชิ้น<br>(สูง) ไข่แห่งพงหญ้า 1 ชิ้น',
          '100 แอสโตรเจม',
          '200 แอสโตรเจม',
          '300 แอสโตรเจม',
          '(สูง) ไข่แห่งความลับ 1 ชิ้น',
          '(สูง) ไข่แห่งความลับ 2 ชิ้น',
          '(สูง) ไข่แห่งความลับ 3 ชิ้น'
        ]
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu">●</span> หนึ่งบัญชีสามารถเข้าร่วมกิจกรรมได้หนึ่งครั้ง และของรางวัลจะถูกส่งทางกล่องจดหมาย</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">รับรางวัล</span>'+
        '<span class="btn_end">รับแล้ว</span>'
    }, langHans = {       // 간체
      questTitle: [
        [
          '',
          ''
        ],
        [
          '捕捉稀有星兽1次',
          '捕捉稀有星兽3次',
          '捕捉稀有星兽5次',
          '捕捉稀有星兽10次',
          '捕捉稀有星兽20次',
          '捕捉稀有星兽30次',
          '使用能量1000次',
          '使用能量2000次',
          '使用能量3000次',
          '寻找奈兹10次',
          '寻找奈兹20次',
          '寻找奈兹30次'
        ]
      ],
      rewardTitle: [
        [
          '(高级)光暗之蛋1个',
          '(传奇)神秘的蛋1个'
        ],
        [
          '能量x100',
          '能量x150',
          '能量x200',
          '200,000金币',
          '300,000金币',
          '(高级)炽热之蛋1个<br>(高级)海蓝之蛋1个<br>(高级)翠绿之蛋1个',
          '星晶石100颗',
          '星晶石200颗',
          '星晶石300颗',
          '(高级)神秘的蛋1个',
          '(高级)神秘的蛋2个',
          '(高级)神秘的蛋3个'
        ]
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu">●</span> 单一帐号仅限参与一次，奖励将发送至收件匣。</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">领取奖励</span>'+
        '<span class="btn_end">已领取</span>'
  }, langHant = {         // 번체
    questTitle: [
      [
        '',
        ''
      ],
      [
        '捕獲稀有星獸1次',
        '捕獲稀有星獸3次',
        '捕獲稀有星獸5次',
        '捕獲稀有星獸10次',
        '捕獲稀有星獸20次',
        '捕獲稀有星獸30次',
        '使用能量1000次',
        '使用能量2000次',
        '使用能量3000次',
        '尋找奈茲10次',
        '尋找奈茲20次',
        '尋找奈茲30次'
      ]
    ],
    rewardTitle: [
      [
        '(高級)光/暗卵1個',
        '(傳說)神秘卵1個'
      ],
      [
        '能量x100',
        '能量x150',
        '能量x200',
        '200,000金幣',
        '300,000金幣',
        '(高級)火焰卵1個<br>(高級)海洋卵1個<br>(高級)草原卵1個',
        '星寶石100顆',
        '星寶石200顆',
        '星寶石300顆',
        '(高級)神秘卵1個',
        '(高級)神秘卵2個',
        '(高級)神秘卵3個'
      ]
    ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu">●</span> 單一帳號僅限參與一次，獎勵將發送至收件匣。</li>'+
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