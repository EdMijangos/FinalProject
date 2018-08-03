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


  constructor(
    private backService:ServerLinkService,
    private router:Router,
  ) { }

  getInput(loginForm){
    this.backService.logIn(loginForm)
    .subscribe(user=>{
      localStorage.setItem('user', JSON.stringify(user))
      this.router.navigate(['']);
      window.location.reload()
    })
  }
  
  ngOnInit() {
  }

}
