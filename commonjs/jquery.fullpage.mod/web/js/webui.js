/*************************************************

 [ jquery.fullpage.mod - webUI.js ]

*************************************************/

// fullpage.js options
var optFullPage = {
  lockAnchors: true,
  navigation: true,
  navigationPosition: 'right',
  css3: false,
  scrollOverflow: ( $('#main').length > 0 ) ? true : false,
  scrollOverflowOptions: {
    click: true,
    tap: true,
    scrollbars: false
  },
  scrollingSpeed: 600,
  slideSpeed: 100,
  slideSync: true,
  fitToSectionDelay: 300,
  easing: 'easeInOutCubic',
  easingcss3: 'ease',
  sectionSelector: '.section',
  afterLoad: function(anchorLink, index){

  },
  onLeave: function(index, nextIndex, direction){
    var section = $('.section'),
      currentSection = $(section).eq(index - 1),
      targetSection = $(section).eq(nextIndex - 1),
      currentAniType = $(currentSection).attr('data-aniType'),
      targetAniType = $(targetSection).attr('data-aniType');

    if ( currentAniType !== undefined ) $(currentSection).removeClass('ani-fade');
    if ( targetAniType !== undefined ) $(targetSection).addClass('ani-fade');
  }
};

$(document).ready(function () {

// init fullpage.js
  $('#fullPage').fullpage(optFullPage);

});
