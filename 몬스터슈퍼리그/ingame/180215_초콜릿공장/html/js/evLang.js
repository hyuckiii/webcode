/****************************************

  *monsterSuperLeague eventLanguageSet - ui.js*

    [language set]
      langKo(한국어)
      langEn(영어)
      langJa(일본어)
      langHans(중국어 - 간체)
      langHant(중국어 - 번체)

 ****************************************/
function evLang (langType) {
  var langKo = {        // 한국어
    questTitle: [
      '초콜릿박스 100% 완성 10회',
      '초콜릿 박스 100% 완성 15회',
      '보석강화<br>10회진행',
      '네즈<br>1회 찾기',
      '환생<br>1회 진행',
      '클랜 지역수호전 <br>1회 참여',
      '빙고 20조각<br>완성 1회',
      '수상한 상점에서<br>20,000 골드사용',
      '에너지<br>100개 사용',
      '스페셜 상점 1회 소환<br>무료소환 제외',
    ],
    rewardTitle: [
      '(상급)<br>빛/어둠의 알 1개',
      '(전설)<br>비밀의 알 1개',
      '20,000<br>골드',
      '스타젬<br>3개',
      '20,000<br>골드',
      '★4~6 <br>보석 상자 1개',
      '에너지<br>50개',
      '10,000<br>골드',
      '에너지<br>50개',
      '스타젬<br>30개',
    ],
    btnName:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">받기완료</span>'
  }, langEn = {     // 영어
    questTitle: [
      '초콜릿박스 100% 완성 10회',
      '초콜릿 박스 100% 완성 15회',
      '보석강화<br>10회진행',
      '네즈<br>1회 찾기',
      '환생<br>1회 진행',
      '클랜 지역수호전 <br>1회 참여',
      '빙고 20조각<br>완성 1회',
      '수상한 상점에서<br>20,000 골드사용',
      '에너지<br>100개 사용',
      '스페셜 상점 1회 소환<br>무료소환 제외',
    ],
    rewardTitle: [
      '(High)<br>Light/Dark Egg x1',
      '(Legendary)<br>Secret Egg x1',
      '20,000 Gold',
      'Astrogem x3',
      '20,000 Gold',
      '★4~6 <br>Gem Chest x1',
      'Energy x50',
      '10,000 Gold',
      'Energy x50',
      'Astrogem x30',
    ],
    btnName:
    '<span class="btn_normal">Collect</span>'+
    '<span class="btn_end">Claimed</span>'
    }, langJa = {        // 일본어
      questTitle: [
      '초콜릿박스 100% 완성 10회',
      '초콜릿 박스 100% 완성 15회',
      '보석강화<br>10회진행',
      '네즈<br>1회 찾기',
      '환생<br>1회 진행',
      '클랜 지역수호전 <br>1회 참여',
      '빙고 20조각<br>완성 1회',
      '수상한 상점에서<br>20,000 골드사용',
      '에너지<br>100개 사용',
      '스페셜 상점 1회 소환<br>무료소환 제외',
    ],
     rewardTitle: [
       '<上級><br>光/闇の卵　1個',
      '<伝説><br>秘密の卵 1個',
      '20,000 <br>ゴールド',
      'スタージ<br>ュエル 3個',
      '20,000<br> ゴールド',
      '★4～6<br>ジュエルの箱 1個',
      'エネルギー <br>50個',
      '10,000<br> ゴールド',
      'エネルギー <br>50個',
      'スタージュエル <br>30個',
    ],
      btnName:
        '<span class="btn_normal">受け取る</span>'+
        '<span class="btn_end">受取済み</span>'
    }, langHans = {       // 간체
      questTitle: [
      '100%完成巧克力盒子10次',
      '100%完成巧克力盒子15次',
      '宝石升级10次',
      '找到奈兹1次',
      '进行重生1次',
      '参与帮会地区防御战<br>1次',
      '完成抽取20<br>张宾果卡1次',
      '在神秘商店使用<br>20,000金币',
      '使用100个能量',
      '特殊商店召唤1次<br>(免费召唤除外)',
    ],
      rewardTitle: [
      '<高级><br>光暗之蛋 1个',
      '<传奇><br>神秘之蛋 1个',
      '20,000 金币',
      '星晶石 3个',
      '20,000 金币',
      '4~6★宝石箱 1个',
      '能量 50个',
      '10,000 金币',
      '能量 50个',
      '星晶石 30个',
    ],
      btnName:
        '<span class="btn_normal">领取奖励</span>'+
        '<span class="btn_end">已领取</span>'
  }, langHant = {         // 번체
    questTitle: [
      '100%完成巧克力盒子10次',
      '100%完成巧克力盒子15次',
      '寶石升級10次',
      '找到1次奈茲',
      '進行重生1次',
      '參與家族地區防衛戰<br>1次',
      '完成抽取20<br>張賓果牌1次',
      '在神秘商店使用<br>20,000金幣',
      '使用能量100個',
      '特殊商店1次召喚<br>(免費召喚除外)',
    ],
    rewardTitle: [
      '<高級><br>光/暗卵 1個',
      '<傳說><br>神秘卵 1個',
      '20,000 金幣',
      '星寶石 3顆',
      '20,000 金幣',
      '4~6★寶石箱 1個',
      '能量 50個',
      '10,000 金幣',
      '能量 50個',
      '星寶石 30個',
    ],
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
  }else if (langType == 'zh-CN'){
    return langHans
  }else if (langType == 'zh-TW'){
    return langHant
  }else{
    return langEn
  }
}