﻿/****************************************

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
        '누적 포인트<br><span>10개</span>',
        '누적 포인트<br><span>50개</span>',
        '누적 포인트<br><span>100개</span>',
        '누적 포인트<br><span>200개</span>',
        '누적 포인트<br><span>433개</span>',
        '누적 포인트<br><span>1000개</span>',
        '누적 포인트<br><span>2000개</span>',
        '누적 포인트<br><span>3000개</span>'
      ],
      rewardTitle: [
        '★4~6 일반 보석상자 1개',
        '에너지 100개',
        '★6 확정 일반 보석상자 1개',
        '(상급) 초원의 알 1개<br>(상급) 바다의 알 1개<br>(상급) 불꽃의 알 1개',
        '골드 500,000',
        '(상급) 빛어둠의 알 1개',
        '스타젬 300개',
        '(전설) 비밀의 알 1개'
      ],
      btnName:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">완료</span>'
    }, langEn = {     // 영어
      questTitle: [
        'Accumulate<br><span>10 points</span>',
        'Accumulate<br><span>50 points</span>',
        'Accumulate<br><span>100 points</span>',
        'Accumulate<br><span>200 points</span>',
        'Accumulate<br><span>433 points</span>',
        'Accumulate<br><span>1,000 points</span>',
        'Accumulate<br><span>2,000 points</span>',
        'Accumulate<br><span>3,000 points</span>'
      ],
      rewardTitle: [
        '4-6★ Gem Chest x1',
        'Energy x100',
        '6★ Gem Chest x1',
        '(High) Fiery Egg x1<br>(High) Ocean Egg x1<br>(High) Grassy Egg x1',
        '500,000 Gold',
        '(High) Light/Dark Egg x1',
        'Astrogem x300',
        '(Legendary) Secret Egg x1'
      ],
      btnName:
      '<span class="btn_normal">Get Reward</span>'+
      '<span class="btn_end">Completed</span>'
    },
    langJa = {        // 일본어
      questTitle: [
        '累積<br><span>10ポイント</span>',
        '累積<br><span>50ポイント</span>',
        '累積<br><span>100ポイント</span>',
        '累積<br><span>200ポイント</span>',
        '累積<br><span>433ポイント</span>',
        '累積<br><span>1000ポイント</span>',
        '累積<br><span>2000ポイント</span>',
        '累積<br><span>3000ポイント</span>'
      ],
      rewardTitle: [
        '★4～6ジュエルの箱',
        'エネルギー100個',
        '★6ジュエルの箱',
        '(上級)草の卵1個<br>(上級)海の卵1個<br>(上級)火の卵1個',
        '500,000ゴールド',
        '(上級)光/闇の卵1個',
        'スタージュエル300個',
        '(伝説)秘密の卵1個'
      ],
      btnName:
      '<span class="btn_normal">受け取る</span>'+
      '<span class="btn_end">受取済み</span>'
    }, langTh = {       // 태국어
      questTitle: [
        'สะสมเหรียญครบ<br><span>10 เหรียญ</span>',
        'สะสมเหรียญครบ<br><span>50 เหรียญ</span>',
        'สะสมเหรียญครบ<br><span>100 เหรียญ</span>',
        'สะสมเหรียญครบ<br><span>200 เหรียญ</span>',
        'สะสมเหรียญครบ<br><span>433 เหรียญ</span>',
        'สะสมเหรียญครบ<br><span>1000 เหรียญ</span>',
        'สะสมเหรียญครบ<br><span>2000 เหรียญ</span>',
        'สะสมเหรียญครบ<br><span>3000 เหรียญ</span>'
      ],
      rewardTitle: [
        'หีบอัญมณี 4-6★ 1 หีบ',
        '100 พลังงาน',
        'หีบอัญมณี 6★ 1 หีบ',
        '(สูง) ไข่แห่งเพลิง 1 ชิ้น<br>(สูง) ไข่แห่งมหาสมุทร 1 ชิ้น<br>(สูง) ไข่แห่งพงหญ้า 1 ชิ้น',
        '500,000 ทอง',
        '(สูง) ไข่แสงสว่าง/ความมืด 1 ชิ้น',
        '300 แอสโตรเจม',
        '(ตำนาน) ไข่แห่งความลับ 1 ชิ้น'
      ],
      btnName:
      '<span class="btn_normal">รับรางวัล</span>'+
      '<span class="btn_end">รับแล้ว</span>'
    }, langHans = {       // 간체
      questTitle: [
        '累积积分<br><span>10个</span>',
        '累积积分<br><span>50个</span>',
        '累积积分<br><span>100个</span>',
        '累积积分<br><span>200个</span>',
        '累积积分<br><span>433个</span>',
        '累积积分<br><span>1000个</span>',
        '累积积分<br><span>2000个</span>',
        '累积积分<br><span>3000个</span>',
      ],
      rewardTitle: [
        '4-6★宝石箱1个',
        '能量x100',
        '6 ★宝石箱1个',
        '(高级)炽热之蛋1个<br>(高级)海蓝之蛋1个<br>(高级)翠绿之蛋1个',
        '500,000金币',
        '(高级)光/暗之蛋1个',
        '星晶石300颗',
        '(传奇)神秘的蛋1个'
      ],
      btnName:
      '<span class="btn_normal">领取奖励</span>'+
      '<span class="btn_end">已领取</span>'
    }, langHant = {         // 번체
      questTitle: [
        '累計點數<br><span>10個</span>',
        '累計點數<br><span>50個</span>',
        '累計點數<br><span>100個</span>',
        '累計點數<br><span>200個</span>',
        '累計點數<br><span>433個</span>',
        '累計點數<br><span>1000個</span>',
        '累計點數<br><span>2000個</span>',
        '累計點數<br><span>3000個</span>'
      ],
      rewardTitle: [
        '4-6★寶石箱1個',
        '能量x100',
        '6★寶石箱1個',
        '(高級)火焰卵1個<br>(高級)海洋卵1個<br>(高級)草原卵1個',
        '500,000金幣',
        '(高級)光/暗卵1個',
        '星寶石300顆',
        '(傳說)神秘卵1個'
      ],
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