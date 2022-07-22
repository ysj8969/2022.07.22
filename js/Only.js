$(function () {

    // .only_icon prev버튼 슬라이드          
    $("#only_prev").click(function () {
        $(".only_iconbox:last").prependTo(".only_icon");
        $(".only_icon").css({
            marginLeft: -950
        });
        $(".only_icon").stop().animate({
            marginLeft: 0
        }, 800);
    });

    // .only_icon next버튼 슬라이드          
    $("#only_next").click(function () {
        $(".only_icon").stop().animate({
            marginLeft: -950
        }, 800, function () {
            $(".only_iconbox:first").appendTo(".only_icon");
            $(".only_icon").css({
                marginLeft: 0
            });
        });
    });    

});