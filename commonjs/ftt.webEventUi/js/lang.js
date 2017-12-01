/*****************************************************

  *gameName - lang.js*

  [language set]
    langEn(영어)
    langJa(일본어)
    langTh(태국어)
    langHans(중국어 - 간체)
    langHant(중국어 - 번체)
 
   [var name]
     questTitle            // 퀘스트명
     rewardTitle           // 보상명
     otherItem.titleCoin   // 코인표기 제목
     otherItem.titleQuest  // 퀘스트 안내 명
     otherItem.infoQuest   // 퀘스트 명, 상세안내
     otherItem.listQuest   // 코인 획득 방법 내용
     otherItem.titleRemark // 주의사항 제목
     otherItem.listRemark  // 주의사항 내용

 *****************************************************/



// 언어반환
function evLang (langType){
  var langEn = {  // 영어
      questTitle: [
        '30 Golden Coins',
        '30 Golden Coins',
        '50 Golden Coins',
        '100 Golden Coins',
        '150 Golden Coins',
        '200 Golden Coins',
        '250 Golden Coins',
        '300 Golden Coins'
      ],
      rewardTitle: [
        '50 Rations',
        '30,000 Gold',
        '50,000 Gold',
        '4★ Hero Token',
        '4★ Hero Stone',
        '100,000 Gold',
        '5★ Hero Token',
        '5★ Hero Stone'
      ],
      otherItem: {
        titleCoin: { value: 'My Golden Coins :' },
        titleQuest: { value: 'How to acquire <span>Golden Coins!</span>' },
        infoQuest: { value: 'Obtain up to 30 Golden Coins daily.' },
        listQuest: {
          value: [
            'Clear Story Mode <span>: 1 coin</span>',
            'Participate Stronghold Battle <span>: 5 coins</span>',
            'Participate Chapter Boss Battle <span>: 3 coins</span>',
            'Participate Arena Battle <span>: 5 coins</span>',
            'Participate Daily Boss Battle <span>: 2 coins</span>',
            'Hero Upgrade Attempt <span>: 3 coins</span>',
            'Participate Sanctuary Battle <span>: 1 coin</span>',
            'Hero Rank Up Attempt <span>: 10 coins</span>'
          ]
        },
        titleRemark: { value: '' },
        listRemark: {
          value: [
            'Claim your rewards from the Mailbox.',
            'Golden Coins will be deducted upon Event item purchase.',
            'Details of the event available in Event menu > Event banner > Notice.'
          ]
        }
      }
  }, langJa = {       // 일본어
      questTitle: [
        'ゴールドコイン 30個',
        'ゴールドコイン 30個',
        'ゴールドコイン 50個',
        'ゴールドコイン 100個',
        'ゴールドコイン 150個',
        'ゴールドコイン 200個',
        'ゴールドコイン 250個',
        'ゴールドコイン 300個'
      ],
      rewardTitle: [
        '食糧 50個',
        '30,000ゴールド',
        '50,000ゴールド',
        '★4英雄材料',
        '★4英雄召喚石',
        '100,000ゴールド',
        '★5英雄材料',
        '★5英雄召喚石'
      ],
      otherItem: {                                        // 날짜, 최종 포인트등 가변적으로 표기되는 항목의 값(클래스명, 적용될 값)
        titleCoin: { value: '集めたゴールドコイン (個） :' },
        titleQuest: { value: '<span>ゴールドコイン</span>獲得方法' },
        infoQuest: { value: '1日最大30ゴールドコインまで獲得可能' },
        listQuest: {
          value: [
            'ステージクリア <span> 1個</span>',
            '名誉対戦に挑戦 <span> 5個</span>',
            'チャプターボス戦に参加 <span> 3個</span>',
            'アリーナに参加 <span> 5個</span>',
            'デイリーボス戦に参加 <span> 2個</span>',
            '英雄強化 <span> 3個</span>',
            '守護神殿に挑戦 <span> 1個</span>',
            '英雄昇級 <span> 10個</span>'
          ]
        },
        titleRemark: { value: '注意事項' },
        listRemark: {
          value: [
            '獲得したボーナスアイテムはポストからご確認ください',
            'ゴールドコインを消費してボーナスアイテムと交換できます',
            'ボーナスアイテムは イベントアイコン ＞ イベントバナー ＞ 受け取るボタン をタップしてGETできます'
          ]
        }
      }
  }, langTh = {       // 태국어
      questTitle: [
        'เหรียญทองคำ 30 เหรียญ',
        'เหรียญทองคำ 30 เหรียญ',
        'เหรียญทองคำ 50 เหรียญ',
        'เหรียญทองคำ 100 เหรียญ',
        'เหรียญทองคำ 150 เหรียญ',
        'เหรียญทองคำ 200 เหรียญ',
        'เหรียญทองคำ 250 เหรียญ',
        'เหรียญทองคำ 300 เหรียญ'
      ],
      rewardTitle: [
        '50 เสบียง',
        '30,000 ทอง',
        '50,000 ทอง',
        'วัตถุดิบวีรบุรุษ 4 ดาว',
        'หินเรียกวีรบุรุษ 4 ดาว',
        '100,000 ทอง',
        'วัตถุดิบวีรบุรุษ 5 ดาว',
        'หินเรียกวีรบุรุษ 5 ดาว'
      ],
      otherItem: {                                        // 날짜, 최종 포인트등 가변적으로 표기되는 항목의 값(클래스명, 적용될 값)
        titleCoin: { value: 'เหรียญทองคำ (เหรียญ) :' },
        titleQuest: { value: 'วิธีรับเหรียญทองคำ' },
        infoQuest: { value: 'รับเหรียญทองได้สูงสุด 30 เหรียญต่อวัน' },
        listQuest: {
          value: [
            'เคลียร์ด่าน <span>1 เหรียญ</span>',
            'เล่นสงครามเกียรติยศ <span>5 เหรียญ</span>',
            'เข้าร่วมบอสแชปเตอร์ <span>3 เหรียญ</span>',
            'เล่นอารีน่า <span>5 เหรียญ</span>',
            'เข้าร่วมบอสประจำวัน <span>2 เหรียญ</span>',
            'อัพเกรดวีรบุรษ <span>3 เหรียญ</span>',
            'เล่นเทวสถานเทพารักษ์ <span>1 เหรียญ</span> <small>(รวมการเริ่มเล่น/ทำลายล้าง)</small>',
            'เลื่อนระดับวีรบุรุษ <span>10 เหรียญ</span>'
          ]
        },
        titleRemark: { value: 'หมายเหตุ' },
        listRemark: {
          value: [
            'สามารถตรวจสอบรางวัลได้ที่ตู้จดหมาย',
            'เมื่อแลกรางวัลเหรียญทองคำจะหายไป',
            'เนื้อหากิจกรรมสามารถเช็คได้ที่ เมนูกิจกรรม> แบนเนอร์ > ประกาศ'
          ]
        }
      }
  }, langHans = {         // 간체
      questTitle: [
        '黄金钱币 30个',
        '黄金钱币 30个',
        '黄金钱币 50个',
        '黄金钱币 100个',
        '黄金钱币 150个',
        '黄金钱币 200个',
        '黄金钱币 250个',
        '黄金钱币 300个'
      ],
      rewardTitle: [
        '粮食50个',
        '30,000金币',
        '50,000金币',
        '4星英雄材料',
        '4星英雄召唤石',
        '100,000金币',
        '5星英雄材料',
        '5星英雄召唤石'
      ],
      otherItem: {                                        // 날짜, 최종 포인트등 가변적으로 표기되는 항목의 값(클래스명, 적용될 값)
        titleCoin: { value: '黄金钱币 (个) :' },
        titleQuest: { value: '<span>黄金钱币</span>获取方法' },
        infoQuest: { value: '一天最多可获得30个黄金钱币。' },
        listQuest: {
          value: [
            '关卡通关 <span>1个</span>',
            '挑战名誉对战 <span>5个</span>',
            '参与章节BOSS <span>3个</span>',
            '挑战竞技场 <span>5个</span>',
            '参与每日BOSS <span>2个</span>',
            '英雄强化 <span>3个</span>',
            '挑战守护神殿 <span>1个</span> <small>(包含开始/扫荡)</small>',
            '英雄升星 <span>10个</span>'
          ]
        },
        titleRemark: { value: '注意' },
        listRemark: {
          value: [
            '可至邮箱确认获得的奖励。',
            '收集黄金钱币可兑换奖励。',
            '请至活动菜单 〉 活动横幅广告 〉 公告中确认活动内容。'
          ]
        }
      }
  }, langHant = {         // 번체
    questTitle: [
      '黃金硬幣30個',
      '黃金硬幣30個',
      '黃金硬幣50個',
      '黃金硬幣100個',
      '黃金硬幣150個',
      '黃金硬幣200個',
      '黃金硬幣250個',
      '黃金硬幣300個'
    ],
    rewardTitle: [
      '糧食50個',
      '30,000金幣',
      '50,000金幣',
      '4星英雄材料',
      '4星英雄召喚石',
      '100,000金幣',
      '5星英雄材料',
      '5星英雄召喚石'
    ],
    otherItem: {                                        // 날짜, 최종 포인트등 가변적으로 표기되는 항목의 값(클래스명, 적용될 값)
      titleCoin: {
        value: '黃金錢幣 (個)  :'
      },
      titleQuest: {
        value: '<span>黃金錢幣</span>獲得方法'
      },
      infoQuest: {
        value: '一天最多可獲得30個黃金錢幣。'
      },
      listQuest: {
        value: [
          '關卡 獲勝 <span>1個</span>',
          '挑戰名譽對戰 <span>5個</span>',
          '參加章節BOSS <span>3個</span>',
          '挑戰競技場 <span>5個</span>',
          '參加每日BOSS <span>2個</span>',
          '英雄強化 <span>3個</span>',
          '挑戰守護神殿 <span>1個</span> <small>(包括開始/掃蕩)</small>',
          '英雄晉級 <span>10個</span>'
        ]
      },
      titleRemark: {
        value: '注意事項'
      },
      listRemark: {
        value: [
          '可至信箱確認獲得的獎勵。',
          '收集黃金錢幣可兌換獎勵。',
          '活動內容請至活動清單 〉 活動橫幅 〉 公告中確認。'
        ]
      }
    }
  },
  langData = '존재하지 않는 언어입니다.';

  if (langType == 'en'){
    langData = langEn;
  }else if(langType == 'ja'){
    langData = langJa;
  }else if(langType == 'th'){
    langData = langTh;
  }else if (langType == 'zh-cn'){
    langData = langHans;
  }else if (langType == 'zh-tw'){
    langData = langHant;
  }
  return langData
};