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
      '희귀 스타몬<br>포획 10회 성공',
      '초희귀 스타몬<br> 포획 3회 성공',
      '부화소에서<br> 알 50회 소환',
      '환생 또는<br>환생페스티벌<br>10회 소환',
      '스페셜상점에서<br> 무료 20회 소환',
      '스페셜상점에서<br> 10+1연차 5회 소환',
      '클랜 출석체크<br> 10회 진행',
      '클랜 지역<br> 수호전 30회 진행',
      ''
    ],
    rewardTitle: [
      '에너지 100개',
      '에너지 150개',
      '10만 골드',
      '20만 골드',
      '(상급) 초원의 알,(상급) 바다의 알,(상급) 불꽃의 알 1개씩',
      '(상급)비밀의 알 1개',
      '스타젬 50개',
      '스타젬 300개',
      ''
    ],
    eventInfo: '',
    btnName: ''
  }, langEn = {     // 영어
    questTitle: [
      'Rare Astromon Capture 10 times',
      'S.Rare Astromon Capture 3 times',
      'Summon Egg 50<br>times from Incubator',
      'Summon 10 times total at Rebirth Festival and Rebirth',
      'Summon 20 times Free at Special Shop',
      'Summon 10+1<br>5times at Special Shop',
      'Clan Attendnace Check 10 times',
      'Clan Regional Defense 30 times',
      ''
    ],
    rewardTitle: [
      'Energy x100',
      'Energy x150',
      '100,000 Gold',
      '200,000 Gold',
      '(High)Grassy Egg x1,(High)Ocean Egg x1,(High)Fiery Egg x1',
      '(High) Secret Egg x1',
      'Astrogem x50',
      'Astrogem x300',
      ''
    ],
    eventInfo: '',
    btnName: ''
    },
    langJa = {        // 일본어
      questTitle: [

        'レアスターモン<br>10回捕獲',
        'Sレアスターモン<br>3回捕獲',
        'ふ化器で卵<br>50回召喚',
        '再召喚及び<br>再召喚フェスで<br>10回召喚',
        'スペシャルショップで<br>無料召喚20回',
        'スペシャルショップで<br>10回+1召喚5回',
        'クラン出席10回',
        '地域防衛で<br>バトル30回',
        ''
      ],
      rewardTitle: [
        'エネルギー100個',
        'エネルギー150個',
        '100,000ゴールド',
        '200,000ゴールド',
        '(上級)草の卵1個,<上級>海の卵1個,<上級>火の卵1個',
        '(上級)秘密の卵1個',
        'スタージュエル50個',
        'スタージュエル300個',
        ''
      ],
      eventInfo: '',
      btnName: ''
    }, langTh = {       // 태국어
      questTitle: [
        'จับแอสโตรม่อน<br>หายาก 10 ครั้ง',
        'จับแอสโตรม่อน<br>หายากมาก 3 ครั้ง',
        'เรียกแอสโตรม่อน<br>จากไข่ 50 ครั้ง',
        'เรียกแอสโตรม่อนจากการกำเนิดใหม่หรือเทศกาล<br>กำเนิดใหม่ 10 ครั้ง',
        'เรียกแอสโตรม่อน<br>(ฟรี)จากร้านค้าพิเศษ 20 ครั้ง',
        'เรียกแอสโตรม่อน(10+1)จากร้านค้าพิเศษ 5 ครั้ง',
        'เชคชื่อแคลน<br>10 ครั้ง',
        'เข้าร่วมตีไททัน<br>30 ครั้ง',
        ''
      ],
      rewardTitle: [
        '100 พลังงาน',
        '150 พลังงาน',
        '100,000 ทอง',
        '200,000 ทอง',
        '(สูง) ไข่แห่งพงหญ้า 1 ชิ้น,(สูง) ไข่แห่งมหาสมุทร 1 ชิ้น,(สูง) ไข่แห่งเพลิง 1 ชิ้น',
        '(สูง)ไข่แห่งความลับ 1 ชิ้น',
        '50 แอสโตรเจม',
        '300 แอสโตรเจม',
        ''
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>สามารถรับของรางวัลตัวอักษรในทุกภารกิจได้ทั้งหมด 13 ภารกิจ</li>'+
        '<li><span class="bu"></span>รางวัลจะถูกส่งเมื่อเสร็จคำในแต่ละพยางค์ และรางวัลสุดท้ายจะส่งให้เมื่อสำเร็จเป็นคำ</li>'+
        '<li><span class="bu"></span>หนึ่งบัญชีสามารถเข้าร่วมกิจกรรมได้หนึ่งครั้ง และของรางวัลจะถูกส่งทางกล่องจดหมาย</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">รับรางวัล</span>'+
        '<span class="btn_end">รับแล้ว</span>'
    }, langHans = {       // 간체
      questTitle: [
        '成功捕获<br>10次稀有星兽',
        '成功捕获<br>3次超稀有星兽',
        '在孵化所<br>孵化50次蛋',
        '在重生和重生<br>庆典重生10次',
        '在特殊商店<br>召唤(免费)20次',
        '在特殊商店<br>10次+1召唤5次',
        '帮会签到<br>进行10次',
        '帮会地区防御战<br>进行30次',
        ''
      ],
      rewardTitle: [
        '能量100个',
        '能量150个',
        '100,000金币',
        '200,000金币',
        '(高级)翠绿之蛋 1个,(高级)海洋之蛋 1个,(高级)炽热之蛋 1个',
        '(高级)神秘的蛋 1个',
        '星晶石50颗',
        '星晶石300颗',
        ''
      ],
      eventInfo: '',
      btnName: ''
  }, langHant = {         // 번체
    questTitle: [
      '成功捕獲<br>10次稀有星獸',
      '成功捕獲<br>3次超稀有星獸',
      '在孵化所<br>孵化50次卵',
      '在重生和重生<br>慶典重生10次',
      '在特殊商店<br>召喚(免費)20次',
      '在特殊商店<br>10次+1召喚5次',
      '家族簽到<br>進行10次',
      '家族地區防衛戰<br>進行30次',
      ''
    ],
    rewardTitle: [
      '能量100個',
      '能量150個',
      '100,000金幣',
      '200,000金幣',
      '(高級)草原卵 1個,(高級)海洋卵 1個,(高級)火焰卵 1個',
      '(高級)神秘卵 1個',
      '星寶石50顆',
      '星寶石300顆',
      ''
    ],
    eventInfo: '',
    btnName: ''
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