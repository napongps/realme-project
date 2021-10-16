
const temp =[];
document.getElementById('active').addEventListener("mouseover",function(){
    document.getElementById('detail-8').classList.add('showfirst');
})

function toggle(id){
    temp.push(id);
    var detailbefore = document.getElementById(`detail-${temp[0]}`);
    if (detailbefore.classList.contains("show")) {
        detailbefore.classList.toggle("show");   
    }
    var detail=document.getElementById(`detail-${id}`);
    document.getElementById('detail-8').classList.remove('showfirst');
    detail.classList.toggle("show");
    // alert(temp);
    if (temp.length !=1){
    temp.shift();
    }
    document.getElementsByClassName('nav-link').addEventListener("mouseout", function(){

    });
}
