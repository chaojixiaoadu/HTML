var pool=require('./db_pool').pool;
var positionSql=require('./positionSql').sql;
exports.positionDao={
    getAllPositions:function (callback) {
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(positionSql.getAllPositions,function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }

                callback(result);
                client.release();
            })
        })
    },


    getCompanyId:function (userID,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(positionSql.getCompanyId,[userID],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }

                // console.log(result)+'获取的公司id';

                callback(result);
                client.release();
            })
        })
    },


    postJob:function (model,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                console.log('---------------------------数据库查询出错');
                return
            }
            client.query(positionSql.postJob,[model.companyID,model.positionName,model.startTime,model.endTime,model.places,
                model.clearings,model.clearings,model.numbers,model.salary,model.jiesuans,model.workingTime],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                callback(result.affectedRows);

                client.end();
            })
        })

    },

    getpositionID:function (callback) {
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(positionSql.getpositionID,function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }

                callback(result);
                client.release();
            })
        })
    },

    addJob:function (model,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                console.log('---------------------------数据库查询出错');
                return
            }
            client.query(positionSql.addJob,[model.positionName,model.numbers,
                model.workingTime,model.jiesuans,model.salary,
                model.places,model.positionID],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                callback(result.affectedRows);
                client.end();
            })
        })
    },


    getUserID:function (loginId,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(positionSql.getUserID,[loginId],function (error,result) {
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


    addUserid:function (userId,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(positionSql.addUserid,[userId.id,userId.userID,'待审核'],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                callback(result.affectedRows);
                client.release();
            })
        })
    },

    getAllJobs:function (callback) {
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(positionSql.getAllJobs,function (error,result) {
                if(error){
                    callback('404');
                    return;
                }
                // console.log(result+'这里是后台取到的数据');
                callback(result);
                client.release();
            })
        })
        console.log('dao');
    },

};


