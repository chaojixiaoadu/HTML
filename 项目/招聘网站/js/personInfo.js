/**
 * Created by Administrator on 2017/7/31 0031.
 */
window.onload=function () {
    //姓名的验证
    var name= document.getElementById('name');
    var userNameId= document.getElementById('userNameId')
    name .onblur=function () {
        // var reg = /^[0-9a-zA-Z][0-9a-zA-Z_.-]{2,16}[0-9a-zA-Z]$/;
        if(name.value==0){
            userNameId.className='import_name'
        }
    }
    //手机号的验证
    var ophone = document.getElementById('ophone');
    var userOphone = document.getElementById('userOphone');
    ophone.onblur = function () {
        if(ophone.value==0){
            userOphone.className='import_ophone'
        }
    }
    //邮箱的验证
    var email = document.getElementById('email');
    var userEmail = document.getElementById('userEmail');
    email.onblur = function () {
        if(email.value==0){
            userEmail.className='import_email'
        }
    }






}