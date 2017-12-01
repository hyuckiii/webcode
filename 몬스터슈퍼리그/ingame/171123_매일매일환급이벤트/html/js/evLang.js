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
      '<span class="item">에너지<br/>100개 사용</span>',
      '<span class="item">50,000<br/> 골드 사용</span>',
      '<span class="item">스타젬<br/> 60개 사용</span>',
      '<span class="item">3개 미션<br/>클리어 10회</span>',
      '<span class="item">3개 미션<br/>클리어 20회</span>'
    ],
    rewardTitle: [
      '에너지 100개',
      '50,000 골드',
      '스타젬 60개',
      '(상급)<br/>빛/어둠의 알 1개',
      '(전설)<br/>비밀의 알 1개'
    ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu"></span>오전 9시 기준으로 미션이 초기화됩니다.</li>'+
      '<li><span class="bu"></span>3개 미션 클리어는 ‘에너지/골드/스타젬 사용’ 미션을 모두 진행 하셔야만 클리어로 표기됩니다.</li>'+
      '<li><span class="bu"></span>획득한 보상은 우편함으로 지급됩니다.</li>'+
      '</ul>',
    btnName:
      '<span class="btn_normal"></span>'+
      '<span class="btn_end"></span>'
  }, langEn = {     // 영어
    questTitle: [
      '<span class="item">100 Energy<br/>Used</span>',
      '<span class="item">50,000 Gold<br/>Used</span>',
      '<span class="item">60 Astrogems<br/>Used</span>',
      '<span class="item">3Missions <br/>Cleared 10times</span>',
      '<span class="item">3Missions <br/>Cleared 20times</span>'
    ],
    rewardTitle: [
      '100 Energy',
      '50,000 Gold',
      '60 Astrogems',
      '(High) Light/Dark Egg x1',
      '(Legendary)<br>Secret Egg x1'
    ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu"></span>Mission will reset at 00:00 everyday.</li>'+
      '<li><span class="bu"></span>3Missions will be shown as cleared when finishing up all ‘Energy/Gold/Astrogems Used’ Missions.</li>'+
      '<li><span class="bu"></span>Obtained Reward will be distributed to your mailbox.</li>'+
      '</ul>',
    btnName:
    '<span class="btn_normal"></span>'+
    '<span class="btn_end"></span>'
    },
    langJa = {        // 일본어
      questTitle: [
        '<span class="item">エネルギー使用<br/>100個</span>',
        '<span class="item">ゴールド使用<br/>50,000</span>',
        '<span class="item">スタージュエル<br/>使用60個</span>',
        '<span class="item">全ミッション<br/>クリア10回</span>',
        '<span class="item">全ミッション<br/>クリア20回</span>'
      ],
      rewardTitle: [
        'エネルギー100個',
        '50,000ゴールド',
        'スタージュエル<br/>60個',
        '<上級><br/>光/闇の卵1個',
        '<伝説><br/>秘密の卵1個'
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>09:00にミッションが初期化されます。</li>'+
        '<li><span class="bu"></span>全ミッションクリアは、その日の「エネルギー・ゴールド・スタージュエル使用」ミッションを全てクリアした場合とします。</li>'+
        '<li><span class="bu"></span>イベント報酬は受信箱に届きます。</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal"></span>'+
        '<span class="btn_end"></span>'
    }, langTh = {       // 태국어
      questTitle: [
        '<span class="item">ใช้ <br>100 พลังงาน</span>',
        '<span class="item">ใช้ <br>50,000 ทอง</span>',
        '<span class="item">ใช้ <br>60 แอสโตรเจม</span>',
        '<span class="item">เคลียร์ 3<br>ภารกิจครบ 10 ครั้ง</span>',
        '<span class="item">เคลียร์ 3<br>ภารกิจครบ 20 ครั้ง</span>'
      ],
      rewardTitle: [
        '100 พลังงาน',
        '50,000 ทอง',
        '60 แอสโตรเจม',
        '[สูง] ไข่แห่งแสงสว่าง/ความมืด 1 ชิ้น',
        '(ตำนาน) ไข่แห่งความลับ<br>1 ชิ้น'
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>ภารกิจจะรีเซ็ตเวลา 07:00 ของทุกวัน</li>'+
        '<li><span class="bu"></span>3 ภารกิจจะแสดงว่า “ทำสำเร็จ” แล้ว ก็ต่อเมื่อเคลียร์ภารกิจ ‘ใช้พลังงาน,ทอง,แอสโตรเจม’</li>'+
        '<li><span class="bu"></span>รางวัลกิจกรรมที่ได้จะถูกส่งไปยังกล่องจดหมายของคุณ</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal"></span>'+
        '<span class="btn_end"></span>'
    }, langHans = {       // 간체
      questTitle: [
        '<span class="item">使用能量100个</span>',
        '<span class="item">使用50,000金币</span>',
        '<span class="item">使用星晶石60个</span>',
        '<span class="item">完成3个任务10次</span>',
        '<span class="item">完成3个任务20次</span>'
      ],
      rewardTitle: [
        '能量100个',
        '50,000 金币',
        '星晶石 60个',
        '(高级) 光暗之蛋 1个',
        '(传奇) 神秘之蛋 1个'
      ],
      eventInfo:
        '<ul>'+
        '<li><span class="bu"></span>任务将于上午8点钟初始化。</li>'+
        '<li><span class="bu"></span>3个任务 ‘使用能量/金币/星晶石’ 所有任务进行完毕才可出现完成标识。</li>'+
        '<li><span class="bu"></span>获得的奖励将发送至收件箱。</li>'+
        '</ul>',
      btnName:
        '<span class="btn_normal"></span>'+
        '<span class="btn_end"></span>'
  }, langHant = {         // 번체
    questTitle: [
      '<span class="item">使用能量 100個</span>',
      '<span class="item">使用50,000金幣</span>',
      '<span class="item">使用星寶石60個</span>',
      '<span class="item">完成3個任務10次</span>',
      '<span class="item">完成3個任務20次</span>'
    ],
    rewardTitle: [
      '能量 100個',
      '50,000金幣',
      '星寶石 60個',
      '(高級) 光/暗卵 1個',
      '(傳說) 神秘卵 1個'
    ],
    eventInfo:
      '<ul>'+
      '<li><span class="bu"></span>任務將在8點鐘進行初始化</li>'+
      '<li><span class="bu"></span>3個任務 ‘使用能量/金幣/星晶石’ 所有任务进行完毕才可出現完成标识。</li>'+
      '<li><span class="bu"></span>獲得的獎勵將發送至收件匣</li>'+
      '</ul>',
    btnName:[
    '<span class="btn_normal"></span>'+
    '<span class="btn_end"></span>'
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