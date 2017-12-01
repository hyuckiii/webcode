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
        'TRICK<br><span>완성</span>',
        'OR<br><span>완성</span>',
        'TREAT<br><span>완성</span>',
        '모든글자<br><span>완성</span>'
      ],
      [
        '스토리모드<br><span>(노멀)</span><br>500회 클리어하기',
        '스토리모드<br><span>(하드)</span><br>250회 클리어하기',
        '스토리모드<br><span>(익스트림)</span><br>100회 클리어하기',
        '초월의 던전<br>클리어하기',
        '고대골렘 던전<br>클리어하기',
        '네즈찾기 25회',
        '친구에게 선물보내기 300회',
        '에너지 사용하기<br> 2000개',
        '리그티켓<br>사용하기 30개',
        '스타몬 작별하기<br>50회',
        '과일 사용하기<br>100회',
        '초월석 500개<br>획득하기'
      ]
    ],
    rewardTitle: [
      [
        '(상급)비밀의알<br>1개',
        '(중급)별의과일<br>5개',
        '(상급)비밀의알<br>1개',
        '(상급)빛/어둠의알<br>1개'
      ],
      [
        '80,000 골드',
        '90,000 골드',
        '100,000 골드',
        '(중급)어둠의과일<br>3개',
        '45,000 골드',
        '에너지 50개',
        '(하급)빛/어둠의 알 1개',
        '70,000 골드',
        '(상급)비밀의알<br>1개',
        '에너지 100개',
        '에너지 30개',
        '(중급)빛의과일<br>3개'
      ]
    ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu">● </span>일반미션은 총 12개이고 각 미션 달성마다 글자와 보상을 받으실 수 있습니다.</li>'+
      '<li><span class="bu">● </span>각 단어 달성 시 추가 보상이 지급되며, 모든 단어 완성 시 최종 보상을 받으실 수 있습니다.</li>'+
      '<li><span class="bu">● </span>계정 당 1회만 참여 가능하며, 보상은 우편함으로 지급됩니다.</li>'+
      '</ul>',
    btnName:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">완료</span>'
  }, langEn = {     // 영어
    questTitle: [
      [
        '<span>Spell</span> [TRICK]',
        '<span>Spell</span> [OR]',
        '<span>Spell</span> [TREAT]',
        '<span>Spell</span> All'
      ],
      [
        'Clear Story mode<br><span>(Normal)</span><br>x500',
        'Clear Story mode<br><span>(Hard)</span><br>x250',
        'Clear Story mode<br><span>(Extreme)</span><br>x100',
        'Clear Starstone<br>Dungeon<br>x300',
        'Clear Golem<br>Dungeon<br>x50',
        'Find Nezz on airship x25',
        'Send Gold to friends x300',
        'Use Energy<br>x2000',
        'Play Astromon<br>League<br>x30',
        'Release<br>Astromon<br>x50',
        'Feed Astromon<br>Fruits x100',
        'Collect Starstone<br>x500'
      ]
    ],
    rewardTitle: [
      [
        '(High) Secret Egg x1',
        '(Mid) Star Fruit x5',
        '(High) Secret Egg x1',
        '(High) Light/Dark Egg x1'
      ],
      [
        '80,000 Gold',
        '90,000 Gold',
        '100,000 Gold',
        '(Mid) Dark Fruit<br>x3',
        '45,000 Gold',
        'Energy x50',
        '(Low) Light/Dark Egg x1',
        '70,000 Gold',
        '(High) Secret Egg<br>x1',
        'Energy x100',
        'Energy x30',
        '(Mid) Light Fruit<br>x3'
      ]
    ],
    eventInfo:
    '<ul>'+
    '<li><span class="bu">● </span>You can collect letters and rewards for completing each of the 12 missions.</li>'+
    '<li><span class="bu">● </span>Bonus rewards are given for spelling each word.<br>Complete the whole sentence to receive a final bonus reward.</li>'+
    '<li><span class="bu">● </span>You can only participate once per account. The rewards will be sent to your inbox.</li>'+
    '</ul>',
    btnName:
    '<span class="btn_normal">Get Reward</span>'+
    '<span class="btn_end">Completed</span>'
    },
    langJa = {        // 일본어
      questTitle: [
        [
          '<span>「TRICK」</span>完成',
          '<span>「OR」</span>完成',
          '<span>「TREAT」</span>完成',
          'すべて完成',
        ],
        [
          'ストーリーモード<br><span>(NORMAL)</span><br>500回クリア',
          'ストーリーモード<br><span>(HARD)</span><br>250回クリア',
          'ストーリーモード<br><span>(EXTREME)</span><br>100回クリア',
          'スターストーンダンジョン<br>300回クリア',
          'ゴーレムダンジョン<br>50回クリア',
          'ネズを25回発見する',
          'フレンドにプレゼントを 300回送る',
          'エネルギーを<br>2000個使う',
          'リーグチケットを<br>30個使う',
          'スターモンを<br>50回解放する',
          'フルーツを<br>100回食べさせる',
          'スターストーンを<br>500個獲得する'
        ]
      ],
      rewardTitle: [
        [
          '(上級)秘密の卵1個',
          '(中級)スターフルーツ5個',
          '(上級)秘密の卵1個',
          '(上級)光/闇の卵1個'
        ],
        [
          '80,000ゴールド',
          '90,000ゴールド',
          '100,000ゴールド',
          '(中級)ダークフルーツ3個',
          '45,000ゴールド',
          'エネルギー50個',
          '(下級)光/闇の卵1個',
          '70,000ゴールド',
          '(上級)秘密の卵1個',
          'エネルギー100個',
          'エネルギー30個',
          '(中級)スターフルーツ3個',
        ]
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu">● </span>ノーマルミッション全部で12個で、ミッションを達成するとアルファベットとアイテムがもらえます。</li>'+
        '<li><span class="bu">● </span>アルファベットを集めて単語を完成させるとボーナスアイテムがもらえます。単語をすべて完成させると最終ボーナスがもらえます。</li>'+
        '<li><span class="bu">● </span>1つのアカウントにつき1回のみ参加できます。アイテムは受信箱に届きます。</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">受け取る</span>'+
        '<span class="btn_end">受け取り済み</span>'
    }, langTh = {       // 태국어
      questTitle: [
        [
          '<span>สำเร็จ</span>TRICK',
          '<span>สำเร็จ</span>OR',
          '<span>สำเร็จ</span>TREAT',
          'สำเร็จทั้งหมด'
        ],
        [
          'เคลียร์ด่านเนื้อเรื่อง<br><span>(ปกติ)</span> 500 ครั้ง',
          'เคลียร์ด่านเนื้อเรื่อง<br><span>(ยาก)</span> 250 ครั้ง',
          'เคลียร์ด่านเนื้อเรื่อง<br><span>(สุดขีด)</span> 100 ครั้ง',
          'เคลียร์ดันเจี้ยน<br>ศิลาดวงดาว 300 ครั้ง',
          'เคลียร์ดันเจี้ยน<br>โกเล็ม 50 ครั้ง',
          'เจอเนซ 25 ครั้ง',
          'ส่งของขวัญให้เพื่อน 300 ครั้ง',
          'ใช้ 2000 พลังงาน',
          'ใช้ตั๋วลีก 30 ใบ',
          'ปล่อยแอสโตรม่อน<br>50 ครั้ง',
          'ใช้ผลไม้ 100 ครั้ง',
          'เก็บศิลาดวงได้<br>500 ชิ้น'
        ]
      ],
      rewardTitle: [
        [
          '(สูง)ไข่แห่งความลับ 1 ชิ้น',
          '(ปานกลาง)ผลไม้แห่งดวงดาว 5 ชิ้น',
          '(สูง) ไข่แห่งความลับ 1 ชิ้น',
          '(สูง) ไข่แห่งแสงสว่าง/ความมืด 1 ชิ้น'
        ],
        [
          '80,000 ทอง',
          '90,000 ทอง',
          '100,000 ทอง',
          '(ปานกลาง) ผลไม้แห่งความมืด 3 ชิ้น',
          '45,000 ทอง',
          '50 พลังงาน',
          '(ต่ำ) ไข่แห่งแสงสว่าง/ความมืด<br>1 ชิ้น',
          '70,000 ทอง',
          '(สูง) ไข่แห่งความลับ 1 ชิ้น',
          '100 พลังงาน',
          '30 พลังงาน',
          '(ปานกลาง) ผลไม้แห่งแสงสว่าง<br>3 ชิ้น'
        ]
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu">● </span>ภารกิจทั่วไปทั้งหมด 12 ภารกิจ เมื่อสำเร็จแต่ละภารกิจจะได้รับตัวอักษรและของรางวัล</li>'+
        '<li><span class="bu">● </span>รับรางวัลเมื่อสำเร็จแต่ละคำ และรับรางวัลสุดท้ายเมื่อสำเร็จทั้งหมด</li>'+
        '<li><span class="bu">● </span>สามารถเข้าร่วมได้บัญชีละหนึ่งครั้งเท่านั้น รางวัลจะถูกส่งไปยังตู้จดหมาย</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">รับรางวัล</span>'+
        '<span class="btn_end">รับแล้ว</span>'
    }, langHans = {       // 간체
      questTitle: [
        [
          '<span>组成</span>TRICK',
          '<span>组成</span>OR',
          '<span>组成</span>TREAT',
          '完成所有单词'
        ],
        [
          '通过500次<br>剧情模式<span>(普通)</span>',
          '通过250次<br>剧情模式<span>(困难)</span>',
          '通过100次<br>剧情模式<span>(地狱)</span>',
          '通过300次<br>星石副本',
          '通过50次<br>魔像副本',
          '寻找奈兹 25次',
          '赠送礼物给好友 300次',
          '使用能量x2000',
          '使用联赛券<br>30张',
          '释放星兽<br>50次',
          '使用水果<br>100次',
          '收集星石<br>500颗'
        ]
      ],
      rewardTitle: [
        [
          '(高级)神秘的蛋1个',
          '(中级)星之果5个',
          '(高级)神秘的蛋1个',
          '(高级)光暗之蛋1个'
        ],
        [
          '80,000金币',
          '90,000金币',
          '100,000金币',
          '(中级)暗之果3个',
          '45,000金币',
          '能量x50',
          '(低级)光暗之蛋1个',
          '70,000金币',
          '(高级)神秘的蛋1个',
          '能量x100',
          '能量x30',
          '(中级)光之果3个'
        ]
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu">● </span>活动包含12项普通任务，每达成一项任务即可获得相对应的英文字母和奖励。</li>'+
        '<li><span class="bu">● </span>用获得的英文字母组成英文单词后，可取得额外奖励，完成所有单词后可获得最终奖励。</li>'+
        '<li><span class="bu">● </span>各帐号限参与活动一次，奖励将发送至收件箱内。</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">领取奖励</span>'+
        '<span class="btn_end">已领取</span>'
  }, langHant = {         // 번체
    questTitle: [
      [
        '<span>組成</span>TRICK',
        '<span>組成</span>OR',
        '<span>組成</span>TREAT',
        '完成所有單字'
      ],
      [
        '通過500次<br>劇情模式<span>(普通)</span>',
        '通過250次<br>劇情模式<span>(困難)</span>',
        '通過100次<br>劇情模式<span>(極難)</span>',
        '通過300次<br>星石地城',
        '通過50次<br>魔偶地城',
        '尋找奈茲 25次',
        '贈送禮物給好友 300次',
        '使用能量x2000',
        '使用聯賽券<br>30張',
        '釋放星獸<br>50次',
        '使用果實<br>100次',
        '收集星石<br>500顆'
      ]
    ],
    rewardTitle: [
      [
        '(高級)神秘卵1個',
        '(中級)星果5個',
        '(高級)神秘卵1個',
        '(高級)光/暗卵1個',
      ],
      [
        '80,000金幣',
        '90,000金幣',
        '100,000金幣',
        '(中級)暗星果3個',
        '45,000金幣',
        '能量x50',
        '(低級)光/暗卵1個',
        '70,000金幣',
        '(高級)神秘卵1個',
        '能量x100',
        '能量x30',
        '(中級)光星果3個'
      ]
    ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu">● </span>活動包含12項普通任務，每達成一項任務即可獲得相對應的英文字母和獎勵。</li>'+
      '<li><span class="bu">● </span>用獲得的英文字母組成英文單字後，可取得額外獎勵，完成所有單字後可獲得最終獎勵。</li>'+
      '<li><span class="bu">● </span>各帳號限參與活動一次，獎勵將發送至收件匣內。</li>'+
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