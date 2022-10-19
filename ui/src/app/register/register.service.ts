import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  _url = 'http://localhost:3000/register';

  constructor(private _http:HttpClient) { }
  registerUser(user:any){
    const data={
      fullName:user.fullName,
      email:user.email,
      password:user.password,

    }
    return this._http.post<any>(this._url,data)
    

  }
}
