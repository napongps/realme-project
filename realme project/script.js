
const temp =[];
function show(inner){
    console.log(inner.trim()== "อุปกรณ์");
    var arrow =document.querySelectorAll('.still-arrow');
    for (var i=0;i<arrow.length;i++){
        arrow[i].classList.remove('still-arrow');

    }
    var boldtext = document.querySelectorAll(".bold");
    for (var j=0;j<boldtext.length;j++){
        boldtext[j].classList.remove('bold');
    }
    if (inner.trim()== "อุปกรณ์"){
        document.getElementById('bignav').style.height="400px";
    }else{
        document.getElementById('bignav').style.height="320px";
    }
    document.getElementById('detail-8').classList.add("showfirst");
    document.getElementById('8').classList.add('bold');
    document.getElementById('first-arrow').classList.add('still-arrow');
    document.getElementById('detail-Audio').classList.add("showfirst");
    document.getElementById('Audio').classList.add('bold');
    document.getElementById('second-arrow').classList.add('still-arrow');
}

function toggle(id){
    temp.push(id);
    document.getElementById(temp[0]).classList.remove('bold');
    document.getElementById(temp[0]).childNodes[1].childNodes[1].childNodes[0].classList.remove('still-arrow');
    var detailbefore = document.getElementById(`detail-${temp[0]}`);
    if (detailbefore.classList.contains("show")) {
        detailbefore.classList.toggle("show");   
    }
    document.getElementById('8').classList.remove('bold');
    document.getElementById('detail-8').classList.remove('showfirst');
    document.getElementById('first-arrow').classList.remove('still-arrow');
    document.getElementById('Audio').classList.remove('bold');
    document.getElementById('detail-Audio').classList.remove('showfirst');
    document.getElementById('second-arrow').classList.remove('still-arrow');
    document.getElementById(`detail-${id}`).classList.toggle("show");
    // alert(temp);
    if (temp.length !=1){
    temp.shift();
    }
    if (id=="Audio") {
        document.getElementById('bignav').style.height="400px";
    }else {
        document.getElementById('bignav').style.height="320px";
    }
}

function bold(id) {
    document.getElementById(id).classList.add('bold');
    document.getElementById(id).childNodes[1].childNodes[1].childNodes[0].classList.add('still-arrow');
}

