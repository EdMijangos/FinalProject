import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ServerLinkService {
  url = 'http://localhost:3000/';
  user = {}

  constructor(private http:Http) { }

  logIn(loginForm){
    return this.http.post(this.url + 'login', loginForm)
    .pipe(map((res:Response)=>res.json()))
  }

  signUp(signupForm){
    return this.http.post(this.url + 'signup', signupForm.value)
    .pipe(map((res:Response)=>res.json()))
  }

  logout(){
    localStorage.removeItem('user');
  }
}
