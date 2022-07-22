$(function () {

    // #new_contents > .contents_title > ul > li mouseenter
    $("#new > .contents_box > .contents_title > ul > li").mouseenter(function () {
        $(".new_contents_wrap").stop().hide();
        $(".new_contents_wrap").eq($(this).index()).stop().show();

        $("#new > .contents_box > .contents_title > ul > li").css({
            backgroundColor: "#fff",
            color: "#000"
        })
        $(this).css({
            backgroundColor: "#5e6b9e",
            color: "#fff"
        })
    }).mouseleave(function () {
        $("#new > .contents_box > .contents_title > ul > li").css({
            backgroundColor: "#fff",
            color: "#000"
        })
        $(this).css({
            backgroundColor: "#5e6b9e",
            color: "#fff"
        })
    })



    // .new_contents_prev 이미지 hide/show
    var i = 0;
    $(".new_contents_prev").click(function () {

        i--;

        if (i < $(this).parent().children(".new_contents_box:first").index()) {
            i = $(this).parent().children(".new_contents_box:last").index();
        };

        $(this).parent().children(".new_contents_box").stop().hide();
        $(this).parent().children(".new_contents_box").eq(i).stop().show();

    });

    // .new_contents_next 이미지 hide/show
    var i = 0;
    $(".new_contents_next").click(function () {

        i++;

        if (i > $(this).parent().children(".new_contents_box:last").index()) {
            i = 0;
        };

        $(this).parent().children(".new_contents_box").stop().hide();
        $(this).parent().children(".new_contents_box").eq(i).stop().show();

    });
});