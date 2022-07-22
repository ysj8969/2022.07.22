$(function () {

    // #banner prev버튼 슬라이더
    $("#banner_prev").click(function () {
        $("#banner_ad > img:last").prependTo("#banner_ad");
        $("#banner_ad").css({
            marginLeft: -1000
        });
        $("#banner_ad").stop().animate({
            marginLeft: 0
        }, 800);
    });
});