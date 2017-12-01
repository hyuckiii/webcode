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
      '<span class="item">에너지 묶음</span><br><span class="num">10회</span> 구매',
      '<span class="item">에너지 묶음</span><br><span class="num">20회</span> 구매',
      '<span class="item">에너지 묶음</span><br><span class="num">30회</span> 구매',
      '<span class="item">에너지 묶음</span><br><span class="num">40회</span> 구매',
      '<span class="item">에너지 묶음</span><br><span class="num">50회</span> 구매'
    ],
    rewardTitle: [
      '10만골드 +<br>(상급)비밀의 알 1개',
      '20만골드 +<br>(상급)불꽃의 알 1개',
      '30만골드 +<br>(상급)바다의 알 1개',
      '40만골드 +<br>(상급)초원의 알 1개',
      '50만골드 +<br>(상급)빛/어둠의 알 1개'
          ],
    btnName:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">받기완료</span>'
  }, langEn = {     // 영어
    questTitle: [
      '<span class="item">Energy Package</span><br> purchase <span class="num">10 times</span>',
      '<span class="item">Energy Package</span><br>purchase <span class="num">20 times</span>',
      '<span class="item">Energy Package</span><br>purchase <span class="num">30 times</span>',
      '<span class="item">Energy Package</span><br>purchase <span class="num">40 times</span>',
      '<span class="item">Energy Package</span><br>purchase <span class="num">50 times</span>'
    ],
    rewardTitle: [
      '100,000 Gold +<br>(High)Secret Egg x1',
      '200,000 Gold +<br>(High)Fiery Egg x1',
      '300,000 Gold +<br>(High)Ocean Egg x1',
      '400,000 Gold +<br>(High)Grassy Egg x1',
      '500,000 Gold +<br>(High)Light/Dark Egg x1'
    ],
    btnName:
    '<span class="btn_normal">Get Reward</span>'+
    '<span class="btn_end">Completed</span>'
    },
    langJa = {        // 일본어
      questTitle: [
        '<span class="item">エネルギーパッケージ</span><br>購入 <span class="num">10回</span>',
        '<span class="item">エネルギーパッケージ</span><br>購入 <span class="num">20回</span>',
        '<span class="item">エネルギーパッケージ</span><br>購入 <span class="num">30回</span>',
        '<span class="item">エネルギーパッケージ</span><br>購入 <span class="num">40回</span>',
        '<span class="item">エネルギーパッケージ</span><br>購入 <span class="num">50回</span>'
      ],
      rewardTitle: [
        '100,000ゴールド +<br>(上級)秘密の卵 1個',
        '200,000ゴールド +<br>(上級)火の卵 1個',
        '300,000ゴールド +<br>(上級)海の卵 1個',
        '400,000ゴールド +<br>(上級)草の卵 1個',
        '500,000ゴールド +<br>(上級)光/闇の卵 1個'
      ],
      btnName:
        '<span class="btn_normal">受け取る</span>'+
        '<span class="btn_end">受取済み</span>'
    }, langTh = {       // 태국어
      questTitle: [
        'ซื้อแพ็กเกจพลังงาน <span class="num">10 ครั้ง</span>',
        'ซื้อแพ็กเกจพลังงาน <span class="num">20 ครั้ง</span>',
        'ซื้อแพ็กเกจพลังงาน <span class="num">30 ครั้ง</span>',
        'ซื้อแพ็กเกจพลังงาน <span class="num">40 ครั้ง</span>',
        'ซื้อแพ็กเกจพลังงาน <span class="num">50 ครั้ง</span>'
      ],
      rewardTitle: [
        '100,000 ทอง (สูง) +<br>ไข่แห่งความลับ x1',
        '200,000 ทอง (สูง) +<br>ไขแห่งเพลิง x1',
        '300,000 ทอง (สูง) +<br>แข่งแห่งมหาสมุทร x1',
        '400,000 ทอง (สูง) +<br>ไข่แห่งพงหญ้า x1',
        '500,000 ทอง (สูง) +<br>ไข่แห่งแสงสว่าง/ความมืด x1'
      ],
      btnName:
        '<span class="btn_normal">รับรางวัล</span>'+
        '<span class="btn_end">รับเรียบร้อย</span>'
    }, langHans = {       // 간체
      questTitle: [
        '<span class="item">一包能量</span><br>购买<span class="num">10次</span>',
        '<span class="item">一包能量</span><br>购买<span class="num">20次</span>',
        '<span class="item">一包能量</span><br>购买<span class="num">30次</span>',
        '<span class="item">一包能量</span><br>购买<span class="num">40次</span>',
        '<span class="item">一包能量</span><br>购买<span class="num">50次</span>'
      ],
      rewardTitle: [
        '100,000金币 +<br>(高级)神秘之蛋 1个',
        '200,000金币 +<br>(高级)炽热之蛋 1个',
        '300,000金币 +<br>(高级)海蓝之蛋 1个',
        '400,000金币 +<br>(高级)翠绿之蛋 1个',
        '500,000金币 +<br>(高级)光暗之蛋 1个'
      ],
      btnName:
        '<span class="btn_normal">领取奖励</span>'+
        '<span class="btn_end">已领取</span>'
  }, langHant = {         // 번체
    questTitle: [
      '<span class="item">能量(包)</span><br>購買<span class="num">10次</span>',
      '<span class="item">能量(包)</span><br>購買<span class="num">20次</span>',
      '<span class="item">能量(包)</span><br>購買<span class="num">30次</span>',
      '<span class="item">能量(包)</span><br>購買<span class="num">40次</span>',
      '<span class="item">能量(包)</span><br>購買<span class="num">50次</span>'
    ],
    rewardTitle: [
      '100,000金幣 +<br>(高級) 神秘卵 1個',
      '200,000金幣 +<br>(高級) 火焰卵 1個',
      '300,000金幣 +<br>(高級) 海洋卵 1個',
      '400,000金幣 +<br>(高級) 草原卵 1個',
      '500,000金幣 +<br>(高級) 光/暗卵 1個'
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