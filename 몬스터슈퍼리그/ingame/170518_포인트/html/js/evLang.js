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
    unit: ['P', ''],
    rewardTitle: [
      '10,000 골드',
      '50,000 골드',
      '100,000 골드',
      '(하급) 별의 초월석 10개',
      '(중급) 별의 초월석 10개',
      '(상급) 별의 초월석 10개',
      '스타젬 30개',
      '스타젬 50개',
      '스타젬 100개',
      '★4~6<br>보석 상자 1개',
      '★ 6<br>보석 상자 1개',
      '(상급) 비밀의 알 1개'
    ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu"></span>이벤트 기간에만 포인트 획득 및 뽑기를 진행하실 수 있습니다.</li>'+
      '<li><span class="bu"></span>일일 최대 250 포인트를 획득하며, 최대 5회 뽑기를 진행 하실 수 있습니다.</li>'+
      '<li><span class="bu"></span>오전 9시 기준으로 포인트 획득 및 뽑기가 초기화 됩니다. (UTC+9 기준)</li>'+
      '<li><span class="bu"></span>뽑기로 획득한 보상은 우편함으로 지급됩니다.</li>'+
      '</ul>'
  }, langEn = {     // 영어
      unit: ['P', ''],
      rewardTitle: [
        '10,000 Gold',
        '50,000 Gold',
        '100,000 Gold',
        '(Low) Starstone x10',
        '(Mid) Starstone x10',
        '(High) Starstone x10',
        'Astrogem x30',
        'Astrogem x50',
        'Astrogem x100',
        '4-6★ Gem Chest x1',
        '6★ Gem Chest x1',
        '(High) Secret Egg x1'
      ],
      eventInfo:
      '<ul>'+
      '<li><span class="bu"></span>You can earn points and draw with the points only during the event period.</li>'+
      '<li><span class="bu"></span>You can acquire up to 250 points per day, and point draw can be performed up to 5 times a day.</li>'+
      '<li><span class="bu"></span>Point acquisition and remaining draws refresh at 00:00 midnight (UTC+0)</li>'+
      '<li><span class="bu"></span>Rewards will be sent to your Inbox.</li>'+
      '</ul>'
    },
    langJa = {        // 일본어
      unit: ['P', ''],
      rewardTitle: [
        '10,000ゴールド',
        '50,000ゴールド',
        '100,000ゴールド',
        '(下級)スターストーン10個',
        '(中級)スターストーン10個',
        '(上級)スターストーン10個',
        'スタージュエル30個',
        'スタージュエル50個',
        'スタージュエル100個',
        '★4～6ジュエルの箱',
        '★6ジュエルの箱',
        '(上級)秘密の卵1個'
    ],
      eventInfo:
      '<ul>'+
      '<li><span class="bu"></span>イベント期間のみポイント獲得やガチャができます。</li>'+
      '<li><span class="bu"></span>一日最大250ポイントまで獲得可能で、最大5回までガチャを進行できます。</li>'+
      '<li><span class="bu"></span>午前9時に獲得可能ポイントとガチャが初期化されます。(UTC+9 基準)</li>'+
      '<li><span class="bu"></span>ガチャで獲得した報酬は受信箱に届きます。</li>'+
      '</ul>'
    }, langTh = {       // 태국어
      unit: ['P', ''],
      rewardTitle: [
        '10,000 ทอง',
        '50,000 ทอง',
        '100,000 ทอง',
        '(ต่ำ) ศิลาดวงดาว<br>10 ชิ้น',
        '(กลาง) ศิลาดวงดาว<br>10 ชิ้น',
        '(สูง) ศิลาดวงดาว<br>10 ชิ้น',
        '30 แอสโตรเจม',
        '50 แอสโตรเจม',
        '100 แอสโตรเจม',
        'หีบอัญมณี 4-6★ 1 หีบ',
        'หีบอัญมณี 6★ 1 หีบ',
        '(สูง) ไข่แห่งความลับ 1 ชิ้น'
      ],
      eventInfo:
      '<ul>'+
      '<li><span class="bu"></span>สามารถรับเหรียญรางวัลและจับรางวัลได้ในช่วงเวลากิจกรรมเท่านั้น</li>'+
      '<li><span class="bu"></span>สามาถรับเหรียญรางวัลได้สูงสุด 250 เหรียญและจับได้สูงสุด 5 รอบต่อวัน</li>'+
      '<li><span class="bu"></span>เวลา 07:00 น. การรับเหรียญรางวัลและการจับจะทำการรีเซทใหม่ (UTC+7)</li>'+
      '<li><span class="bu"></span>รางวัลที่ได้จากการจับรางวัลจะถูกส่งไปยังกล่องจดหมาย</li>'+
      '</ul>'
    }, langHans = {       // 간체
      unit: ['P', ''],
      rewardTitle: [
        '10,000金币',
        '50,000金币',
        '100,000金币',
        '(低级)星石10颗',
        '(中级)星石10颗',
        '(高级)星石10颗',
        '星晶石30颗',
        '星晶石50颗',
        '星晶石100颗',
        '4-6★宝石箱1个',
        '6★宝石箱1个',
        '(高级)神秘的蛋1个'
      ],
      eventInfo:
      '<ul>'+
      '<li><span class="bu"></span>只有活动期间可获得积分及进行抽取。</li>'+
      '<li><span class="bu"></span>每日最多可获得250积分，最多可进行5次抽取。</li>'+
      '<li><span class="bu"></span>以上午8点为基准将获得积分及抽取重置。 （UTC+8 基准）</li>'+
      '<li><span class="bu"></span>经由抽取所获得的奖励会发送至收件箱。</li>'+
      '</ul>'
  }, langHant = {         // 번체
      unit: ['P', ''],
      rewardTitle: [
        '10,000金幣',
        '50,000金幣',
        '100,000金幣',
        '(低級)星石10顆',
        '(中級)星石10顆',
        '(高級)星石10顆',
        '星寶石30顆',
        '星寶石50顆',
        '星寶石100顆',
        '4-6★寶石箱1個',
        '6★寶石箱1個',
        '(高級)神秘卵1個'
      ],
      eventInfo:
      '<ul>'+
      '<li><span class="bu"></span>只有活動期間可獲得點數及進行抽取。</li>'+
      '<li><span class="bu"></span>每日最多可獲得250點數，最多可進行5次抽取。</li>'+
      '<li><span class="bu"></span>以上午8點為基準將獲得點數及抽取重置。（UTC+8 基準）</li>'+
      '<li><span class="bu"></span>經由抽取所獲得的獎勵會發送至收件匣。</li>'+
      '</ul>'
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