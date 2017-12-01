/****************************************

 [msl calendar event(Registration) - evLang.js]

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
    title1: '귀여운 스타몬을 달력으로 만나보세요',
    title2: '2017년 <strong>몬슈리 달력</strong> 선물!',
    date1: '<span>이벤트 기간</span> 12월 28일 (수) <strong>09:00</strong> ~ 1월 4일 (수) <strong>08:59</strong>',
    date2: '<span>당첨확인 기간</span> 1월 11일 (수)<strong> 09:00</strong> ~ 1월 13일 (금) <strong>08:59</strong>',
    btnEnter: '경품신청',
    btnCheck: '당첨 확인',
    sectionInfo1:'<p>이벤트에 참여를 원하실 경우 아래 <strong>\'경품 신청\'</strong> 버튼을 클릭해 주세요!</p>',
    sectionInfo2:'<p>아래 <strong>\'당첨 확인\'</strong> 버튼을 통해 이벤트 결과를 확인하세요!</p>',
    sectionCaution:
      '<ul>'+
      '<li><span class="bu"></span>경품 신청 버튼을 클릭해야만 이벤트에 참여 됩니다.</li>'+
      '<li><span class="bu"></span>당첨자 발표는 1월 11일 ~ 1월 13일 진행되며, 배너를 통해 확인하실 수 있습니다.</li>'+
      '<li><span class="bu"></span>이벤트 당첨 시 당첨자 발표 기간 내 개인정보를 기재해야만 선물 배송이 진행되며,<br>기간이 종료될 경우 선물을 지급 받으실 수 없습니다.</li>'+
      '<li><span class="bu"></span>안내 드린 이미지는 실제 배송될 달력 이미지와 다를 수 있습니다.</li>'+
      '</ul>'
  }, langEn = {     // 영어
    title1: 'Meet the cute Astromons in your Calendar!',
    title2: 'Monster Super League<br><strong>2017 Calendar</strong> Giveaway!',
    date1: '<span>Event Period</span> 12/28(Wed) <strong>00:00</strong> ~ 1/3(Tue) <strong>23:59</strong> (UTC+0)',
    date2: '<span>Announcement</span> 1/11(Wed) <strong>00:00</strong> ~ 1/12(Thu) <strong>23:59</strong> (UTC+0)',
    btnCountry: 'Select Country<span>(Game Usage Country)</span>',
    btnEnter: 'Enter',
    btnCheck: 'Check My Entry',
    sectionInfo1:'<p>To enter this giveaway event,<br>please select your <strong>game usage \'Country\'</strong>, then press \'Enter\'!</p>',
    sectionInfo2: '<p>Click the <strong>\'Check My Entry\'</strong> button to find out the result!</p>',
    sectionCaution:
      '<ul>'+
      '<li><span class="bu"></span>Click on “Enter” button to participate in this giveaway event.</li>'+
      '<li class="active"><span class="bu"></span>The winner will be announced on 1/11 ~ 1/12, You can check the winner by clicking the<br>announcement banner.</li>'+
      '<li><span class="bu"></span>The winner could not receive the reward if not filling the information<br>before the announcement period ends.</li>'+
      '<li><span class="bu"></span>Product image may be different than actual product received</li>'+
      '</ul>'
  }, langJa = {        // 일본어
    title1: '可愛いスターモンたちにいつでも会える！',
    title2: '<strong>2017年モンスタースーパーリーグ</strong><br>カレンダープレゼント！',
    date1: '<span>イベント開始</span> 12月 28日 (水) <strong>09:00</strong> ~ 1月 4日 (水) <strong>08:59</strong>',
    date2: '<span>結果確認</span> 1月 11日(水) <strong>09:00</strong> ~ 1月 13日 (金) <strong>08:59</strong>',
    btnCountry: '国選択<span>(配送可能国)</span>',
    btnEnter: '応募',
    btnCheck: '当選結果確認',
    sectionInfo1:'<p>イベントへご応募する場合、 ゲームをご利用中の国を選んだ後、<br>応募ボタンをクリックしてください!</p>',
    sectionInfo2: '<p>以下の <strong>\'当選結果確認\'</strong>ボタンをクリックし、<br>結果を確認ください。</p>',
    sectionCaution:
      '<ul>'+
      '<li><span class="bu"></span>応募ボタンをクリックすると、応募できます。</li>'+
      '<li><span class="bu"></span>結果は1月11日発表し、1月13日まで確認可能です。結果発表バナーからご確認ください。</li>'+
      '<li><span class="bu"></span>イベントへご当選された場合、発表期間以内に個人情報を記載すると<br>プレゼントが配送されます。<br>個人情報を記載しない場合、プレゼント配送が出来ないので、ご注意ください。</li>'+
      '<li><span class="bu"></span>商品のイメージは、デザイン及び色彩が実際の商品と異なる場合がありますのでご了承ください</li>'+
      '</ul>'
  }, langTh = {       // 태국어
    title1: 'พบแอสโตรมอนสุดน่ารักในปฏิทิน!',
    title2: 'Monster Super League<br><strong>แจกปฏิทินปี 2017!</strong>',
    date1: '<span>ระยะเวลาอีเว้นท์</span> 28 ธ.ค. (พุธ) <strong>07:00</strong> ~ 4 ม.ค. (พุธ) <strong>06:59</strong> (UTC+7)  ',
    date2: '<span>ประกาศรางวัล</span> 11 ม.ค. (พุธ) <strong>07:00</strong> ~ 13 ม.ค. (ศุกร์) <strong>06:59</strong> (UTC+7)',
    btnCountry: 'เลือกประเทศ <span>(ประเทศที่คุณใช้งาน)</span>',
    btnEnter: 'เข้าร่วม',
    btnCheck: 'ตรวจสอบผล',
    sectionInfo1:'<p>กรุณาเลือก ’ประเทศ’ ที่คุณใช้งาน<br>จากนั้นกด ‘เข้าร่วม’ เพื่อเข้าร่วมอีเว้นท์!</p>',
    sectionInfo2: '<p>กดปุ่ม ‘ตรวจสอบผล’ เพื่อตรวจผลรางวัล!</p>',
    sectionCaution:
    '<ul>'+
    '<li><span class="bu"></span>กดปุ่ม “เข้าร่วม” เพื่อเข้าร่วมอีเว้นท์ </li>'+
    '<li class="active"><span class="bu"></span>ประกาศผลผู้โชคดีระหว่างวันที่ 11 – 13 ม.ค. โดยสามารถตรวจสอบได้จากแบนเนอร์ประกาศรางวัล</li>'+
    '<li><span class="bu"></span>ผู้โชคดีต้องกรอกข้อมูลที่จำเป็นภายในช่วงประกาศรางวัลเพื่อรับของรางวัล</li>'+
    '<li><span class="bu"></span>ผู้โชคดีจะไม่ได้รับของรางวัล หากไม่กรอกข้อมูลภายในระยะเวลาที่กำหนด</li>'+
    '</ul>'
  }, langHans = {       // 간체
    title1: '最新推出以Q版星兽为题材的精美桌历~',
    title2: '妖怪超级联赛<br><strong>2017年限量桌历！</strong>',
    date1: '<span>活动期间</span>12月28日（三）<strong>08:00</strong> ~ 1月4日（三）<strong>07:59</strong>',
    date2: '<span>公布得奖者</span>1月11日（三）<strong>08:00 ~ 1月13日（五）<strong>07:59</strong>',
    btnCountry: '所在国家 <span>登录游戏的所在国家</span>',
    btnEnter: '参加活动',
    btnCheck: '',
    sectionInfo1:'<p>请点击「所在国家」和「参加活动」按钮！</p>',
    sectionInfo2: '',
    sectionCaution:
    '<ul>'+
    '<li><span class="bu"></span>点击「参加活动」按钮即可参与活动。</li>'+
    '<li><span class="bu"></span>得奖名单将于1月11日至13日公佈于此横幅。</li>'+
    '<li><span class="bu"></span>获奖者需在发表得奖名单的时间内提供领奖资料，否则将无法正常收到奖品。</li>'+
    '<li><span class="bu"></span>桌历图片仅供参考,请以实际产品为准。</li>'+
    '</ul>'
  }, langHant = {         // 번체
    title1: '最新推出以超Q星獸為題材的精美桌歷~',
    title2: '怪獸超級聯賽<br><strong>2017年限量桌歷！</strong>',
    date1: '<span>活動期間</span>12月28日（三）<strong>08:00</strong> ~ 1月4日（三）<strong>07:59</strong>',
    date2: '<span>公佈得獎者</span>1月11日（三）<strong>08:00</strong> ~ 1月13日（五）<strong>07:59</strong>',
    btnCountry: '所在國家<span>登入遊戲的所在國家</span>',
    btnEnter: '參加活動',
    btnCheck: '',
    sectionInfo1:'<p>請點選「所在國家」和「參加活動」按鈕！</p>',
    sectionInfo2: '',
    sectionCaution:
    '<ul>'+
    '<li><span class="bu"></span>點選「參加活動」按鈕即可參與活動。</li>'+
    '<li class="active"><span class="bu"></span>得獎名單將於1月11日至13日公佈於此橫幅。</li>'+
    '<li><span class="bu"></span>獲獎者需在發表得獎名單的時間內提供領獎資料，否則將無法正常收到獎勵。</li>'+
    '<li><span class="bu"></span>圖示桌歷僅供參考,可能與實際產品略有差異。</li>'+
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