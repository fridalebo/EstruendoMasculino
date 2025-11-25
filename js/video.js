const togglevideo = document.getElementById("togglevideo");
togglevideo.addEventListener("click", function(){
    const video = document.querySelector("video");
    video.play();
    video.currentTime = 0;
    video.volume = 1;
    video.muted = false;
    togglevideo.style.display = "none";

})