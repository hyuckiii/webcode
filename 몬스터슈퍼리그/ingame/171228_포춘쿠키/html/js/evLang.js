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
      '5P 사용',
      '10P 사용',
      '20P 사용'
    ],
    rewardTitle: [
      '스타젬 50개',
      '(상급) 빛/어둠의 알 1개',
      '(전설) 비밀의 알 1개'
    ],
    btnName:
      '<span class="btn_normal">보상받기</span>'+
      '<span class="btn_end">받기완료</span>',
    successMessage: [
      '♣재미로 보는 포춘쿠키 점괘♣<br /><span>오늘은 스타몬리그에서 백전백승의 승기가 느껴집니다.</span>',
      '♣재미로 보는 포춘쿠키 점괘♣<br /><span>오늘은 클랜원간의 우애가 더욱 깊어지는 날입니다.</span>',
      '♣재미로 보는 포춘쿠키 점괘♣<br /><span>(전설의 스타몬)을 마주칠 기운이 느껴집니다.</span>',
      '♣재미로 보는 포춘쿠키 점괘♣<br /><span>멋진 스타몬이 소환될 행운이 느껴집니다.</span>',
      '♣재미로 보는 포춘쿠키 점괘♣<br /><span>원하는 스타몬을 포획할 기운이 강하게 느껴집니다.</span>',
      '♣재미로 보는 포춘쿠키 점괘♣<br /><span>오늘은 골렘 던전에서 귀한 보석을 얻을 듯 하군요.</span>',
      '♣재미로 보는 포춘쿠키 점괘♣<br /><span>오늘은 마스터가 원하는대로 빙고가 완성될지도 몰라요.</span>',
      '♣재미로 보는 포춘쿠키 점괘♣<br /><span>클랜상점의 골드 행운상자에도 도전해보세요, 혹시 잭팟이 터질지도?</span>'
    ]
  },
  langEn = {     // 영어
    questTitle: [
      '5 Points<br>Used',
      '10 Points<br>Used',
      '20 Points<br>Used'
    ],
    rewardTitle: [
      '300,000 Gold',
      '(Wood) D’Artagnan',
      '(Legendary)<br>Secret Egg x1'
    ],
    btnName:
    '<span class="btn_normal">Get Reward</span>'+
    '<span class="btn_end">Completed</span>',
    successMessage: [
      '♣Fortune Result♣<br /><span>You’re going to win 100% in Astromon League battles.</span>',
      '♣Fortune Result♣<br /><span>You will have companionship with your clan members</span>',
      '♣Fortune Result♣<br /><span>You will meet (Legendary)Astromon.</span>',
      '♣Fortune Result♣<br /><span>You will summon mersmerizing Astromon</span>',
      '♣Fortune Result♣<br /><span>You will capture Astromons you desire.</span>',
      '♣Fortune Result♣<br /><span>You might get special gem at Golem Dungeon.</span>',
      '♣Fortune Result♣<br /><span>You might complete the bingo as you wish it to be.</span>',
      '♣Fortune Result♣<br /><span>Challenge to Lcuk Box at Clan shop. Maybe you’ll get Jackpot?</span>'
    ]
  },
  langJa = {        // 일본어
    questTitle: [
      '500ポイント使用',
      '2000ポイント使用',
      '4500ポイント使用'
    ],
    rewardTitle: [
      '300,000ゴールド',
      '(木)ダルタニワン 1体',
      '<伝説>秘密の卵 1個'
    ],
    btnName:
      '<span class="btn_normal">受け取る</span>'+
      '<span class="btn_end">受取済み</span>',
    successMessage: [
      '♣フォーチュンクッキーのおみくじ♣<br /><span>スターモンリーグを制圧するでしょう。</span>',
      '♣フォーチュンクッキーのおみくじ♣<br /><span>クランメンバーとの仲が深まるでしょう。</span>',
      '♣フォーチュンクッキーのおみくじ♣<br /><span>伝説のスターモンと会えるでしょう。</span>',
      '♣フォーチュンクッキーのおみくじ♣<br /><span>素敵なスターモンを召喚するでしょう。</span>',
      '♣フォーチュンクッキーのおみくじ♣<br /><span>お気に入りのスターモンを捕獲するでしょう。</span>',
      '♣フォーチュンクッキーのおみくじ♣<br /><span>ゴーレムダンジョンから</span>',
      '♣フォーチュンクッキーのおみくじ♣<br /><span>ビンゴのマスが思うがままに埋まるでしょう。</span>',
      '♣フォーチュンクッキーのおみくじ♣<br /><span>クランポイントショップからジャックポットの予感！</span>'
    ]
  },
  langHans = {       // 간체
    questTitle: [
      '使用500积分',
      '使用2000积分',
      '使用4500积分'
    ],
    rewardTitle: [
      '300,000金币',
      '(木) 火枪手 1只',
      '(传奇)神秘之蛋 1个'
    ],
    btnName:
      '<span class="btn_normal">领取奖励</span>'+
      '<span class="btn_end">已领取</span>',
    successMessage: [
      '♣幸运饼干占卜♣<br /><span>有预感今天能在星兽联赛战无不胜！</span>',
      '♣幸运饼干占卜♣<br /><span>今天是能够与帮会成员增进友谊的一天。</span>',
      '♣幸运饼干占卜♣<br /><span>今天预感能够与传奇星兽相遇！</span>',
      '♣幸运饼干占卜♣<br /><span>有种能够召唤到帅气星兽的幸运感觉！</span>',
      '♣幸运饼干占卜♣<br /><span>强烈感觉到今天能够捕捉到一直想要拥有的那只星兽！</span>',
      '♣幸运饼干占卜♣<br /><span>感觉今天能在魔像副本获得珍贵的宝石！</span>',
      '♣幸运饼干占卜♣<br /><span>今天有预感好像不能如愿完成宾果活动了。</span>',
      '♣幸运饼干占卜♣<br /><span>今天有预感能在帮会商店的金币幸运箱中开出头奖!?</span>'
    ]
  },
  langHant = {         // 번체
    questTitle: [
      '使用500點數',
      '使用2000點數',
      '使用4500點數'
    ],
    rewardTitle: [
      '300,000金幣',
      '(木) 達太安 1隻',
      '(傳說)神秘卵 1個'
    ],
    btnName:
    '<span class="btn_normal">領取獎勵</span>'+
    '<span class="btn_end">已領取</span>',
    successMessage: [
      '♣幸運餅乾占卜♣<br /><span>有預感今天能在星獸聯賽戰無不勝！</span>',
      '♣幸運餅乾占卜♣<br /><span>今天是能夠與家族成員增進友誼的一天。</span>',
      '♣幸運餅乾占卜♣<br /><span>今天預感能夠與傳說星獸相遇！</span>',
      '♣幸運餅乾占卜♣<br /><span>有種能夠召喚到帥氣星獸的幸運感覺！</span>',
      '♣幸運餅乾占卜♣<br /><span>強烈感覺到今天能夠捕捉到一直想要擁有的那隻星獸！</span>',
      '♣幸運餅乾占卜♣<br /><span>感覺今天能在魔偶地城獲得珍貴的寶石！</span>',
      '♣幸運餅乾占卜♣<br /><span>今天有預感好像不能如願完成賓果活動了。</span>',
      '♣幸運餅乾占卜♣<br /><span>今天預感能在家族商店的金幣幸運箱中開出頭獎!?</span>'
    ]
  };

  if (langType == 'ko') {
    return langKo;
  } else if (langType == 'en') {
    return langEn;
  } else if(langType == 'ja') {
    return langJa;
  } else if (langType == 'zh-CN') {
    return langHans;
  } else if (langType == 'zh-TW') {
    return langHant;
  } else {
    return langEn;
  }
}