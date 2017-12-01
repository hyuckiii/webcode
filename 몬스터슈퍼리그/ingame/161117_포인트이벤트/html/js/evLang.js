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
      '누적<br><span>50</span>포인트',
      '누적<br><span>100</span>포인트',
      '누적<br><span>300</span>포인트',
      '누적<br><span>433</span>포인트',
      '누적<br><span>500</span>포인트',
      '누적<br><span>1,000</span>포인트',
      '누적<br><span>3,000</span>포인트',
      '누적<br><span>4,330</span>포인트'
    ],
    rewardTitle: [
      '에너지 100개',
      '200,000골드',
      '에너지 300개',
      '(상급)<br>비밀의알 1개',
      '600,000골드',
      '(상급)<br>비밀의알 2개',
      '(상급)<br>빛/어둠의 알 1개',
      '홀리윙키 1개'
    ],
    eventInfo:
      '<ul>'+
      '<li>계정 당 1회 참여 가능합니다.</li>'+
      '<li>누적된 포인트에 따라 보상을 받을 수 있습니다.</li>'+
      '<li>이벤트 보상은 우편함으로 지급됩니다.</li>'+
      '</ul>',
    btnName:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">완료</span>'
  }, langEn = {     // 영어
    questTitle: [
      '<span>50</span> Points',
      '<span>100</span> Points',
      '<span>300</span> Points',
      '<span>433</span> Points',
      '<span>500</span> Points',
      '<span>1,000</span> Points',
      '<span>3,000</span> Points',
      '<span>4,330</span> Points'
    ],
    rewardTitle: [
      'Energy x100',
      '200,000 Gold',
      'Energy x300',
      '(High)<br>Secret Egg x1',
      '600,000 Gold',
      '(High)<br>Secret Egg x2',
      '(High)<br>Light/Dark Egg x1',
      'Holy Gleem x1'
    ],
    eventInfo:
    '<ul>'+
    '<li>You can only participate once per account.</li>'+
    '<li>You can claim various rewards depending on your total points.</li>'+
    '<li>Received gifts will be sent to your Inbox.</li>'+
    '</ul>',
    btnName:
    '<span class="btn_normal">Get Reward</span>'+
    '<span class="btn_end">Completed</span>'
    },
    langJa = {        // 일본어
      questTitle: [
        '合計<span>50</span>ポイント',
        '合計<span>100</span>ポイント',
        '合計<span>300</span>ポイント',
        '合計<span>433</span>ポイント',
        '合計<span>500</span>ポイント',
        '合計<span>1,000</span>ポイント',
        '合計<span>3,000</span>ポイント',
        '合計<span>4,330</span>ポイント'
      ],
      rewardTitle: [
        'エネルギー100個',
        '200,000ゴールド',
        'エネルギー300個',
        '(上級)<br>秘密の卵1個',
        '600,000ゴールド',
        '(上級)<br>秘密の卵 2個',
        '(上級)<br>光/闇の卵 1個',
        'ホーリーグリーム 1個'
      ],
      eventInfo:
        '<ul>'+
        '<li>アカウント1つにつき1回のみ参加できます</li>'+
        '<li>合計ポイントに応じてアイテムがもらえます</li>'+
        '<li>イベントボーナスは受信箱に届きます</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">受け取る</span>'+
        '<span class="btn_end">受取済み</span>'
    }, langTh = {       // 태국어
      questTitle: [
        'สะสมครบ <span>50</span> แต้ม',
        'สะสมครบ <span>100</span> แต้ม',
        'สะสมครบ <span>300</span> แต้ม',
        'สะสมครบ <span>433</span> แต้ม',
        'สะสมครบ <span>500</span> แต้ม',
        'สะสมครบ <span>1,000</span> แต้ม',
        'สะสมครบ <span>3,000</span> แต้ม',
        'สะสมครบ <span>4,330</span> แต้ม'
      ],
      rewardTitle: [
        'พลังงาน 100 ชิ้น',
        '200,000 ทอง',
        'พลังงาน 300 ชิ้น',
        '(สูง)<br>ไข่แห่งความลับ 1 ชิ้น',
        '600,000 ทอง',
        '(สูง)<br>ไข่แห่งความลับ 2 ชิ้น',
        '(สูง)<br>ไข่แสงสว่าง/ความมืด 1 ชิ้น',
        'โฮลี่กลีม 1 ชิ้น'
      ],
      eventInfo:
        '<ul>'+
        '<li>กิจกรรมสามารถเข้าร่วมได้บัญชีละหนึ่งครั้งเท่านั้น</li>'+
        '<li>คุณสามารถรับของรางวัลตามคะแนนที่สะสมได้ </li>'+
        '<li>รางวัลกิจกรรมจะถูกส่งให้ทางกล่องจดหมาย</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">รับรางวัล</span>'+
        '<span class="btn_end">รับแล้ว</span>'
    }, langHans = {       // 간체
      questTitle: [
        '累积<span>50</span>点 ',
        '累积<span>100</span>点 ',
        '累积<span>300</span>点 ',
        '累积<span>433</span>点 ',
        '累积<span>500</span>点 ',
        '累积<span>1000</span>点 ',
        '累积<span>3000</span>点 ',
        '累积<span>4330</span>点 '
      ],
      rewardTitle: [
        '能量x100',
        '200,000金币',
        '能量x300',
        '(高级)<br>神秘的蛋1个',
        '600,000金币',
        '(高级)<br>神秘的蛋2个',
        '(高级)<br>光暗之蛋1个',
        '神圣温奇x1'
      ],
      eventInfo:
        '<ul>'+
        '<li>单一帐号限参与一次。</li>'+
        '<li>依照累积的点数兑换奖励。</li>'+
        '<li>活动奖励将发送至收件箱内。</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">领取奖励</span>'+
        '<span class="btn_end">已领取</span>'
  }, langHant = {         // 번체
    questTitle: [
      '累積<span>50</span>點 ',
      '累積<span>100</span>點 ',
      '累積<span>300</span>點 ',
      '累積<span>433</span>點 ',
      '累積<span>500</span>點 ',
      '累積<span>1000</span>點 ',
      '累積<span>3000</span>點 ',
      '累積<span>4330</span>點 '
    ],
    rewardTitle: [
      '能量x100',
      '200,000金幣',
      '能量x300',
      '(高級)<br>神秘卵1個',
      '600,000金幣',
      '(高級)<br>神秘卵2個',
      '(高級)<br>光/暗卵1個',
      '神聖溫奇x1'
    ],
    eventInfo:
      '<ul>'+
      '<li>單一帳號限參與一次。</li>'+
      '<li>依照累積的點數兌換獎勵。</li>'+
      '<li>活動獎勵將發送至收件匣內。</li>'+
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