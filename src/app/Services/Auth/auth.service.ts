import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Globals } from '../../Cache/Globals';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root',

})
export class AuthService {

  constructor(private _global: Globals, private _http: HttpClient, private _router : Router) { }


  Login(user:any){
    return this._http.post(`${this._global.mainUrl}/Auth/Login`, user, httpOptions);
  }
}
