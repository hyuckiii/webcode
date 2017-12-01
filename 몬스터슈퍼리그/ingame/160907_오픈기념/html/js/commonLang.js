/*
// monsterSuperLeague commonLanguageSet - commonLang.js

   [languageSet]
     layerEn(영어)
     layerJa(일본어)
     layerTh(태국어)
     layerHans(중국어 - 간체)
     layerHant(중국어 - 번체)

   [messageList]
     title(팝업명)
     success(정상지급)
     end(이벤트 기간 종료)
     denied(아이템 지급 미대상자)
     fail(지급실패)
     error(비정상접근)
     btnName(확인버튼명)
*/

function commonLang (langType) {
  var langKo = {
      title: '몬스터슈퍼리그',
      success: '보상이 우편함으로 지급되었습니다.<br><span>우편함을 확인해주세요.</span>',
      end: '이벤트 기간이 종료되었습니다.<br><span>다음 기회에 참여해 주세요.</span>',
      denied: '보상지급 대상자가 아닙니다.<br><span>이벤트 미션을 확인해 주세요.</span>',
      fail: '보상이 정상적으로 지급 되지 않았습니다.<br><span>다시 한 번 보상받기 진행해 주세요.</span>',
      error: '비정상적인 접근입니다.<br><span>다시 한 번 보상받기 진행해 주세요.</span>',
      btnName: '확인'
    },
    langEn = {
      title: 'Monster Super League',
      success: 'Your reward has been sent successfully<br><span>Please check your Mailbox</span>',
      end: 'The event period has ended.<br><span>Please participate again next time.</span>',
      denied: 'You are not eligible to receive the gift.<br><span>Please check the Event Missions.</span>',
      fail: 'Failed to send Gift.<br><span>Please retry to claim your Gift.</span>',
      error: 'Abnormal Access Detected.<br><span>Please retry to claim your Gift.</span>',
      btnName: 'OK'
    },
    langJa = {
      title: 'モンスタースーパーリーグ',
      success: '報酬が受信箱に支給されました.<br><span>受信箱の確認をお願いします.</span>',
      end: 'イベント期間が終了されました.<br><span>次の機会に参加してください.</span>',
      denied: '報酬支給対象ではありません.<br><span>イベントミッションを確認してください.</span>',
      fail: '報酬が正常に支給されませんでした.<br><span>再度、受取ってください.</span>',
      error: '正常ではないアクセスです.<br><span>再度、報酬を受取ってください.</span>',
      btnName: '確認'
    },
    langTh = {
      title: 'Monster Super League',
      success: 'ของรางวัลถูกจัดส่งในตู้จดหมายเรียบร้อยแล้ว<br><span>กรุณาตรวจสอบตู้จดหมาย</span>',
      end: 'สิ้นสุดเวลากิจกรรมแล้ว<br><span>กรุณาเข้าร่วมใหม่ในโอกาสหน้า</span>',
      denied: 'ท่านไม่สามารถรับรางวัลได้<br><span>กรุณาตรวจสอบเงื่อนไขกิจกรรม</span>',
      fail: 'ท่านยังไม่ได้รับรางวัล<br><span>กรุณากดรับรางวัลอีกครั้ง</span>',
      error: 'การรับรางวัลผิดปกติ<br><span>กรุณากดรับรางวัลอีกครั้ง</span>',
      btnName: 'ตกลง'
    },
    langHans = {
      title: '妖怪超级联赛',
      success: '奖励已发送至收件箱,<br><span>请查收邮件.</span>',
      end: '活动已结束,<br><span>请敬请期待下次活动.</span>',
      denied: '无法获得奖励,<br><span>请确认活动详细内容.</span>',
      fail: '领取奖励出错,<br><span>请稍后再试.</span>',
      error: '系统检测到访问异常,<br><span>请稍后再试.</span>',
      btnName: '确认'
    },
    langHant = {
      title: '怪獸超級聯賽',
      success: '獎勵已發送至收件匣,<br><span>請確認收件匣.</span>',
      end: '活動期間已結束,<br><span>敬請期待下次的活動.</span>',
      denied: '非獎勵發送對象,<br><span>請確認活動任務.</span>',
      fail: '獎勵未正常發送,<br><span>請再次嘗試領取獎勵.</span>',
      error: '連線異常,<br><span>請再次嘗試領取贈禮.</span>',
      btnName: '確認'
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