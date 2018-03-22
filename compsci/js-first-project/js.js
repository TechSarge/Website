//this is the function that is called by the html button and triggers the functions boompt1 and boompt2
function boom() {
    boompt1();
    boompt2();
    toggleFullScreen()
}

//this is the first part of the function which adds the video to the page
function boompt1() {
    document.body.innerHTML +="<video width=\"100%\" height=\"100%\" autoplay loop>\n" +
        "        <source src=\"bombvideo.mp4\">\n" +
        "    </video>"
}

//this is the second part of the function which adds the words under the video.
function boompt2() {
    document.body.innerHTML +="<h1 class=center>I told you not to press it</h1>";


}

//this is the third part of the function that makes the page full screen after the video is full screened so it takes up the whole window
function bindFullscreen(video) {
    $(video).unbind('click').click(toggleFullScreen);
}

//this makes sure that the page is made full screen in almost any web browser you are viewing and allows you to exit it.
function toggleFullScreen() {
    if (!document.fullscreenElement &&    // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    }
    else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}