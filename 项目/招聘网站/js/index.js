var arrPic=['bigpic1.JPG','bigpic2.jpg','bigpic3.JPG'];
var index=0;
function showPic() {
    var img=document.getElementById('loopPic');
    img.src='./../images/'+arrPic[index];
    index++;
    if (index==3)index=0;
}
window.onload=function () {
    setInterval(showPic,3000);

}





