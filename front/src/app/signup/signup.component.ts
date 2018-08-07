import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//service
import { ServerLinkService } from '../../services/server-link.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:any = {}
  
  signupForm = {
    username: '',
    email: '',
    password: '',
    password2: '',
    hobbies: '',
  }

  getForm(signupForm){
    signupForm.hobbies = signupForm.hobbies.split(',');
    this.backService.signUp(signupForm)
    .subscribe(user=>{
      this.user = user;
    })
    this.router.navigate(['']);
  }

  constructor(
    private backService:ServerLinkService,
    private router:Router,
  ) { }

  ngOnInit() {
  }

}
