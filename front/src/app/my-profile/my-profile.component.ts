import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  user: '';
  photo: any

  constructor() { }

  ngOnInit() {
    this.getUser()
  }

  getUser(){
    this.user = JSON.parse(localStorage.getItem('user'))
  }

  getPhoto(e){
    this.photo = e.target.files[0]
  }

}
