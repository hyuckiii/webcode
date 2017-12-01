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
      '각성<br>20회 진행',
      '스타몬 5성 또는<br>6성으로 1회 초월하기',
      '보석 15강<br>1회 만들기',
      '시나리오<br>100회 승리',
      '초월의 던전<br>50회 승리',
      '불의 던전<br>25회 승리',
      '물의 던전<br>25회 승리',
      '나무의 던전<br>25회 승리',
      '빛의 던전<br>25회 승리',
      '어둠의 던전<br>25회 승리',
      '스페셜 던전<br>50회 승리',
      '',
      '',
      ''
    ],
    rewardTitle: [
      '300,000 골드',
      '300,000 골드',
      '300,000 골드',
      '에너지 150개',
      '에너지 150개',
      '(상급)<br>불의 초월석 10개',
      '(상급)<br>물의 초월석 10개',
      '(상급)<br>나무의 초월석 10개',
      '(상급)<br>빛의 초월석 10개',
      '(상급)<br>어둠의 초월석 10개',
      '(상급) 불/물/나무의<br>초월석 각 10개',
      '★6 보석 상자 1개',
      '(상급)<br>빛/어둠의 알 1개',
      '(전설)<br>비밀의 알 1개',
    ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu">&bull;</span>일반미션은 총 11개이고 각 미션 달성마다 글자와 보상을 받으실 수 있습니다.</li>'+
      '<li><span class="bu">&bull;</span>각 단어 달성 시 추가 보상이 지급되며, 모든 단어 완성 시 최종 보상을 받으실 수 있습니다. </li>'+
      '<li><span class="bu">&bull;</span>계정 당 1회만 참여 가능하며, 보상은 우편함으로 지급됩니다.</li>'+
      '</ul>',
    btnName:
    '<span class="btn_normal">보상받기</span>'+
    '<span class="btn_end">완료</span>'
  }, langEn = {     // 영어
      questTitle: [
        'Awaken Astromon x20',
        'Ascend an Astromon into 5★ or 6★',
        'Make a +15 Gem',
        'Adventure Battle Victory x100',
        'Starstone Dungeon Victory x50',
        'Fire Dungeon Victory x25',
        'Water Dungeon Victory x25',
        'Wood Dungeon Victory x25',
        'Light Dungeon Victory x25',
        'Dark Dungeon Victory x25',
        'Special Elemental Dungeon Victory x50',
        '',
        '',
        ''
      ],
      rewardTitle: [
        '300,000 Gold',
        '300,000 Gold',
        '300,000 Gold',
        'Energy x150',
        'Energy x150',
        '(High)<br>Firestone x10',
        '(High)<br>Waterstone x10',
        '(High)<br>Woodstone x10',
        '(High)<br>Lightstone x10',
        '(High)<br>Darkstone x10',
        '(High)<br>Fire/Water/Woodstone x10',
        '6★ Gem Chest x1',
        '(High)<br>Light/Dark Egg x1',
        '(Legendary)<br>Secret Egg x1'
      ],
      eventInfo:
      '<ul>'+
      '<li><span class="bu">&bull;</span>You can receive a letter and reward for every misson and there are total 11 missions.</li>'+
      '<li><span class="bu">&bull;</span>Reward will be given when completing each syllable and final reward will be given when completing a word.</li>'+
      '<li><span class="bu">&bull;</span>Each account only can participate and rewards will be delivered to your Inbox.</li>'+
      '</ul>',
      btnName:
      '<span class="btn_normal">Get Reward</span>'+
      '<span class="btn_end">Completed</span>'
    },
    langJa = {        // 일본어
      questTitle: [
        'スターモンを<br>20回覚醒させる',
        'スターモンを★5または★6で1回昇級させる',
        '+15ジュエルまで<br>1個強化する',
        'ステージで<br>100回勝利する',
        'スターストーン<br>ダンジョンで<br>50回勝利する',
        '火のダンジョンで<br>25回勝利する',
        '水のダンジョンで<br>25回勝利する',
        '木のダンジョンで<br>25回勝利する',
        '光のダンジョンで<br>25回勝利する',
        '闇のダンジョンで<br>25回勝利する',
        'スペシャルダンジョンで<br>50回勝利する',
        '',
        '',
        ''
      ],
      rewardTitle: [
        '300,000ゴールド',
        '300,000ゴールド',
        '300,000ゴールド',
        'エネルギー150個',
        'エネルギー150個',
        '(上級)<br>ファイアストーン10個',
        '(上級)<br>ウォーターストーン10個',
        '(上級)<br>ウッドストーン10個',
        '(上級)<br>ライトストーン10個',
        '(上級)<br>ダークストーン10個',
        '(上級)<br>ファイア/ウォーター/ウッドストーン10個',
        '★6ジュエルの箱1個',
        '(上級)<br>光/闇の卵1個',
        '(伝説)<br>秘密の卵1個'
      ],
      eventInfo:
      '<ul>'+
      '<li><span class="bu">&bull;</span>ミッションは全て11個です。各ミッションをクリアするたびに文字と報酬がもらえます。</li>'+
      '<li><span class="bu">&bull;</span>単語を完成する度に追加報酬が得られ、全ての単語を完成する場合最終報酬がもらえます。</li>'+
      '<li><span class="bu">&bull;</span>アカウントにつき1回のみ参加が可能です。報酬は受信箱に届きます。</li>'+
      '</ul>',
      btnName:
      '<span class="btn_normal">受け取る</span>'+
      '<span class="btn_end">受取済み</span>'
    }, langTh = {       // 태국어
      questTitle: [
        'ปลุกพลัง<br>20 ครั้ง',
        'ก้าวข้ามขีดจำกัดแอสโตรม่อนให้เป็น 5★ หรือ 6★ 1 ครั้ง',
        'สร้างอัญมณี +15<br>1 ครั้ง',
        'ชนะด่านผจญภัย<br>100 ครั้ง',
        'ชนะดันเจี้ยนศิลาดวงดาว<br>50 ครั้ง',
        'ชนะดันเจี้ยนธาตุไฟ<br>25 ครั้ง',
        'ชนะดันเจี้ยนธาตุน้ำ<br>25 ครั้ง',
        'ชนะดันเจี้ยนธาตุไม้<br>25 ครั้ง',
        'ชนะดันเจี้ยนธาตุแสง<br>25 ครั้ง',
        'ชนะดันเจี้ยนธาตุมืด<br>25 ครั้ง',
        'ชนะดันเจี้ยนธาตุพิเศษ<br>50 ครั้ง',
        '',
        '',
        ''
      ],
      rewardTitle: [
        '300,000 ทอง',
        '300,000 ทอง',
        '300,000 ทอง',
        '150 พลังงาน',
        '150 พลังงาน',
        '(สูง)<br>ศิลาอัคคี x10',
        '(สูง)<br>ศิลาวารี x10',
        '(สูง)<br>ศิลาพฤกษา x10',
        '(สูง)<br>ศิลาแสงสว่าง x10',
        '(สูง)<br>ศิลาความมืด x10',
        '(สูง)<br>10 ศิลาอัคคี/ศิลาวารี/ศิลาพฤกษา',
        'หีบอัญมณี 6★ 1 หีบ',
        '(สูง)<br>ไข่แสงสว่าง/ความมืด 1 ชิ้น',
        '(ตำนาน)<br>ไข่แห่งความลับ 1 ชิ้น'
      ],
      eventInfo:
      '<ul>'+
      '<li><span class="bu">&bull;</span>สามารถรับของรางวัลตัวอักษรในทุกภารกิจได้ทั้งหมด 11 ภารกิจ</li>'+
      '<li><span class="bu">&bull;</span>รางวัลจะถูกส่งเมื่อเสร็จคำในแต่ละพยางค์ และรางวัลสุดท้ายจะส่งให้เมื่อสำเร็จเป็นคำ</li>'+
      '<li><span class="bu">&bull;</span>กิจกรรมนี้สามารถทำได้ 1 ครั้ง/บัญชี และรางวัลที่ได้จะถูกส่งไปยังกล่องจดหมายของคุณ</li>'+
      '</ul>',
      btnName:
      '<span class="btn_normal">รับรางวัล</span>'+
      '<span class="btn_end">รับแล้ว</span>'
    }, langHans = {       // 간체
      questTitle: [
        '进行星兽觉醒<br>20次',
        '将星兽晋升为5星或<br>6星1次',
        '做出1颗强化<br>+15的宝石',
        '剧情关卡获胜<br>100次',
        '星石副本获胜<br>50次',
        '火域副本获胜<br>25次',
        '水域副本获胜<br>25次',
        '木域副本获胜<br>25次',
        '光域副本获胜<br>25次',
        '暗域副本获胜<br>25次',
        '特殊副本获胜<br>50次',
        '',
        '',
        ''
      ],
      rewardTitle: [
        '300,000金币',
        '300,000金币',
        '300,000金币',
        '能量x150',
        '能量x150',
        '(高级)<br>火之石10颗',
        '(高级)<br>水之石10颗',
        '(高级)<br>木之石10颗',
        '(高级)<br>光之石10颗',
        '(高级)<br>暗之石10颗',
        '(高级)<br>火/水/木之石10颗',
        '6★宝石箱1个',
        '(高级)<br>光暗之蛋1个',
        '(传奇)<br>神秘的蛋1个'
      ],
      eventInfo:
      '<ul>'+
      '<li><span class="bu">&bull;</span>11个一般任务，完成每个任务即可领取相应字母和奖励。</li>'+
      '<li><span class="bu">&bull;</span>完成每个单词即可再次领取相应奖励，完成所有单词即可领取最终奖励。</li>'+
      '<li><span class="bu">&bull;</span>单一帐号仅限参与一次，奖励将发送至收件箱。</li>'+
      '</ul>',
      btnName:
      '<span class="btn_normal">领取奖励</span>'+
      '<span class="btn_end">已领取</span>'
  }, langHant = {         // 번체
      questTitle: [
        '進行星獣覺醒<br>20次',
        '將星獸升階為<br>5星或6星1次',
        '做出一顆強化<br>+15的寶石',
        '劇情模式獲勝<br>100次',
        '星石地城獲勝<br>50次',
        '火之地城獲勝<br>25次',
        '水之地城獲勝<br>25次',
        '木之地城獲勝<br>25次',
        '光之地城獲勝<br>25次',
        '暗之地城獲勝<br>25次',
        '特殊地城獲勝<br>50次',
        '',
        '',
        ''
      ],
      rewardTitle: [
        '300,000金幣',
        '300,000金幣',
        '300,000金幣',
        '能量x150',
        '能量x150',
        '(高級)<br>火之石10顆',
        '(高級)<br>水之石10顆',
        '(高級)<br>木之石10顆',
        '(高級)<br>光之石10顆',
        '(高級)<br>暗之石10顆',
        '(高級)<br>火/水/木之石10顆',
        '6★寶石箱1個',
        '(高級)<br>光/暗卵1個',
        '(傳說)<br>神秘卵1個'
      ],
      eventInfo:
      '<ul>'+
      '<li><span class="bu">&bull;</span>11個一般任務，完成每個任務即可領取相應字母和獎勵。</li>'+
      '<li><span class="bu">&bull;</span>完成每個單詞即可再次領取相應獎勵，完成所有單詞即可領取最終獎勵。</li>'+
      '<li><span class="bu">&bull;</span>單一帳號僅限參與一次，獎勵將發送至收件匣。</li>'+
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