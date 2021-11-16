function changeGrey() {
    document.getElementById("k-phone-color2").style = "opacity: 0;";
    document.getElementById("k-phone-color1").style = "opacity: 1;";
    document.getElementById("k-two").classList.remove("k-selected");
    document.getElementById("k-one").classList.add("k-selected");
}

function changeBlue() {
    document.getElementById("k-phone-color1").style = "opacity: 0;";
    document.getElementById("k-phone-color2").style = "opacity: 1;";
    document.getElementById("k-one").classList.remove("k-selected");
    document.getElementById("k-two").classList.add("k-selected");
}

function purchase() {
    document.body.style = "overflow: hidden;";
    document.querySelector(".header").style = "pointer-events: none;";
    document.querySelector(".k-purchase-box").style = "display: flex;";
    document.querySelector(".k-purchase-site-close-icon").addEventListener("click", () => {
        document.querySelector(".k-purchase-box").style.display = "none";
        document.body.style = "overflow: auto;";
        document.querySelector(".header").style = "pointer-events: auto;";
      })
}

function popup1() {
    document.querySelector('.k-popup').style ='display:auto;';
    document.getElementById('k-popup_video').muted=false;
    document.getElementById('k-popup_video').play();
    document.getElementById('k-popup_video').src='video/play1.mp4';
}
function close_popup() {
    document.querySelector('.k-popup').style ='display:none;';
    document.getElementById('k-popup_video').muted=true;
}

function popup2() {
    document.querySelector('.k-popup').style ='display:auto;';
    document.getElementById('k-popup_video').muted=false;
    document.getElementById('k-popup_video').play();
    document.getElementById('k-popup_video').src='video/play2.mp4';
}
