/******************************************************
 *
 * youtube.js (youtube api sample)
 *
******************************************************/
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// youtubeVideo
var ytPlayer1;

// init youtube API
function onYouTubeIframeAPIReady() {
  ytPlayer1 = new YT.Player('ytPlayer', {   // video의 id(iframe을 직접 입력하지 않는다면 재생될 영역의 id를 입력)
    width: 640,                             // 넓이 (iframe을 이용해 직접 입력 시 생략)
    height: 360,                            // 높이 (iframe을 이용해 직접 입력 시 생략)
    videoId: 'oa-I37DQdvk',                 // video ID (list사용 시 가장 처음 실행 될 비디오 ID, iframe을 이용해 직접 입력 시 생략)
    playerVars: {                           // 플레이어 매개변수 ,iframe을 이용해 직접 입력 시 생략 (https://developers.google.com/youtube/player_parameters?hl=ko)
      color: 'white',
      enablejsapi: 1,
      list: 'PLdoXFuGSG_RfIT1xS5wP2eyHIsjGn_-wI'
    },
    events: {
      'onReady': onPlayerReady,                           // 동영상 준비되면 실행될 함수명 지정
      'onStateChange': onPlayerStateChange,               // 동영상 상태(재생, 정지등)가 변경되는 경우 실행될 함수명 지정
      'onPlaybackQualityChange': onPlaybackQualityChange, // 동영상 재생 품질이 변경될 때마다 실행될 함수명 지정
      'onPlaybackRateChange': onPlaybackRateChange,       // 동영상 재생 속도가 변경될 때마다 실행될 함수명 지정
      'onError': onError,                                 // 동영상 에러 발생 시 실행될 함수명 지정
      'onApiChange': onApiChange                          // API 메소드로 모듈을 로드, 언로드 시
    }
  });
}

/*
 // [youtube method]

 // 대기열
 ytPlayer1.loadVideoById("bHQqvYy5KYo", 5, "large")  // 지정한 동영상을 로드하고 재생( videoId, 시작시간(Number), 퀄리티(String) )
 ytPlayer1.loadVideoById({
   'videoId': 'bHQqvYy5KYo',
   'startSeconds': 5,
   'endSeconds': 60,
   'suggestedQuality': 'large'
 });

 // 재생
 ytPlayer1.playVideo()  // 재생
 ytPlayer1.pauseVideo() // 일시 정지
 ytPlayer1.stopVideo()  // 정지
 ytPlayer1.seekTo(num)  // 이동

 // 목록
 ytPlayer1.nextVideo()  // 다음 영상 재생(재생 목록에 있는 경우)
 ytPlayer1.previousVideo() // 이전 영상 재생(재생 목록에 있는 경우)
 ytPlayer1.playVideoAt(index:Number) // 목록 내 index번째 영상 재생(재생 목록에 있는 경우)

 // 볼륨
 ytPlayer1.mute()       // 음소거
 ytPlayer1.unMute()     // 음소거 해제
 ytPlayer1.isMuted()    // 음소거 여부(boolean으로 반환)
 ytPlayer1.setVolume()  // 볼륨 지정(0 ~ 100)
 ytPlayer1.getVolume()  // 현재 볼륨 반환(number)

 // 크기
 ytPlayer1.setSize(width(num), height(num))  // 플레이어의 크기 지정(px단위)

 // 재생 속도
 ytPlayer1.setPlaybackRate()        // 영상의 재생 속도 지정(기본은 1)
 ytPlayer1.getPlaybackRate()        // 재생 중인 영상의 속도 반환(기본은 1)
 ytPlayer1.getAvailablePlaybackRates() // 영상에서 설정할 수 있는 재생 속도 반환(array)

 // 목록 재생(playlist 필수)
 ytPlayer1.setLoop(Boolean)      // 영상 반복 재생 여부
 ytPlayer1.setShuffle(Boolean)   // 랜덤 재생 여부

 // 재생 상태
 ytPlayer1.getVideoLoadedFraction()  // 버퍼링에 따라 플레이어에서 표시하는 동영상의 비율을 0에서 1 사이의 숫자로 반환
 ytPlayer1.getPlayerState()          // 레이어의 상태를 반환( -1 시작되지 않음, 0 종료, 1 재생 중, 2 일시중지, 3 – 버퍼링, 5 – 동영상 신호 )
 ytPlayer1.getCurrentTime()          // 동영상 재생이 시작된 이후의 경과 시간을 초 단위로 반환(Number)

 // 재생품질
 ytPlayer1.getPlaybackQuality()      // 영상의 품질 반환(String으로 반환되며 값은 highres, hd1080, hd720, large, medium, small)
 ytPlayer1.setPlaybackQuality()      // 영상의 품질 설정(String으로 입력하며 값은 mall, medium, large, hd720, hd1080, highres, default)
 ytPlayer1.getAvailableQualityLevels()  // 재생 중인 영상에서 설정할 수 있는 품질의 형식을 반환(String)

 // 영상 정보
 ytPlayer1.getDuration()                 // 재생시간을 초단위로 반환
 ytPlayer1.getVideoUrl()                 // 재생 중인 영상의 url반환
 ytPlayer1.getVideoEmbedCode()           // 재생 중인 영상의 삽입 코드 반환

 // 재생목록 정보
 player.getPlaylist()                 // 재생 목록에 포함된 videoId들을 반환(Array)
 player.getPlaylistIndex()            // 재생 중인 영상의 동영상 색인(index)를 반환

 */


// 동영상이 준비된 경우 실행될 함수
function onPlayerReady(event) {
  event.target.playVideo();
}

// 동영상의 상태가 변경된 경우
function onPlayerStateChange(event) {
  /*
    event.data
      -1(시작되지 않음)
      0(종료됨)
      1(재생 중)
      2(일시중지됨)
      3(버퍼링 중)
      5(동영상 신호)
   */

  var statusMsg = [
    '시작되지 않았습니다.',
    '종료되었습니다.',
    '재생 중입니다.',
    '일시 중지 되었습니다.',
    '버퍼링 중 입니다.',
    '동영상 신호 '+event.data
  ];
  $('.section').find('.info .status .val').text(statusMsg[event.data+1]);

  function progress() {
    var currentTime = parseInt(ytPlayer1.getCurrentTime()),
      durationTime = parseInt(ytPlayer1.getDuration()),
      graph = currentTime / durationTime * 100;
    $('.section .info .duration .val').text( currentTime +' / '+ durationTime );
    $('.section .info .duration .graph span').width(graph+'%');

    if ( event.data == 1 ){
      setTimeout(function(){
        progress();
      },200);
    }
  }
  progress();

  if ( event.data == 1) {
    // 영상정보 입력
    var section = $('.section');

    $(section).find('.info .url .val').html( '<a href="'+ytPlayer1.getVideoUrl()+'" target="_blank">'+ytPlayer1.getVideoUrl()+'</a>' );

    if ( playList !== 'undefined' &&  $(section).find('.info .list .val a').length == 0 ) {
      var playList = ytPlayer1.getPlaylist();
      $(section).find('.info .list .val').empty();
      $(playList).each(function(i){
        var listVal = playList[i],
          listUrl = 'https://youtu.be/'+listVal,
          listEle = '<a href="#" target="_blank">'+listUrl+'</a>';
        $(section).find('.info .list .val').append( listEle );
        if ( i == 0 ) $(section).find('.info .list .val a').eq(0).addClass('active');
      })
    }
    $('.section').find('.info .list .val a').removeClass('active')
    $('.section').find('.info .list .val a').eq( ytPlayer1.getPlaylistIndex() ).addClass('active');

  }


  /*if (event.data == YT.PlayerState.PLAYING && !done) {
   setTimeout(stopVideo, 6000);
   done = true;
   }*/
}

// 동영상의 화질 변경 시(초기 재생 시에도 실행)
function onPlaybackQualityChange(event) {
  $('.section .info .format .val').text(event.data);
  console.log('화질변경: '+event.data);
}

// 동영상의 재생 속도 변경 시
function onPlaybackRateChange(event) {
  console.log('속도변경 '+event.data);
}

// 에러 발생 시
function onError(event) {
  console.log('에러 '+event.data);
}

// API 메소드로 모듈을 로드, 언로드 시
function onApiChange(event) {
  //console.log(ytPlayer1.getOptions('iv-module', 'videoId'))
}

// test buttons
$('.section .btn_area button').on('click', function() {
  var btnType = $(this).attr('class'),
    targetVideo = eval( $(this).attr('video-target') ),
    currntTime = parseInt(ytPlayer1.getCurrentTime());

  if (btnType == 'btn_play') {
    targetVideo.playVideo();
  }else if (btnType == 'btn_stop') {
    targetVideo.stopVideo();
  }else if (btnType == 'btn_pause') {
    targetVideo.pauseVideo();
  }else if (btnType == 'btn_next') {
    targetVideo.nextVideo();
  }else if (btnType == 'btn_prev') {
    targetVideo.previousVideo();
  }else if (btnType == 'btn_next10') {
    targetVideo.seekTo( currntTime + 10 );
  }else if (btnType == 'btn_prev10') {
    targetVideo.seekTo( currntTime - 10 );
  }else if (btnType == 'btn_slow') {
    targetVideo.setPlaybackRate(0.5)
  }else if (btnType == 'btn_normal') {
    targetVideo.setPlaybackRate(1)
  }else if (btnType == 'btn_fast') {
    targetVideo.setPlaybackRate(2)
  }else if (btnType == 'btn_mute') {
    ytPlayer1.mute();
  }else if (btnType == 'btn_unmute') {
    ytPlayer1.unMute();
  }else if (btnType == 'btn_vol20') {
    ytPlayer1.setVolume(20);
  }else if (btnType == 'btn_vol100') {
    ytPlayer1.setVolume(100);
  }else if (btnType == 'btn_hd720') {
    ytPlayer1.setPlaybackQuality('hd720');
  }else if (btnType == 'btn_hd1080') {
    ytPlayer1.setPlaybackQuality('hd1080');
  }else if (btnType == 'btn_change'){
    ytPlayer1.loadVideoById('aMiy6p27zUk')
  }
});

// link playList
$('.section .info').on('click', '.list .val a', function() {
  ytPlayer1.playVideoAt( $(this).index() );
  return false
});