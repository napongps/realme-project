
window.onscroll = function () { myFunction() };
var x = 0

function myFunction() {
    // console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop >= 720) {
        document.getElementById('g-second-nav').classList.add('show-top');
    }else if (document.documentElement.scrollTop < 720) {
        document.getElementById('g-second-nav').classList.remove('show-top');
    }
//cr. flim 63070234
    var active = document.querySelectorAll('.active');
    if (document.documentElement.scrollTop >= 700 && document.documentElement.scrollTop < 1500) {
        // console.log(active);
        if (x <= 700 || x >= 1500) {
            for (var i = 0; i < active.length; i++) {
                active[i].classList.remove('active');
            }
            document.getElementById(`menu-g-about`).classList.add('active');
            x = document.documentElement.scrollTop
        }
    } else if (document.documentElement.scrollTop >= 1500 && document.documentElement.scrollTop < 2000) {
        if (x <= 1500 || x >= 2000) {
            for (var i = 0; i < active.length; i++) {
                active[i].classList.remove('active');
            }
            document.getElementById(`menu-g-timeline`).classList.add('active');
            x = document.documentElement.scrollTop
        }
    }
}