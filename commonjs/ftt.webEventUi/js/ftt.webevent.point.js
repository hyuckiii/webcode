/****************************************

 ftt.webEvent.step.js ver - 0.1

 [ history ]
 0.1 - prototype

 ****************************************/

(function(){
  // 변수
  var webEventUI = {
    defaultOps : {
      target: $(this),
      listEle: '',                            // target내 클릭될 엘리먼트(기본값 li)
      questStep: ['', 'ready', 'end'],        // 퀘스트 단계별 클래스명
      questTitle: null,                       // 미션 명(배열)
      rewardTitle: null,                      // 보상명(배열)
      pageRefresh: false,                     // 레이어 닫기 시 새로고침여부(기본값 false)
      questIng: null,                         // 퀘스트 현재 값
      questMax: null,                         // 퀘스트 목표 값
      questStatus: null,                      // 퀘스트 수행 여부(questStep과 매칭)
      otherItem: null,                        // 퀘스트 외 항목(예제 html참고)
    },
    setQuestList: function(data){
      $(data.target).each(function (i) {
        var quest = $(data.target[i]).find('li'+data.listEle),
          removeList = (data.questStep.toString()).replace(/,/gm, ' ');

        if (data.target.length == 1){   // 미션(목록X)이 1개 인경우
          $(quest).each(function (j, questList) {
            var ingVal = $(questList).find('.status .ing'),
              maxVal = $(questList).find('.status .max'),
              questTitEle = $(questList).find('.quest-title'),
              rewardTitEle = $(questList).find('.reward-title');

            if (data.questMax !== null) $(maxVal).html(data.questMax[j]);
            if (data.questTitle !== null) $(questTitEle).html(data.questTitle[j]);
            if (data.rewardTitle !== null) $(rewardTitEle).html(data.rewardTitle[j]);
            if (data.questIng !== null) {
              data.questIng[j] > data.questMax[j] ? $(ingVal).html(data.questMax[j]) : $(ingVal).html(data.questIng[j])
            }
            $(questList).removeClass(removeList).addClass(data.questStep[data.questStatus[j]]);
          });
        }else{  // 미션(목록X)이 2개 이상인
          $(quest).each(function (j, questList) {
            var questStatus = data.questStep[data.questStatus[i][j]],
              ingVal = $(questList).find('.status .ing'),
              maxVal = $(questList).find('.status .max'),
              title = $(questList).find('.title'),
              rewardTitle = $(questList).find('.reward'),
              removeList = (data.questStep.toString()).replace(/,/gm, ' ');

            if (data.questIng !== null) data.questIng[i][j] > data.questMax[i][j] ? $(ingVal).html(data.questMax[i][j]) : $(ingVal).html(data.questIng[i][j])
            if (data.questMax !== null) $(maxVal).html(data.questMax[i][j]);
            if (data.questTitle !== null) $(title).html(data.questTitle[i][j]);
            if (data.rewardTitle !== null) $(rewardTitle).html(data.rewardTitle[i][j]);
            $(questList).removeClass(removeList).addClass(data.questStep[questStatus]);
          })
        }
      });
    },
    setOtherItem: function (obj) {
      var target, value;

      for (var otherItems in obj.otherItem) {
        for (var itemsValue in obj.otherItem[otherItems]) {
          if (itemsValue == 'target') target = obj.otherItem[otherItems][itemsValue];
          if (itemsValue == 'value') value = obj.otherItem[otherItems][itemsValue];
        }
        if($(target).length > 1){
          $(target).each(function (i, list) {
            $(list).html(value[i]);
          })
        }else{
          $(target).html(value);
        }
      }
    }
  };

  $.fn.webEventUI = function (obj, lang) {

    /* 1. 선언 */
    webEventUI.defaultOps.target = $(this);
    var data = $.extend(true, {}, webEventUI.defaultOps, obj, lang);

    // set layout
    if (data.target.length > 0){
      // ios device detect
      if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) $("#fWrap").addClass("ios");
      // set questList
      webEventUI.setQuestList(data);
      // set otherItem
      if(data.other !== 'null') webEventUI.setOtherItem(data);
    }else{
      console.log('퀘스트 목록이 없습니다.')
    }

  }
})(jQuery);