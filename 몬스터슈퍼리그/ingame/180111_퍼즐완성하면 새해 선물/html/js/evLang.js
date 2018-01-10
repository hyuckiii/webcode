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
      [''],
      [
      '에너지 100개 사용',
      '에너지 300개 사용',
      '에너지 500개 사용',
      '에너지 1000개 사용',
      '클랜 지역수호전 <br>3회 참여',
      '클랜 지역수호전 <br>15회 참여',
      '클랜 지역수호전 <br>24회 참여',
      '클랜 지역수호전 <br>60회 참여',
      '비공정에서 네즈 <br>1회 찾기',
      '비공정에서 네즈 <br>5회 찾기',
      '비공정에서 네즈 <br>15회 찾기',
      '비공정에서 네즈 <br>30회 찾기',
      '빙고 1회 완성',
      '빙고 3회 완성',
      '빙고 7회 완성',
      '빙고 15회 완성'
	]
    ],
    rewardTitle: [
      [''],
      [
      '50,000 골드',
      '70,000 골드',
      '100,000 골드',
      '300,000 골드',
      '★4~6 <br>보석 상자 1개',
      '★4~6 <br>보석 상자 1개',
      '★4~6 <br>보석 상자 1개',
      '★ 6 보석 상자 1개',
      'EXP 2배 부스터<br>(1시간)',
      'EXP 2배 부스터<br>(1시간)',
      'EXP 2배 부스터<br>(1시간)',
      '스타몬 출현확률 2배 <br>부스터(1시간)',
      '(상급) 불꽃의 알 1개',
      '(상급) 바다의 알 1개',
      '(상급) 초원의 알 1개',
      '(상급) 빛/어둠의 알 1개'
	]
    ],
    btnName:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">받기완료</span>'
  }, langEn = {     // 영어
    questTitle: [
      [''],
      [
      '100 Energy Used',
      '300 Energy Used',
      '500 Energy Used',
      '1000 Energy Used',
      'Joined Clan Region <br>Defense 3 Times',
      'Joined Clan Region <br>Defense 15 Times',
      'Joined Clan Region <br>Defense 24 Times',
      'Joined Clan Region <br>Defense 60 Times',
      'Found Nezz at Airship Once',
      'Found Nezz at Airship 5 times',
      'Found Nezz at Airship 15 times',
      'Found Nezz at Airship 30 times',
      'Completed Bingo <br>Once',
      'Completed Bingo <br>3 Times',
      'Completed Bingo <br>7 Times',
      'Completed Bingo <br>15 Times'
	]
    ],
    rewardTitle: [
      [''],
      [
      '50,000 Gold',
      '70,000 Gold',
      '100,000 Gold',
      '300,000 Gold',
      'One 4★~6★ <br>Gem Chest ',
      'One 4★~6★ <br>Gem Chest ',
      'One 4★~6★ <br>Gem Chest ',
      ' One 6★ Gem Chest',
      '2x EXP Booster(1hr)',
      '2x EXP Booster(1hr)',
      '2x EXP Booster(1hr)',
      '2x Astromon Encounter <br>Rate Booster(1hr)',
      '1 &lt;High&gt; Fiery Egg',
      '1 &lt;High&gt; Ocean Egg',
      '1 &lt;High&gt; Grassy Egg',
      '1 &lt;High&gt; Light/Dark Egg'
	]
    ],
    btnName:
    '<span class="btn_normal">Collect</span>'+
    '<span class="btn_end">Claimed</span>'
    }, langJa = {        // 일본어
      questTitle: [
      [''],
      [
      'エネルギー使用100個',
      'エネルギー使用300個',
      'エネルギー使用500個',
      'エネルギー使用<br>1,000個',
      '地域防衛戦に<br>3回参加',
      '地域防衛戦に<br>15回参加',
      '地域防衛戦に<br>24回参加',
      '地域防衛戦に<br>60回参加',
      '飛行船でネズを<br>1回探す',
      '飛行船でネズを<br>5回探す',
      '飛行船でネズを<br>15回探す',
      '飛行船でネズを<br>30回探す',
      'ビンゴ完了1回',
      'ビンゴ完了3回',
      'ビンゴ完了7回',
      'ビンゴ完了15回'
	]
    ],
     rewardTitle: [
      [''],
      [
      '50,000 ゴールド',
      '70,000ゴールド',
      '100,000ゴールド',
      '300,000ゴールド',
      '★4~6ジ<br>ュエルの箱 1個',
      '★4~6ジ<br>ュエルの箱 1個',
      '★4~6ジ<br>ュエルの箱 1個',
      '★6ジュ<br>エルの箱 1個',
      'EXP 2倍ブースト<br>(1時間)',
      'EXP 2倍ブースト<br>(1時間)',
      'EXP 2倍ブースト<br>(1時間)',
      'スターモン<br>出現確率2倍ブースト<br>(1時間)',
      '<上級>火の卵 1個',
      '<上級>海の卵 1個',
      '<上級>草の卵 1個',
      '<上級>光/闇の卵 1個'
	]
    ],
      btnName:
        '<span class="btn_normal">受け取る</span>'+
        '<span class="btn_end">受取済み</span>'
    }, langHans = {       // 간체
      questTitle: [
      [''],
      [
      '使用能量 100个',
      '使用能量 300个',
      '使用能量 500个',
      '使用能量 1000个',
      '参与帮会地区防御战 <br>3次',
      '参与帮会地区防御战 <br>15次',
      '参与帮会地区防御战 <br>24次',
      '参与帮会地区防御战 <br>60次',
      '在飞空艇找到奈兹 <br>1次',
      '在飞空艇找到奈兹 <br>5次',
      '在飞空艇找到奈兹 <br>15次',
      '在飞空艇找到奈兹 <br>30次',
      '完成宾果1次',
      '完成宾果3次',
      '完成宾果7次',
      '完成宾果15次'
	]
    ],
      rewardTitle: [
      [''],
      [
      '50,000 金币',
      '70,000 金币',
      '100,000 金币',
      '300,000 金币',
      '4~6★ 宝石箱1个',
      '4~6★ 宝石箱1个',
      '4~6★ 宝石箱1个',
      '6★ 宝石箱1个',
      '经验值2倍提升(1小时)',
      '经验值2倍提升(1小时)',
      '经验值2倍提升(1小时)',
      '出现率2倍提升(1小时)',
      '(高级) 炽热之蛋 1个',
      '(高级) 海蓝之蛋 1个',
      '(高级) 翠绿之蛋 1个',
      '(高级) 光暗之蛋 1个'
	]
    ],
      btnName:
        '<span class="btn_normal">领取奖励</span>'+
        '<span class="btn_end">已领取</span>'
  }, langHant = {         // 번체
    questTitle: [
      [''],
      [
      '使用能量 100個',
      '使用能量 300個',
      '使用能量 500個',
      '使用能量 1000個',
      '參與家族地區防衛戰 <br>3次',
      '參與家族地區防衛戰 <br>15次',
      '參與家族地區防衛戰 <br>24次',
      '參與家族地區防衛戰 <br>60次',
      '在飛船上找到奈茲 <br>1次',
      '在飛船上找到奈茲 <br>5次',
      '在飛船上找到奈茲 <br>15次',
      '在飛船上找到奈茲 <br>30次',
      '完成賓果1次',
      '完成賓果3次',
      '完成賓果7次',
      '完成賓果15次'
	]
    ],
    rewardTitle: [
      [''],
      [
      '50,000 金幣 ',
      '70,000 金幣',
      '100,000 金幣',
      '300,000 金幣',
      '4~6★ 寶石箱1個',
      '4~6★ 寶石箱1個',
      '4~6★ 寶石箱1個',
      '6★ 寶石箱1個',
      '經驗值2倍加成(1小時)',
      '經驗值2倍加成(1小時)',
      '經驗值2倍加成(1小時)',
      '出現概率2倍加成(1小時)',
      '(高級) 火焰卵 1個',
      '(高級) 海洋卵 1個',
      '(高級) 草原卵 1個',
      '(高級) 光/暗卵 1個'
	]
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
    return '존재하지 않는 언어입니다.'
  }
}