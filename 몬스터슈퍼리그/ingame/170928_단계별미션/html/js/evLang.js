/****************************************

  monsterSuperLeague eventLanguageSet - ui.js
  (USE ENERGY AND CHEER UP!)

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
      '에너지<br/>50개 사용',
      '에너지<br/>100개 사용',
      '에너지<br/>200개 사용',
      '에너지<br/>400개 사용',
      '에너지<br/>600개 사용',
      '에너지<br/>800개 사용',
      '에너지<br/>1000개 사용',
      '에너지<br/>1500개 사용',
      '에너지<br/>2000개 사용',
      '에너지<br/>2500개 사용',
      '에너지<br/>3000개 사용',
      '에너지<br/>3500개 사용',
      '',
      ''
    ],
    rewardTitle: [
      '에너지 50개',
      '에너지 100개',
      '에너지 150개',
      '미호(불)',
      '미호(물)',
      '미호(나무)',
      '(하급)<br/>별의 초월석 20개',
      '(중급)<br/>별의 초월석 20개',
      '(상급)<br/>별의 초월석 10개',
      '100,000골드',
      '200,000골드',
      '300,000골드',
      '(상급)<br/>빛/어둠의 알 1개',
      '(전설) <br/>비밀의 알 1개'
    ],
    btnName:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">완료</span>',
    btnQuest:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">보상완료</span>',
    noticeList:
      '<li>계정 당 1회만 참여 가능하며, 보상은 우편함으로 지급됩니다.</li>'
  }, langEn = {     // 영어
      questTitle: [
        '50 Energy Used',
        '100 Energy Used',
        '200 Energy Used',
        '400 Energy Used',
        '600 Energy Used',
        '800 Energy Used',
        '1000 Energy Used',
        '1500 Energy Used',
        '2000 Energy Used',
        '2500 Energy Used',
        '3000 Energy Used',
        '3500 Energy Used',
        '',
        ''
      ],
      rewardTitle: [
        '50 Energy',
        '100 Energy',
        '150 Energy',
        '(Fire)Miho',
        '(Water)Miho',
        '(Wood)Miho',
        '&lt;Low&gt;<br/>Starstone x20',
        '&lt;Mid&gt;<br/>Starstone x20',
        '&lt;High&gt;<br/>Starstone x10',
        '100,000 Gold',
        '200,000 Gold',
        '300,000 Gold',
        '(High)<br/>Light/Dark Egg x1',
        '(Legendary)<br/>Secret Egg x1'
      ],
      btnName:
        '<span class="btn_normal">Receive</span>'+
        '<span class="btn_end">Received</span>',
      btnQuest:
        '<span class="btn_normal">Receive</span>'+
        '<span class="btn_end">Received</span>',
      noticeList:
        '<li>You will be able to participate only once per an account and the reward will be distributed to your mailbox.</li>'
    },
    langJa = {        // 일본어
      questTitle: [
        'エネルギー<br/>50個使用',
        'エネルギー<br/>100個使用',
        'エネルギー<br/>200個使用',
        'エネルギー<br/>400個使用',
        'エネルギー<br/>600個使用',
        'エネルギー<br/>800個使用',
        'エネルギー<br/>1,000個使用',
        'エネルギー<br/>1,500個使用',
        'エネルギー<br/>2,000個使用',
        'エネルギー<br/>2,500個使用',
        'エネルギー<br/>3,000個使用',
        'エネルギー<br/>3,500個使用',
        '',
        ''
      ],
      rewardTitle: [
        'エネルギー50個',
        'エネルギー100個',
        'エネルギー150個',
        'ミホ(火)',
        'ミホ(水)',
        'ミホ(木)',
        '&lt;下級&gt;<br/>スターストーン<br/>20個',
        '&lt;中級&gt;<br/>スターストーン<br/>20個',
        '&lt;上級&gt;<br/>スターストーン<br/>10個',
        '100,000ゴールド',
        '200,000ゴールド',
        '300,000ゴールド',
        '(上級)<br/>光/闇の卵 1個',
        '(伝説)<br/>秘密の卵 1個'
      ],
      btnName:
        '<span class="btn_normal">受け取る</span>'+
        '<span class="btn_end">受取済み</span>',
      btnQuest:
        '<span class="btn_normal">受け取る</span>'+
        '<span class="btn_end">受取済み</span>',
      noticeList:
        '<li>アカウントにつき1回のみ参加可能です。報酬は受信箱で確認できます。</li>'
    }, langTh = {       // 태국어
      questTitle: [
        'ใช้ 50 พลังงาน',
        'ใช้ 100 พลังงาน',
        'ใช้ 200 พลังงาน',
        'ใช้ 400 พลังงาน',
        'ใช้ 600 พลังงาน',
        'ใช้ 800 พลังงาน',
        'ใช้ 1000 พลังงาน',
        'ใช้ 1500 พลังงาน',
        'ใช้ 2000 พลังงาน',
        'ใช้ 2500 พลังงาน',
        'ใช้ 3000 พลังงาน',
        'ใช้ 3500 พลังงาน',
        '',
        ''
      ],
      rewardTitle: [
        '50 พลังงาน',
        '100 พลังงาน',
        '150 พลังงาน',
        'มิโฮะ (ไฟ)',
        'มิโฮะ (น้ำ)',
        'มิโฮะ (ไม้)',
        '(ต่ำ)<br/>ศิลาดวงดาว x20',
        '(กลาง)<br/>ศิลาดวงดาว x20',
        '(สูง)<br/>ศิลาดวงดาว x10',
        '100,000 ทอง',
        '200,000 ทอง',
        '300,000 ทอง',
        '(สูง)<br/>ไข่แห่งแสงสว่าง/ความมืด x1',
        '(ตำนาน)<br/>ไข่แห่งความลับ x1'
      ],
      btnName:
        '<span class="btn_normal">รับรางวัล</span>'+
        '<span class="btn_end">รับแล้ว</span>',
      btnQuest:
        '<span class="btn_normal">รับรางวัล</span>'+
        '<span class="btn_end">รับแล้ว</span>',
      noticeList:
        '<li>คุณสามารถเข้าร่วมกิจกรรมนี้ได้ 1 ครั้ง/บัญชี และรางวัลที่ได้จะถูกส่งไปยังกล่องข้อความของคุณ</li>'
    }, langHans = {       // 간체
      questTitle: [
        '使用50个能量',
        '使用100个能量',
        '使用200个能量',
        '使用400个能量',
        '使用600个能量',
        '使用800个能量',
        '使用1000个能量',
        '使用1500个能量',
        '使用2000个能量',
        '使用2500个能量',
        '使用3000个能量',
        '使用3500个能量',
        '',
        ''
      ],
      rewardTitle: [
        '能量50个',
        '能量100个',
        '能量150个',
        '狐女(火)',
        '狐女(水)',
        '狐女(木)',
        '&lt;低级&gt;<br/>星石20个',
        '&lt;中级&gt;<br/>星石20个',
        '&lt;高级&gt;<br/>星石10个',
        '100,000金币',
        '200,000金币',
        '300,000金币',
        '(高级)<br/>光暗之蛋 1个',
        '(传奇)<br/>神秘之蛋 1个'
      ],
      btnName:
        '<span class="btn_normal">领取奖励</span>'+
        '<span class="btn_end">已领取</span>',
      btnQuest:
        '<span class="btn_normal">领取奖励</span>'+
        '<span class="btn_end">已领取</span>',
      noticeList:
        '<li>单一账号仅限参与一次，奖励将发送至收件箱.</li>'
  }, langHant = {         // 번체
      questTitle: [
        '使用50個能量',
        '使用100個能量',
        '使用200個能量',
        '使用400個能量',
        '使用600個能量',
        '使用800個能量',
        '使用1000個能量',
        '使用1500個能量',
        '使用2000個能量',
        '使用2500個能量',
        '使用3000個能量',
        '使用3500個能量',
        '',
        ''
      ],
      rewardTitle: [
        '能量50個',
        '能量100個',
        '能量150個',
        '美穗(火)',
        '美穗(水)',
        '美穗(木)',
        '&lt;低級&gt;<br/>星石20個',
        '&lt;中級&gt;<br/>星石20個',
        '&lt;高級&gt;<br/>星石10個',
        '100,000金幣',
        '200,000金幣',
        '300,000金幣',
        '(高級)<br/>光/暗卵1個',
        '(傳說)<br/>神秘卵1個'
      ],
      btnName:
        '<span class="btn_normal">領取獎勵</span>'+
        '<span class="btn_end">已領取</span>',
      btnQuest:
        '<span class="btn_normal">領取獎勵</span>'+
        '<span class="btn_end">已領取</span>',
      noticeList:
      '<li>單一賬號僅限參與一次，獎勵將發送至收件匣。</li>'
  };

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