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

