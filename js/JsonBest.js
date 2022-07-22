// 베스트셀러 도서 api (교보문고종합)

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "용기",
            size: 10
        },
        headers: {
            Authorization: "KakaoAK 352a1f2ab79b09bbac0ca9f6c73b1dab"
        }
    })
    .done(function (msg) {
        for (var i = 0; i < 10; i++) {

            var str = msg.documents[i].title;
            var str2 = str.substring(0, 15);

            $(".best_total > div").eq(i).append("<span>" + Number(i + 1) + "</span>");
            $(".best_total > div").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "' />" + "</a>");
            $(".best_total > div").eq(i).append("<h3>" + '<a href="sub2.html">' + str2 + "</a>" + "</h3>");
            $(".best_total > div").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");
        }
    });

// 베스트셀러 도서 api (인터넷일간)

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "주식",
            size: 10
        },
        headers: {
            Authorization: "KakaoAK 352a1f2ab79b09bbac0ca9f6c73b1dab"
        }
    })
    .done(function (msg) {
        for (var i = 0; i < 10; i++) {

            var str = msg.documents[i].title;
            var str2 = str.substring(0, 15);

            $(".best_internet > div").eq(i).append("<span>" + Number(i + 1) + "</span>");
            $(".best_internet > div").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "' />" + "</a>");
            $(".best_internet > div").eq(i).append("<h3>" + '<a href="sub2.html">' + str2 + "</a>" + "</h3>");
            $(".best_internet > div").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");
        }
    });

// 베스트셀러 도서 api (외국도서)

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "wonder",
            size: 10
        },
        headers: {
            Authorization: "KakaoAK 352a1f2ab79b09bbac0ca9f6c73b1dab"
        }
    })
    .done(function (msg) {
        for (var i = 0; i < 10; i++) {

            var str = msg.documents[i].title;
            var str2 = str.substring(0, 15);

            $(".best_overseas > div").eq(i).append("<span>" + Number(i + 1) + "</span>");
            $(".best_overseas > div").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "' />" + "</a>");
            $(".best_overseas > div").eq(i).append("<h3>" + '<a href="sub2.html">' + str2 + "</a>" + "</h3>");
            $(".best_overseas > div").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");
        }
    });

// 베스트셀러 도서 api (eBook)

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "표현",
            size: 10
        },
        headers: {
            Authorization: "KakaoAK 352a1f2ab79b09bbac0ca9f6c73b1dab"
        }
    })
    .done(function (msg) {
        for (var i = 0; i < 10; i++) {

            var str = msg.documents[i].title;
            var str2 = str.substring(0, 15);

            $(".best_e-book > div").eq(i).append("<span>" + Number(i + 1) + "</span>");
            $(".best_e-book > div").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "' />" + "</a>");
            $(".best_e-book > div").eq(i).append("<h3>" + '<a href="sub2.html">' + str2 + "</a>" + "</h3>");
            $(".best_e-book > div").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");
        }
    });

// 베스트셀러 도서 api (오디오북)

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "등반",
            size: 10
        },
        headers: {
            Authorization: "KakaoAK 352a1f2ab79b09bbac0ca9f6c73b1dab"
        }
    })
    .done(function (msg) {
        for (var i = 0; i < 10; i++) {

            var str = msg.documents[i].title;
            var str2 = str.substring(0, 15);

            $(".best_audio > div").eq(i).append("<span>" + Number(i + 1) + "</span>");
            $(".best_audio > div").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "' />" + "</a>");
            $(".best_audio > div").eq(i).append("<h3>" + '<a href="sub2.html">' + str2 + "</a>" + "</h3>");
            $(".best_audio > div").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");
        }
    });

// 베스트셀러 도서 api (sam)

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "성공",
            size: 10
        },
        headers: {
            Authorization: "KakaoAK 352a1f2ab79b09bbac0ca9f6c73b1dab"
        }
    })
    .done(function (msg) {
        for (var i = 0; i < 10; i++) {

            var str = msg.documents[i].title;
            var str2 = str.substring(0, 15);

            $(".best_sam > div").eq(i).append("<span>" + Number(i + 1) + "</span>");
            $(".best_sam > div").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "' />" + "</a>");
            $(".best_sam > div").eq(i).append("<h3>" + '<a href="sub2.html">' + str2 + "</a>" + "</h3>");
            $(".best_sam > div").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");
        }
    });