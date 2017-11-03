import {Injectable, Optional} from '@angular/core';

import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/toPromise';



@Injectable()
export class CompanyService {
  url:string='http://localhost:3000/companys';

  constructor(private http:HttpClient,private storage:Storage) { }

  // getCompanyPosition(callback){
  //   this.http.get(this.url).subscribe(function (result) {
  //     callback(result);
  //     console.log("-------------a-------");
  //   })
  // }



  addcompany(user):Promise<any>{
    return this.http.post(this.url+'/addcompany',user).toPromise().then((data)=> data
    )
  }

}
