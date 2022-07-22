$(function () {
    // #best_main > .contents_title > ul > li mouseenter
    $("#best_main > .contents_title > ul > li").mouseenter(function () {
        $(".best_main_book_wrap").stop().hide();
        $(".best_main_book_wrap").eq($(this).index()).stop().show();

        $("#best_main > .contents_title > ul > li").css({
            backgroundColor: "rgba(255, 255, 255, 0)",
            color: "#000"
        });
        $(this).css({
            backgroundColor: "#5e6b9e",
            color: "#fff"
        });
    }).mouseleave(function () {
        $("#best_main > .contents_title > ul > li").css({
            backgroundColor: "rgba(255, 255, 255, 0)",
            color: "#000"
        });
        $(this).css({
            backgroundColor: "#5e6b9e",
            color: "#fff"
        });
    });

    // #best_side > ul > li mouseenter/mouseleave
    $("#best_side > ul > li").mouseenter(function () {
        $(".best_side_wrap").stop().hide();
        $(".best_side_wrap").eq($(this).index()).stop().show();

        $("#best_side > ul > li").removeClass();
        $(this).addClass("best_side_hover");
    }).mouseleave(function () {
        $("#best_side > ul > li").removeClass();
        $(this).addClass("best_side_hover");
    });
});
