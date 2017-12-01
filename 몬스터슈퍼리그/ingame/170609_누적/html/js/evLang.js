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
      '친구에게<br>골드 100회 보내기',
      '친구에게<br>골드 450회 보내기',
      '친구에게<br>골드 800회 보내기',
      '가디언 던전<br>10회 승리',
      '가디언 던전<br>20회 승리',
      '가디언 던전<br>50회 승리',
      '제미니 포획<br> 1회 성공',
      '제미니 포획<br> 5회 성공',
      '제미니 포획<br>10회 성공',
      '클랜전투<br>1회 진행',
      '클랜전투<br>12회 진행',
      '클랜전투<br>24회 진행',
      '클랜전투<br>42회 진행',
      '클랜전투<br>66회 진행',
      '클랜전투<br>90회 진행',
      '7개 미션 성공',
      '전체 미션 성공'
    ],
    rewardTitle: [
      '에너지 50개',
      '에너지 100개',
      '에너지 200개',
      '홀리윙키 영혼석 20개',
      '홀리윙키 영혼석 30개',
      '홀리윙키 영혼석 50개',
      '쌍둥이 제미니(불) 1개',
      '쌍둥이 제미니(불) 1개',
      '쌍둥이 제미니(불) 1개',
      '★4~6 보석 상자 1개',
      '스타젬 50개',
      '★5~6 보석 상자 1개',
      '스타젬 100개',
      '★6 보석 상자 1개',
      '스타젬 200개',
      '(상급) 빛/어둠의 알 1개',
      '(전설) 비밀의 알 1개'
    ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu">*</span>계정 당 1회만 참여 가능하며, 보상은 우편함으로 지급됩니다.</li>'+
      '</ul>',
    btnName:
    '<span class="btn_normal">보상받기</span>'+
    '<span class="btn_end">완료</span>'
  }, langEn = {     // 영어
      questTitle: [
        'Send gift to friend x100',
        'Send gift to friend x450',
        'Send gift to friend x800',
        'Win Guardian Dungeon Battle x10',
        'Win Guardian Dungeon Battle x20',
        'Win Guardian Dungeon Battle x50',
        'Catch Gemini x1',
        'Catch Gemini x5',
        'Catch Gemini x10',
        'Attend clan battle x1',
        'Attend clan battle x12',
        'Attend clan battle x24',
        'Attend clan battle x42',
        'Attend clan battle x66',
        'Attend clan battle x90',
        '7 Missions Completed',
        'All Missions Completed'
      ],
      rewardTitle: [
        'Energy x50',
        'Energy x100',
        'Energy x200',
        'Holy Gleem Soulstone x20',
        'Holy Gleem Soulstone x30',
        'Holy Gleem Soulstone x50',
        'Gemini(Fire) x1',
        'Gemini(Fire) x1',
        'Gemini(Fire) x1',
        '4-6★ Gem Chest x1',
        'Astrogem x50',
        '5-6★ Gem Chest x1',
        'Astrogem x100',
        '6★ Gem Chest x1',
        'Astrogem x200',
        '(High) Light/Dark Egg x1',
        '(Legendary) Secret Egg x1'
      ],
      eventInfo:
      '<ul>'+
      '<li><span class="bu">*</span>You may participate only once per an account and rewards will be delivered through mailbox.</li>'+
      '</ul>',
      btnName:
      '<span class="btn_normal">Get Reward</span>'+
      '<span class="btn_end">Completed</span>'
    },
    langJa = {        // 일본어
      questTitle: [
        'フレンドにギフト<br>100回送る',
        'フレンドにギフト<br>450回送る',
        'フレンドにギフト<br>800回送る',
        'ガーディアン<br>ダンジョン10回勝利',
        'ガーディアン<br>ダンジョン20回勝利',
        'ガーディアン<br>ダンジョン50回勝利',
        'ジェミニ捕獲<br>1回成功',
        'ジェミニ捕獲<br>5回成功',
        'ジェミニ捕獲<br>10回成功',
        'クランバトル1回参加',
        'クランバトル12回参加',
        'クランバトル24回参加',
        'クランバトル42回参加',
        'クランバトル66回参加',
        'クランバトル90回参加',
        '7個のミッションクリア',
        '全てのミッションクリア'
      ],
      rewardTitle: [
        'エネルギー50個',
        'エネルギー100個',
        'エネルギー200個',
        'ホーリーグリームの<br>ソウルストーン20個',
        'ホーリーグリームの<br>ソウルストーン30個',
        'ホーリーグリームの<br>ソウルストーン50個',
        'ジェミニ(火)1体',
        'ジェミニ(火)1体',
        'ジェミニ(火)1体',
        '★4～6ジュエルの箱',
        'スタージュエル50個',
        '★5～6ジュエルの箱',
        'スタージュエル100個',
        '★6ジュエルの箱',
        'スタージュエル200個',
        '(上級)光/闇の卵1個',
        '(伝説)秘密の卵1個'
      ],
      eventInfo:
      '<ul>'+
      '<li><span class="bu">*</span>アカウントごとに1回だけ参加が可能です。報酬は受信箱に届きます。</li>'+
      '</ul>',
      btnName:
      '<span class="btn_normal">受け取る</span>'+
      '<span class="btn_end">受取済み</span>'
    }, langTh = {       // 태국어
      questTitle: [
        'ส่งของขวัญให้เพื่อน 100 ครั้ง',
        'ส่งของขวัญให้เพื่อน 450 ครั้ง',
        'ส่งของขวัญให้เพื่อน 800 ครั้ง',
        'ชนะดันเจี้ยนผู้พิทักษ์ x10',
        'ชนะดันเจี้ยนผู้พิทักษ์ x20',
        'ชนะดันเจี้ยนผู้พิทักษ์ x50',
        'จับเจมินี x1',
        'จับเจมินี x5',
        'จับเจมินี x10',
        'เข้าร่วมการต่อสู้กลุ่ม x1',
        'เข้าร่วมการต่อสู้กลุ่ม x12',
        'เข้าร่วมการต่อสู้กลุ่ม x24',
        'เข้าร่วมการต่อสู้กลุ่ม x42',
        'เข้าร่วมการต่อสู้กลุ่ม x66',
        'เข้าร่วมการต่อสู้กลุ่ม x90',
        'เสร็จสิ้น 7 ภารกิจ',
        'เสร็จสิ้นทุกภารกิจ'
      ],
      rewardTitle: [
        '50 พลังงาน',
        '100 พลังงาน',
        '200 พลังงาน',
        'ศิลาวิญญาณโฮลี่กรีม x20',
        'ศิลาวิญญาณโฮลี่กรีม x30',
        'ศิลาวิญญาณโฮลี่กรีม x50',
        'เจมินี(ไฟ) x1',
        'เจมินี(ไฟ) x1',
        'เจมินี(ไฟ) x1',
        'หีบอัญมณี 4-6★ 1 หีบ',
        '50 แอสโตรเจม',
        'หีบอัญมณี 5-6★ 1 หีบ',
        '100 แอสโตรเจม',
        'หีบอัญมณี 6★ 1 หีบ',
        '200 แอสโตรเจม',
        '(สูง) ไข่แสงสว่าง/ความมืด 1 ชิ้น',
        '(ตำนาน) ไข่แห่งความลับ 1 ชิ้น'
      ],
      eventInfo:
      '<ul>'+
      '<li><span class="bu">*</span>หนึ่งบัญชีสามารถเข้าร่วมกิจกรรมได้หนึ่งครั้ง และของรางวัลจะถูกส่งทางกล่องจดหมาย</li>'+
      '</ul>',
      btnName:
      '<span class="btn_normal">รับรางวัล</span>'+
      '<span class="btn_end">รับแล้ว</span>'
    }, langHans = {       // 간체
      questTitle: [
        '发送100次好友礼物',
        '发送450次好友礼物',
        '发送800次好友礼物',
        '守护者副本胜利10次',
        '守护者副本胜利20次',
        '守护者副本胜利50次',
        '双子星<br>捕捉成功1次',
        '双子星<br>捕捉成功5次',
        '双子星<br>捕捉成功10次',
        '参与1次帮会战斗',
        '参与12次帮会战斗',
        '参与24次帮会战斗',
        '参与42次帮会战斗',
        '参与66次帮会战斗',
        '参与90次帮会战斗',
        '成功完成了7个任务',
        '成功完成了全部任务'
      ],
      rewardTitle: [
        '能量x50',
        '能量x100',
        '能量x200',
        '神圣温奇灵魂石20个',
        '神圣温奇灵魂石30个',
        '神圣温奇灵魂石50个',
        '双子星（火）1个',
        '双子星（火）1个',
        '双子星（火）1个',
        '4-6★宝石箱1个',
        '星晶石50颗',
        '5-6★宝石箱1个',
        '星晶石100颗',
        '6★宝石箱1个',
        '星晶石200颗',
        '(高级)光/暗之蛋1个',
        '(传奇)神秘的蛋1个'
      ],
      eventInfo:
      '<ul>'+
      '<li><span class="bu">*</span>单一帐号仅限参与一次，奖励将发送至收件箱。</li>'+
      '</ul>',
      btnName:
      '<span class="btn_normal">领取奖励</span>'+
      '<span class="btn_end">已领取</span>'
  }, langHant = {         // 번체
      questTitle: [
        '發送100次好友禮物',
        '發送450次好友禮物',
        '發送800次好友禮物',
        '守護者地城勝利10次',
        '守護者地城勝利20次',
        '守護者地城勝利50次',
        '雙子寶寶<br>捕捉成功1次',
        '雙子寶寶<br>捕捉成功5次',
        '雙子寶寶<br>捕捉成功10次',
        '參與1次家族戰鬥',
        '參與12次家族戰鬥',
        '參與24次家族戰鬥',
        '參與42次家族戰鬥',
        '參與66次家族戰鬥',
        '參與90次家族戰鬥',
        '成功完成了7個任務',
        '成功完成了全部任務'
      ],
      rewardTitle: [
        '能量x50',
        '能量x100',
        '能量x200',
        '神聖溫奇魂石20個',
        '神聖溫奇魂石30個',
        '神聖溫奇魂石50個',
        '雙子寶寶（火）1個',
        '雙子寶寶（火）1個',
        '雙子寶寶（火）1個',
        '4-6★寶石箱1個',
        '星寶石50顆',
        '5-6★寶石箱1個',
        '星寶石100顆',
        '6★寶石箱1個',
        '星寶石200顆',
        '(高級)光/暗卵1個',
        '(傳說)神秘卵1個'
      ],
      eventInfo:
      '<ul>'+
      '<li><span class="bu">*</span>單一帳號僅限參與一次，獎勵將發送至收件匣。</li>'+
      '</ul>',
      btnName:[
        '<span class="btn_normal">領取獎勵</span>'+
        '<span class="btn_end">已領取</span>'
      ]
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