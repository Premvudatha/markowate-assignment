import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudangularService {

  _geturl = 'http://localhost:3000/getData';
  _addurl = 'http://localhost:3000/addData';
  _deleteurl = 'http://localhost:3000/deleteData';

  constructor(private _http:HttpClient) { }

  addData(userData:any){
    const data={
      fullName:userData.fullName,
      emailId:userData.emailId,
      mobile:userData.mobile,
      dob:userData.dob,
      jobType:userData.jobType,
      prefLocation:userData.prefLocation

    }
   
    return this._http.post<any>(this._addurl,data)

  }
  getData(){
    return this._http.get<any>(this._geturl)
  }
  deleteData(_id:any){

   
    return this._http.delete<any>(`${this._deleteurl}/${_id}`)

  }
}
