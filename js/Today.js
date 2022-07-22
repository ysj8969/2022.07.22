$(function () {
    // #today_contents >.contents_title > ul > li mouseenter
    $("#today_contents >.contents_title > ul > li").mouseenter(function () {
        $("#today_bookbox_wrap > div").stop().hide();
        $("#today_bookbox_wrap > div").eq($(this).index()).stop().show();

        $("#today_contents > .contents_title > ul > li").css({
            backgroundColor: "#fff",
            color: "#000"
        })
        $(this).css({
            backgroundColor: "#5e6b9e",
            color: "#fff"
        })
    }).mouseleave(function () {
        $("#today_contents > .contents_title > ul > li").css({
            backgroundColor: "#fff",
            color: "#000"
        })
        $(this).css({
            backgroundColor: "#5e6b9e",
            color: "#fff"
        })
    })

    // .today_bookbox_img 이미지 에니메이션
    $(".today_bookbox_img_btn > li").click(function () {
        $(".today_bookbox_img_btn > li:visible").css({
            backgroundColor: "#f8f8f8"
        })
        $(this).css({
            backgroundColor: "#000"
        });

        $(this).parents(".today_bookbox").find(".today_bookbox_intro").stop().hide();
        $(this).parents(".today_bookbox").find(".today_bookbox_introbox").children(".today_bookbox_intro").eq($(this).index()).stop().show();

        var j = $(this).index();



        $(this).parents(".today_bookbox_img").find("img").removeClass();
        $(this).parents(".today_bookbox_img").find("img").eq(j).addClass("today_bookbox_img_type1");
        if (j >= $(this).parents(".today_bookbox_img").find("img:last").index()) {
            j = -1;
        };
        $(this).parents(".today_bookbox_img").find("img").eq(j + 1).addClass("today_bookbox_img_type2");
        $(this).parents(".today_bookbox_img").find("img").eq(j - 1).addClass("today_bookbox_img_type3");
    });



    // .today_bookbox_introbox_prev 이미지 hide/show

    $(".today_bookbox_introbox_prev").click(function () {
        var i = $(this).parent().children("img:visible").index();
        i--;

        if (i < 0) {
            i = 0;
        };

        $(this).parent().children("img").stop().hide();
        $(this).parent().children("img").eq(i).stop().show();

        $(this).siblings(".today_bookbox_subtitle").find(".today_bookbox_subtitle_count").text(Number($(this).parents(".today_bookbox_intro").children("img").eq(i).index() + 1) + "/" + Number($(this).parents(".today_bookbox_intro").children("img:last").index() + 1))
    });

    // .today_bookbox_introbox_next 이미지 hide/show
    $(".today_bookbox_introbox_next").click(function () {
        var i = $(this).parent().children("img:visible").index();
        i++;

        if (i > $(this).parent().children("img:last").index()) {
            i = $(this).parent().children("img:last").index();
        };

        $(this).parent().children("img").stop().hide();
        $(this).parent().children("img").eq(i).stop().show();

        $(this).siblings(".today_bookbox_subtitle").find(".today_bookbox_subtitle_count").text(Number($(this).parents(".today_bookbox_intro").children("img").eq(i).index() + 1) + "/" + Number($(this).parents(".today_bookbox_intro").children("img:last").index() + 1))
    });


    // .today_bookbox_introbox_prev 이미지 hide/show          

    $(".today_bookbox_subtitle_prev").click(function () {
        var i = $(this).parents(".today_bookbox_intro").children("img:visible").index();
        i--;

        if (i < 0) {
            i = 0;
        };

        $(this).parents(".today_bookbox_intro").children("img").stop().hide();
        $(this).parents(".today_bookbox_intro").children("img").eq(i).stop().show();

        $(this).siblings("span").text(Number($(this).parents(".today_bookbox_intro").children("img").eq(i).index() + 1) + "/" + Number($(this).parents(".today_bookbox_intro").children("img:last").index() + 1))
    });

    // .today_bookbox_subtitle_next 이미지 hide/show
    var i = 0;
    $(".today_bookbox_subtitle_next").click(function () {

        i++;

        if (i > $(this).parents(".today_bookbox_intro").children("img:last").index()) {
            i = $(this).parents(".today_bookbox_intro").children("img:last").index();
        };

        $(this).parents(".today_bookbox_intro").children("img").stop().hide();
        $(this).parents(".today_bookbox_intro").children("img").eq(i).stop().show();

        $(this).siblings("span").text(Number($(this).parents(".today_bookbox_intro").children("img").eq(i).index() + 1) + "/" + Number($(this).parents(".today_bookbox_intro").children("img:last").index() + 1))
    });
});