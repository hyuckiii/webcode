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
    date: '상품 수령 기간 : 9월 7일(수) ~ 10월 7일(금)',
    questTitle: [
      [
        '누적 에너지 사용<br><span>500</span>개',
        '누적 에너지 사용<br><span>1000</span>개',
        '누적 에너지 사용<br><span>3000</span>개',
        '누적 포획 성공<br><span>30</span>회',
        '누적 포획 성공<br><span>50</span>회',
        '진화 <span>10</span>회',
        '초월 <span>10</span>회',
        '마스터 레벨<br><span>15</span> 달성',
        '마스터 레벨<br><span>30</span> 달성'
      ],
      ['모든<br>미션 클리어']
    ],
    rewardTitle: [
      [
        '스타젬 +50',
        '[상급]<br> 비밀의 알 +1',
        '[상급]<br> 비밀의 알 +2',
        '골드 +50,000',
        '골드 +100,000',
        '스타젬+100',
        '[하급]<br> 별의 과일 +30',
        '[중급]<br> 별의 초월석 +5',
        '스타젬 +100'
      ],
      ['[상급]<br>빛/어둠 알 +1']
    ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu"></span>에너지 사용량, 포획 성공 미션의 경우 미션 클리어 후 선물받기를 진행하더라도 사용량이 초기화 되지 않습니다.</li>'+
      '<li><span class="bu"></span>모든 선물은 최초 1회에 한하여 지급됩니다.</li>'+
      '<li><span class="bu"></span>선물은 게임 내 우편함으로 지급되며, 우편함을 통해 확인 부탁 드립니다.</li>'+
      '<li><span class="bu"></span>선물은 10월 7일(금)까지 교환 가능합니다.</li>'+
      '</ul>',
    btnName:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">받기완료</span>'
  }, langEn = {     // 영어
    date: 'Gift Claim Period : Sept. 7th ~ Oct. 7th',
    questTitle: [
        [
          'Use <span>500</span> Energy',
          'Use <span>1,000</span> Energy',
          'Use <span>3,000</span> Energy',
          'Catch <span>30</span> Astromon',
          'Catch <span>50</span> Astromon',
          'Evolve <span>10</span> Astromon',
          'Ascend <span>10</span> Astromon',
          'Reach Master Level <span>15',
          'Reach Master Level <span>30</span>',
        ],
        ['Clear All Missions']
      ],
      rewardTitle: [
        [
          'Astrogem x50',
          '[High] Secret Egg x1',
          '[High] Secret Egg x2',
          '50,000 Gold',
          '100,000 Gold',
          'Astrogem x100',
          '[Low] Star Fruit x30',
          '[Mid] Starstone x5',
          'Astrogem x100'
        ],
        ['[High] Light/Dark Egg x1']
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>Your Energy count or Astromons caught will not be reset after clearing event missions.</li>'+
        '<li><span class="bu"></span>All gifts are rewarded only once.</li>'+
        '<li><span class="bu"></span>Gifts are distributed through the in-game Mailbox.</li>'+
        '<li><span class="bu"></span>All gifts must be claimed before October 7th.</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">Claim</span>'+
        '<span class="btn_end">Claimed</span>'
    }, langJa = {        // 일본어
      date: '報酬受け取り期間 : 9月7日(水) ~ 10月7日(金)',
      questTitle: [
        [
          'エネルギーを<span>500</span>回使う',
          'エネルギーを<span>1,000</span>回使う',
          'エネルギーを<span>3,000</span>回使う',
          '捕獲<span>30</span>回成功',
          '捕獲<span>50</span>回成功',
          '進化<span>10</span>回',
          '昇級<span>10</span>回',
          'マスターレベル<span>15</span> 達成',
          'マスターレベル<span>30</span> 達成'
        ],
        ['ミッションをすべてクリア']
      ],
      rewardTitle: [
        [
          'スタージュエル 50個',
          '[上級]秘密の卵 1個',
          '[上級]秘密の卵 2個',
          '50,000 ゴールド',
          '100,000 ゴールド',
          'スタージュエル 100個',
          '[下級]スターフルーツ 30個',
          '[中級]スターストーン 5個',
          'スタージュエル 100個'
        ],
        ['[上級]光/闇の卵 1個']
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>エネルギーミッションと捕獲成功ミッションは、クリアして報酬を受け取っても回数は初期化されません.</li>'+
        '<li><span class="bu"></span>すべての報酬は最初の1回だけ受け取れます.</li>'+
        '<li><span class="bu"></span>報酬はゲーム内の受信箱から受け取れます。受信箱をご確認ください.</li>'+
        '<li><span class="bu"></span>報酬は10月7日(金)まで受け取れます.</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">受け取る</span>'+
        '<span class="btn_end">受取済み</span>'
    }, langTh = {       // 태국어
      date: 'ระยะเวลารับของรางวัล : วันที่ 7 กันยายน (พุธ) ~ วันที่ 7 ตุลาคม (ศุกร์)',
      questTitle: [
        [
          'ใช้พลังงานสะสม <span>500</span> ชิ้น',
          'ใช้พลังงานสะสม <span>1,000 </span>ชิ้น',
          'ใช้พลังงานสะสม <span>3,000</span> ชิ้น',
          'จับแอสโตรมอนสะสม <span>30</span> ครั้ง',
          'จับแอสโตรมอนสะสม <span>50</span> ครั้ง',
          'วิวัฒนาการ <span>10</span> ครั้ง',
          'ข้ามขีดจำกัด <span>10</span> ครั้ง',
          'เลเวลถึง <span>15</span>',
          'เลเวลถึง <span>30</span>'
        ],
        ['เคลียร์ภารกิจทั้งหมด']
      ],
      rewardTitle: [
        [
          '50 แอสโตรเจม',
          'ไข่แห่งความลับ [สูง] 1 ชิ้น',
          'ไข่แห่งความลับ [สูง] 2 ชิ้น',
          '50,000 ทอง',
          '100,000 ทอง',
          '100 แอสโตรเจม',
          'ผลไม้แห่งดวงดาว [ต่ำ] 30 ชิ้น',
          'ศิลาดวงดาว [กลาง] 5 ชิ้น',
          '100 แอสโตรเจม'
        ],
        ['ไข่แห่งแสงสว่าง/ความมืด [สูง] 1ชิ้น']
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>ในกรณีของภารกิจใช้พลังงานสะสมและจับสำเร็จ เมื่อสำเร็จภารกิจและทำการกดรับของรางวัลแล้ว จำนวนการใช้จะไม่ถูกรีเซ็ต</li>'+
        '<li><span class="bu"></span>ของรางวัลทั้งหมดจะส่งให้ครั้งเดียว</li>'+
        '<li><span class="bu"></span>ของรางวัลจะถูกส่งให้ทางตู้จดหมาย กรุณาตรวจสอบในตู้จดหมาย</li>'+
        '<li><span class="bu"></span>สามารถแลกของขวัญได้จนถึง 7 ตุลาคม (ศุกร์)</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">รับรางวัล</span>'+
        '<span class="btn_end">รับรางวัล</span>'
    }, langHans = {       // 간체
      date: '奖励领取时间 ： 9月7日(三)～10月7日(五)',
      questTitle: [
        [
          '累计消耗<span>500</span>个能量',
          '累计消耗<span>1000</span>个能量',
          '累计消耗<span>3000</span>个能量',
          '累计捕捉成功<span>30</span>次',
          '累计捕捉成功<span>50</span>次',
          '进化<span>10</span>次',
          '晋升<span>10</span>次',
          '星兽师等级达到<span>15</span>级',
          '星兽师等级达到<span>30</span>级'
        ],
        ['完成所有任务']
      ],
      rewardTitle: [
        [
          '星晶石50个',
          '[高]神秘的蛋1个',
          '[高]神秘的蛋2个',
          '50,000金币',
          '100,000金币',
          '星晶石100个',
          '[低]星之果30个',
          '[中]星石5个',
          '星晶石100个'
        ],
        ['[高]光暗之蛋1个']
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>领取奖励后，累积使用的能量和捕捉次数将维持不变，可继续累积并挑战其他任务.</li>'+
        '<li><span class="bu"></span>所有奖励只发送一次.</li>'+
        '<li><span class="bu"></span>奖励将发送至收件箱，请注意查收.</li>'+
        '<li><span class="bu"></span>请在10月7日（周五）之前兑换奖励.</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">领取奖励</span>'+
        '<span class="btn_end">已领取</span>'
  }, langHant = {         // 번체
    date: '獎勵領取期間：9月7日(三)～10月7日(五)',
    questTitle: [
      [
        '累積使用能量<span>500</span>個',
        '累積使用能量<span>1000</span>個',
        '累積使用能量<span>3000</span>個',
        '累積成功捕捉 <span>30</span>次',
        '累積成功捕捉 <span>50</span>次',
        '進化 <span>10</span>次',
        '升階 <span>10</span>次',
        '星獸使等級達到 <span>15</span>',
        '星獸使等級達到 <span>30</span>'
      ],
      ['完成所有任務']
    ],
    rewardTitle: [
      [
        '星寶石50顆',
        '[高]神祕卵1個',
        '[高]神祕卵2個',
        '50,000金幣',
        '100,000金幣',
        '星寶石100顆',
        '[低]星果30個',
        '[中]星石5顆',
        '星寶石100顆'
      ],
      ['[高]光/暗卵1個']
    ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu"></span>領取獎勵後, 累積使用的能量和捕捉次數將維持不變, 可繼續累積並挑戰其他任務</li>'+
      '<li><span class="bu"></span>所有獎勵現領1次.</li>'+
      '<li><span class="bu"></span>獎勵會發送至遊戲內的收件匣,請至收件匣確認.</li>'+
      '<li><span class="bu"></span>獎勵兌換截止日期為10月 7日(五).</li>'+
      '</ul>',
    btnName:[
    '<span class="btn_normal">領取獎勵</span>'+
    '<span class="btn_end">完成領取</span>'
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