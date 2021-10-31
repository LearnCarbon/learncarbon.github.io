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