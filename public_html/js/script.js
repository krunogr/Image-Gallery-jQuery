$(function () {
    var current_li;
    $("#portfolio img").click(function () {
        var src = $(this).attr("src");
        current_li = $(this).parent();
        $("#main").attr("src", src);
        $("#frame").fadeIn();
        $("#overlay").fadeIn();


    });

    $("#overlay").click(function () {
        $(this).fadeOut();
        $("#frame").fadeOut();

    });

    $("#right").click(function () {
        var next_li = current_li.next();
        var next_src = next_li.children("img").attr("src");
        $("#main").attr("src", next_src);
        current_li = next_li.children("img").parent();

    });
    $("#left").click(function () {
        var prev_li = current_li.prev();
        var prev_src = prev_li.children("img").attr("src");
        $("#main").attr("src", prev_src);
        current_li = prev_li.children("img").parent();

    })
});