/****************************************

 [msl calendar event(Result) - commonLang.js]

 [languageSet]
 langKo(한국어)
 langEn(영어)
 langJa(일본어)
 langTh(태국어)
 langHans(중국어 - 간체)
 langHant(중국어 - 번체)

 ****************************************/

function commonLang (langType) {
  var langKo = {
      win: '당첨을 축하합니다!<br><span>경품을 받으실 배송정보를 입력해 주세요.</span>',
      fail: '아쉽지만 당첨되지 않으셨네요!<br><span>다음에 이용해 주세요.</span>',
      end: '응모 기간이 종료되었습니다!<br><span>더 좋은 이벤트로 찾아 뵙겠습니다.</span>',
      error: '오류가 발생하였습니다.<br><span>다시 한 번 배송 정보를<br>정확하게 기재 부탁 드리겠습니다.</span>',
      policy:
        '<div class="tit">개인정보 수집 및 이용 동의 안내</div>'+
        '<p>㈜네시삼십삼분은 ‘몬스터슈퍼리그’ 와(과) 관련하여 다음과 같이 개인정보를 수집하고 있습니다.<br>개인정보 수집을 거부하는 경우 이벤트 참여에 제한이 될 수 있습니다.</p>'+
        '<p>* 개인정보 수집 목적: 몬스터슈퍼리그 이벤트명 경품 지급 및 네시삼십삼분 게임 관련 소식 전달</p>'+
        '<p>* 개인정보 수집 항목 : 이름, 휴대전화번호, 주소</p>'+
        '<div>* 보유 및 이용 기간<br>' +
        '1) 몬스터슈퍼리그 2017년 귀여운 몬슈리 달력 선물 경품 지급 완료시 정보 파기<br>'+
        '2) 관계법령에 따라 별도 보관이 필요한 경우 보관'+
        '</div>'+
        '<div>' +
        '* 위탁안내<br>'+
        '㈜네시삼십삼분은 서비스 운영 및 배송 처리를 위해 다음과 같이 개인정보를 위탁합니다.<br>'+
        '1) 개인정보 위탁 업체 : ㈜큐로드<br>'+
        '2) 개인정보 위탁 목적 : 게임 정보 안내 및 고객문의 처리<br>'+
        '3) 개인정보 위탁 업체: ㈜젤라블루<br>'+
        '4) 개인정보 위탁 목적: 실물경품 안내 및 배송'+
        '</div>',
      shipMsg: {
        name: '받는 사람을 입력해 주세요.',
        emptyMobile: '휴대폰번호를 입력해 주세요.',
        wrongMobile: '휴대폰번호를 확인해 주세요.',
        emptyAddress: '배송주소를 입력해 주세요.',
        agree: '개인정보 수집 및 이용에<br>동의해 주세요.',
        success: '배송정보가 등록되었습니다.<br><span>배송정보 수정은 당첨확인 기간에만<br>가능하오니 유의해 주세요!</span>',
        modify: '배송정보가 수정되었습니다.<br><span>배송정보 수정은 당첨확인 기간에만<br>가능하오니 유의해 주세요!</span>'
      },
      btnClose: '확인',
      btnAddress: '배송정보입력'
    },
    langEn = {
      win: 'Congratulations, you have won the reward!<br><span>Please enter the email address to receive the gift.</span>',
      fail: 'Unfortunately, you did not win this time..<br><span>Better luck next time!</span>',
      end: 'The entry period has expired.<br><span>See you at our next event!</span>',
      error: 'Error occurred.<br><span>Please check and re-enter<br>correct shipping information</span>',
      shipMsg: {
        name: 'Please enter your name.',
        emptyMobile: 'Please enter your phone number.',
        wrongMobile: 'Please check your phone number.',
        emptyAddress: 'Please enter your address.',
        agree: 'Please agree to the terms and conditions.',
        success: 'The address has been saved.<br><span>The saved address only can be changed during<br>the announcement period.</span>',
        modify: 'The address has been changed.<br><span>The saved address only can be changed during<br>the announcement period.</span>'
      },
      btnClose: 'OK',
      btnAddress: 'Enter Address'
    },
    langJa = {
      win: '当選おめでとうございます！<br><span>プレゼント配送情報を記載ください。</span>',
      fail: '申し訳ございません。<br><span>当選リストに情報がありません。</span>',
      end: '応募が終了されました。',
      error: '不具合が発生しました。<br><span>もう一度、配送情報の記載をお願いいたします。</span>',
      shipMsg: {
        name: '受取人を入力ください。',
        emptyMobile: '携帯番号を入力ください。',
        wrongMobile: '携帯番号を確認ください。',
        emptyAddress: '住所を入力ください。',
        agree: '個人情報収集及び利用を<br>チェックください。',
        success: '配送情報が登録されました。<br><span>配送情報は当選確認期間以内に修正可能です。ご注意ください。</span>',
        modify: '配送情報が修正されました。<br><span>配送情報は当選確認期間以内に修正可能です。ご注意ください。</span>'
      },
      btnClose: 'OK',
      btnAddress: '配送情報入力'
    },
    langTh = {
      win: 'ยินดีด้วย คุณได้รับรางวัล!<br><span>กรุณากรอกที่อยู่ของคุณเพื่อรับรางวัล</span>',
      fail: 'ว้า แย่จัง คุณยังไม่ใช่ผู้โชคดีในครั้งนี้..<br><span>คราวหน้ามาสนุกกันใหม่นะ!</span>',
      end: 'ระยะเวลาในการกรอกข้อมูลสิ้นสุดลงแล้ว<br><span>ไว้ร่วมสนุกกันครั้งหน้านะ!</span>',
      error: 'เกิดข้อผิดพลาด.<br><span>กรุณาตรวจสอบ<br>และใส้ข้อมูลที่ถูกต้องอีกครั้ง</span>',
      shipMsg: {
        name: 'กรุณากรอกชื่อของคุณ',
        emptyMobile: 'กรุณากรอกหมายเลขโทรศัพท์ของคุณ',
        wrongMobile: 'กรุณาตรวจสอบหมายเลขโทรศัพท์ของคุณ',
        emptyAddress: 'กรุณากรอกที่อยู่ของคุณ',
        agree: 'กรุณายอมรับข้อตกลงและเงื่อนไข',
        success: 'บันทึกที่อยู่เรียบร้อย<br><span>ที่อยู่ที่บันทึกไว้สามารถเปลี่ยนแปลงได้ระหว่าง<br>ช่วงประกาศรางวัลเท่านั้น</span>',
        modify: 'เปลี่ยนแปลงที่อยู่เรียบร้อย<br><span>ที่อยู่ที่บันทึกไว้สามารถเปลี่ยนแปลงได้ระหว่าง<br>ช่วงประกาศรางวัลเท่านั้น</span>'
      },
      btnClose: 'ตกลง',
      btnAddress: 'กรอกที่อยู่'
    },
    langHans = {
      win: '恭喜您幸运得奖！<br><span>请输入您的收件地址。</span>',
      fail: '很可惜您没有得到奖品！<br><span>期待您再次参与。</span>',
      end: '本次活动已结束！<br><span>日后将带给大家更好的游戏活动。</span>',
      error: '发生错误。<br><span>请重新填写收件地址。</span>',
      shipMsg: {
        name: '请输入收件人姓名。',
        emptyMobile: '请输入正确的手机号码。',
        wrongMobile: '请确认您的手机号码。',
        emptyAddress: '请输入详细收件地址。',
        agree: '请同意个人信息收集条款。',
        success: '您已成功输入收件地址。<br><span>请注意，收件地址只能在<br>确认得奖名单的时间内进行修改！</span>',
        modify: '收件地址已修改完毕。<br><span>请注意，收件地址只能在<br>确认得奖名单的时间内进行修改！</span>'
      },
      btnClose: '确认',
      btnAddress: '输入收件地址'
    },
    langHant = {
      win: '恭喜您幸運得獎！<br><span>請輸入您的收件地址。</span>',
      fail: '很可惜您沒有得到獎品！<br><span>期待您再次參與。</span>',
      end: '本次活動已結束！<br><span>日後將帶給大家更好的遊戲活動。</span>',
      error: '發生錯誤。<br><span>請重新填寫收件地址。</span>',
      shipMsg: {
        name: '請輸入收件人姓名。',
        emptyMobile: '請輸入正確的手機號碼。',
        wrongMobile: '請確認您的手機號碼。',
        emptyAddress: '請輸入詳細收件地址。',
        agree: '請同意個人資訊收集條款。',
        success: '您已成功輸入收件地址。<br><span>請注意，收件地址只能在<br>確認得獎名單的時間內進行修改！</span>',
        modify: '收件地址已修改完畢。<br><span>請注意，收件地址只能在<br>確認得獎名單的時間內進行修改！</span>'
      },
      btnClose: '確認',
      btnAddress: '輸入收件地址'
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