var j = 0;
const video_width = $(".demo_video").width()
demo_videos = document.getElementsByClassName('demo_video')
for (j = 0; j < demo_videos.length; j++) {
    demo_videos[j].style.height = (9 / 16) * video_width + "px";
}
$(document).ready(function () {
    $(window).resize(function () {
        var j = 0;
        const video_width = $(".demo_video").width()
        demo_videos = document.getElementsByClassName('demo_video')
        for (j = 0; j < demo_videos.length; j++) {
            demo_videos[j].style.height = (9 / 16) * video_width + "px";
        }
    });
});

$("#demo_video1").click(function () {
    $("#demo_video1").get(0).play();
    $("#demo_video2").get(0).pause();
    $("#demo_video3").get(0).pause();
    $("#demo_video4").get(0).pause();
});

$("#demo_video2").click(function () {
    $("#demo_video2").get(0).play();
    $("#demo_video1").get(0).pause();
    $("#demo_video3").get(0).pause();
    $("#demo_video4").get(0).pause();
});

$("#demo_video3").click(function () {
    $("#demo_video3").get(0).play();
    $("#demo_video1").get(0).pause();
    $("#demo_video2").get(0).pause();
    $("#demo_video4").get(0).pause();
});

$("#demo_video4").click(function () {
    $("#demo_video4").get(0).play();
    $("#demo_video1").get(0).pause();
    $("#demo_video2").get(0).pause();
    $("#demo_video3").get(0).pause();
});

function stop(a, b, c) {
    var video1 = 'demo_video' + a;
    var video2 = 'demo_video' + b;
    var video3 = 'demo_video' + c;
    $("#" + video1).get(0).pause();
    $("#" + video2).get(0).pause();
    $("#" + video3).get(0).pause();
}