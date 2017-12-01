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
        ''
      ],
      [
        '입문 마스터<br><span>100P</span>',
        '초보 마스터<br><span>500P</span>',
        '제법 하는 마스터<br><span>1,000P</span>',
        '숙달된 마스터<br><span>2,000P</span>',
        '베테랑 마스터<br><span>3,000P</span>'
      ]
    ],
    rewardTitle:[
      [
        '드래곤스톤 3개',
        '★4~6 보석 상자 1개',
        '(상급) 비밀의 알 1개',
        '300,000 골드',
        '스타젬 30개',
        '에너지 50개',
        '드래곤스톤 3개',
        '스타젬 100개',
        '30,000 골드',
        '(상급) 비밀의 알 1개',
        '★4~6 보석 상자 1개',
        '★6 보석 상자 1개',
        '에너지 50개',
        '30,000 골드',
        '스타젬 30개',
        '에너지 200개'
      ],
      [
        '스타젬 100개',
        '★6 보석 상자 1개',
        '500,000 골드',
        '(상급)빛/어둠의 알 1개',
        '(전설)비밀의 알 1개'
      ]
    ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu"></span>주사위는 보유한 포인트에 한해 제한 없이 교환 가능합니다.</li>'+
      '<li><span class="bu"></span>이벤트 기간에만 포인트를 획득하실 수 있습니다.</li>'+
      '<li><span class="bu"></span>주사위를 굴려 당첨된 보상은 우편함으로 지급됩니다.</li>'+
      '<li><span class="bu"></span>스페셜 상점 1회 소환 미션의 경우 유료/무료 뽑기 진행 모두 포인트 획득이 가능합니다.</li>'+
      '<li><span class="bu"></span><strong>일일 최대 200포인트까지 획득할 수 있으며, 오전 9시에 맞춰 일일 획득 가능 포인트가 초기화됩니다.</strong></li>'+
      '</ul>',
    btnName:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">완료</span>'
  }, langEn = {     // 영어
      questTitle: [
        [
          ''
        ],
        [
          'Novice Master<br><span>100P</span>',
          'Apprentice Master<br><span>500P</span>',
          'Journeyman Master<br><span>1,000P</span>',
          'Adept Master<br><span>2,000P</span>',
          'Veteran Master<br><span>3,000P</span>'
        ]
      ],
      rewardTitle:[
        [
          '3 Dragon Sigils',
          '4-6★ Gem Chest x1',
          '(High) Secret Egg x1',
          '300,000 Gold',
          'Astrogem x30',
          'Energy x50',
          '3 Dragon Sigils',
          'Astrogem x100',
          '30,000 Gold',
          '(High) Secret Egg x1',
          '4-6★ Gem Chest x1',
          '6★ Gem Chest x1',
          'Energy x50',
          '30,000 Gold',
          'Astrogem x30',
          'Energy x200'
        ],
        [
          'Astrogem x100',
          '6★ Gem Chest x1',
          '500,000 Gold',
          '(High) Light/Dark Egg x1',
          '(Legendary) Secret Egg x1'
        ]
      ],
    eventInfo:
    '<ul>'+
    '<li><span class="bu"></span>Points can be used to roll dice without limits.</li>'+
    '<li><span class="bu"></span>You can obtain points only during the event period.</li>'+
    '<li><span class="bu"></span>Rewards will be sent to your Inbox.</li>'+
    '<li><span class="bu"></span>Points can be obtained from both Free/Paid Summon for Mission: Summon Special Shop 1 time.</li>'+
    '<li><span class="bu"></span><strong>Maximum of 200 Points can be obtained daily, and daily point limit will reset at 00:00 (midnight).</strong></li>'+
    '</ul>',
    btnName:
    '<span class="btn_normal">Get Reward</span>'+
    '<span class="btn_end">Completed</span>'
    },
    langJa = {        // 일본어
      questTitle: [
        [
          ''
        ],
        [
          '入門マスター<br><span>100P</span>',
          '初級マスター<br><span>500P</span>',
          '中級マスター<br><span>1,000P</span>',
          '上級マスター<br><span>2,000P</span>',
          'ベテランマスター<br><span>3,000P</span>'
        ]
      ],
      rewardTitle: [
        [
          'ドラゴンストーン3個',
          '★4～6ジュエルの箱',
          '(上級)秘密の卵1個',
          '300,000ゴールド',
          'スタージュエル30個',
          'エネルギー50個',
          'ドラゴンストーン3個',
          'スタージュエル100個',
          '30,000ゴールド',
          '(上級)秘密の卵1個',
          '★4～6ジュエルの箱',
          '★6ジュエルの箱',
          'エネルギー50個',
          '30,000ゴールド',
          'スタージュエル30個',
          'エネルギー200個'
        ],
        [
          'スタージュエル100個',
          '★6ジュエルの箱',
          '500,000ゴールド',
          '(上級)光/闇の卵1個',
          '(伝説)秘密の卵1個'
        ]
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>サイコロはポイントがあれば制限なく交換可能です。</li>'+
        '<li><span class="bu"></span>イベント期間のみ、ポイントの獲得ができます。</li>'+
        '<li><span class="bu"></span>サイコロを振って、当たった報酬は受信箱に支給されます。</li>'+
        '<li><span class="bu"></span>スペシャルショップ1回召喚ミッションの場合、有料/無料ガチャ共にポイントの獲得ができます。</li>'+
        '<li><span class="bu"></span><strong></strong>一日最大200ポイントまで獲得できます。午前9時に一日獲得可能ポイントが初期化されます。</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">受け取る</span>'+
        '<span class="btn_end">受取済み</span>'
    }, langTh = {       // 태국어
      questTitle: [
        [
          ''
        ],
        [
          'มาสเตอร์ขั้นต้น<br><span>100P</span>',
          'มาสเตอร์ขั้นกลาง<br><span>500P</span>',
          'มาสเตอร์ขั้นสูง<br><span>1,000P</span>',
          'มาสเตอร์ผู้เชี่ยวชาญ<br><span>2,000P</span>',
          'มาสเตอร์ผู้เชี่ยวชาญพิเศษ<br><span>3,000P</span>'
        ]
      ],
      rewardTitle: [
        [
          'เครื่องหมายมังกร 3 ชิ้น',
          'หีบอัญมณี 4-6★ 1 หีบ',
          '(สูง) ไข่แห่งความลับ 1 ชิ้น',
          '300,000 ทอง',
          '30 แอสโตรเจม',
          '50 พลังงาน',
          'เครื่องหมายมังกร 3 ชิ้น',
          '100 แอสโตรเจม',
          '30,000 ทอง',
          '(สูง) ไข่แห่งความลับ 1 ชิ้น',
          'หีบอัญมณี 4-6★ 1 หีบ',
          'หีบอัญมณี 6★ 1 หีบ',
          '50 พลังงาน',
          '30,000 ทอง',
          '30 แอสโตรเจม',
          '200 พลังงาน'
        ],
        [
          '100 แอสโตรเจม',
          'หีบอัญมณี 6★ 1 หีบ',
          '500,000 ทอง',
          '(สูง) ไข่แสงสว่าง/ความมืด 1 ชิ้น',
          '(ตำนาน) ไข่แห่งความลับ 1 ชิ้น'
        ]
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>สามารถใช้เหรียญที่มีเปลี่ยนลูกเต๋าได้ไม่จำกัดจำนวนครั้ง.</li>'+
        '<li><span class="bu"></span>สามารถรับเหรียญได้เฉพาะช่วงเวลากิจกรรมเท่านั้น.</li>'+
        '<li><span class="bu"></span>รางวัลที่ได้จากการทอยลูกเต่าจะถูกจัดส่งไว้ในกล่องจดหมาย.</li>'+
        '<li><span class="bu"></span>ในการทำภารกิจทำการเรียกร้านค้าพิเศษ 1 ครั้งทั้งการเสียเงินและฟรี สามารถรับเหรียญได้ทั้งคู่.</li>'+
        '<li><span class="bu"></span><strong>สามารถรับเหรียญได้สูงสุด 200 เหรียญต่อวัน และจะเริ่มต้นนับใหม่เวลา 07:00 น.</strong></li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">รับรางวัล</span>'+
        '<span class="btn_end">รับแล้ว</span>'
    }, langHans = {       // 간체
      questTitle: [
        [
          ''
        ],
        [
          '初学者星兽师<br><span>100P</span>',
          '新手星兽师<br><span>500P</span>',
          '两把刷星兽师<br><span>1,000P</span>',
          '老手星兽师<br><span>2,000P</span>',
          '精通星兽师<br><span>3,000P</span>'
        ]
      ],
      rewardTitle: [
        [
          '巨龙印记3个',
          '4-6★宝石箱1个',
          '(高级)神秘的蛋1个',
          '300,000金币',
          '星晶石30颗',
          '能量x50',
          '巨龙印记3个',
          '星晶石100颗',
          '30,000金币',
          '(高级)神秘的蛋1个',
          '4-6★宝石箱1个',
          '6 ★宝石箱1个',
          '能量x50',
          '30,000金币',
          '星晶石30颗',
          '能量x200'
        ],
        [
          '星晶石100颗',
          '6★宝石箱1个',
          '500,000金币',
          '(高级)光/暗之蛋1个',
          '(传奇)神秘的蛋1个'
        ]
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>在已有的积分范围内，可无限次的交换骰子。</li>'+
        '<li><span class="bu"></span>只有在活动期间可获得积分。</li>'+
        '<li><span class="bu"></span>经由投掷骰子中奖的奖励会发送至收件箱。</li>'+
        '<li><span class="bu"></span>进行特殊商店召唤1次任务情况的话，进行付费/免费抽取都可以获得积分。</li>'+
        '<li><span class="bu"></span><strong>每日最多可获得200积分，并按照上午8点会将每日可获得积分重置。</strong></li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">领取奖励</span>'+
        '<span class="btn_end">已领取</span>'
  }, langHant = {         // 번체
      questTitle: [
        [
          ''
        ],
        [
          '初學者星獸使<br><span>100P</span>',
          '新手星獸使<br><span>500P</span>',
          '兩把刷星獸使<br><span>1,000P</span>',
          '老手星獸使<br><span>2,000P</span>',
          '精通星獸使<br><span>3,000P</span>'
        ]
      ],
      rewardTitle: [
        [
          '龍石3個',
          '4-6★寶石箱1個',
          '(高級)神秘卵1個',
          '300,000金幣',
          '星寶石30顆',
          '能量x50',
          '龍石3個',
          '星寶石100顆',
          '30,000金幣',
          '(高級)神秘卵1個',
          '4-6★寶石箱1個',
          '6★寶石箱1個',
          '能量x50',
          '30,000金幣',
          '星寶石30顆',
          '能量x200'
        ],
        [
          '星寶石100顆',
          '6★寶石箱1個',
          '500,000金幣',
          '(高級)光/暗卵1個',
          '(傳說)神秘卵1個'
        ]
      ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu"></span>在保有的點數範圍內，可無限次的交換骰子。</li>'+
      '<li><span class="bu"></span>只有在活動期間可獲得點數。</li>'+
      '<li><span class="bu"></span>經由投擲骰子中獎的獎勵會發送至收件匣。</li>'+
      '<li><span class="bu"></span>進行特殊商店召喚1次任務情況的話，進行付費/免費抽取都可以獲得點數。</li>'+
      '<li><span class="bu"></span><strong>每日最多可獲得200點數，並按照上午8點鐘會將每日可獲得點數重置。</strong></li>'+
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