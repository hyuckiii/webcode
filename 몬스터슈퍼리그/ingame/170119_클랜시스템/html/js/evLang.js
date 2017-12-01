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
      '클랜 가입',
      '클랜 전투 10회 참여',
      '클랜 전투 30회 참여',
      '클랜 전투 50회 참여',
      '클랜 전투 70회 참여',
      '시나리오 300회 진행',
      '초월 던전 300회 진행',
      '요일 던전 200회 진행',
      '가디언 던전 100회 진행',
      '스타몬 200마리 획득',
      '스타몬 100회 포획 시도',
      '합성 소환 3회 진행',
      '영혼석 소환 3회 진행',
      '모든 미션 클리어'
    ],
    rewardTitle: [
      '(어둠) 스노우 1마리',
      '스타젬 50개',
      '스타젬 100개',
      '스타젬 150개',
      '스타젬 200개',
      '200,000 골드',
      '200,000 골드',
      '150,000 골드',
      '100,000 골드',
      '에너지 200개',
      '에너지 150개',
      '에너지 100개',
      '에너지 50개',
      '(상급) 비밀의 알 5개'
    ],
    eventInfo:
      '<ul>'+
      '<li><span></span>모든 선물은 최초 1회에 한하여 지급됩니다.</li>'+
      '<li><span></span>선물은 게임 내 우편함으로 지급되며, 우편함을 통해 확인 부탁 드립니다.</li>'+
      '<li><span></span>클랜 가입 미션의 경우 클랜 개설 또는 클랜 가입 신청 후 승인이 진행되어야만 보상을 받으실 수 있습니다.</li>'+
      '</ul>',
    btnName:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">완료</span>'
  }, langEn = {     // 영어
    questTitle: [
      'Join clan',
      'Attend clan battles x10',
      'Attend clan battles x30',
      'Attend clan battle x50',
      'Attend clan battle x70',
      'Enter Story mode x300',
      'Enter Starstone Dungeon x300',
      'Enter Daily dungeon x200',
      'Enter Guardian Dungeons x100',
      'Obtain 200 Astromons',
      'Catch Astromon x100',
      'Summon Astromon via Fusion x3',
      'Summon Astromon via Soulstone x3',
      'Clear All Mission'
    ],
    rewardTitle: [
      '(Dark)Snowee x1',
      'Astrogem x50',
      'Astrogem x100',
      'Astrogem x150',
      'Astrogem x200',
      '200,000 Gold',
      '200,000 Gold',
      '150,000 Gold',
      '100,000 Gold',
      'Energy x200',
      'Energy x150',
      'Energy x100',
      'Energy x50',
      '(High) Secret Egg x5'
    ],
    eventInfo:
      '<ul>'+
      '<li><span></span>Rewards can be claimed only once per each mission.</li>'+
      '<li><span></span>Received gifts will be sent to your inbox.</li>'+
      '<li><span></span>You can receive the rewards of "Join Clan" mission by creating a Clan or becoming a member of a Clan.</li>'+
      '</ul>',
    btnName:
    '<span class="btn_normal">Get Reward</span>'+
    '<span class="btn_end">Completed</span>'
    },
    langJa = {        // 일본어
      questTitle: [
        'クランに加入する',
        'クランバトル10回参加する',
        'クランバトル30回参加する',
        'クランバトル50回参加する',
        'クランバトル70回参加する',
        'ストーリーを300回進める',
        'スターストーンダンジョン300回プレイする',
        '属性ダンジョン200回プレイする',
        'ガーディアンダンジョン100回プレイする',
        'スターモンを200匹手に入れる',
        '捕獲に100回挑戦する',
        '合成を3回する',
        'ソウルストーンで3回召喚する',
        'ミッションをすべてクリアする'
      ],
      rewardTitle: [
        '(闇)スノーウィ1個',
        'スタージュエル50個',
        'スタージュエル100個',
        'スタージュエル150個',
        'スタージュエル200個',
        '200,000ゴールド',
        '200,000ゴールド',
        '150,000ゴールド',
        '100,000ゴールド',
        'エネルギー200個',
        'エネルギー150個',
        'エネルギー100個',
        'エネルギー50個',
        '(上級)秘密の卵5個'
      ],
      eventInfo:
      '<ul>'+
      '<li><span></span>すべてのアイテムは初回1回のみ獲得できます。</li>'+
      '<li><span></span>アイテムはゲーム内の受信箱に届きます。受信箱を確認してください。</li>'+
      '<li><span></span>クラン加入ミッションの報酬はクラン作成又は、加入承認後に支給されます。</li>'+
      '</ul>',
      btnName:
        '<span class="btn_normal">受け取る</span>'+
        '<span class="btn_end">受取済み</span>'
    }, langTh = {       // 태국어
      questTitle: [
        'เข้ากลุ่ม',
        'เข้าร่วมการต่อสู้กลุ่ม x10',
        'เข้าร่วมการต่อสู้กลุ่ม x30',
        'เข้าร่วมการต่อสู้กลุ่ม x50',
        'เข้าร่วมการต่อสู้กลุ่ม x70',
        'เล่นด่านเนื้อเรื่อง 300 ครั้ง',
        'เล่นดันเจี้ยนศิลาดวงดาว x300',
        'เล่นดันเจี้ยนประจำวัน x200',
        'เล่นดันเจี้ยนผู้พิทักษ์ x100',
        'ได้รับ 200 แอสโตรมอน',
        'จับแอสโตรมอน 100 ครั้ง',
        'ผสม 3 ครั้ง',
        'เรียกศิลาวิญญาณ 3 ครั้ง',
        'สำเร็จภารกิจทั้งหมด'
      ],
      rewardTitle: [
        '(ความมืด) สโนวี่ 1 ชิ้น',
        '50 แอสโตรเจม',
        '100 แอสโตรเจม',
        '150 แอสโตรเจม',
        '200 แอสโตรเจม',
        '200,000 ทอง',
        '200,000 ทอง',
        '150,000 ทอง',
        '100,000 ทอง',
        '200 พลังงาน',
        '150 พลังงาน',
        '100 พลังงาน',
        '50 พลังงาน',
        '(สูง) ไข่แห่งความลับ 5 ชิ้น'
      ],
      eventInfo:
        '<ul>'+
        '<li><span></span>ของรางวัลสามารถรับได้เพียงครั้งเดียวเท่านั้น</li>'+
        '<li><span></span>ของรางวัลจะถูกส่งไปยังกล่องจดหมาย กรุณาตรวจสอบตู้จดหมาย</li>'+
        '<li><span></span>คุณจะได้รับรางวัล "เข้าร่วมกลุ่ม" โดยการสร้างกลุ่ม หรือเข้าเป็นสมาชิกของกลุ่ม</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">รับรางวัล</span>'+
        '<span class="btn_end">รับแล้ว</span>'
    }, langHans = {       // 간체
      questTitle: [
        '加入帮会广场',
        '参与10次帮会战斗',
        '参与30次帮会战斗',
        '参与50次帮会战斗',
        '参与70次帮会战斗',
        '进入剧情300次',
        '进入星石副本300次',
        '进入元素副本200次',
        '挑战守护者副本100次',
        '获得200只星兽',
        '捕获星兽100次',
        '融合3次',
        '使用灵魂石召唤星兽3次',
        '达成所有任务'
      ],
      rewardTitle: [
        '(暗)小雪球1个',
        '星晶石50颗',
        '星晶石100颗',
        '星晶石150颗',
        '星晶石200颗',
        '200,000金币',
        '200,000金币',
        '150,000金币',
        '100,000金币',
        '能量x200',
        '能量x150',
        '能量x100',
        '能量x50',
        '(高级)神秘的蛋5个'
      ],
      eventInfo:
      '<ul>'+
      '<li><span></span>所有奖励仅于初次达成任务时发放。</li>'+
      '<li><span></span>奖励将发送至游戏内收件箱，请前往收件箱确认。</li>'+
      '<li><span></span>加入帮会广场的任务，需要成功加入帮会广场才能获得奖励。</li>'+
      '</ul>',
      btnName:
        '<span class="btn_normal">领取奖励</span>'+
        '<span class="btn_end">已领取</span>'
  }, langHant = {         // 번체
    questTitle: [
      '加入家族廣場',
      '參與10次家族戰鬥',
      '參與30次家族戰鬥',
      '參與50次家族戰鬥',
      '參與70次家族戰鬥',
      '進入劇情300次',
      '進入星石地城300次',
      '玩200場屬性地城',
      '玩100場守護者地城',
      '獲得200隻星獸',
      '捕獲星獸100次',
      '融合3次',
      '使用魂石召喚星獸3次',
      '達成所有任務'
    ],
    rewardTitle: [
      '(暗)雪寶1個',
      '星寶石50顆',
      '星寶石100顆',
      '星寶石150顆',
      '星寶石200顆',
      '200,000金幣',
      '200,000金幣',
      '150,000金幣',
      '100,000金幣',
      '能量x200',
      '能量x150',
      '能量x100',
      '能量x50',
      '(高級)神秘卵5個'
    ],
    eventInfo:
      '<ul>'+
      '<li><span></span>所有獎勵僅於初次達成任務時發放。</li>'+
      '<li><span></span>獎勵將發送至遊戲內收件匣，請前往收件匣確認。</li>'+
      '<li><span></span>加入家族廣場的任務，需要成功加入家族廣場才能獲得獎勵。</li>'+
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