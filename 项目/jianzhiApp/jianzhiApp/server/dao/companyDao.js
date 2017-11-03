/**
 * Created by Administrator on 2017/9/26 0026.
 */
var pool=require('./db_pool').pool;
var companySql=require('./companySql').sql;
exports.companyDao={
    getAllCompanys:function (loginID,callback) {
        console.log(JSON.stringify(loginID)+'这里是获取的数据');
        var userid = loginID[0].ID;
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(companySql.getAllCompanys,[userid],function (error,result) {

              if(error){
                    callback('e004');
                    return;
                }


                callback(result);

                client.release();

            })
        })
    },
    updata:function (applyId,callback) {
        pool.getConnection(function (error,client) {
            // console.log(applyId+">>>>>>>>>>>>>>>>>>");
            if(error){
                return
            }
            client.query(companySql.updata,[applyId],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                console.log(result.affectedRows);
                callback(result.affectedRows);
                client.release();

            })
        })
    },
    updatas:function (applyId,callback) {
        pool.getConnection(function (error,client) {
            // console.log(applyId+">>>>>>>>>>>>>>>>>>");
            if(error){
                return
            }
            client.query(companySql.updatas,[applyId],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                console.log(result.affectedRows);
                callback(result.affectedRows);
                client.release();

            })
        })
    },
    getUserid:function (loginID,callback) {
      // console.log(loginID);
      pool.getConnection(function (error,client) {
        if(error){
          return
        }
        client.query(companySql.getUserid,[loginID],function (error,result) {
          if(error){
            callback('e004');
            return;
          }
          // console.log(result);
          callback(result);
          client.release();
      })
    })
  },
}
