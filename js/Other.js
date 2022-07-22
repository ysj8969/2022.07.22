$(function () {

    // #other_title > ul > li mouseenter/mouseleave
    $("#other_title > ul > li").mouseenter(function () {
        $(".other_product_wrap").stop().hide();
        $(".other_product_wrap").eq($(this).index()).stop().show();

        $("#other_title > ul > li").removeClass();
        $(this).addClass("other_hover");
    }).mouseleave(function () {
        $("#other_title > ul > li").removeClass();
        $(this).addClass("other_hover");
    });
});