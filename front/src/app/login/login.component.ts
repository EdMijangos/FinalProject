import { Component, OnInit } from '@angular/core';
import { ServerLinkService } from '../../services/server-link.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginInput = {
    email: '',
    password: ''
  }

  user:any


  constructor(
    private backService:ServerLinkService,
    private router:Router,
  ) { }

  getInput(loginForm){
    this.backService.logIn(loginForm)
    .subscribe(user=>{
      this.user = user

    //populates the user and saves it in the localStorage
    this.backService.getSingleUser(this.user._id)
    .subscribe(user=>{
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['']);
      window.location.reload()
      })
    })
  }
  
  ngOnInit() {
    //check if logged
    this.user = this.backService.getLocalUser()
    if(this.user){
      this.router.navigate(['']);
    }
  }

}
