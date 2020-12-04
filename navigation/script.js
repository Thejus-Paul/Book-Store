function prevWallpaper() {  
    let carousel = document.querySelector(".carousel");
    carousel.style.background = "url('../images/carousel/1.png')";
    carousel.style.backgroundSize = "contain";
    carousel.style.backgroundPosition = "center";
 }
 function nextWallpaper() {
    let carousel = document.querySelector(".carousel");
    carousel.style.background = "url('../images/carousel/2.png')";
    carousel.style.backgroundSize = "contain";
    carousel.style.backgroundPosition = "center";
 }