import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams,HttpRequest} from '@angular/common/http';
// import {Router} from "@angular/router";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PositionService {

  url:string='http://localhost:3000/positions';
  constructor(private http:HttpClient
             ) { }

  // getAllPositions(callback){
  //   this.http.get(this.url).subscribe(function (result) {
  //     callback(result);
  //     console.log("-------------a-------");
  //   })
  // }
  getAllPositions():Promise<any>{
    return this.http.get(this.url).toPromise().then((data)=> data
    )

  }
  getAllPositionsUser():Promise<any>{
    return this.http.get(this.url+'/job').toPromise().then((data)=> data
    )
  }
  // getPosutionsById(ID,callback){
  //   //ID没用到
  //   // this.getAllPositions(function (positions) {
  //   //   let po=positions.filter(function (item,index) {
  //   //     if(item.ID==ID){
  //   //       console.log("getAllPositions--ID"+ID);
  //   //       // console.log(item);
  //   //       return item;
  //   //     }
  //   //   });
  //   //
  //   //   callback(po);
  //   // })
  //
  // }
  getPositionById(id):Promise<any> {
    // console.log(id);
    return this.getAllPositions().then(data => {
      for (let item of data) {
        if (item.ID === id) {
          return item;
        }
      }
    })
  }

  postJob(model):Promise<any>{
    return this.http.post(this.url+'/postJob',model).toPromise().then((data)=> data
    )

  }


  getApply(position,callback){
    return this.http.post(this.url+'/apply',position).subscribe(function (res) {
      callback(res);
    });
  }

  getAllJobs(callback){
    this.http.get(this.url+'/job').subscribe(function (result) {
      callback(result);
      // console.log('服务输出的job');
    })
  }


}
