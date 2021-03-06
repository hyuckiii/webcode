/****************************************
  * monsterSuperLeague eventLanguageSet - ui.js *
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
      [ '' ],
      [
        '행운 한줌<br><span>100P</span>',
        '행운 주머니<br><span>500P</span>',
        '행운 보따리<br><span>1000P</span>',
        '행운 상자<br><span>2000P</span>',
        '세상 행운 가득<br><span>3000P</span>'
      ]
    ],
    rewardTitle:[
      [
        '(상급)<br>별의 초월석 5개 ',
        '★4~6<br>보석 상자 1개',
        '(상급)<br>비밀의 알 1개',
        '100,000 골드',
        '스타젬 30개',
        '에너지 50개',
        '(상급)<br>별의 초월석 5개',
        '스타젬 100개',
        '10,000 골드',
        '(상급)<br>비밀의 알 1개',
        '★4~6<br>보석 상자 1개',
        '★6<br>보석 상자 1개',
        '에너지 50개',
        '20,000 골드',
        '스타젬 30개',
        '에너지 100개'
      ],
      [
        '(상급)<br>비밀의 알 1개 ',
        '(상급)<br>비밀의 알 3개 ',
        '(상급)<br>초원/바다/불꽃의 알<br>각 2개씩 총 6개',
        '(상급)<br>빛어둠의 알 1개',
        '(전설)<br>비밀의 알 1개'
      ]
    ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu"></span>주사위는 보유한 포인트에 한해 제한 없이 교환 가능합니다. </li>'+
      '<li><span class="bu"></span>이벤트 기간에만 포인트를 획득하실 수 있습니다.</li>'+
      '<li><span class="bu"></span>주사위를 굴려 당첨된 보상은 우편함으로 지급됩니다.</li>'+
      '<li><span class="bu"></span><strong>일일 최대 200포인트까지 획득할 수 있으며, 오전 9시에 맞춰 일일 획득 가능 포인트가 초기화됩니다.</strong></li>'+
      '</ul>',
    btnName:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">완료</span>'
  },
  langEn = {     // 영어
      questTitle: [
        [
          ''
        ],
        [
          'Pile of Fortune<br>Use <span>100P</span>',
          'Pouch of Fortune<br>Use <span>500P</span>',
          'Sack of Fortune<br>Use <span>1000P</span>',
          'Box of Fortune<br>Use <span>2000P</span>',
          'World of Fortune<br>Use <span>3000P</span>'
        ]
      ],
      rewardTitle:[
        [
          '(High)<br>Starstone x5',
          '★4-6<br>Gem Chest x1',
          '(High)★Secret Egg x1',
          '100,000 Gold',
          'Astrogem x30',
          'Energy x50',
          '(High)<br>Starstone x5',
          'Astrogem x100',
          '10,000 Gold',
          '(High) Secret Egg x1',
          '★4-6<br>Gem Chest x1',
          '★6<br>Gem Chest x1',
          'Energy x50',
          '20,000 Gold',
          'Astrogem x30',
          'Energy x100'
        ],
        [
          '(High)<br> Secret Egg x1',
          '(High)<br> Secret Egg x3',
          '(High)<br>Fiery Egg x2<br>Ocean Egg x2<br>Grassy Egg x2',
          '(High)<br> Light/Dark Egg x1',
          '(Legendary)<br>Secret Egg x1'
        ]
      ],
    eventInfo:
    '<ul>'+
    '<li><span class="bu"></span>Points can be used to roll dice without limits.</li>'+
    '<li><span class="bu"></span>You can obtain points only during the event period.</li>'+
    '<li><span class="bu"></span>Rewards will be sent to your Inbox.</li>'+
    '<li><span class="bu"></span><strong>Maximum of 200 Points can be obtained daily, and daily point limit will reset at 00:00 (midnight).</strong></li>'+
    '</ul>',
    btnName:
    '<span class="btn_normal">Get Reward</span>'+
    '<span class="btn_end">Completed</span>'
    }, langJa = {        // 일본어
      questTitle: [
        [
          ''
        ],
        [
          '一握りの幸運<br><span>100</span>ポイント使用',
          '幸運の小袋<br><span>500</span>ポイント使用',
          '幸運の大袋<br><span>1,000</span>ポイント使用',
          '幸運の箱<br><span>2,000</span>ポイント使用',
          '<em>世の中に幸運がいっぱい</em><br><span>3,000</span>ポイント使用'
        ]
      ],
      rewardTitle: [
        [
          '(上級)<br>スターストーン5個',
          '★4～6<br>ジュエルの箱',
          '(上級)<br>秘密の卵1個',
          '100,000ゴールド',
          'スタージュエル<br>30個',
          'エネルギー50個',
          '(上級)<br>スターストーン5個',
          'スタージュエル100個',
          '10,000ゴールド',
          '(上級)<br>秘密の卵1個',
          '★4～6<br>ジュエルの箱',
          '★6<br>ジュエルの箱',
          'エネルギー50個',
          '20,000ゴールド',
          'スタージュエル30個',
          'エネルギー100個'
        ],
        [
          '(上級)<br>秘密の卵1個',
          '(上級)<br>秘密の卵3個',
          '(上級)<br>草の卵2個<br>海の卵2個<br>火の卵2個',
          '(上級)<br>光/闇の卵1個',
          '(伝説)<br>秘密の卵1個'
        ]
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>サイコロはポイントがあれば制限なく交換可能です。</li>'+
        '<li><span class="bu"></span>イベント期間のみ、ポイントの獲得ができます。</li>'+
        '<li><span class="bu"></span>サイコロを振って、当たった報酬は受信箱に支給されます。</li>'+
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
          'กองแห่งโชคชะตา<br>ใช้ <span>100</span> เหรียญ',
          'ห่อแห่งโชคชะตา<br>ใช้ <span>500</span> เหรียญ',
          'ถุงแห่งโชคชะตา<br>ใช้ <span>1,000</span> เหรียญ',
          'หีบแห่งโชคชะตา<br>ใช้ <span>2,000</span> เหรียญ',
          'โลกแห่งโชคชะตา<br>ใช้ <span>3,000</span> เหรียญ'
        ]
      ],
      rewardTitle: [
        [
          '(สูง)<br>ศิลาดวงดาว 5 ชิ้น',
          'หีบอัญมณี<br>4-6★ 1 หีบ',
          '(สูง)<br>ไข่แห่งความลับ1ชิ้น',
          '100,000 ทอง',
          '30 แอสโตรเจม',
          '50 พลังงาน',
          '(สูง)<br>ศิลาดวงดาว 5 ชิ้น',
          '100 แอสโตรเจม',
          '10,000 ทอง',
          '(สูง)<br>ไข่แห่งความลับ1ชิ้น',
          'หีบอัญมณี<br>4-6★ 1 หีบ',
          'หีบอัญมณี<br>6★ 1 หีบ',
          '50 พลังงาน',
          '20,000 ทอง',
          '30 แอสโตรเจม',
          '100 พลังงาน'
        ],
        [
          '(สูง)<br>ไข่แห่งความลับ 1 ชิ้น',
          '(สูง)<br>ไข่แห่งความลับ 3 ชิ้น',
          '(สูง)<br>ไข่แห่งเพลิง 2 ชิ้น<br>ไข่แห่งมหาสมุทร 2 ชิ้น<br>ไข่แห่งพงหญ้า 2 ชิ้น',
          '(สูง)<br>ไข่แสงสว่าง/<br>ความมืด 1 ชิ้น',
          '(ตำนาน)<br>ไข่แห่งความลับ 1 ชิ้น'
        ]
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>สามารถใช้เหรียญที่มีทอยลูกเต๋าได้ไม่จำกัดจำนวนครั้ง</li>'+
        '<li><span class="bu"></span>สามารถรับเหรียญได้เฉพาะช่วงเวลากิจกรรมเท่านั้น</li>'+
        '<li><span class="bu"></span>รางวัลที่ได้จากการทอยลูกเต่าจะถูกส่งไปยังกล่องจดหมาย</li>'+
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
          '幸运的一把<br>使用<span>100</span>积分',
          '幸运的口袋<br>使用<span>500</span>积分',
          '幸运包<br>使用<span>1,000</span>积分',
          '幸运箱<br>使用<span>2,000</span>积分',
          '世上幸运满满<br>使用<span>3,000</span>积分'
        ]
      ],
      rewardTitle: [
        [
          '(高级)<br>星石5颗',
          '★4-6<br>宝石箱1个',
          '(高级)<br>神秘的蛋1个',
          '100,000金币',
          '星晶石30颗',
          '能量x50',
          '(高级)<br>星石5颗',
          '星晶石100颗',
          '10,000金币',
          '(高级)<br>神秘的蛋1个',
          '★4-6<br>宝石箱1个',
          '★6<br>宝石箱1个',
          '能量x50',
          '20,000金币',
          '星晶石30颗',
          '能量x100'
        ],
        [
          '(高级)<br>神秘的蛋1个',
          '(高级)<br>神秘的蛋3个',
          '(高级)<br>翠绿之蛋2个<br>海蓝之蛋2个<br>炽热之蛋2个 ',
          '(高级)<br>光/暗之蛋1个',
          '(传奇)<br>神秘的蛋1个'
        ]
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>在已有的积分范围内，可无限次的交换骰子。</li>'+
        '<li><span class="bu"></span>只有在活动期间可获得积分。</li>'+
        '<li><span class="bu"></span>经由投掷骰子中奖的奖励会发送至收件箱。</li>'+
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
          '幸運的一把<br>使用<span>100</span>點數',
          '幸運的口袋<br>使用<span>500</span>點數',
          '幸運包<br>使用<span>1,000</span>點數',
          '幸運箱<br>使用<span>2,000</span>點數',
          '世上幸運滿滿<br>使用<span>3,000</span>點數'
        ]
      ],
      rewardTitle: [
        [
          '(高級)<br>星石5顆',
          '★4-6<br>寶石箱1個',
          '(高級)<br>神秘卵1個',
          '100,000金幣',
          '星寶石30顆',
          '能量x50',
          '(高級)<br>星石5顆',
          '星寶石100顆', 
          '10,000金幣',
          '(高級)神秘卵1個',
          '★4-6<br>寶石箱1個',
          '★6<br>寶石箱1個',
          '能量x50',
          '20,000金幣',
          '星寶石30顆',
          '能量x100'
        ],
        [
          '(高級)<br>神秘卵1個',
          '(高級)<br>神秘卵3個',
          '(高級)<br>草原卵2個<br>海洋卵2個<br>火焰卵2個',
          '(高級)<br>光/暗卵1個',
          '(傳說)<br>神秘卵1個'
        ]
      ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu"></span>在保有的點數範圍內，可無限次的交換骰子。</li>'+
      '<li><span class="bu"></span>只有在活動期間可獲得點數。</li>'+
      '<li><span class="bu"></span>經由投擲骰子中獎的獎勵會發送至收件匣。</li>'+
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