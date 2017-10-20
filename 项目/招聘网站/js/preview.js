/**
 * Created by Administrator on 2017/7/28 0028.
 */
function showSelect() {
    var show = document.getElementById('select_mate_ul');
    show.style.display ='block';
}
function hideSelect() {
    var hide = document.getElementById('select_mate_ul');
    hide.style.display = 'none';
}
function  ul() {
    var ul = document.getElementsById('input_ul');
    ul.style.display = 'block';
}


//回归顶部
window.onload=function(){
    var oBtn = document.getElementById('go_top');
    var timer = null;
    var bFlag = false;
    oBtn.onclick=function(){
        moveScroll(0,3000);

    };

    window.onscroll=function(){
        if(bFlag)
        {
            clearInterval(timer);
        }
        bFlag=true;
    };

    function moveScroll(target,time)
    {
        var start = document.documentElement.scrollTop || document.body.scrollTop;
        var dis = target - start;
        var count = Math.floor(time/30);
        var n=0;

        clearInterval(timer);
        timer = setInterval(function(){
            n++;
            bFlag=false;
            document.documentElement.scrollTop = start + dis*n/count;
            document.body.scrollTop = start+dis*n/count;
            if(n==count)
            {
                clearInterval(timer);
            }

        },30);
    }




    $function ()
    {
        var navH = $('.yulan').offset().top;

        $(window).scroll(function () {
            var scroH = $(this).scrollTop();
            if (scroH >= navH) {
                $('.yulan').css({'position': 'fixed', 'top': 0});
            }
            else if (scroH < navH) {
                $('.yulan').css({'position': 'absolute'})
            }
        })
    }
}









