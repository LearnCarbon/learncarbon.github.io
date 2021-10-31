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
    alert(1);
    var video = $("#demo_video1").get(0);
    if (video.paused) {
        video.play();
        $("#demo_video2").stop();
        $("#demo_video2").stop();
        $("#demo_video3").stop();
        $("#demo_video4").stop();
        $(".play").hide();
        $(".pause").show();
    } else {
        video.pause();
        $(".play").show();
        $(".pause").hide();
    }
    return false;
});

function stop(a, b, c) {
    var video1 = 'demo_video' + a;
    var video2 = 'demo_video' + b;
    var video3 = 'demo_video' + c;
    $("#" + video1).get(0).pause();
    $("#" + video2).get(0).pause();
    $("#" + video3).get(0).pause();
}