// 실시간 추천 도서 api (sam)

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "명품",
            size: 5
        },
        headers: {
            Authorization: "KakaoAK 352a1f2ab79b09bbac0ca9f6c73b1dab"
        }
    })
    .done(function (msg) {
        console.log(msg)
        for (var i = 0; i < 5; i++) {

            var str = msg.documents[i].title;
            var str2 = str.substring(0, 13);

            $("#recom_main > div").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "' />" + "</a>");
            $("#recom_main > div").eq(i).append("<h4>" + '<a href="sub2.html">' + str2 + "</a>" + "</h4>");
            $("#recom_main > div").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");
            $("#recom_main > div").eq(i).append("<h6>" + msg.documents[i].price + "원</h6>");
            $("#recom_other > div").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i + 1].thumbnail + "' />" + "</a>");
            $("#recom_other > div").eq(i).append("<h4>" + '<a href="sub2.html">' + str2 + "</a>" + "</h4>");
            $("#recom_other > div").eq(i).append("<h6>" + msg.documents[i + 1].authors + "</h6>");
            $("#recom_other > div").eq(i).append("<h6>" + msg.documents[i + 1].price + "원</h6>");

        }
    });