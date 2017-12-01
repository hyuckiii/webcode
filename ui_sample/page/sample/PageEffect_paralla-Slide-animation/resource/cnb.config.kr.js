var servicePathData = {};

// 서비스 링크
if( _serviceEnv == 'rc' ){
    servicePathData = {
        plaync : 'http://rc.kr.plaync.com/',
        cs : 'https://rc-cs.plaync.com/',
        nshop : 'http://rc.nshop.plaync.com/nshop/',
        bns : 'http://rc.bns.plaync.com/',
        aion : 'http://rc.aion.plaync.com/',
        lineage : 'http://rc.lineage.plaync.com/',
        lineage2 : 'http://rc.lineage2.plaync.com/',
        lovebeat : 'http://rc.lovebeat.plaync.com/',
        bm : 'http://bm.plaync.com/',
        ha : 'http://ha.plaync.com/',
        rk : 'http://rc.rk.plaync.com',
        lineagem : 'http://rc.lineagem.plaync.com',
        mypage : 'https://rc-id.plaync.com/account/main/intro',
        inquiry_list : 'https://rc-cs.plaync.com/inquiry/list/view'
    }
} else {
    servicePathData = {
        plaync : 'http://kr.plaync.com/',
        cs : 'https://cs.plaync.com/',
        nshop : 'http://nshop.plaync.com/nshop/',
        bns : 'http://bns.plaync.com/',
        aion : 'http://aion.plaync.com/',
        lineage : 'http://lineage.plaync.com/',
        lineage2 : 'http://lineage2.plaync.com/',
        lovebeat : 'http://lovebeat.plaync.com/',
        bm : 'http://bm.plaync.com/',
        ha : 'http://ha.plaync.com/',
        rk : 'http://rk.plaync.com',
        lineagem : 'http://lineagem.plaync.com',
        mypage : 'https://id.plaync.com/account/main/intro ',
        inquiry_list : 'https://cs.plaync.com/inquiry/list/view'
    }
}
window.servicePath = servicePathData;

// LNB_ 런칭(161208)
var LnbData = [
    {
        title : "가이드",
        url : window._path + "board/rk_guide/list",
        iconType : "false",
        sub : [
            {
                title : "레드나이츠 가이드",
                url : window._path + "board/rk_guide/list",
                iconType : "false"
            },
            {
                title : "CM의 이야기",
                url : window._path + "board/cm_story/list",
                iconType : "false"
            },
            {
                title : "게임소개",
                url : window._path + "game/overview/index",
                iconType : "external"
            }
        ]
    },
    {
        title : "미디어",
        url : window._path + "board/magazine/list",
        sub : [
            {
                title : "라라의 페이스북",
                url : window._path + "board/magazine/list",
                iconType : "false"
            },
            {
                title : "공식 동영상",
                url : window._path + "board/movie_clip/list",
                iconType : "false"
            }
        ]
    },
    {
        title : "소식",
        url : window._path + "board/notice/list",
        sub : [
            {
                title : "공지사항",
                url : window._path + "board/notice/list",
                iconType : "false"
            },
            {
                title : "업데이트",
                url : window._path + "board/update/list",
                iconType : "false"
            },
            {
                title : "이벤트",
                url : window._path + "board/eventlist_running/list",
                iconType : "false"
            },
            {
                title : "협상테이블",
                url : window._path + "board/talk/list",
                iconType : "false"
            }
        ]
    },
    {
        title : "커뮤니티",
        url : window._path + "board/free/list",
        sub : []
    },
    {
        title : "혈맹",
        url : window._path + "my/guild/board/free/list",
        sub : []
    }
];

var ServiceListData = {
    isServiceShow: true,
    isPcShow: true,
    isMobileShow: true,
    "service" : [
        {
            "title" : "plaync",
            "url" : servicePath.plaync,
            "className" : "plaync"
        },
        {
            "title" : "고객센터",
            "url" : servicePath.cs,
            "className" : "cs"
        },
        {
            "title" : "N샵",
            "url" : servicePath.nshop,
            "className" : "nshop"
        }
    ],
    "pc" : [
        {
            "title" : "Blade&amp;Soul",
            "url" : servicePath.bns,
            "thumbImg" : "/client/index",
            "className" : "bns"
        },
        {
            "title" : "아이온",
            "url" : servicePath.aion,
            "thumbImg" : "/client/index",
            "className" : "aion"
        },
        {
            "title" : "리니지",
            "url" : servicePath.lineage,
            "thumbImg" : "/client/index",
            "className" : "lineage"
        },
        {
            "title" : "리니지2",
            "url" : servicePath.lineage2,
            "thumbImg" : "/client/index",
            "className" : "lineage2"
        },
        {
            "title" : "러브비트",
            "url" : servicePath.lovebeat,
            "thumbImg" : "/client/index",
            "className" : "lovebeat"
        },
        {
            "title" : "프로야구매니저",
            "url" : servicePath.bm,
            "thumbImg" : "/client/index",
            "className" : "bm"
        }
    ],

    "mobile" : [
        {
            "title" : "리니지 레드나이츠",
            "url" : servicePath.rk,
            "thumbImg" : "/client/index",
            "className" : "rk"
        },
        {
            "title" : "헌터스어드벤처",
            "url" : servicePath.ha,
            "thumbImg" : "/client/index",
            "className" : "ha"
        },
        {
            "title" : "리니지M",
            "url" : servicePath.lineagem,
            "thumbImg" : "/client/index",
            "className" : "lineagem"
        }
    ]
};


var AppDownloadData = {
    isShow: true,
    redknights: {
        appName: '리니지 레드나이츠',
        thumbImg: 'http://akstatic.plaync.com/uikit/cnb/img/app/@3x/rk.png',
        appScheme: 'redknights',
        androPackage: 'com.ncsoft.redknights',
        iosAppLink: 'https://192299.tlnk.io/serve?action=click&publisher_id=344973&site_id=131152&my_campaign={official_web}&my_ad={main_btn_dl}&my_keyword={ios}'
    },
    // ncm: {
    //     appName: 'CAT 메신저',
    //     thumbImg: 'http://akstatic.plaync.com/uikit/cnb/img/app/@3x/cat.png',
    //     appScheme: 'ncm',
    //     androPackage: 'com.ncsoft.android.apps.ncm',
    //     iosAppLink: 'http://itunes.apple.com/kr/app/ncmesinjeo/id512119346'
    // },
    buff: {
        appName: 'BUFF',
        thumbImg: 'http://akstatic.plaync.com/uikit/cnb/img/app/@3x/buff.png',
        appScheme: 'buff',
        androPackage: 'com.ncsoft.android.buff',
        iosAppLink: 'http://itunes.apple.com/kr/app/buff/id915637215?mt=8'
    }
};

var ShortcutData = {
    isShow: true, // 숏컷 항목 자체를 보이지 않게 하고 싶을때 사용
    charHome: {
        isShow: true,
        "url": window._path + "my/profile/character"
    },
    mypage: {
        isShow: true,
        "url": servicePathData.mypage
    },
    mynshop: {
        isShow: false,
        "url": ""
    },
    coupon: {
        isShow: false,
        "url": ""
    },
    couponGame: {
        isShow: false,
        "url": ""
    },
    ncoin: {
        isShow: false,
        "url": ""
    },
    npoint: {
        isShow: false,
        "url": ""
    },
    npointGame: {
        isShow: false,
        "url": ""
    },
    gift: {
        isShow: false,
        "url": ""
    },
    ticket: {
        isShow: false,
        "url": ""
    },
    cs: {
        isShow: true,
        "url": servicePathData.inquiry_list
    }
};


var cnbConfig = {
    bi : {
        title : "리니지 레드나이츠",
        url : window._path
    },
    useLeftMenu: true, // 햄버거 메뉴 사용 여부
    useJoinMenu: true, // Join/회원가입 메뉴 사용: false일 경우 해당 마크업 추가되지 않음
    useGameStart : 'mobileGameDown', // 'gameStart' or 'mobileGameDown' or ''
    // pc 게임일 경우 gameStart 내용 입력
    gameStart : {
        clientUrl : "",
        clickFunc : "",
        GameID : "",
        SessKey : ""
    },
    // mobile 게임일 경우 mobileGameDown 내용 입력
    mobileGameDown : {
        showAndro: true,
        showIos: true,
        appName: '리니지 레드나이츠',
        appScheme: 'redknights',
        androPackage: 'com.ncsoft.redknights',
        iosAppLink: 'https://192299.tlnk.io/serve?action=click&publisher_id=344973&site_id=131152&my_campaign={official_web}&my_ad={main_btn_dl}&my_keyword={ios}'
    },
    active : {},
    lnbData : LnbData,
    shortCut : ShortcutData,
    appDownloadData : AppDownloadData,
    serviceListData : ServiceListData,
    loginFN: GNBLogin,
    logoutFN: GNBLogout,
    useCharChangeMenu: true,
    charChangeFN: ''
};