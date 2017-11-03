/**
 * Created by Administrator on 2017/9/23 0023.
 */
var express = require('express');
var router = express.Router();
var companyDao= require('../dao/companyDao').companyDao;
var companyreviewDao= require('./../dao/companyReviewDao').companyreviewDao;
var companyendDao= require('./../dao/companyEndDao').companyendDao;


router.post('/check',function (req,res,next) {
    var loginID=req.body.id;
    console.log(loginID+'这是check的');
    //首先要获取user的id

  companyDao.getUserid(loginID,function (result) {
    console.log(JSON.stringify(result)+'aaaaaaaaaaa');
    if(result.length==0){
      res.json(null);
    }else{
      //查询职位
      companyDao.getAllCompanys(result,function (result) {
        if(result.length==0){
          res.json(null);
        }else{
          res.json(result);
        }
      })
    }

  })


});

router.post('/updata',function (req,res,next) {
    console.log(req.body);

    var applyId=req.body.applyId;
    console.log(applyId);
    var applyid=parseInt(applyId);
    companyDao.updata(applyid,function (result) {
        if(result.length==0){
            res.json(null);
        }else{
            res.json(result);
        }
    })
});
router.post('/updatas',function (req,res,next) {
    console.log(req.body);
    var applyId=req.body.applyId;
    console.log(applyId);
    companyDao.updatas(applyId,function (result) {
        if(result.length==0){
            res.json(null);
        }else{
            res.json(result);
        }
    })
});
router.post('/in_review',function (req,res,next) {
    var loginID=req.body.id;
    console.log(loginID);
    companyreviewDao.getAllCompanyReviews(loginID,function (result) {
        if(result.length==0){
            res.json(null);
        }else{
            res.json(result);
        }
    })
});
router.post('/end_audit',function (req,res,next) {
    // console.log(req.body+'这里是前台传来的数据');
    var loginID=req.body.id;
    console.log(loginID);
    companyendDao.getAllCompanyEnds(loginID,function (result) {
        if(result.length==0){
            res.json(null);
        }else{
            res.json(result);
        }
    })
});

module.exports = router;

