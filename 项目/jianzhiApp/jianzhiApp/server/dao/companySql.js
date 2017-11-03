/**
 * Created by Administrator on 2017/9/26 0026.
 */
exports.sql={

    getAllCompanys:'SELECT * FROM apply JOIN position ON position.ID = apply.positionID JOIN company on company.ID = position.companyID JOIN `user` on `user`.id = apply.userID',
    updata:'update apply set `status`="已通过" where applyID=?',
    updatas:'update apply set `status`="已拒绝" where applyID=?',
    getUserid:'select ID from `user` where loginID=?'
};
