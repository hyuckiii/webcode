/////////////////////
//                 //
// layout.js       //
//                 //
/////////////////////

//var _pathStatic = 'http://akstatic.plaync.com/MXM';
//var _pathHome = '';

// path 설정
/////////////////
var pathHomeKR = 'http://rk.plaync.com',
    pathHomeTW = 'http://asia.nc.com/rk/tw',
    pathHomeSEA = 'http://asia.nc.com/rk/se',
    pathDomain = 'plaync.com',
    pathStatic = '';

var lang = $('html').attr('lang');
var areaData = {};


// 망별 분기
/////////////////
if( _serviceEnv == 'opdev' ){
    pathHomeKR = 'http://opdev.rk.plaync.com';
    pathHomeTW = 'http://opdev.asia.nc.com/rk/tw';
    pathHomeSEA = 'http://opdev.asia.nc.com/rk/se';
    pathStatic = 'http://ui-static.korea.ncsoft.corp/rk/v1';
} else if( _serviceEnv  == 'rc' ){
    pathHomeKR = 'http://rc.rk.plaync.com';
    pathHomeTW = 'http://rc.asia.nc.com/rk/tw';
    pathHomeSEA = 'http://rc.asia.nc.com/rk/se';
    pathStatic = 'http://ui-static.korea.ncsoft.corp/rk/v1';
} else {
    pathHomeKR = 'http://rk.plaync.com';
    pathHomeTW = 'http://asia.nc.com/rk/tw';
    pathHomeSEA = 'http://asia.nc.com/rk/se';
    pathStatic = 'http://akstatic.plaync.com/rk/v1';
}


// 권역별 분기
/////////////////
if( _isProfileTw == true ){
    areaData = {
        region: 'tw',
        title: '台灣/ 香港/ 澳門',
        pathDomain: 'nc.com',
        facebookLink: 'http://www.facebook.com/lineageRedKnights.TW/',
        communityPolicy: '<a href="' + pathHomeTW + '/board/rules/list">討論區政策</a>',
        copyrightStudio: '天堂 Red Knights ® is a registered trademark of NCSOFT Corporation.'
    };
} else if( _isProfileSea  == true ){
    areaData = {
        region: 'sea',
        title: 'South-East Asia',
        pathDomain: 'nc.com',
        facebookLink: 'http://www.facebook.com/lineageRedKnights/',
        communityPolicy: '<a href="' + pathHomeSEA + '/board/rules/list">Community Policy</a>',
        copyrightStudio: 'Lineage Red Knights ® is a registered trademark of NCSOFT Corporation.'
    };
} else {
    areaData = {
        region: 'kr',
        title: '대한민국',
        pathDomain: 'plaync.com',
        facebookLink: 'http://www.facebook.com/lineageRedKnights.KR/',
        communityPolicy: '<a href="' + pathHomeKR + '/board/rules/list">커뮤니티 정책</a>',
        copyrightStudio: 'Lineage Red Knights ® is a registered trademark of NCSOFT Corporation.'
    };
}
window.areaDataConfig = areaData;



////////////
//        //
// cookie //
//        //
////////////
function getCookieRK( name ){
    var nameOfCookie = name + "=";
    var x = 0;

    while ( x <= document.cookie.length )
    {
        var y = (x+nameOfCookie.length);
        if ( document.cookie.substring( x, y ) == nameOfCookie ) {
            if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
                endOfCookie = document.cookie.length;
            return unescape( document.cookie.substring( y, endOfCookie ) );
        }
        x = document.cookie.indexOf( " ", x ) + 1;
        if ( x == 0 )
            break;
    }
    return "";
}

function setCookieRK( name, value, expiredays ){
    var todayDate = new Date();
    todayDate.setDate( todayDate.getDate() + expiredays );
    document.cookie = name + "=" + escape( value ) + "; path=/;domain=."+ areaDataConfig.pathDomain +"; expires=" + todayDate.toGMTString() + ";"
}


//////////////
//          //
// dropdown //
//          //
//////////////
var dropdownLayer = '.ui-dropdown-custom',
    dropdownLayerTitle =  dropdownLayer + ' .select',
    dropdownLayerList =  dropdownLayer + ' .option';

// layer
function toggleSelectLayer(parent){
    var $p = parent;

    if( $p.hasClass('is-active') ){
        $p.removeClass('is-active');
    } else {
        $(dropdownLayer).removeClass('is-active'); // select메뉴가 복수일 경우 모두 제거
        $p.addClass('is-active');
    }
}

function setToggleValue(target, selectDropdown, dataValue){
    var textValue = target.text(),
        listValue = (dataValue)?dataValue:target.data('value');

    $(target).parent('.option').siblings(dropdownLayerTitle).find('span').text( textValue ); // 타이틀 영역 텍스트 변경
    $('input[type="hidden"]', selectDropdown).val(listValue); // input 값 변경
}

//셀렉트메뉴 레이어: title 클릭 시 리스트 활성화/비활성화
$(document).on('click', dropdownLayerTitle, function(e){
    if( $(this).hasClass('disabled') ) return;

    var $parent = $(this).parent(dropdownLayer);

    toggleSelectLayer($parent);
});

// 셀렉트메뉴 레이어: list 선택 시 title 변경
$(document).on('click', dropdownLayerList, function(e){
    var $selectedDropdown = $(this).parent(dropdownLayer);

    var $eventTartget = $(e.target);

    if( $eventTartget.hasClass('option') ) return;

    toggleSelectLayer($selectedDropdown);
    setToggleValue($eventTartget, $selectedDropdown);
});

var MainLayer = new (function(){
    var MainLayer = function(){
        return this;
    };

    MainLayer.fn = MainLayer.prototype = {
        show: function (toggleId, slickId) {
            var _slickId = $(slickId);

            $(toggleId).addClass('is-show');
            $('body').addClass('ly-active');
        },
        hide: function (e) {
            $('.ly-container').removeClass('is-show');
            $('body').removeClass('ly-active');
        }
    };

    return MainLayer;
}())();

$(document).ready(function(){
    /////////////
    //
    // 레이어
    //
    /////////////
    var msgPreorderAlertFinish = ( $.i18n )? $.i18n.prop('preorder.alert.finish') : '';

    $('.btn-create-clan').on('click', function(e){
        e.preventDefault();
        alert(msgPreorderAlertFinish);
    });

    // 레이어 활성화
    $('[data-layer]').on('click', function(e){
        e.preventDefault();

        var toggleId = '#' + $(this).data('layer');

        if( toggleId == '#layerPreorderClan' ) return;

        MainLayer.show(toggleId);

        // 프론티어 레이어 내 slick
        if( toggleId == '#layerPreorderClan' ) {
            frontierApplyImageUpload();

            $( '#emblemList' ).mCustomScrollbar({
                theme: 'dark-3',
                axis: 'x',
                contentTouchScroll: true
            });

            $( '#emblemList' ).mCustomScrollbar( 'update' );

            //$( '#mCSB_1_container' ).width( 2508 );

            //select first item
            var $emblemItem = $( '#emblemList' ).find( '.emblem-items:eq(0)' ).trigger( 'click' );
            var val = $emblemItem.find( 'img').attr( 'src' );
            $( '#emblemImageInputBox' ).val( val );

        }
    });

    // 레이어 닫기 버튼
    $('.btn-ly-close').on('click', function(){
        MainLayer.hide();
    });

    // 레이어 컨테이너 클릭 시 닫기
    $('.ly-container').on('click', function(e){
        var _target = $(e.target);

        if( _target.parents().hasClass('ly-header') || _target.parents().hasClass('ly-contents') ||  _target.parents().hasClass('ly-container-wrap') ) {
            return;
        }

        MainLayer.hide();
    });

    // 토글
    $('[data-toggle]').on('click', function(e){
        var toggleId = '#' + $(this).data('toggle');
        $(toggleId).toggleClass('is-show');
        $(this).toggleClass('is-active');
    });


    /////////////
    //
    // 프론티어 이미지 업로드
    //
    /////////////
    function frontierApplyImageUpload() {

        //emblem
        emblemUpload = new ui.ncUpload({
            callbackName: 'emblemUploadCallback',
            type: 'emblem'
        });
        emblemUpload.onComplete.add( function( _data ){
            var currData = _data.images,
                url = currData[ currData.length - 1 ],
                $parent = $( '.wrap-emblem' );

            displayByImages( $parent, [ url ] );

            //fill inputBox
            emblemImagesInputBox.val( [ url ] );

            $('.wrap-emblem .emblem-items').removeClass('is-selected');
            $( '.wrap-emblem .attach-list-items' ).addClass( 'is-selected' );
        }, this );

        //plan
        planUpload = new ui.ncUpload({
            callbackName: 'planUploadCallback',
            type: 'plan'
        });
        planUpload.onComplete.add( function( _data ){
            var currData = _data.images,
                url = currData[ currData.length - 1 ],
                $parent = $( '.wrap-plan-attach' );

            displayByImages( $parent, currData );

            //fill inputBox
            planImagesInputBox.val( currData );
        }, this );

        //hidden inputBox - store images
        var planImagesInputBox = $( '#planImagesInputBox' );
        var emblemImagesInputBox = $( '#emblemImageInputBox' );

        var tmpl = function( url ){
            return 	'<div class="attach-thumb" data-url="'+ url +'">'+
                '<img src="'+ url +'" alt="" />'+
                '<button type="button" class="btn btn-img-upload-del">'+
                '<i class="po-icon-form-delete"></i>'+
                '</button>'+
                '</div>';
        }

        var displayByImages = function( $parent, currData ){
            //removeAll
            $parent.find( '.attach-list-items .attach-thumb' )
                .remove();

            //displaying uploaded Images
            $parent.find( '.attach-list-items iframe' ).show();

            for( var i = 0, len = currData.length; len > i; i++ ){
                $parent.find( '.attach-list-items:eq(' + ( i ) + ')' )
                    .append( tmpl( currData[ i ] ) );

                $parent.find( '.attach-list-items:eq(' + ( i ) + ') iframe' ).hide();
            }

            //fill inputBox
            planImagesInputBox.val( currData );
        }

        // remove emblem Image
        $( 'body' ).on( 'click', '.wrap-emblem .btn-img-upload-del', function( evt ) {
            evt.preventDefault();
            evt.stopPropagation();

            $( this ).parents('.attach-list-items' ).find( 'iframe' ).show();

            var $this = $( this ).parents('.attach-thumb' );

            //emblemImagesInputBox.val( emblemUpload.removeImage( $this.attr( 'data-url' ) ) );
            $this.remove();

            var $emblemItem = $( '#emblemList' ).find( '.emblem-items:eq(0)' ).trigger( 'click' );
            var val = $emblemItem.find( 'img').attr( 'src' );
            emblemImagesInputBox.val( val );

            $( '#emblemList' ).mCustomScrollbar( 'scrollTo', 0 );
        });

        // 엠블럼 클릭 시 선택 효과
        $( 'body' ).on( 'click', '.emblem-items', function( evt ) {
            var $this = $( evt.currentTarget );

            $('.wrap-emblem .emblem-items').removeClass('is-selected');
            $('.wrap-emblem .attach-list-items').removeClass('is-selected');

            var currData = $( this ).find( '.emblem-wrap img' ).attr( 'src' );
            emblemImagesInputBox.val( currData );
            $this.addClass( 'is-selected' );
        });

        $( 'body' ).on( 'click', '.wrap-emblem .attach-list-items', function() {
            $('.wrap-emblem .emblem-items').removeClass( 'is-selected' );
            $('.wrap-emblem .attach-list-items').addClass( 'is-selected' );

        });

        // remove plan Image
        $( 'body' ).on( 'click', '.wrap-plan-attach .btn-img-upload-del', function( evt ) {
            evt.preventDefault();
            evt.stopPropagation();

            var $this = $( this ).parents('.attach-thumb' ),
                $parent = $( '.wrap-plan-attach' );


            var currData = planUpload.removeImage( $this.attr( 'data-url' ) );
            displayByImages( $parent, currData );

            planImagesInputBox.val( currData );
            $this.remove();
            $( this ).parents('.attach-list-items' ).find( 'iframe' ).show();
        });
    }


    // 아지트 팝업
    $( '.btn-go-agit' ).on('click', function ( evt ) {
        evt.preventDefault();
        // window.open(this.href, 'rkAgitPop', 'width=500, height=700').focus(); return false
        // openPopup(this, 'rkAgitPop', 500, 700, 'yes');
        openPopup(this.href, 'rkAgitPop');
    });
});


// markup template
var markupFooter = [
    '<div class="footer footer-' + areaDataConfig.region + '">',
    '   <div class="footer-sns"></div>',
    '   <div class="select-country">',
    '       <div class="footer-communtiy-policy">' + areaDataConfig.communityPolicy + '</div>',
    '       <div class="select-country-title">',
    '           <i class="icon icon-country"></i>',
    // '           <span class="country-text">COUNTRY : </span>',
    '			<span class="current-title">'+ areaDataConfig.title +'</span>',
    '           <i class="icon icon-country-arrow"></i>',
    '       </div>',
    '       <ul class="select-country-list">',
    '           <li class="select-country-items selected"><a href="'+ pathHomeKR +'">대한민국</a></li>',
    '           <li class="select-country-items"><a href="'+ pathHomeTW +'">台灣/ 香港/ 澳門</a></li>',
    '           <li class="select-country-items"><a href="'+ pathHomeSEA +'">South-East Asia</a></li>',
    '       </ul>',
    '   </div>',
    '   <div class="footer-links"></div>',
    '   <div class="footer-copyright">',
    '       <div class="copyright-studio">' + areaDataConfig.copyrightStudio + '</div>',
    '       <div class="copyright-company">Copyright &copy;2016 NCSOFT Corporation.<br><span class="reserved">All Rights Reserved.</span></div>',
    '   </div>',
    // '   <div class="footer-logo"><a href="http://global.ncsoft.com/global/" target="_blank">NCSOFT</a></div>',
    '   <div class="footer-logo">NCSOFT</div>',
    '</div>'
];

// Footer > Links
var markupFooterLinksKR = [
    '<ul class="footer-links-list footer-links-list-kr">',
    '   <li class="footer-links-items items1"><a href="http://www.ncsoft.com/" target="_blank">회사소개</a></li>',
    '   <li class="footer-links-items items2"><a href="http://main.plaync.com/rule/agreement/gamesvc" target="_blank">이용약관</a></li>',
    '   <li class="footer-links-items items3"><a href="http://main.plaync.com/rule/privacy/privacy" target="_blank">개인정보처리방침</a></li>',
    '   <li class="footer-links-items items4"><a href="http://main.plaync.com/rule/youth/youthpolicy" target="_blank">청소년 보호 정책</a></li>',
    '   <li class="footer-links-items items5"><a href="http://main.plaync.com/rule/policy/redknights" target="_blank">운영정책</a></li>',
    // '   <li class="footer-links-items items6"><a href="'+_pathHome+'/event/rule">이벤트 규약</a></li>',
    // '   <li class="footer-links-items items7">',
    // '       <span id="footerGrade" class="footer-grade">게임이용등급</span>',
    // '       <div class="grade-info"><img src="'+ _pathStatic +'/global/img/layout/layer_grade_ko.png" alt=""></div>',
    // '   </li>',
    '   <li class="footer-links-items items8"><a href="https://id.plaync.com/account/dormant/index">장기 미이용 계정 조회 및 복귀</a></li>',
    '</ul>'
];
var markupFooterLinksTW = [
    '<ul class="footer-links-list footer-links-list-tw">',
    '   <li class="footer-links-items items1"><a href="http://global.ncsoft.com/global/" target="_blank">公司介紹</a></li>',
    '   <li class="footer-links-items items2"><a href="http://asia.nc.com/rule/agreement?category=gamesvc">使用條款</a></li>',
    '   <li class="footer-links-items items3"><a href="http://asia.nc.com/rule/privacy">個人資訊處理方針</a></li>',
    '   <li class="footer-links-items items5"><a href="http://asia.nc.com/rule/policy?category=redknights">營運政策</a></li>',
    '</ul>'
];
var markupFooterLinksSEA = [
    '<ul class="footer-links-list footer-links-list-sea">',
    '   <li class="footer-links-items items1"><a href="http://global.ncsoft.com/global/" target="_blank">About Us</a></li>',
    '   <li class="footer-links-items items2"><a href="http://asia.nc.com/rule/agreement?category=gamesvc">Terms of Service</a></li>',
    '   <li class="footer-links-items items3"><a href="http://asia.nc.com/rule/privacy">Privacy Policy</a></li>',
    '   <li class="footer-links-items items5"><a href="http://asia.nc.com/rule/policy?category=redknights">Operation Policy</a></li>',
    '</ul>'
];

// Footer > Copyright
var markupFooterCopyKR = [
    '<div class="footer-info footer-info-ko">',
    '   <div class="footer-info-address">상호 (주)엔씨소프트 대표 김택진 사업자 등록번호 144-85-04244 통신판매업신고 제2013-경기성남-1268호 <a href="http://ftc.go.kr/info/bizinfo/communicationView.jsp?apv_perm_no=2013378021930201264&area1=&amp;area2=&amp;currpage=1&amp;searchKey=04&amp;searchVal=1448504244&amp;stdate=&amp;enddate" target="_blank">사업자정보확인</a></div>',
    '   <div class="footer-info-cs">주소 경기도 성남시 분당구 대왕판교로 644번길 12 고객상담 1600-0020 팩스 02-2186-3550 이메일 <a href="mailto:credit@ncsoft.com" class="email">credit@ncsoft.com</a></div>',
    '</div>'
];
var markupFooterCopyTW = [
    '<dl class="footer-info footer-info-tw">',
    '	<dt><img src="'+ pathStatic +'/img/layout/footer/grade_tw.png" alt=""></dt>',
    '	<dd>',
    '		<p>本遊戲部分內容涉及暴力情節。</p>',
    '		<p>注意使用時間，避免沉迷遊戲，可能影響身心健康。</p>',
    '		<p>本遊戲部分內容或服務需另行支付其他費用。</p>',
    '	</dd>',
    '</dl>'
];
// Footer > SNS
var markupFooterSnsKR = [
    '<ul class="footer-sns-list footer-sns-list-kr">',
    '   <li class="footer-sns-items footer-sns-items-facebook"><a href="' + areaDataConfig.facebookLink + '" target="_blank">Facebook</a></li>',
    '</ul>'
];
var markupFooterSnsSEA = [
    '<ul class="footer-sns-list footer-sns-list-jp">',
    '   <li class="footer-sns-items footer-sns-items-facebook"><a href="' + areaDataConfig.facebookLink + '" target="_blank">Facebook</a></li>',
    '</ul>'
];
var markupFooterSnsTW = [
    '<ul class="footer-sns-list footer-sns-list-tw">',
    '   <li class="footer-sns-items footer-sns-items-facebook"><a href="' + areaDataConfig.facebookLink + '" target="_blank">Facebook</a></li>',
    '</ul>'
];

// 푸터 마크업 추가
function showFooter(){
    var $footer = $('#footer');

    markupFooter = markupFooter.join('');
    $footer.append(markupFooter);

    var $links = $('.footer-links');
    var $copyright = $('.footer-copyright');
    //var $copyrightStudio = $('.copyright-studio');
    var $footerSns = $('.footer-sns');

    if( areaDataConfig.region == 'tw' ){
        markupFooterLinksTW = markupFooterLinksTW.join('');
        markupFooterCopyTW  = markupFooterCopyTW.join('');
        markupFooterSnsTW = markupFooterSnsTW.join('');

        $links.append(markupFooterLinksTW);
        $copyright.prepend(markupFooterCopyTW);
        $footerSns.prepend(markupFooterSnsTW);
    } else if( areaDataConfig.region == 'sea' ) {
        markupFooterLinksSEA = markupFooterLinksSEA.join('');
        markupFooterSnsKR = markupFooterSnsKR.join('');

        $links.append(markupFooterLinksSEA);
        $footerSns.prepend(markupFooterSnsKR);
    } else {
        markupFooterLinksKR = markupFooterLinksKR.join('');
        markupFooterCopyKR  = markupFooterCopyKR.join('');
        markupFooterSnsKR = markupFooterSnsKR.join('');

        $links.append( markupFooterLinksKR );
        $copyright.prepend(markupFooterCopyKR);
        $footerSns.prepend(markupFooterSnsKR);
    }
}

function openPopup( url, name, width, height, ObjScroll ){
    if ( !url ) return;
    name = name || 'ncsoft';
    width = width || 500;
    height = height || 700;
    ObjScroll = ObjScroll || 'no';

    if( name == 'RkMiniGamesPop' || name == 'rkAgitPop' ) {
        if( $('body').hasClass('mobile') ||  $('body').hasClass('tablet')  ) {
            location.href = url;
            return;
        }
    }

    window.open( url, name, 'width='+ width +' , height=' + height +' , scrollbars=' + ObjScroll).focus();
}


$(function(){
    var clickevent = $('body').hasClass('pc')?'click':'touchstart';

    // 네비게이션
    // var stickyHeader = new StickyNav( $('.header') );
    //var stickyNavigation = new StickyNav( $('.wrap-nav-top') );
    //var scrollTimer; // IE8 브라우저 스크롤이벤트 2번씩 발생대응

    // select메뉴
    // var $selectLayer = $('.ui-dropdown-layer');
    // var $selectTitle = $('.ui-dropdown-layer-title');
    // var $selectVaule = $('.ui-dropdown-layer-value');


    // 네비게이션 toggle: 모바일
    // $(document).on('click', '.wrap-nav-slide .close', function(e){
    //     e.preventDefault();
    //     window.closeGnbSideWrap('left');
    // });

    // function toggleSelectLayer(parent){
    //     var $p = parent;
    //
    //     if( $p.hasClass('on') ){
    //         $p.removeClass('on');
    //     } else {
    //         $selectLayer.removeClass('on'); // select메뉴가 복수일 경우 모두 제거
    //         $p.addClass('on');
    //     }
    // }
    //셀렉트메뉴 레이어: title 클릭 시 리스트 활성화/비활성화
    // $(document).on('click', '.ui-dropdown-layer-title', function(e){
    //     if( $(this).hasClass('disabled') ) return;
    //
    //     var $parent = $(this).parent('.ui-dropdown-layer');
    //
    //     toggleSelectLayer($parent);
    // });

    //셀렉트메뉴 레이어: list 선택 시 title 변경
    // $(document).on('click', '.ui-dropdown-layer-list', function(e){
    //     var $parent = $(this).parent('.ui-dropdown-layer');
    //     var $tartget = $(e.target),
    //         text = $tartget.text(),
    //         listValue = $tartget.data('value');
    //
    //     toggleSelectLayer($parent);
    //     $(this).siblings('.ui-dropdown-layer-title').text( text );
    //     $('input[type="hidden"]', $parent).val(listValue).attr( 'data-value', text ).change();
    // });

    // 레이어: 닫기
    $(document).on('click', '.container', function(e){
        var $target = $(e.target);

        // 드롭다운 셀렉트 메뉴
        // if( $target.attr('class') != 'ui-dropdown-layer-title' ){
        //     $selectLayer.removeClass('on');
        // }

        // Footer > Country Layer
        if( $('.select-country').hasClass('on') && $target.attr('class') != 'select-country' ){
            $('.select-country').removeClass('on');
        }

        // Footer > Country Layer
        if( $('.grade-info').hasClass('on') && $target.attr('class') != 'grade-info' ){
            $('.grade-info').removeClass('on');
        }
    });

    // 풋터 > 국가 선택 레이어
    $(document).on('click', '.select-country-title', function(e){
        var $target = $(e.target).parents('.select-country');

        $target.toggleClass('on');

        return false;
    });

    // 풋터 > 등급안내 레이어 for NCS
    $(document).on('click', '.footer-grade', function(e){

        $('.grade-info').toggleClass('on');

        return false;
    });

});

function fixFluc(){
    $('body')
        .addClass('auto');

    $('.depth3-list').on('click', 'a', function(e){
        var redirect = $(this).attr('href');
        e.preventDefault();

        $('body')
            .removeClass('auto')
            .fadeIn(400, function(){
                document.location.href = redirect;
                $(this).addClass('auto');
            });
    });
}

$(document).ready(function(){
    fixFluc();
    showFooter();
});

// 알림영역 아지트 팝업으로
$(document).on("click", ".ncc-noti a[href]", function(e) {
    if ($(this).attr("href").indexOf("/preorder/agit/") > -1) {
        e.preventDefault();
        openPopup(this, 'rkAgitPop', 500, 700);
    }
});
