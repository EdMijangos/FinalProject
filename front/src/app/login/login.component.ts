import { Component, OnInit } from '@angular/core';
import { ServerLinkService } from '../../services/server-link.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = ''

  constructor(private backService:ServerLinkService) { }

  getInput(loginForm){
    this.backService.logIn(loginForm)
    .subscribe(user=>{
      this.user = user
    })
  }
  
  ngOnInit() {
  }

}
