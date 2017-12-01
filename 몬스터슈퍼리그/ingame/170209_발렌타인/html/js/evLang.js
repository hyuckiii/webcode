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
        'VALEN<br><span>완성</span>',
        'TINE’S<br><span>완성</span>',
        'DAY<br><span>완성</span>',
        '모든글자<br><span>완성</span>'
      ],
      [
        '스토리모드<br>500회 진행',
        '초월 던전<br>200회 진행',
        '고대 골렘 던전<br>50회 진행',
        '스타몬리그<br>50회 진행',
        '클랜 전투<br>30회 진행',
        '에너지<br>500개 사용',
        '1,000,000 골드<br>사용',
        '보석<br>100회 강화',
        '각성<br>10회 진행',
        '영혼석<br>3회 소환',
        '네즈<br>30회 찾기',
        '숨겨진 물건 발견<br>300회',
        '친구 선물<br>500회 보내기'
      ]
    ],
    rewardTitle: [
      [
        '(상급)빛/어둠의 알 1개',
        '(상급)비밀의 알 2개',
        '(상급)비밀의 알 1개',
        '(전설)비밀의 알 1개'
      ],
      [
        '200,000 골드',
        '200,000 골드',
        '스타젬 100개',
        '스타젬 100개',
        '스타젬 100개',
        '(상급)별의 초월석 30개',
        '(상급)별의 초월석 20개',
        '(중급)별의 초월석 30개',
        '(불속성) 키스 1마리',
        '(불속성) 키스 1마리',
        '에너지 100개',
        '에너지 100개',
        '에너지 100개'
      ]
    ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu"></span>일반미션은 총 13개이고 각 미션 달성마다 글자와 보상을 받으실 수 있습니다.</li>'+
      '<li><span class="bu"></span>각 단어 달성 시 추가 보상이 지급되며, 모든 단어 완성 시 최종 보상을 받으실 수 있습니다.</li>'+
      '<li><span class="bu"></span>계정 당 1회만 참여 가능하며, 보상은 우편함으로 지급됩니다.</li>'+
      '<li><span class="bu"></span>상품 수령 기간: 2월 9일 (목) 09:00 ~ 3월 8일 (수) 08:59</li>'+
      '</ul>',
    btnName:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">완료</span>'
  }, langEn = {     // 영어
    questTitle: [
      [
        '<span>Complete</span> "VALEN"',
        '<span>Complete</span> "TINE\'S"',
        '<span>Complete</span> "DAY"',
        '<span>Complete</span> "VALENTINE\'S DAY"'
      ],
      [
        'Enter Story mode<br>x500',
        'Play Starstone Dungeon<br>x200',
        'Golem Dungeon<br>x50',
        'Astromon League<br>x50',
        'Attend clan battle<br>x30',
        'Use Energy<br>x500',
        'Use Gold<br>x1,000,000',
        'Upgrade Gem<br>x100',
        'Awaken Astromon<br>x10',
        'Summon Astromon via Soulstone<br>x3',
        'Find Nezz<br>x30',
        'Find hidden items at Airship<br>x300',
        'Send gift to friend<br>x500'
      ]
    ],
    rewardTitle: [
      [
        '(High) Light/Dark Egg x1',
        '(High) Secret Egg x2',
        '(High) Secret Egg x1',
        '(Legendary) Secret Egg x1'
      ],
      [
        '200,000 Gold',
        '200,000 Gold',
        'Astrogem x100',
        'Astrogem x100',
        'Astrogem x100',
        '(High) Starstone x30',
        '(High) Starstone x20',
        '(Mid) Starstone x30',
        '(Fire) Truffel x1',
        '(Fire) Truffel x1',
        'Energy x100',
        'Energy x100',
        'Energy x100'
      ]
    ],
    eventInfo:
    '<ul>'+
    '<li><span class="bu"></span>You can receive a letter and reward for every misson and there are total 13 missions.</li>'+
    '<li><span class="bu"></span>Reward will be given when completing each syllable and final reward will be given when completing a word.</li>'+
    '<li><span class="bu"></span>Event will be paticipable only once per account and rewards will be deliverd through mail box.</li>'+
    '</ul>',
    btnName:
    '<span class="btn_normal">Get Reward</span>'+
    '<span class="btn_end">Completed</span>'
    },
    langJa = {        // 일본어
      questTitle: [
        [
          '<span>完成</span>VALEN',
          '<span>完成</span>TINE\'S',
          '<span>完成</span>DAY',
          '全てを完成',
        ],
        [
          'ストーリーを<br>500回進める',
          'スターストーンダンジョン<br>200回プレイする',
          'ゴーレムダンジョン<br>50回プレイ',
          'スターモンリーグに<br>50回参加',
          'クランバトル<br>30回参加する',
          'エネルギーを<br>500個使う',
          '1,000,000ゴールド<br>使う',
          'ジュエルの強化に<br>100回挑戦する',
          'スターモンを<br>10回覚醒させる',
          'ソウルストーンで<br>3回召喚する',
          'ネズ<br>30回発見',
          '飛行船宝物<br>300回発見',
          '友達にプレゼント<br>500回送る'
        ]
      ],
      rewardTitle: [
        [
          '(上級)光/闇の卵1個',
          '(上級)秘密の卵2個',
          '(上級)秘密の卵1個',
          '(伝説)秘密の卵1個',
        ],
        [
          '200,000ゴールド',
          '200,000ゴールド',
          'スタージュエル100個',
          'スタージュエル100個',
          'スタージュエル100個',
          '(上級)スターストーン<br>30個',
          '(上級)スターストーン<br>20個',
          '(中級)スターストーン<br>30個',
          '(火属性) トリュフル1個',
          '(火属性) トリュフル1個',
          'エネルギー100個',
          'エネルギー100個',
          'エネルギー100個'
        ]
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>文字ミッションは全部で13個です。各文字ミッションを達成すると報酬が獲得できます。</li>'+
        '<li><span class="bu"></span>文字ミッションをクリアして単語を完成すると追加報酬が獲得できて、全ての単語を完成すると最終完成報酬が獲得できます。</li>'+
        '<li><span class="bu"></span>アカウント1つにつき1回のみ参加可能でイベント報酬は「受信箱」に届きます。</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">受け取る</span>'+
        '<span class="btn_end">受け取り済み</span>'
    }, langTh = {       // 태국어
      questTitle: [
        [
          '<span>สำเร็จ</span>"VALEN"',
          '<span>สำเร็จ</span>"TINE\'S"',
          '<span>สำเร็จ</span>"DAY"',
          '<span>สำเร็จ</span>"VALENTINE\'S DAY"'
        ],
        [
          'เล่นด่านเนื้อเรื่อง<br>x500',
          'เล่นดันเจี้ยนศิลาดวงดาว<br>x200',
          'เล่นดันเจี้ยนโกเลม<br>50 ครั้ง',
          'ร่วมแอสโตรม่อนลีก<br>50 ครั้ง',
          'เข้าร่วมการต่อสู้กลุ่ม<br>x30',
          'ใช้ 500 พลังงาน',
          'ใช้ 1,000,000 ทอง',
          'อัพเกรดอัญมณี<br>100 ครั้ง',
          'ปลุกพลัง<br>10 ครั้ง',
          'เรียกศิลาวิญญาณ<br>3 ครั้ง',
          'ค้นหาเนซ<br>30 ครั้ง',
          'ค้นหาไอเทมบนเรือเหาะ<br>300 ครั้ง',
          'ส่งของขวัญให้เพื่อน<br>500 ครั้ง'
        ]
      ],
      rewardTitle: [
        [
          '(สูง) ไข่แสงสว่าง/ความมืด 1 ชิ้น',
          '(สูง) ไข่แห่งความลับ 2 ชิ้น',
          '(สูง) ไข่แห่งความลับ 1 ชิ้น',
          '(ตำนาน) ไข่แห่งความลับ 1 ชิ้น'
        ],
        [
          '200,000 ทอง',
          '200,000 ทอง',
          '100 แอสโตรเจม',
          '100 แอสโตรเจม',
          '100 แอสโตรเจม',
          '(สูง) ศิลาดวงดาว 30 ชิ้น',
          '(สูง) ศิลาดวงดาว 20 ชิ้น',
          '(กลาง) ศิลาดวงดาว 30 ชิ้น',
          '(ไฟ) ทรัฟเฟล 1ชิ้น',
          '(ไฟ) ทรัฟเฟล 1ชิ้น',
          '100 พลังงาน',
          '100 พลังงาน',
          '100 พลังงาน'
        ]
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>สามารถรับของรางวัลตัวอักษรในทุกภารกิจได้ทั้งหมด 13 ภารกิจ </li>'+
        '<li><span class="bu"></span>รรางวัลจะถูกส่งเมื่อเสร็จคำในแต่ละพยางค์ และรางวัลสุดท้ายจะส่งให้เมื่อสำเร็จเป็นคำ</li>'+
        '<li><span class="bu"></span>หนึ่งบัญชีสามารถเข้าร่วมกิจกรรมได้หนึ่งครั้ง และของรางวัลจะถูกส่งทางกล่องจดหมาย</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">รับรางวัล</span>'+
        '<span class="btn_end">รับแล้ว</span>'
    }, langHans = {       // 간체
      questTitle: [
        [
          '<span>完成</span>VALEN',
          '<span>完成</span>TINE\'S',
          '<span>完成</span>DAY',
          '完成所有字母'
        ],
        [
          '开启剧情500次',
          '进入星石副本200次',
          '挑战魔像副本50次',
          '参与星兽联赛50次',
          '参与30次帮会战斗',
          '使用能量500次',
          '使用1,000,000金币',
          '强化宝石100次',
          '进行星兽觉醒10次',
          '使用灵魂石召唤星兽3次',
          '寻找奈兹30次',
          '在飞空艇上找到隐藏物品300次',
          '发送500次好友礼物'
        ]
      ],
      rewardTitle: [
        [
          '(高级)光暗之蛋1个',
          '(高级)神秘的蛋2个',
          '(高级)神秘的蛋1个',
          '(传奇)神秘的蛋1个'
        ],
        [
          '200,000金币',
          '200,000金币',
          '星晶石100颗',
          '星晶石100颗',
          '星晶石100颗',
          '(高级)星石30颗',
          '(高级)星石20颗',
          '(中级)星石30颗',
          '(火属性) 可可丸子1只',
          '(火属性) 可可丸子1只',
          '能量x100',
          '能量x100',
          '能量x100'
        ]
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>13个一般任务，完成每个任务即可领取相应字母和奖励。</li>'+
        '<li><span class="bu"></span>完成每个单字即可再次领取相应奖励，完成所有单字即可领取最终奖励。</li>'+
        '<li><span class="bu"></span>单一帐号仅限参与一次，奖励将发送至收件匣。</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">领取奖励</span>'+
        '<span class="btn_end">已领取</span>'
  }, langHant = {         // 번체
    questTitle: [
      [
        '<span>完成</span>VALEN',
        '<span>完成</span>TINE\'S',
        '<span>完成</span>DAY',
        '完成所有字母'
      ],
      [
        '開啟劇情500次',
        '進入星石地城200次',
        '挑戰魔偶地城50次',
        '參與星獸聯賽50次',
        '參與30次家族戰鬥',
        '使用能量500次',
        '使用1,000,000金幣',
        '強化寶石100次',
        '進行星獣覺醒10次',
        '使用魂石召喚星獸3次',
        '尋找奈茲30次',
        '在飛船上找到隱藏物品300次',
        '發送500次好友禮物'
      ]
    ],
    rewardTitle: [
      [
        '(高級)光/暗卵1個',
        '(高級)神秘卵2個',
        '(高級)神秘卵1個',
        '(傳說)神秘卵1個'
      ],
      [
        '200,000金幣',
        '200,000金幣',
        '星寶石100顆',
        '星寶石100顆',
        '星寶石100顆',
        '(高級)星石30顆',
        '(高級)星石20顆',
        '(中級)星石30顆',
        '(火屬性)可可滴1隻',
        '(火屬性)可可滴1隻',
        '能量x100',
        '能量x100',
        '能量x100'
      ]
    ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu"></span>13個一般任務，完成每個任務即可領取相應字母和獎勵。 </li>'+
      '<li><span class="bu"></span>完成每個單字即可再次領取相應獎勵，完成所有單字即可領取最終獎勵。</li>'+
      '<li><span class="bu"></span>單一帳號僅限參與一次，獎勵將發送至收件匣。</li>'+
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