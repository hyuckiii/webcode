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
        '누적 포인트<br>10개',
        '누적 포인트<br>50개',
        '누적 포인트<br>100개',
        '누적 포인트<br>300개',
        '누적 포인트<br>500개',
        '누적 포인트<br>1000개',
        '누적 포인트<br>1500개',
        '누적 포인트<br>2000개',
        '누적 포인트<br>3000개'
      ],
      rewardTitle: [
        '★4~6<br>보석상자 1개',
        '에너지<br>100개',
        '★6<br>보석상자 1개',
        '에너지<br>150개',
        '(상급)<br>비밀의 알 3개',
        '에너지<br>200개',
        '500,000<br>골드',
        '(전설)<br>비밀의 알 1개',
        '★4<br>확정 스킬북 1개'
      ],
      btnName:
				'<span class="btn_normal">보상받기</span>'+
				'<span class="btn_end">받기완료</span>',
			successMessage: [
				'마스터님, 모든 특명을 완료하는 날까지 힘내자구요!',
				'우와, 에너지 받았다! 모험가서 저 레벨업시켜주실거죠?',
				'좋은 보석이 나오면 꼭 저에게 주셔야 해요~? 약속★',
				'에너지를 가지고 모험에 가면~♩ 레벨이 마구 오르죠~♪',
				'신난다! 이 알을 소환하면 제게도 멋진 친구가 생기는 거에요?',
				'마스터님, 저도 언젠가 3진화체가 될 수 있을까요?',
				'골드에요, 골드! 우리 이제 부자다! 그쵸?',
				"만약 알에서 또 다른 '빅토리아'가 나오면 저를 진화시켜주실건가요?",
				'우리 드디어 모든 특명을 완수했어요★ 함께해서 너무 즐거웠어요!'
			]
    }, 
		langEn = {     // 영어
      questTitle: [
        '10 Accumulated<br>Points',
        '50 Accumulated<br>Points',
        '100 Accumulated<br>Points',
        '300 Accumulated<br>Points',
        '500 Accumulated<br>Points',
        '1000 Accumulated<br>Points',
        '1500 Accumulated<br>Points',
        '2000 Accumulated<br>Points',
        '3000 Accumulated<br>Points'
      ],
      rewardTitle: [
        '4★~6★<br>Gem Chest X 1',
        '100 Energy',
        '6★<br>Gem Chest X 1',
        '150 Energy',
        '(High)<br>Secret Egg X 3',
        '200 Energy',
        '500,000<br>Gold',
        '(Legendary)<br>Secret Egg X 1',
        '4★<br>Skill Book X 1'
      ],
      btnName:
				'<span class="btn_normal">Get Reward</span>'+
				'<span class="btn_end">Completed</span>',
			successMessage: [
        'I will follow you till the end, Master!',
        'Yes, It’s Energy! Time to level up!',
        'Will you equip me a 6★ gem? Promise★',
        'More Energies~♩ More Adventures~♪',
        'Hooray! I hope they become my friends',
        'Master, will I ever evolve into Nike?',
        'It’s gold! And a lot of them too! We are rich now, right?',
        'If there happens to be another Victoria, will you let me be the one to evolve?',
        'It was my greatest pleasure traveling with you, Master!★'
			]
    },
    langJa = {        // 일본어
      questTitle: [
        '累積 <br>10ポイント',
        '累積 <br>50ポイント',
        '累積 <br>100ポイント',
        '累積 <br>300ポイント',
        '累積 <br>500ポイント',
        '累積 <br>1000ポイント',
        '累積 <br>1500ポイント',
        '累積 <br>2000ポイント',
        '累積 <br>3000ポイント'
      ],
      rewardTitle: [
        '★4～6<br>ジュエルの箱 1個',
        'エネルギー 100個',
        '★6<br>ジュエルの箱 1個',
        'エネルギー 150個',
        '(上級)<br>秘密の卵 3個',
        'エネルギー 200個',
        '500,000<br>ゴールド',
        '(伝説)<br>秘密の卵 1個',
        '★4<br>スキルブック 1個'
      ],
      btnName:
				'<span class="btn_normal">受け取る</span>'+
				'<span class="btn_end">受取済み</span>',
			successMessage: [
        '主！特命を完遂するまで頑張りましょう！',
        '主！エネルギーですよ！冒険ステージに連れてって、レベルアップしてください！',
        'ジュエルは私にくださいね！約束★',
        'エネルギーを使って冒険ステージに出ると～♩レベルが上がりますよ～♪ ',
        'すっごーい！この卵がふ化すると私にも素敵なフレンズができますね！',
        '主、いつになったら進化レベル3になれるでしょうか・・・？',
        'ゴールドですよ、ゴールド！大金持ちですよ！ね？',
        'もし卵から他の「ヴィクトリア」が出たら、進化してくれますよね・・・？',
        '主！やっと特命を完遂しましたね★すっごく楽しかったです！'
			]
    }, 
		langHans = {       // 간체
      questTitle: [
        '累积积分 <br>10个',
        '累积积分 <br>50个',
        '累积积分 <br>100个',
        '累积积分 <br>300个',
        '累积积分 <br>500个',
        '累积积分 <br>1000个',
        '累积积分 <br>1500个',
        '累积积分 <br>2000个',
        '累积积分 <br>3000个'
      ],
      rewardTitle: [
        '4~6★<br>宝石箱1个',
        '能量100个',
        '6★<br>宝石箱1个',
        '能量150个',
        '(高级)<br>神秘的蛋 3个',
        '能量200个',
        '500,000<br>金币',
        '(传奇)<br>神秘之蛋 1个',
        '4★<br>技能书1本'
      ],
      btnName:
				'<span class="btn_normal">领取奖励</span>'+
				'<span class="btn_end">已领取</span>',
			successMessage: [
        '星兽使者，一定要坚持到完成所有特别指令!',
        '哇, 拿到能量啦! 快去开始冒险帮我升级吧~',
        '如果出来好的宝石一定要镶嵌到我身上喔~ 拉钩★',
        '拿着能量去冒险~♩ 让我们尽情升级吧~♪',
        '开心! 没准这个蛋能召唤出帅气的星兽朋友喔~',
        '星兽使者, 你看我什么时候可以完成3级进化形态呀?',
        '金币！金币！我们现在是有钱人啦! 对吧?',
        '如果又召唤出另一只 ‘维多利亚’的话，可帮我进化吗?',
        '我们终于完成了所有的特别指令★ 很开心可以和你一起努力到最后!'
			]
    }, 
		langHant = {         // 번체
      questTitle: [
        '累計點數 <br>10個',
        '累計點數 <br>50個',
        '累計點數 <br>100個',
        '累計點數 <br>300個',
        '累計點數 <br>500個',
        '累計點數 <br>1000個',
        '累計點數 <br>1500個',
        '累計點數 <br>2000個',
        '累計點數 <br>3000個'
      ],
      rewardTitle: [
        '4~6★<br>寶石箱1個',
        '能量100個',
        '6★<br>寶石箱1個',
        '能量150個',
        '(高級)<br>神秘卵 3個',
        '能量200個',
        '500,000<br>金幣',
        '(傳說)<br>神秘卵 1個',
        '4★<br>技能秘笈1本'
      ],
      btnName:
        '<span class="btn_normal">領取獎勵</span>'+
        '<span class="btn_end">已領取</span>',
      successMessage: [
        '星獸使者，一定要堅持完成所有特別指令!',
        '哇, 拿到能量啦! 快去開始冒險幫我升級吧~',
        '如果出來好的寶石一定要裝備到我身上哦~? 拉鉤★',
        '拿著能量去冒險，讓我們盡情升級吧~♪',
        '開心! 我猜這個卵可能會召喚出帥氣的星獸朋友~',
        '星獸使者，你看我什麼時候可以完成3段進化形態呀?',
        '金幣！金幣！我們現在是有錢人啦! 對吧?',
        '如果能召喚出另一隻 ‘維多利亞’的話，可以幫我進化嗎?',
        '我們終於完成了所有的特別指令★ 很開心可以和你一起努力到最後!'
      ]
    }

  if (langType == 'ko'){
    return langKo;
  }else if (langType == 'en'){
    return langEn;
  }else if(langType == 'ja'){
    return langJa;
  }else if(langType == 'th'){
    return langTh;
  }else if (langType == 'zh-CN'){
    return langHans;
  }else if (langType == 'zh-TW'){
    return langHant;
  }else{
    return langEn;
  }
}