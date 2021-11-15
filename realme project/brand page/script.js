
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
    if (document.documentElement.scrollTop >= 721 && document.documentElement.scrollTop < 2791) {
        // console.log(active);
        if (x <= 721 || x >= 2791) {
            for (var i = 0; i < active.length; i++) {
                active[i].classList.remove('active');
            }
            document.getElementById(`menu-g-about`).classList.add('active');
            x = document.documentElement.scrollTop
        }
    } else if (document.documentElement.scrollTop >= 2791 && document.documentElement.scrollTop < 9082) {
        if (x <= 2791 || x >= 9082) {
            for (var i = 0; i < active.length; i++) {
                active[i].classList.remove('active');
            }
            document.getElementById(`menu-g-timeline`).classList.add('active');
            x = document.documentElement.scrollTop
        } 
    } else if (document.documentElement.scrollTop >= 9082 && document.documentElement.scrollTop < 9882) {
        if (x <= 9082 || x >= 9882) {
            for (var i = 0; i < active.length; i++) {
                active[i].classList.remove('active');
            }
            document.getElementById(`menu-g-reward`).classList.add('active');
            x = document.documentElement.scrollTop
        } 
    } else if (document.documentElement.scrollTop >= 9882) {
        if (x <= 9882) {
            for (var i = 0; i < active.length; i++) {
                active[i].classList.remove('active');
            }
            document.getElementById(`menu-g-news`).classList.add('active');
            x = document.documentElement.scrollTop
        } 
    }
}