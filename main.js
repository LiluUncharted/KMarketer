document.addEventListener("DOMContentLoaded", function() {
    // Code to be executed when the DOM is ready
    let videoButton = document.getElementById('button-video');
    let videoBanner = document.getElementById('banner-video');

    videoButton.onclick = function () {
        videoBanner.play();
    };
}); 
