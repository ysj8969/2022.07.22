$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "경험",
            size: 12
        },
        headers: {
            Authorization: "KakaoAK 352a1f2ab79b09bbac0ca9f6c73b1dab"
        }
    })
    .done(function (msg) {
        for (var i = 0; i < 12; i++) {
            $(".new_domestic > .new_contents_bookbox").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "' />" + "</a>");
            $(".new_domestic > .new_contents_bookbox").eq(i).append("<h3>" + '<a href="sub2.html">' + msg.documents[i].title + "</a>" + "</h3>");
            $(".new_domestic > .new_contents_bookbox").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");

            var str = msg.documents[i].contents;
            var str2 = str.substring(0, 30);

            $(".new_domestic > .new_contents_bookbox").eq(i).append("<p>" + '<a href="sub2.html">' + str2 + "</a>" + "</p>");
        }
    });

// 화제의 신간 도서 api (해외도서)

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "brave",
            size: 12
        },
        headers: {
            Authorization: "KakaoAK 352a1f2ab79b09bbac0ca9f6c73b1dab"
        }
    })
    .done(function (msg) {
        for (var i = 0; i < 12; i++) {
            $(".new_overseas > .new_contents_bookbox").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "' />" + "</a>");
            $(".new_overseas > .new_contents_bookbox").eq(i).append("<h3>" + '<a href="sub2.html">' + msg.documents[i].title + "</a>" + "</h3>");
            $(".new_overseas > .new_contents_bookbox").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");

            var str = msg.documents[i].contents;
            var str2 = str.substring(0, 30);

            $(".new_overseas > .new_contents_bookbox").eq(i).append("<p>" + '<a href="sub2.html">' + str2 + "</a>" + "</p>");
        }
    });

// 화제의 신간 도서 api (eBook)

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "투자",
            size: 12
        },
        headers: {
            Authorization: "KakaoAK 352a1f2ab79b09bbac0ca9f6c73b1dab"
        }
    })
    .done(function (msg) {
        for (var i = 0; i < 12; i++) {
            $(".new_e-book > .new_contents_bookbox").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "' />" + "</a>");
            $(".new_e-book > .new_contents_bookbox").eq(i).append("<h3>" + '<a href="sub2.html">' + msg.documents[i].title + "</a>" + "</h3>");
            $(".new_e-book > .new_contents_bookbox").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");

            var str = msg.documents[i].contents;
            var str2 = str.substring(0, 30);

            $(".new_e-book > .new_contents_bookbox").eq(i).append("<p>" + '<a href="sub2.html">' + str2 + "</a>" + "</p>");
        }
    });

// 화제의 신간 도서 api (sam)

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "습관",
            size: 12
        },
        headers: {
            Authorization: "KakaoAK 352a1f2ab79b09bbac0ca9f6c73b1dab"
        }
    })
    .done(function (msg) {
        for (var i = 0; i < 12; i++) {
            $(".new_sam > .new_contents_bookbox").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "' />" + "</a>");
            $(".new_sam > .new_contents_bookbox").eq(i).append("<h3>" + '<a href="sub2.html">' + msg.documents[i].title + "</a>" + "</h3>");
            $(".new_sam > .new_contents_bookbox").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");

            var str = msg.documents[i].contents;
            var str2 = str.substring(0, 30);

            $(".new_sam > .new_contents_bookbox").eq(i).append("<p>" + '<a href="sub2.html">' + str2 + "</a>" + "</p>");
        }
    });

// 화제의 신간 도서 api (음반/기프트)

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "음반",
            size: 12
        },
        headers: {
            Authorization: "KakaoAK 352a1f2ab79b09bbac0ca9f6c73b1dab"
        }
    })
    .done(function (msg) {
        for (var i = 0; i < 12; i++) {
            $(".new_music > .new_contents_bookbox").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "' />" + "</a>");
            $(".new_music > .new_contents_bookbox").eq(i).append("<h3>" + '<a href="sub2.html">' + msg.documents[i].title + "</a>" + "</h3>");
            $(".new_music > .new_contents_bookbox").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");

            var str = msg.documents[i].contents;
            var str2 = str.substring(0, 30);

            $(".new_music > .new_contents_bookbox").eq(i).append("<p>" + '<a href="sub2.html">' + str2 + "</a>" + "</p>");
        }
    });