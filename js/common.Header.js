$(function () {

    // header_banner 삭제
    $("#header_remove_banner").click(function () {
        $("#header_banner").stop().slideUp();
    });

    // header_util_nav 토글
    $("#header_util_nav > li:first").mouseover(function () {
        $("#header_util_nav_store").show();
    }).mouseout(function () {
        $("#header_util_nav_store").hide();
    });

    $("#header_util_nav > li:last").mouseover(function () {
        $("#header_util_nav_benefit").show();
    }).mouseout(function () {
        $("#header_util_nav_benefit").hide();
    });


    // header_search_btn 왼쪽으로 이동
    var i = 0;

    function header_btn_left() {

        i--;

        if (i < 0) {
            i = 3
        };
        $("#header_search_ad > img").stop().hide();
        $("#header_search_ad > img").eq(i).stop().show();
        $("#header_search_ad > span").text((i + 1) + "/4")

    };
    $("#header_search_ad > i:last").click(function () {
        header_btn_left();
    });


    // header_search_btn 오른쪽으로 이동
    var i = 0;

    function header_btn_right() {

        i++;

        if (i > 3) {
            i = 0
        };
        $("#header_search_ad > img").stop().hide();
        $("#header_search_ad > img").eq(i).stop().show();
        $("#header_search_ad > span").text((i + 1) + "/4")

    };
    $("#header_search_ad > i:first").click(function () {
        header_btn_right();
    });


    // header_nav 메뉴 아이콘 toggle
    $("#header_nav_main > li > i").mouseenter(function () {
        $("#header_nav_main").stop().hide();
        $("#header_nav_main_toggle").stop().show();
    });
    $("#header_nav_main_toggle").mouseleave(function () {
        $("#header_nav_main_toggle").stop().hide();
        $("#header_nav_main").stop().show();
    });


    // header_nav_main_toggle 메뉴 토글
    $("#header_nav_main_toggle > li > ul > li").mouseenter(function () {
        $(this).children(".header_nav_main_toggle_wrap").stop().show();
    }).mouseleave(function () {
        $(".header_nav_main_toggle_wrap").stop().hide();
    });



    // header_nav_main_sub 메뉴 토글
    $(".header_nav_main_sub").mouseenter(function () {
        $(this).children(".header_nav_main_submenu").stop().slideDown(200);
    }).mouseleave(function () {
        $(".header_nav_main_submenu").stop().slideUp(200);
    });
});