$(function () {
    
    // #purchase_inf_pay_num_plus (input 숫자 증가)
    $("#purchase_inf_pay_num_plus").click(function () {
        var i = $(this).siblings("input").val();
        i++;
        $(this).siblings("input").val(i);
    });

    // #purchase_inf_pay_num_minus (input 숫자 감소)
    $("#purchase_inf_pay_num_minus").click(function () {
        var i = $(this).siblings("input").val();
        i--;
        if (i <= 0) {
            alert("최소 주문수량은 1개입니다.");
            i = 1;
        }
        $(this).siblings("input").val(i);
    });

    // #purchase_other_prev 박스 show/hide
    var i = 0
    $("#purchase_other_prev").click(function () {

        i--;

        if (i < 0) {
            i = 2
        }

        $(".purchase_other_wrap").stop().hide();
        $(".purchase_other_wrap").eq(i).stop().show();

    });

    // #purchase_other_next 박스 show/hide
    var i = 0
    $("#purchase_other_next").click(function () {

        i++;

        if (i > 2) {
            i = 0
        }

        $(".purchase_other_wrap").stop().hide();
        $(".purchase_other_wrap").eq(i).stop().show();
    });

});