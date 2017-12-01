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
      '스토리모드<span>(hard)</span><br>클리어하기',
      '스토리모드<span>(extreme)</span><br>클리어하기',
      '에너지<br>사용하기',
      '에너지<br>사용하기',
      '초월의 던전<br>클리어하기',
      '어둠의 던전<br>클리어하기',
      '불의 던전<br>클리어하기',
      '물의 던전<br>클리어하기',
      '나무의 던전<br>클리어하기',
      '빛의 던전<br>클리어하기',
      '스타몬 5성<br>만들기',
      '스타몬 6성<br>만들기',
      '모든미션 완료하기'
    ],
    rewardTitle: [
      '200,000 골드',
      '300,000 골드',
      '스노우 1개',
      '스노우 1개',
      '(상급)별의 초월석<br>50개',
      '(상급)어둠의 초월석<br>30개',
      '(상급)불의 초월석<br>30개',
      '(상급)물의 초월석<br>30개',
      '(상급)나무의 초월석<br>30개',
      '(상급)빛의 초월석<br>30개',
      '(상급)비밀의 알<br>2개',
      '(상급)빛어둠의 알<br>1개',
      '(전설)비밀의 알<br>1개'
    ],
    btnName:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">완료</span>'
  }, langEn = {     // 영어
    questTitle: [
      'Clear Story mode<br><span>(Hard)</span>',
      'Clear Story mode<br><span>(Extreme)</span>',
      'Use Energy',
      'Use Energy',
      'Clear<br>Starstone Dungeon',
      'Clear<br>Dark Dungeon',
      'Clear<br>Fire Dungeon',
      'Clear<br>Water Dungeon',
      'Clear<br>Wood Dungeon',
      'Clear<br>Light Dungeon',
      'Ascend<br>Astromon to 5★',
      'Ascend<br>Astromon to 6★',
      'Clear<br>All Missions',
    ],
    rewardTitle: [
      '200,000 Gold',
      '300,000 Gold',
      'Snowee x1',
      'Snowee x1',
      '(High)<br>Starstone x50',
      '(High)<br> Darkstone x30',
      '(High)<br>Firestone x30',
      '(High)<br>Waterstone x30',
      '(High)<br>Woodstone x30',
      '(High)<br>Lightstone x30',
      '(High)<br>Secret Egg x2',
      '(High)<br>Light/Dark Egg x1',
      '(Legendary)<br>Secret Egg x1'
    ],
    btnName:
    '<span class="btn_normal">Get Reward</span>'+
    '<span class="btn_end">Completed</span>'
    },
    langJa = {        // 일본어
      questTitle: [
        'ストーリーモード<span>(HARD)</span><br>をクリアする',
        'ストーリーモード<span>(EXTREME)</span><br>をクリアする',
        'エネルギー<br>を使う',
        'エネルギー<br>を使う',
        'スターストーンダンジョン<br>をクリアする',
        '闇のダンジョン<br>をクリアする',
        '火のダンジョン<br>をクリアする',
        '水のダンジョン<br>をクリアする',
        '木のダンジョン<br>をクリアする',
        '光のダンジョン<br>をクリアする',
        'スターモンを<br>★5にする',
        'スターモンを<br>★6にする',
        'すべてのミッション<br>をクリアする'
      ],
      rewardTitle: [
        '200,000ゴールド',
        '300,000ゴールド',
        '「スノーウィ」1体',
        '「スノーウィ」1体',
        '(上級)スターストーン50個',
        '(上級)ダークストーン30個',
        '(上級)ファイアストーン30個',
        '(上級)ウォーターストーン30個',
        '(上級)ウッドストーン30個',
        '(上級)ライトストーン30個',
        '(上級)秘密の卵 2個',
        '(上級)光/闇の卵 1個',
        '(伝説)秘密の卵 1個'
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu">● </span>スターモン覚醒ミッションは覚醒素材の個数が覚醒回数になります</li>'+
        '<li><span class="bu">● </span>ボーナスアイテムはすべて初回1回のみ受け取ることができます</li>'+
        '<li><span class="bu">● </span>ボーナスアイテムはゲーム内の受信箱に届きます。受信箱を確認してください</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal">受け取る</span>'+
        '<span class="btn_end">受取済み</span>'
    }, langTh = {       // 태국어
      questTitle: [
        'เคลียร์ด่าน<br>เนื้อเรื่อง<span>(ยาก)</span>',
        'เคลียร์ด่าน<br>เนื้อเรื่อง<span>(สุดขีด)</span>',
        'ใช้พลังงาน',
        'ใช้พลังงาน',
        'เคลียร์ดันเจี้ยน<br>ศิลาดวงดาว',
        'เคลียร์ดันเจี้ยน<br>ความมืด',
        'เคลียร์<br>ดันเจี้ยนไฟ',
        'เคลียร์<br>ดันเจี้ยนน้ำ',
        'เคลียร์<br>ดันเจี้ยนไม้',
        'เคลียร์ดันเจี้ยน<br>แสงสว่าง',
        'สร้างแอสโตรมอน<br>5 ดาว',
        'สร้างแอสโตรมอน<br>6 ดาว',
        'สำเร็จภารกิจ<br>ทั้งหมด'
      ],
      rewardTitle: [
        '200,000 ทอง',
        '300,000 ทอง',
        'สโนวี่ 1 ตัว',
        'สโนวี่ 1 ตัว',
        '(สูง)ศิลาดวงดาว<br>50 ชิ้น',
        '(สูง)ศิลาความมืด<br>30 ชิ้น',
        '(สูง)ศิลาอัคคี<br>30 ชิ้น',
        '(สูง)ศิลาวารี<br>30 ชิ้น',
        '(สูง)ศิลาพฤกษา<br>30 ชิ้น',
        '(สูง)ศิลาแสงสว่าง<br>30 ชิ้น',
        '(สูง)ไข่แห่งความลับ<br>2 ชิ้น',
        '(สูง)ไข่แห่งแสงสว่าง/<br>ความมืด 1 ชิ้น',
        '(ตำนาน)ไข่แห่งความลับ<br>1 ชิ้น'
      ],
      btnName:
        '<span class="btn_normal">รับรางวัล</span>'+
        '<span class="btn_end">รับแล้ว</span>'
    }, langHans = {       // 간체
      questTitle: [
        '通过剧情模式<br><span>(hard)</span>',
        '通过剧情模式<br><span>(extreme)</span>',
        '使用能量',
        '使用能量',
        '通过星石副本 ',
        '通过暗域副本 ',
        '通过火域副本',
        '通过水域副本',
        '通过木域副本',
        '通过光域副本',
        '将星兽晋升至5星',
        '将星兽晋升至6星',
        '达成所有任务'
      ],
      rewardTitle: [
        '200,000金币',
        '300,000金币',
        '小雪球1个',
        '小雪球1个',
        '(高级)星石50颗',
        '(高级)暗之石30颗',
        '(高级)火之石30颗',
        '(高级)水之石30颗',
        '(高级)木之石30颗',
        '(高级)光之石30颗',
        '(高级)神秘的蛋2个',
        '(高级)光暗之蛋1个',
        '(传奇)神秘的蛋1个'
      ],
      btnName:
        '<span class="btn_normal">领取奖励</span>'+
        '<span class="btn_end">已领取</span>'
  }, langHant = {         // 번체
    questTitle: [
      '通過劇情模式<br><span>(hard)</span>',
      '通過劇情模式<br><span>(extreme)</span>',
      '使用能量',
      '使用能量',
      '通過星石地城 ',
      '通過暗之地城',
      '通過火之地城',
      '通過水之地城',
      '通過木之地城',
      '通過光之地城',
      '將星獸升階至5星 ',
      '將星獸升階至6星 ',
      '達成所有任務'
    ],
    rewardTitle: [
      '200,000金幣',
      '300,000金幣',
      '雪寶1個',
      '雪寶1個',
      '(高級)星石50顆',
      '(高級)暗之石30顆',
      '(高級)火之石30顆',
      '(高級)水之石30顆',
      '(高級)木之石30顆',
      '(高級)光之石30顆',
      '(高級)神秘卵2個',
      '(高級)光/暗卵1個',
      '(傳說)神秘卵1個'
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