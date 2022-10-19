import { Injectable } from  '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {BASE_API_URL} from '../../config/config.js';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  _url = 'http://localhost:3000/cruds';

  constructor(private _http:HttpClient) { }

  register(userData:any){
    const data={
      firstName:userData.firstName,
      lastName:userData.lastName,
      city:userData.address.city,
      state:userData.address.state
    }
   
    return this._http.post<any>(this._url,data)

  }
}
