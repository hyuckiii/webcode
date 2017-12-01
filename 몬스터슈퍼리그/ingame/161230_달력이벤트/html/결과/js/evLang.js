/****************************************

 *msl calendar event(Result) - evLang.js*

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
    date: '<span>당첨확인 기간</span> 1월 11일 (수)<strong> 09:00</strong> ~ 1월 13일 (금) <strong>08:59</strong>',
    btnEnter: '경품신청',
    btnCheck: '당첨 확인',
    sectionInfo:'<p>아래 <strong>\'당첨 확인\'</strong> 버튼을 통해 이벤트 결과를 확인하세요!</p>',
    inpAddress: {
      titForm: '경품받으실 배송정보를 정확히 입력해 주세요.',
      titName: '받는사람 :',
      textName: '이름을 입력해 주세요.',
      titMobile: '휴대전화 :',
      textMobile: '휴대폰 번호를 입력해 주세요.',
      titAddress: '배송주소',
      textCode: '우편번호',
      textAddress: '주소를 입력해주세요.',
      textCity: '도시를 입력해주세요.',
      textCountry: '국가를 입력해 주세요.',
      textCaution1: '해외배송을 위해 영어,숫자로만 입력해 주세요.',
      textCaution2: '배송정보는 당첨확인 기간 동안만 수정가능하오니 유의해 주세요.'
    },
    sectionCaution:
      '<ul>'+
      '<li><span class="bu"></span>당첨 시 정확한 정보를 기재하지 않은 경우 선물이 배송되지 않을 수 있으며, 정확한 정보 기재 부탁 드립니다.</li>'+
      '<li><span class="bu"></span>배송 정보는 1월 11일 ~ 1월 13일까지 수정 가능합니다.</li>'+
      '<li><span class="bu"></span>당첨이 되었으나 개인정보를 기재하지 않은 경우 배송 도움을 드릴 수 없습니다.</li>'+
      '</ul>'
  }, langEn = {     // 영어
    title1: 'Meet the cute Astromons in your Calendar!',
    title2: 'Monster Super League<br><strong>2017 Calendar</strong> Giveaway!',
    date: '<span>Announcement</span> 1/11(Wed) <strong>00:00</strong> ~ 1/12(Thu) <strong>23:59</strong> (UTC+0)',
    btnCountry: 'Select Country<span>(Game Usage Country)</span>',
    btnEnter: 'Enter',
    btnCheck: 'Check My Entry',
    sectionInfo: '<p>Click the <strong>\'Check My Entry\'</strong> button to find out the result!</p>',
    inpAddress: {
      titForm: 'Please enter your address to receive the gift!',
      titName: 'Name :',
      textName: 'Enter your Name.',
      titMobile: 'Phone No. :',
      textMobile: 'Enter your Phone Number for contact purpose.',
      titAddress: 'Address',
      textCode: 'Postal Code',
      textAddress: 'Enter Your Address.',
      textCity: 'Enter Your City.',
      textCountry: 'Enter your Country.',
      textCaution1: 'Please enter alphabet/number only',
      textCaution2: 'The address can be edited during the Announcement period only.'
    },
    sectionCaution:
      '<ul>'+
      '<li><span class="bu"></span>The winner might not receive the reward if not filling the information correctly.<br>Please kindly enter your information correctly.</li>'+
      '<li class="active"><span class="bu"></span>The address and other information only can be changed from 1/11 until 1/12.</li>'+
      '<li><span class="bu"></span>The winner could not receive the reward if not filling the information before the announcement period ends.</li>'+
      '<li><span class="bu"></span>Please enter all information using alphabets and numbers only.</li>'+
      '</ul>'
  }, langJa = {        // 일본어
    title1: '可愛いスターモンたちにいつでも会える！',
    title2: '<strong>2017年モンスタースーパーリーグ</strong><br>カレンダープレゼント！',
    date: '<span>結果確認</span> 1月 11日(水) <strong>09:00</strong> ~ 1月 13日 (金) <strong>08:59</strong>',
    btnCountry: '国選択<span>(配送可能国)</span>',
    btnEnter: '応募',
    btnCheck: '当選結果確認',
    sectionInfo: '<p>以下の<strong>「当選結果確認」</strong>ボタンをクリックし、<br>結果を確認してください。</p>',
    inpAddress: {
      titForm: 'プレゼント配送の為、以下の情報記載をお願いします。',
      titName: '受取人 :',
      textName: 'お名前を入力ください。',
      titMobile: '携帯番号 :',
      textMobile: '携帯番号を入力ください。',
      titAddress: '住所',
      textCode: ' 郵便番号',
      textAddress: '住所を入力ください。',
      textCity: '都市名を入力ください。',
      textCountry: '国を入力ください。',
      textCaution1: '英語/数字で入力お願いします。',
      textCaution2: '配送情報は結果確認期間だけ、修正が可能ですので、ご注意ください。'
    },
    sectionCaution:
      '<ul>'+
      '<li><span class="bu"></span>当選者の方は配送申し込みページより郵送情報を記載してください。ご記載の郵送先情報が正しくない場合、商品が正常に届かない可能性がございますのでご注意ください。</li>'+
      '<li><span class="bu"></span>配送情報は1月11日 ~ 1月13日まで修正可能です。</li>'+
      '<li><span class="bu"></span>ご当選された方が個人情報を記載していない場合、配送できないので、ご注意ください。</li>'+
      '</ul>'
  }, langTh = {       // 태국어
    title1: 'พบแอสโตรมอนสุดน่ารักในปฏิทิน!',
    title2: 'Monster Super League<br><strong>แจกปฏิทินปี 2017!</strong>',
    date: '<span>ประกาศรางวัล</span> 11 ม.ค. (พุธ) <strong>07:00</strong> ~ 13 ม.ค. (ศุกร์) <strong>06:59</strong> (UTC+7)',
    btnCountry: 'เลือกประเทศ <span>(ประเทศที่คุณใช้งาน)</span>',
    btnEnter: 'เข้าร่วม',
    btnCheck: 'ตรวจสอบผล',
    sectionInfo: '<p>กดปุ่ม <strong>\'ตรวจสอบผล\'</strong> เพื่อตรวจผลรางวัล!</p>',
    inpAddress: {
      titForm: 'กรุณากรอกที่อยู่เพื่อรับของรางวัล!',
      titName: 'ชื่อ :',
      textName: 'ชื่อของคุณ',
      titMobile: 'หมายเลขโทรศัพท์ :',
      textMobile: 'กรอกหมายเลขโทรศัพท์ที่สามารถติดต่อได้',
      titAddress: 'ที่อยู่',
      textCode: 'รหัสไปรษณีย์',
      textAddress: 'ที่อยู่ของคุณ',
      textCity: 'เมือง',
      textCountry: 'ประเทศ',
      textCaution1: 'กรุณาใช้เฉพาะตัวอักษร / ตัวเลขเท่านั้น',
      textCaution2: 'ที่อยู่สามารถเปลี่ยนแปลงได้ระหว่างช่วงประกาศรางวัลเท่านั้น'
    },
    sectionCaution:
    '<ul>'+
    '<li><span class="bu"></span>กรุณากรอกข้อมูลให้ถูกต้อง ผู้โชคดีอาจไม่ได้รับของรางวัลหากกรอกข้อมูลไม่ถูกต้อง</li>'+
    '<li class="active"><span class="bu"></span>ที่อยู่และข้อมูลอื่นๆ สามารถเปลี่ยนแปลงได้ระหว่างวันที่ 1/11 – 1/13 เท่านั้น</li>'+
    '<li><span class="bu"></span>ผผู้โชคดีจะไม่ได้รับของรางวัลหากไม่กรอกข้อมูลภายในช่วงเวลาที่กำหนด</li>'+
    '<li><span class="bu"></span>กรุณากรอกข้อมูลทั้งหมดโดยใช้ตัวอักษรและตัวเลขเท่านั้น</li>'+
    '</ul>'
  }, langHans = {       // 간체
    title1: '最新推出以Q版星兽为题材的精美桌历~',
    title2: '妖怪超级联赛<br><strong>2017年限量桌历！</strong>',
    date: '<span>公布得奖者</span>1月11日（三）<strong>08:00</strong> ~ 1月13日（五）<strong>07:59</strong>',
    btnCountry: '所在国家 <span>登录游戏的所在国家</span>',
    btnEnter: '参加活动',
    btnCheck: '确认得奖',
    sectionInfo: '<p>点击<strong>「确认得奖」</strong>按钮，即可确认得奖与否。</p>',
    inpAddress: {
      titForm: '请填写详细的收货地址。',
      titName: '收货人 ：',
      textName: '请输入收货人姓名。',
      titMobile: '手机号码 ：',
      textMobile: '请输入正确的手机号码。',
      titAddress: '收货地址',
      textCode: ' 邮政编码',
      textAddress: '请输入详细地址。',
      textCity: '请输入所在城市。',
      textCountry: '请输入所在国家。',
      textCaution1: '请务必填写英文地址。',
      textCaution2: '请注意，收件地址只能在确认得奖名单的时间内进行修改。'
    },
    sectionCaution:
    '<ul>'+
    '<li><span class="bu"></span>点请得奖者填写详细的个人信息，如因信息不详或不准确无法发送奖品，将视为自动放弃。</li>'+
    '<li class="active"><span class="bu"></span>可于1月11日至13日修改收货地址。</li>'+
    '<li><span class="bu"></span>若得奖者没有填写个人信息将无法正常发送奖品。</li>'+
    '<li><span class="bu"></span>请使用英文填写所有个人信息。</li>'+
    '</ul>'
  }, langHant = {         // 번체
    title1: '最新推出以超Q星獸為題材的精美桌曆~',
    title2: '怪獸超級聯賽<br><strong>2017年限量桌曆！</strong>',
    date: '<span>公佈得獎者</span>1月11日（三）<strong>08:00</strong> ~ 1月13日（五）<strong>07:59</strong>',
    btnCountry: '所在國家<span>登入遊戲的所在國家</span>',
    btnEnter: '參加活動',
    btnCheck: '確認得獎',
    sectionInfo: '<p>點擊<strong>「確認得獎」</strong>按鈕，即可確認得獎與否。</p>',
    inpAddress: {
      titForm: '請填寫詳細的收貨地址。',
      titName: '收件人 ：',
      textName: '請輸入收件人姓名。',
      titMobile: '手機 ：',
      textMobile: '請輸入正確的手機號碼。',
      titAddress: '收件地址',
      textCode: ' 郵遞區號',
      textAddress: '請輸入詳細地址。',
      textCity: '請輸入所在城市。',
      textCountry: '請輸入所在國家。',
      textCaution1: '請務必填寫英文地址。',
      textCaution2: '請注意，收件地址只能在確認得獎名單的時間內進行修改。'
    },
    sectionCaution:
    '<ul>'+
    '<li><span class="bu"></span>請得獎者填寫詳細的個人資訊，如因資訊不詳或不準確無法發送獎品，將視為自動放棄。</li>'+
    '<li class="active"><span class="bu"></span>可於1月11日至13日修改收件地址。</li>'+
    '<li><span class="bu"></span>若得獎者沒有填寫個人資訊將無法正常發送獎品。</li>'+
    '<li><span class="bu"></span>請使用英文填寫所有個人資訊。</li>'+
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