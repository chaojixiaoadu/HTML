/**
 * Created by C5 on 2017/7/30.
 */


var jsonData = [
    {
        "companyName": "壹米滴答",
        "logopath": "adv1.jpg",
        "pingjiaCount": "109",
        "zhiweiCount": "23",
        "performRate": "91%",
        "web": "企业服务",
        "details": "共建中国最强物流网络平台",
        "place": "上海",
        "type": "成长型（B轮）"
    }, {
        "companyName": "惠租车",
        "logopath": "adv2.jpg",
        "pingjiaCount": "169",
        "zhiweiCount": "7",
        "performRate": "99%",
        "web": "旅游",
        "details": "不来惠租车，你怎么知道自己可以更牛B!",
        "place": "上海",
        "type": "成长型（B轮）"
    }, {
        "companyName": "斗象科技",
        "logopath": "adv3.jpg",
        "pingjiaCount": "153",
        "zhiweiCount": "31",
        "performRate": "97%",
        "web": "信息安全",
        "details": "互联网安全领导者",
        "place": "上海",
        "type": "成长型（B轮）"
    },
    {
        "companyName": "生意专家",
        "logopath": "adv4.jpg",
        "pingjiaCount": "45",
        "zhiweiCount": "18",
        "performRate": "81%",
        "web": "移动互联网",
        "details": "目光远大 努力奋斗",
        "place": "上海",
        "type": "成长型(A轮)"
    },
    {
        "companyName": "即刻",
        "logopath": "adv5.jpg",
        "pingjiaCount": "6",
        "zhiweiCount": "2",
        "performRate": "98%",
        "web": "移动互联网",
        "details": "有口皆碑的产品",
        "place": "上海",
        "type": "成长型（B轮）"
    },
    {
        "companyName": "么么直播",
        "logopath": "adv6.jpg",
        "pingjiaCount": "52",
        "zhiweiCount": "19",
        "performRate": "96%",
        "web": "社交网络",
        "details": "在最IN的城市，玩当下最火爆的事业！",
        "place": "上海",
        "type": "成长型（A轮）"
    }];

function showInfo() {
    var ul = document.getElementById('ul_con');
    ul.innerHTML = '';

    for (var i = 0; i < jsonData.length; i++) {

        ul.innerHTML +=
            '<li class="fl"> ' +
            '<dl class="item_cont">' +
            '<dt class="item_cont_left">' +
            '<a href="">' +
            '<img src="./../images/'+ jsonData[i].logopath + '" alt="" width="100px" height="100px">' +
            '</a>' +
            '</dt>' +
            '<dd class="item_cont_right">' +
            '<h3><a href="">' + jsonData[i].companyName + '</a></h3>' +
            '<div class="sub_title">' +
            '<p><a href=""><span>' + jsonData[i].pingjiaCount + '</span>条面试评价</a></p>' +
            '<p><a href=""><span>' + jsonData[i].zhiweiCount + '</span>个在招职位</a></p>' +
            '<p><a href=""><span>' + jsonData[i].performRate + '</span>简历处理率</a></p>' +
            '</div>' +
            '</dd>' +
            '</dl>' +
            '<p class="details">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+ jsonData[i].details + '</p>' +
            '<div class="company_state">' +
            '<span class="web"><i></i>&nbsp&nbsp' + jsonData[i].web + '</span>' +
            '<span class="place"><i></i>&nbsp&nbsp' + jsonData[i].place + '</span>' +
            ' <span class="type"><i></i>&nbsp&nbsp' + jsonData[i].type + '</span>' +
            '</div>' +
            '</li>';


    }
}

// var jsonData = [
//     {
//         "companyName": "壹米滴答",
//         "logopath": "adv1.jpg",
//         "pingjiaCount": "109",
//         "zhiweiCount": "23",
//         "performRate": "91%",
//         "web": "企业服务",
//         "details": "共建中国最强物流网络平台",
//         "place": "上海",
//         "type": "成长型（B轮）"
//     }, {
//         "companyName": "惠租车",
//         "logopath": "adv2.jpg",
//         "pingjiaCount": "169",
//         "zhiweiCount": "7",
//         "performRate": "99%",
//         "web": "旅游",
//         "details": "不来惠租车，你怎么知道自己可以更牛B!",
//         "place": "上海",
//         "type": "成长型（B轮）"
//     }, {
//         "companyName": "斗象科技",
//         "logopath": "adv3.jpg",
//         "pingjiaCount": "153",
//         "zhiweiCount": "31",
//         "performRate": "97%",
//         "web": "信息安全",
//         "details": "互联网安全领导者",
//         "place": "上海",
//         "type": "成长型（B轮）"
//     },
//     {
//         "companyName": "生意专家",
//         "logopath": "adv4.jpg",
//         "pingjiaCount": "45",
//         "zhiweiCount": "18",
//         "performRate": "81%",
//         "web": "移动互联网",
//         "details": "目光远大 努力奋斗",
//         "place": "上海",
//         "type": "成长型(A轮)"
//     },
//     {
//         "companyName": "即刻",
//         "logopath": "adv5.jpg",
//         "pingjiaCount": "6",
//         "zhiweiCount": "2",
//         "performRate": "98%",
//         "web": "移动互联网",
//         "details": "有口皆碑的产品",
//         "place": "上海",
//         "type": "成长型（B轮）"
//     },
//     {
//         "companyName": "么么直播",
//         "logopath": "adv6.jpg",
//         "pingjiaCount": "52",
//         "zhiweiCount": "19",
//         "performRate": "96%",
//         "web": "社交网络",
//         "details": "在最IN的城市，玩当下最火爆的事业！",
//         "place": "上海",
//         "type": "成长型（A轮）"
//     }];

function showInfo2(){
    var ul = document.getElementById('ulcon2');
    ul.innerHTML = '';

    for (var i = 0; i < jsonData.length; i++) {

        ul.innerHTML +=
            '<li class="fl"> ' +
            '<dl class="item_cont">' +
            '<dt class="item_cont_left">' +
            '<a href="">' +
            '<img src="./../images/'+ jsonData[i].logopath + '" alt="" width="100px" height="100px">' +
            '</a>' +
            '</dt>' +
            '<dd class="item_cont_right">' +
            '<h3><a href="">' + jsonData[i].companyName + '</a></h3>' +
            '<div class="sub_title">' +
            '<p><a href=""><span>' + jsonData[i].pingjiaCount + '</span>条面试评价</a></p>' +
            '<p><a href=""><span>' + jsonData[i].zhiweiCount + '</span>个在招职位</a></p>' +
            '<p><a href=""><span>' + jsonData[i].performRate + '</span>简历处理率</a></p>' +
            '</div>' +
            '</dd>' +
            '</dl>' +
            '<p class="details">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+ jsonData[i].details + '</p>' +
            '<div class="company_state">' +
            '<span class="web"><i></i>&nbsp&nbsp' + jsonData[i].web + '</span>' +
            '<span class="place"><i></i>&nbsp&nbsp' + jsonData[i].place + '</span>' +
            ' <span class="type"><i></i>&nbsp&nbsp' + jsonData[i].type + '</span>' +
            '</div>' +
            '</li>';
    }
}
