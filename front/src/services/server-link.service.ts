import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ServerLinkService {
  //http://localhost:3000/
  url = 'http://localhost:3000/';
  user = {}

  constructor(private http:Http) { }

  logIn(loginForm){
    return this.http.post(this.url + 'login', loginForm, {withCredentials:true})
    .pipe(map((res:Response)=>res.json()))
  }

  signUp(signupForm){
    return this.http.post(this.url + 'signup', signupForm)
    .pipe(map((res:Response)=>res.json()))
  }

  logout(){
    localStorage.removeItem('user');
  }

  newHub(hubForm){
    return this.http.post(this.url + 'newHub', hubForm, {withCredentials:true})
    .pipe(map((res:Response)=>res.json()))
  }

  newComment(comment){
    return this.http.post(this.url + 'newComment', comment, {withCredentials:true})
    .pipe(map((res:Response)=>res.json()))
  }

  getLocalUser(){
    return JSON.parse(localStorage.getItem('user'))
  }

  getAllUsers(){
    return this.http.get(this.url + 'people')
    .pipe(map((res:Response)=>res.json()))
  }

  getAllHubs(){
    return this.http.get(this.url + 'hubs')
    .pipe(map((res:Response)=>res.json()))
  }

  getAllComments(hubId){
    return this.http.get(this.url + 'comments/' + hubId)
    .pipe(map((res:Response)=>res.json()))
  }

  getSingleUser(id){
    return this.http.get(this.url + 'people/' + id)
    .pipe(map((res:Response)=>res.json()))
  }

  getSingleHub(id){
    return this.http.get(this.url + 'hubs/' + id)
    .pipe(map((res:Response)=>res.json()))
  }

  updateUserHub(id, valueToUpdate){
    return this.http.put(this.url + 'peopleHub/' + id, {valueToUpdate})
    .pipe(map((res:Response)=>res.json()))
  }

  updateUserFriend(id, valueToUpdate){
    return this.http.put(this.url + 'peopleFriend/' + id, {valueToUpdate})
    .pipe(map((res:Response)=>res.json()))
  }

  updateUserPhoto(id, valueToUpdate){
    return this.http.put(this.url + 'peoplePhoto/' + id, {valueToUpdate})
    .pipe(map((res:Response)=>res.json()))
  }

  updateHubParticipants(id, valueToUpdate){
    return this.http.put(this.url + 'hubParticipant/' + id, {valueToUpdate})
    .pipe(map((res:Response)=>res.json()))
  }

}
