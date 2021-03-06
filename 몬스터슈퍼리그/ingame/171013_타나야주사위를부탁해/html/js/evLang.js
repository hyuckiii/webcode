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
      [''],
      [
        '강화 견습생',
        '강화 마스터'
      ]
    ],
    rewardTitle:[
      [
        '20,000 골드',
        '(중급)<br>비밀의 알 1개',
        '★4~6<br>보석 상자 1개',
        '50,000 골드',
        '에너지 30개',
        '(중급)<br>비밀의 알 1개',
        '★4~6<br>보석 상자 1개',
        '(상급)<br>비밀의 알 2개',
        '10,000 골드',
        '에너지 20개',
        '(상급)<br>비밀의 알 1개',
        '★6<br>보석 상자 1개',
        '에너지 20개',
        '(상급)<br>비밀의 알 1개',
        '20,000 골드',
        '에너지 50개'
      ],
      [
        '(어둠) 잭오리틀 1마리',
        '(전설)비밀의 알 1개'
      ]
    ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu"></span>주사위는 보유한 포인트에 한해 제한 없이 교환 가능합니다.</li>'+
      '<li><span class="bu"></span>이벤트 기간에만 포인트를 획득하실 수 있습니다.</li>'+
      '<li><span class="bu"></span>주사위를 굴려 당첨된 보상은 우편함으로 지급됩니다.</li>'+
      '<li><span class="bu"></span>100포인트를 획득한 상태에서 이벤트가 진행됩니다.</li>'+
      '<li><span class="bu"></span>일일 최대 200포인트까지 획득할 수 있으며, 오전 9시에 맞춰 일일 획득 가능 포인트가 초기화됩니다.</li>'+
      '</ul>',
    btnName:
      '<span class="btn_normal">받기</span>'+
      '<span class="btn_end">받기완료</span>'
  },
  langEn = {     // 영어
      questTitle: [
        [''],
        [
          'Upgrade Apprentice',
          'Upgrade Master'
        ]
      ],
      rewardTitle:[
        [
          '20,000 Gold',
          '(Mid)<br>Secret Egg x1',
          '4~6★<br>Gem Chest x1',
          '50,000 Gold',
          '30 Energy',
          '(Mid)<br>Secret Egg x1',
          '4~6★<br>Gem Chest x1',
          '(High)<br>Secret Egg x2',
          '10,000 Gold',
          '20 Energy',
          '(High)<br>Secret Egg x1',
          '6★<br>Gem Chest x1',
          '20 Energy',
          '(High)<br>Secret Egg x1',
          '20,000 Gold',
          '50 Energy'
        ],
        [
          '(Dark) Jack-O-Little x1',
          '(Legendary) Secret Egg x1'
        ]
      ],
    eventInfo:
    '<ul>'+
    '<li><span class="bu"></span>You will be able to exchange points you own, unlimited times</li>'+
    '<li><span class="bu"></span>You will be able to gain points only during event period.</li>'+
    '<li><span class="bu"></span>Rewards gained after rolling the dice will be distributed to your mailbox.</li>'+
    '<li><span class="bu"></span>You will be starting the event with the given 100 points</li>'+
    '<li><span class="bu"></span>You will be able to obtain maximum of 200 points daily, and the points will reset at 00:00 (UTC+0) everyday.</li>'+
    '</ul>',
    btnName:
    '<span class="btn_normal">Receive</span>'+
    '<span class="btn_end">Completed</span>'
    }, langJa = {        // 일본어
      questTitle: [
        [''],
        [
          '強化見習い',
          '強化マスター'
        ]
      ],
      rewardTitle: [
        [
          '20,000 ゴールド',
          '(中級)<br>秘密の卵 1個',
          '★4～6<br>ジュエルの箱 1個',
          '50,000 ゴールド',
          'エネルギー 30個',
          '(中級)<br>秘密の卵 1個',
          '★4～6<br>ジュエルの箱 1個',
          '(上級)<br>秘密の卵 2個',
          '10,000 ゴールド',
          'エネルギー 20個',
          '(上級)<br>秘密の卵 1個',
          '★6<br>ジュエルの箱 1個',
          'エネルギー 20個',
          '(上級)<br>秘密の卵 1個',
          '20,000 ゴールド',
          'エネルギー 50個',
        ],
        [
          '(闇)ジャック・オー・リトル 1体',
          '(伝説) 秘密の卵 1個'
        ]
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>所持ポイントの分だけサイコロを振ることができます。</li>'+
        '<li><span class="bu"></span>イベント期間のみポイントを獲得できます。</li>'+
        '<li><span class="bu"></span>サイコロを振って当たった報酬は受信箱に届きます。</li>'+
        '<li><span class="bu"></span>100ポイントを所持した状態からイベントが始まります。</li>'+
        '<li><span class="bu"></span>一日最大200ポイントまで獲得できます。09:00に一日獲得可能ポイントが初期化されます。</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">受け取る</span>'+
        '<span class="btn_end">受取済み</span>'
    }, langTh = {       // 태국어
      questTitle: [
        [''],
        [
          'อัปเกรดระดับฝึกหัด',
          'อัปเกรดระดับมาสเตอร์'
        ]
      ],
      rewardTitle: [
        [
          '20,000 ทอง',
          '(กลาง)<br>ไข่แห่งความลับ x1',
          'หีบอัญมณี 4~6★ x1',
          '50,000 ทอง',
          '30 พลังงาน',
          '(กลาง)<br>ไข่แห่งความลับ x1',
          'หีบอัญมณี 4~6★ x1',
          '(สูง)<br>ไข่แห่งความลับ x2',
          '10,000 ทอง',
          '20 พลังงาน',
          '(สูง)<br>ไข่แห่งความลับ  x1',
          'หีบอัญมณี 6★ x1',
          '20 พลังงาน',
          '(สูง)<br>ไข่แห่งความลับ x1',
          '20,000 ทอง',
          '50 พลังงาน'
        ],
        [
          'แจ็ค-โอ-ลิตเติ้ล (มืด) x1',
          '(ตำนาน) ไข่แห่งความลับ x1'
        ]
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>คุณสามารถแลกเปลี่ยนคะแนนที่คุณมีเป็นรางวัลได้ไม่จำกัดจำนวนครั้ง</li>'+
        '<li><span class="bu"></span>คุณสามารถได้รับคะแนนได้ในช่วงระยะเวลากิจกรรมเท่านั้น</li>'+
        '<li><span class="bu"></span>รางวัลที่ได้จากการทอยลูกเต๋าจะถูกส่งไปยังกล่องข้อความของคุณ</li>'+
        '<li><span class="bu"></span>คุณจะเริ่มทำกิจกรรมด้วยคะแนนพิเศษที่มอบให้ 100 คะแนน</li>'+
        '<li><span class="bu"></span>คุณสามารถรับคะแนนได้วันละ 200 คะแนน/วัน และสามารถรับคะแนนได้อีกครั้งในเวลา 07:00 น. (เวลาไทย) ของทุกวัน</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">รับแล้ว</span>'+
        '<span class="btn_end">สำเร็จ</span>'
    }, langHans = {       // 간체
      questTitle: [
        [''],
        [
          '强化学徒',
          '强化大师'
        ]
      ],
      rewardTitle: [
        [
          '20,000金币',
          '(中级)<br>神秘之蛋 1个',
          '★4~6宝<br>石箱1个',
          '50,000金币',
          '能量30个',
          '(中级)<br>神秘之蛋 1个',
          '★4~6宝<br>石箱1个',
          '(高级)<br>神秘之蛋2个',
          '10,000金币',
          '能量20个',
          '(高级)<br>神秘之蛋1个',
          '★6宝<br>石箱1个',
          '能量20个',
          '(高级)<br>神秘之蛋1个',
          '20,000金币',
          '能量50个'
        ],
        [
          '(暗) 南瓜头1只',
          '(传奇) 神秘之蛋1个'
        ]
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>对拥有积分数量没有限制。</li>'+
        '<li><span class="bu"></span>只能在活动期间内获得积分。</li>'+
        '<li><span class="bu"></span>通过投掷骰子获得的奖励将发送至收件箱。</li>'+
        '<li><span class="bu"></span>活动初始将拥有基本积分100P。</li>'+
        '<li><span class="bu"></span>每日最多可以获得200积分, 每日上午8点，对每日限制获得积分数量进行初始化。</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">领取奖励</span>'+
        '<span class="btn_end">已领取</span>'
    }, langHant = {         // 번체
      questTitle: [
        [''],
        [
          '強化見習生',
          '強化大師'
        ]
      ],
      rewardTitle: [
        [
          '20,000金幣',
          '(中級)<br>神秘卵 1個',
          '★4~6寶<br>石箱 1個',
          '50,000金幣',
          '能量30個',
          '(中級)<br>神秘卵 1個',
          '★4~6寶<br>石箱 1個',
          '(高級)<br>神秘卵 2個',
          '10,000金幣',
          '能量20個',
          '(高級)<br>神秘卵 1個',
          '★6寶<br>石箱 1個',
          '能量20個',
          '(高級)<br>神秘卵 1個',
          '20,000金幣',
          '能量50個'
        ],
        [
          '(暗) 小巫師1隻',
          '(傳說) 神秘卵 1個'
        ]
      ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu"></span>對擁有點數數量沒有限制。</li>'+
      '<li><span class="bu"></span>只能在活動期間內獲得點數。</li>'+
      '<li><span class="bu"></span>通過投擲骰子獲得的獎勵將發送至收件匣。</li>'+
      '<li><span class="bu"></span>活動初始將擁有基本點數100P。</li>'+
      '<li><span class="bu"></span>每日最多可獲得200點數, 每日上午8点，对每日限制獲得點數數量進行初始化。</li>'+
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