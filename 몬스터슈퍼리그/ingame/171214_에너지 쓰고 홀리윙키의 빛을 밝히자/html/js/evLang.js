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
    questTitle: ['', '', '', '', '', '', '', '', '', '', '', '', '',''],
    rewardTitle: ['', '', '', '', '', '', '', '', '', '', '', '', '',''],
    btnName:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">완료</span>',
    btnQuest:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">보상완료</span>',
    noticeList:
      '<li><span class="bu">&bull;</span> 계정 당 1회만 참여 가능하며, 보상은 우편함으로 지급됩니다.</li>'+
      '<li><span class="bu">&bull;</span> 일일 최대 100개의 에너지만 카운트 되며, 매일 오전 9시 기준으로 카운트 내역이 초기화 됩니다.</li>'
  },
  langEn = {     // 영어
    questTitle: ['', '', '', '', '', '', '', '', '', '', '', '', '',''],
    rewardTitle: ['', '', '', '', '', '', '', '', '', '', '', '', '',''],
    btnName:
      '<span class="btn_normal">Receive</span>'+
      '<span class="btn_end">Received</span>',
    btnQuest:
      '<span class="btn_normal">Receive</span>'+
      '<span class="btn_end">Received</span>',
    noticeList:
    '<li><span class="bu">&bull;</span> You will be able to participate only once per an account, and the reward will be distributed to your mailbox.</li>'+
    '<li><span class="bu">&bull;</span> You will be able to obtain Maximum of 100 Energy daily, then will reset 00:00 everyday.</li>'
  },
  langJa = {        // 일본어
    questTitle: ['', '', '', '', '', '', '', '', '', '', '', '', '',''],
    rewardTitle: ['', '', '', '', '', '', '', '', '', '', '', '', '',''],
    btnName:
      '<span class="btn_normal">受け取る</span>'+
      '<span class="btn_end">受取済み</span>',
    btnQuest:
      '<span class="btn_normal">受け取る</span>'+
      '<span class="btn_end">受取済み</span>',
    noticeList:
    '<li><span class="bu">&bull;</span> アカウントにつき1回のみ参加可能です。</li>'+
    '<li><span class="bu">&bull;</span> イベントギフトは受信箱に届きます。</li>'+
    '<li><span class="bu">&bull;</span> エネルギーの使用カウントは1日最大100個です。09:00に使用カウントが初期化されます。</li>'
  },
  langTh = {       // 태국어
    questTitle: ['', '', '', '', '', '', '', '', '', '', '', '', '',''],
    rewardTitle: ['', '', '', '', '', '', '', '', '', '', '', '', '',''],
    btnName:
      '<span class="btn_normal">รับรางวัล</span>'+
      '<span class="btn_end">รับแล้ว</span>',
    btnQuest:
      '<span class="btn_normal">รับรางวัล</span>'+
      '<span class="btn_end">รับแล้ว</span>',
    noticeList:
      '<li><span class="bu">&bull;</span> คุณสามารถเข้าร่วมกิจกรรมนี้ได้เพียง 1 ครั้ง/บัญชี และของขวัญกิจกรรมที่ได้จะถูกส่งไปยังกล่องจดหมายของคุณ</li>'+
      '<li><span class="bu">&bull;</span> ภารกิจใช้พลังงาน จะสามารถใช้พลังงานได้สูงสุด 100 พลังงาน/วัน และจะรีเซ็ตอีกครั้งเวลา 07:00 ของทุกวัน (เวลาไทย)</li>'
  },
  langHans = {       // 간체
    questTitle: ['', '', '', '', '', '', '', '', '', '', '', '', '',''],
    rewardTitle: ['', '', '', '', '', '', '', '', '', '', '', '', '',''],
    btnName:
      '<span class="btn_normal">领取奖励</span>'+
      '<span class="btn_end">已领取</span>',
    btnQuest:
      '<span class="btn_normal">领取奖励</span>'+
      '<span class="btn_end">已领取</span>',
    noticeList:
      '<li><span class="bu">&bull;</span> 单一账号仅限参与1次，奖励将发送至收件箱。</li>'+
      '<li><span class="bu">&bull;</span> 每日最多计数100个能量的使用情况，每日上午8点钟能量计数将进行重置。</li>'
  },
  langHant = {         // 번체
    questTitle: ['', '', '', '', '', '', '', '', '', '', '', '', '',''],
    rewardTitle: ['', '', '', '', '', '', '', '', '', '', '', '', '',''],
    btnName:
      '<span class="btn_normal">領取獎勵</span>'+
      '<span class="btn_end">已領取</span>',
    btnQuest:
      '<span class="btn_normal">領取獎勵</span>'+
      '<span class="btn_end">已領取</span>',
    noticeList:
      '<li><span class="bu">&bull;</span> 單一賬號僅限參與1次，獎勵將發送至收件匣。</li>'+
      '<li><span class="bu">&bull;</span> 每日最多可計數100個能量的使用情況，每日上午8點鐘能量計數將進行重置。</li>'
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