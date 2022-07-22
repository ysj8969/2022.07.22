// .intro_side_box 도서api
$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "성장",
            size: 5
        },
        headers: {
            Authorization: "KakaoAK 352a1f2ab79b09bbac0ca9f6c73b1dab"
        }
    })
    .done(function (msg) {
        for (var i = 0; i < 5; i++) {
            var str = msg.documents[i].title;
            var str2 = str.substring(0, 15);

            if (str2.split("").length > 12) {
                str2 += "..."
            }

            $(".intro_side_box > div > div").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "' />" + "</a>");
            $(".intro_side_box > div").eq(i).append("<span>" + '<a href="sub2.html">' + str2 + "</a><br>" + "<span>" + msg.documents[i].authors + "</span>" + msg.documents[i].sale_price + "원</span>");
        }
    });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "몰입",
            size: 5
        },
        headers: {
            Authorization: "KakaoAK 352a1f2ab79b09bbac0ca9f6c73b1dab"
        }
    })
    .done(function (msg) {
        for (var i = 0; i < 5; i++) {
            var str = msg.documents[i].title;
            var str2 = str.substring(0, 15);

            if (str2.split("").length > 12) {
                str2 += "..."
            }

            $(".intro_side_box:last > div > div").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "' />" + "</a>");
            $(".intro_side_box:last > div").eq(i).append("<span>" + '<a href="sub2.html">' + str2 + "</a><br>" + "<span>" + msg.documents[i].authors + "</span>" + msg.documents[i].sale_price + "원</span>");
        }
    });