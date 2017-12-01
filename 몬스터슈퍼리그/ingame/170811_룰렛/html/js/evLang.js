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
      itemList: [
        '에너지 10개',
        '10,000 골드',
        '스타젬 5개',
        '(상급) 비밀의 알 1개',
        '에너지 20개',
        '스타젬 10개',
        '50,000 골드',
        '에너지 30개',
        '★4~6 보석 상자 1개',
        '20,000 골드'
      ],
      questTitle: [
        '포획 입문자<br><span>200</span> 포인트 사용',
        '포획 초보자<br><span>500</span> 포인트 사용',
        '포획 중급자<br><span>1,000</span> 포인트 사용',
        '포획 상급자<br><span>2,000</span> 포인트 사용',
        '포획 마스터<br><span>3,000</span> 포인트 사용'
      ],
      rewardTitle: [
        '(상급)<br>초원의 알 1개',
        '300 스타젬',
        '500,000 골드',
        '(상급)<br>빛/어둠의 알 1개',
        '(전설)<br>비밀의 알 1개'
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu">&bull;</span>보유한 포인트에 한해 제한 없이 룰렛을 돌리실 수 있습니다.</li>'+
        '<li><span class="bu">&bull;</span>이벤트 기간에만 포인트를 획득하실 수 있습니다.</li>'+
        '<li><span class="bu">&bull;</span>룰렛을 돌려 획득한 보상은 우편함으로 지급됩니다.</li>'+
        '<li><span class="bu">&bull;</span>일일 최대 200포인트까지 획득할 수 있으며, 오전 9시에 맞춰 일일 획득 가능 포인트가 초기화 됩니다.</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">보상받기</span>'+
        '<span class="btn_end">완료</span>'
    }, langEn = {     // 영어
      itemList:[
        'Energy x 10',
        '10,000 Gold',
        'Astrogem x 5',
        '(High) Secret Egg x 1',
        'Energy x 20',
        'Astrogem x 10',
        '50,000 Gold',
        'Energy x 30',
        '4-6★ Gem Chest x1',
        '20,000 Gold'
      ],
      questTitle: [
        'Novice capturer<br>Use <span>200</span> Points',
        'Apprentice capturer<br>Use <span>500</span> Points',
        'Journeyman  capturer<br>Use <span>1000</span> Points',
        'Adept capturer<br>Use <span>2000</span> Points',
        'Veteran capturer<br>Use <span>3000</span> Points'
      ],
      rewardTitle: [
        '(High)<br>Grassy Egg x 1',
        'Astrogem x 300',
        '500,000 Gold',
        '(High)<br>Light/Dark Egg x 1',
        '(Legendary)<br>Secret Egg x 1'
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu">&bull;</span>You are able to roll roulette unlimited times with the points you own.'+
        '<li><span class="bu">&bull;</span>You can acquire points only during the event period.'+
        '<li><span class="bu">&bull;</span>The reward obtained at roulette will be distributed to your mailbox.'+
        '<li><span class="bu">&bull;</span>Maximum of 200 Points can be obtained daily, and daily point limit will reset at 00:00 (midnight).'+
        '</ul>',
      btnName:
        '<span class="btn_normal">Get Reward</span>'+
        '<span class="btn_end">Completed</span>'
    },
    langJa = {        // 일본어
      itemList:[
        'エネルギー10個',
        '10,000ゴールド',
        'スタージュエル5個',
        '(上級)秘密の卵1個',
        'エネルギー20個',
        'スタージュエル10個',
        '50,000ゴールド',
        'エネルギー30個',
        '★4～6ジュエルの箱1個',
        '20,000ゴールド'
      ],
      questTitle: [
        '捕獲入門者<br><span>200</span>ポイント使用',
        '捕獲初心者<br><span>500</span>ポイント使用',
        '捕獲中級者<br><span>1000</span>ポイント使用',
        '捕獲上級者<br><span>2000</span>ポイント使用',
        '捕獲達人<br><span>3000</span>ポイント使用'
      ],
      rewardTitle: [
        '(上級)<br>草の卵 1個',
        'スタージュエル<br>300個',
        '500,000ゴールド',
        '(上級)<br>光/闇の卵 1個',
        '(伝説)<br>秘密の卵 1個'
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu">&bull;</span>所持ポイントの分だけルーレットを回せます。'+
        '<li><span class="bu">&bull;</span>イベント期間のみポイントの獲得ができます。'+
        '<li><span class="bu">&bull;</span>ルーレットを回して獲得した報酬は受信箱に届きます。'+
        '<li><span class="bu">&bull;</span>一日最大200ポイントまで獲得できます。午前9時に一日獲得可能ポイントが初期化されます。'+
        '</ul>',
      btnName:
        '<span class="btn_normal">受け取る</span>'+
        '<span class="btn_end">受取済み</span>'
    }, langTh = {       // 태국어
      itemList:[
        '10 พลังงาน',
        '10,000 ทอง',
        '5 แอสโตรเจม',
        '(สูง) ไข่แห่งความลับ 1 ชิ้น',
        '20 พลังงาน',
        '10 แอสโตรเจม',
        '50,000 ทอง',
        '30 พลังงาน',
        'หีบอัญมณี 4-6★ 1 หีบ',
        '20,000 ทอง'
      ],
      questTitle: [
        'นักจับขั้นต้น<br>ใช้ <span>200</span> เหรียญ',
        'นักจับขั้นกลาง<br>ใช้ <span>500</span> เหรียญ',
        'นักจับขั้นสูง<br>ใช้ <span>1,000</span> เหรียญ',
        'นักจับผู้เชี่ยวชาญ<br>ใช้ <span>2,000</span> เหรียญ',
        'นักจับผู้เชี่ยวชาญพิเศษใช้<br><span>3,000</span> เหรียญ'
      ],
      rewardTitle: [
        '(สูง)<br>ไข่แห่งพงหญ้า 1 ชิ้น',
        '300 แอสโตรเจม',
        '500,000 ทอง',
        '(สูง)<br>ไข่แสงสว่าง/ความมืด 1 ชิ้น',
        '(ตำนาน)<br>ไข่แห่งความลับ 1 ชิ้น'
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu">&bull;</span>คุณสามารถหมุนวงล้อได้ไม่จำกัดจำนวนครั้ง ตามจำนวนเหรียญที่คุณมี'+
        '<li><span class="bu">&bull;</span>สามารถรับเหรียญได้เฉพาะช่วงเวลากิจกรรมเท่านั้น'+
        '<li><span class="bu">&bull;</span>รางวัลที่ได้จากการหมุนวงล้อ จะถูกส่งไปยังกล่องจดหมายของคุณ'+
        '<li><span class="bu">&bull;</span>สามารถรับเหรียญได้สูงสุด 200 เหรียญต่อวัน และจะเริ่มต้นนับใหม่เวลา 07:00 น.'+
        '</ul>',
      btnName:
        '<span class="btn_normal">รับรางวัล</span>'+
        '<span class="btn_end">รับแล้ว</span>'
    }, langHans = {       // 간체
      itemList: [
        '能量x10',
        '10,000金币',
        '星晶石5颗',
        '(高级)神秘的蛋1个',
        '能量x20',
        '星晶石10颗',
        '50,000金币',
        '能量x30',
        '4-6★宝石箱1个',
        '20,000金币'
      ],
      questTitle: [
        '捕獲初學者<br>使用<span>200</span>积分',
        '捕獲新手<br>使用<span>500</span>积分',
        '捕獲高手<br>使用<span>1000</span>积分',
        '捕獲專家<br>使用<span>2000</span>积分',
        '捕獲大師<br>使用<span>3000</span>积分'
      ],
      rewardTitle: [
        '(高级)<br>翠绿之蛋1个',
        '星晶石300颗',
        '500,000金币',
        '(高级)<br>光/暗之蛋1个',
        '(传奇)<br>神秘之蛋1个',
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu">&bull;</span>已有积分不设限制可以旋转轮盘。'+
        '<li><span class="bu">&bull;</span>只有在活动期间可获得积分。'+
        '<li><span class="bu">&bull;</span>经由旋转轮盘获得的奖励将发送至收件箱。'+
        '<li><span class="bu">&bull;</span>每日最多可获得200积分，当天获得积分將在每日上午8点進行重置。'+
        '</ul>',
      btnName:
      '<span class="btn_normal">领取奖励</span>'+
      '<span class="btn_end">已领取</span>'
    }, langHant = {         // 번체
      itemList:[
        '能量x10',
        '10,000金幣',
        '星寶石5顆',
        '(高級)神秘卵1個',
        '能量x20',
        '星寶石10顆',
        '50,000金幣',
        '能量x30',
        '4-6★寶石箱1個',
        '20,000金幣'
      ],
      questTitle: [
        '捕捉初学者<br>使用<span>200</span>點數',
        '捕捉新手<br>使用<span>500</span>點數',
        '捕捉高手<br>使用<span>1000</span>點數',
        '捕捉专家<br>使用<span>2000</span>點數',
        '捕捉大师<br>使用<span>3000</span>點數'
      ],
      rewardTitle: [
        '(高級)<br>草原卵1個',
        '星寶石300顆',
        '500,000金幣',
        '(高級)<br>光/暗卵1個',
        '(傳說)<br>神秘卵1個'
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu">&bull;</span>持有點數不設限制可以旋轉輪盤。'+
        '<li><span class="bu">&bull;</span>只有在活動期間可獲得點數。'+
        '<li><span class="bu">&bull;</span>經由旋轉輪盤獲得的獎勵將發送至收件匣。'+
        '<li><span class="bu">&bull;</span>每日最多可獲得200點數。當天獲得點數將在每日上午8點進行重置。'+
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