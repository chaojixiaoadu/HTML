/**
 * Created by C5 on 2017/7/31.
 */
/*window.onload=function () {


    var timer = null;

    function startMove(target) {
        clearInterval(timer);
        var iSpeed = 0;
        timer = setInterval(function () {
            iSpeed = (target - $(border).offsetTop) / 8;
            iSpeed = (iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed));
            if ($('border').offsetTop == target) {
                clearInterval(timer);//关闭定时器
            } else {
                $('border').style.top = $('border').offsetTop + iSpeed + 'px';
                console.log(iSpeed + ' - ' + $('border').style.top)
            }
        }, 30);
    }
    startMove();
}*/





var img6=['bigpic1.JPG','bigpic2.jpg','bigpic3.JPG'];
var j=0;
window.onload=function () {
        j++;
        if(j==3){j=0;}
     var myimg=document.getElementById('myimg');
    var smallpic1=document.getElementById('smallpic1');
    var smallpic2=document.getElementById('smallpic2');
    var smallpic3=document.getElementById('smallpic3');
    smallpic1.addEventListener('mouseover',function () {
        j=0;
    });
    smallpic2.addEventListener('mouseover',function () {
        j=1;
    });
    smallpic3.addEventListener('mouseover',function () {
        j=2;
    });
    setInterval(change,1000);


    showInfo();
    showInfo2();
    //backtop();

    var oNew_job=document.getElementById("new-job");
    var oHot_job=document.getElementById("hot-job");
    var oNew_job_content=document.getElementById("new_job_content");
    var oHot_job_content=document.getElementById("hot_job_content");

    oHot_job.onclick=function(){
        oHot_job_content.style.display="block";
        oNew_job_content.style.display="none";
    }
    /*    oHot_job.onmouseout=function(){
     oHot_job_content.style.display="none";
     oNew_job_content.style.display="block";
     };*/
    oNew_job.onclick=function(){
        oHot_job_content.style.display="none";
        oNew_job_content.style.display="block";
    }
function change() {
    myimg.style.backgroundImage='url(./../images/' + img6[j]+ ')';
    switch (j){
        case 0:smallpic1.style.backgroundImage='url(./../images/border.png)';
            smallpic2.style.backgroundImage='none';
            smallpic3.style.backgroundImage='none';
            break;
        case 1:smallpic2.style.backgroundImage='url(./../images/border.png)';
            smallpic1.style.backgroundImage='none';
            smallpic3.style.backgroundImage='none';
            break;
        case 2:smallpic3.style.backgroundImage='url(./../images/border.png)';
            smallpic1.style.backgroundImage='none';
            smallpic2.style.backgroundImage='none';
            break;
    }
    j++;
    if (j==3){j=0;}

    }

/*    oNew_job.onmouseout=function(){
        oHot_job_content.style.display="block";
        oNew_job_content.style.display="none";
    }*/
}



