// #purchase_other 도서 api

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "이기는",
            size: 6
        },
        headers: {
            Authorization: "KakaoAK 352a1f2ab79b09bbac0ca9f6c73b1dab"
        }
    })
    .done(function (msg) {
        for (var i = 0; i < 6; i++) {
            var str = msg.documents[i].title;
            var str2 = str.substring(0, 10);

            if (str2.split("").length > 7) {
                str2 += "..."
            }

            $(".purchase_other_bookbox > div").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "' />" + "</a>");
            $(".purchase_other_bookbox > div").eq(i).append("<h3>" + '<a href="sub2.html">' + str2 + "</a>" + "</h3>");
            $(".purchase_other_bookbox > div").eq(i).append("<h6>" + msg.documents[i].sale_price + "원</h6>");
        }
    });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "습관",
            size: 6
        },
        headers: {
            Authorization: "KakaoAK 352a1f2ab79b09bbac0ca9f6c73b1dab"
        }
    })
    .done(function (msg) {
        for (var i = 0; i < 6; i++) {
            var str = msg.documents[i].title;
            var str2 = str.substring(0, 10);

            if (str2.split("").length > 7) {
                str2 += "..."
            }

            $(".purchase_other_bookbox:eq(1) > div").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "' />" + "</a>");
            $(".purchase_other_bookbox:eq(1) > div").eq(i).append("<h3>" + '<a href="sub2.html">' + str2 + "</a>" + "</h3>");
            $(".purchase_other_bookbox:eq(1) > div").eq(i).append("<h6>" + msg.documents[i].sale_price + "원</h6>");
        }
    });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "지혜",
            size: 12
        },
        headers: {
            Authorization: "KakaoAK 352a1f2ab79b09bbac0ca9f6c73b1dab"
        }
    })
    .done(function (msg) {
        for (var i = 0; i < 6; i++) {
            var str = msg.documents[i].title;
            var str2 = str.substring(0, 10);

            if (str2.split("").length > 7) {
                str2 += "..."
            }

            $(".purchase_other_bookbox:last > div").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "' />" + "</a>");
            $(".purchase_other_bookbox:last > div").eq(i).append("<h3>" + '<a href="sub2.html">' + str2 + "</a>" + "</h3>");
            $(".purchase_other_bookbox:last > div").eq(i).append("<h6>" + msg.documents[i].sale_price + "원</h6>");
        }
    });