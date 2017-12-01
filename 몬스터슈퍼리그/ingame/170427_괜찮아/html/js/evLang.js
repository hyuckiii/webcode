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
      '누적<br><span>10</span>포인트',
      '누적<br><span>50</span>포인트',
      '누적<br><span>100</span>포인트',
      '누적<br><span>300</span>포인트',
      '누적<br><span>500</span>포인트',
      '누적<br><span>1,000</span>포인트',
      '누적<br><span>1,500</span>포인트',
      '누적<br><span>2,000</span>포인트',
      '누적<br><span>3,000</span>포인트',
      '누적<br><span>4,330</span>포인트'
    ],
    rewardTitle: [
      '★4~6 보석 상자 1개',
      '에너지 100개',
      '★6 보석 상자 1개',
      '에너지 150개',
      '(상급)비밀의 알 3개',
      '에너지 200개',
      '스타젬 300개',
      '(상급)빛/어둠의 알 1개',
      '1,000,000 골드',
      '(전설)비밀의 알 1개'
    ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu"></span>계정 당 1회만 참여 가능하며, 보상은 우편함으로 지급됩니다.</li>'+
      '<li><span class="bu"></span>누적된 포인트에 따라 보상을 받으실 수 있습니다.</li>'+
      '</ul>',
    btnName:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">완료</span>'
  }, langEn = {     // 영어
    questTitle: [
      'Accumulate<br><span>10</span> Points',
      'Accumulate<br><span>50</span> Points',
      'Accumulate<br><span>100</span> Points',
      'Accumulate<br><span>300</span> Points',
      'Accumulate<br><span>500</span> Points',
      'Accumulate<br><span>1,000</span> Points',
      'Accumulate<br><span>1,500</span> Points',
      'Accumulate<br><span>2,000</span> Points',
      'Accumulate<br><span>3,000</span> Points',
      'Accumulate<br><span>4,330</span> Points'
    ],
    rewardTitle: [
      '4-6★ Gem Chest x1',
      'Energy x100',
      '6★ Gem Chest x1',
      'Energy x150',
      '(High) Secret Egg x3',
      'Energy x200',
      'Astrogem x300',
      '(High) Light/Dark Egg x1',
      '1,000,000 Gold',
      '(Legendary) Secret Egg x1'
    ],
    eventInfo:
    '<ul>'+
    '<li><span class="bu"></span>Event will be paticipable only once per account and rewards will be deliverd through mail box.</li>'+
    '<li><span class="bu"></span>You can receive various rewards depending on the accumulated points.</li>'+
    '</ul>',
    btnName:
    '<span class="btn_normal">Get Reward</span>'+
    '<span class="btn_end">Completed</span>'
    },
    langJa = {        // 일본어
      questTitle: [
        '累積ポイント<br><span>10</span>ポイント',
        '累積ポイント<br><span>50</span>ポイント',
        '累積ポイント<br><span>100</span>ポイント',
        '累積ポイント<br><span>300</span>ポイント',
        '累積ポイント<br><span>500</span>ポイント',
        '累積ポイント<br><span>1,000</span>ポイント',
        '累積ポイント<br><span>1,500</span>ポイント',
        '累積ポイント<br><span>2,000</span>ポイント',
        '累積ポイント<br><span>3,000</span>ポイント',
        '累積ポイント<br><span>4,330</span>ポイント'
      ],
      rewardTitle: [
        '★4～6のジュエルの箱',
        'エネルギー100個',
        '★6のジュエルの箱',
        'エネルギー150個',
        '(上級)秘密の卵3個',
        'エネルギー200個',
        'スタージュエル300個',
        '(上級)光/闇の卵1個',
        '1,000,000ゴールド',
        '(伝説)秘密の卵1個'
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>アカウントにつき１回のみ参加できます。報酬は受信箱に届きます。</li>'+
        '<li><span class="bu"></span>累積ポイントに応じて報酬がもらえます。</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">受け取る</span>'+
        '<span class="btn_end">受取済み</span>'
    }, langTh = {       // 태국어
      questTitle: [
        'สะสมเหรียญครบ<span>10</span> เหรียญ',
        'สะสมเหรียญครบ <span>50</span> เหรียญ',
        'สะสมเหรียญครบ <span>100</span> เหรียญ',
        'สะสมเหรียญครบ <span>300</span> เหรียญ',
        'สะสมเหรียญครบ <span>500</span> เหรียญ',
        'สะสมเหรียญครบ <span>1,000</span> เหรียญ',
        'สะสมเหรียญครบ <span>1,500</span> เหรียญ',
        'สะสมเหรียญครบ <span>2,000</span> เหรียญ',
        'สะสมเหรียญครบ <span>3,000</span> เหรียญ',
        'สะสมเหรียญครบ <span>4,330</span> เหรียญ'
      ],
      rewardTitle: [
        'หีบอัญมณี 4-6★ 1 หีบ',
        '100 พลังงาน',
        'หีบอัญมณี 6★ 1 หีบ',
        '150 พลังงาน',
        '(สูง) ไข่แห่งความลับ 3 ชิ้น',
        '200 พลังงาน',
        '300 แอสโตรเจม',
        '(สูง) ไข่แสงสว่าง/ความมืด 1 ชิ้น',
        '1,000,000 ทอง',
        '(ตำนาน) ไข่แห่งความลับ 1 ชิ้น'
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>หนึ่งบัญชีสามารถเข้าร่วมกิจกรรมได้หนึ่งครั้ง และของรางวัลจะถูกส่งทางกล่องจดหมาย</li>'+
        '<li><span class="bu"></span>สามารถรับของรางวัลตามจำนวนเหรียญที่สะสมได้</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">รับรางวัล</span>'+
        '<span class="btn_end">รับแล้ว</span>'
    }, langHans = {       // 간체
      questTitle: [
        '累积积分<br><span>10</span>个',
        '累积积分<br><span>50</span>个',
        '累积积分<br><span>100</span>个',
        '累积积分<br><span>300</span>个',
        '累积积分<br><span>500</span>个',
        '累积积分<br><span>1000</span>个',
        '累积积分<br><span>1500</span>个',
        '累积积分<br><span>2000</span>个',
        '累积积分<br><span>3000</span>个',
        '累积积分<br><span>4330</span>个'
      ],
      rewardTitle: [
        '4-6★宝石箱1个',
        '能量x100',
        '6 ★宝石箱1个',
        '能量x150',
        '(高级)神秘的蛋3个',
        '能量x200',
        '星晶石300颗',
        '(高级)光暗之蛋1个',
        '1,000,000金币',
        '(传奇)神秘的蛋1个'
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>单一帐号仅限参与一次，奖励将发送至收件箱。</li>'+
        '<li><span class="bu"></span>根据累积积分可获得奖励。</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">领取奖励</span>'+
        '<span class="btn_end">已领取</span>'
  }, langHant = {         // 번체
    questTitle: [
      '累計點數<br><span>10</span>個',
      '累計點數<br><span>50</span>個',
      '累計點數<br><span>100</span>個',
      '累計點數<br><span>300</span>個',
      '累計點數<br><span>500</span>個',
      '累計點數<br><span>1000</span>個',
      '累計點數<br><span>1500</span>個',
      '累計點數<br><span>2000</span>個',
      '累計點數<br><span>3000</span>個',
      '累計點數<br><span>4330</span>個'
    ],
    rewardTitle: [
      '4-6★寶石箱1個',
      '能量x100',
      '6★寶石箱1個',
      '能量x150',
      '(高級)神秘卵3個',
      '能量x200',
      '星寶石300顆',
      '(高級)光/暗卵1個',
      '1,000,000金幣',
      '(傳說)神秘卵1個'
    ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu"></span>單一帳號僅限參與一次，獎勵將發送至收件匣。 </li>'+
      '<li><span class="bu"></span>依據累計點數可獲得不同的獎勵。</li>'+
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