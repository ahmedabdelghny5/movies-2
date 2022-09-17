import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient,private _Router:Router) {
    if (localStorage.getItem('userToken')!=null) {
      this.saveCurrentUser()
    }
  }


  currentUser = new BehaviorSubject(null);

  saveCurrentUser() {
    let token: any = localStorage.getItem('userToken');
    this.currentUser.next(jwtDecode(token));
  }

  register(formdata: any): Observable<any> {
    return this._HttpClient.post(
      'https://route-egypt-api.herokuapp.com/signup',
      formdata
    );
  }
  login(formdata: any): Observable<any> {
    return this._HttpClient.post(
      'https://route-egypt-api.herokuapp.com/signin',
      formdata
    );
  }

  logOut(){
    localStorage.removeItem("userToken")
    this.currentUser.next(null)
    this._Router.navigate(['/login'])
  }
}
