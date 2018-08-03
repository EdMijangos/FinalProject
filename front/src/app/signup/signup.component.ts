import { Component, OnInit } from '@angular/core';

//service
import { ServerLinkService } from '../../services/server-link.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:any = {}

  getForm(signupForm){
    signupForm.value.hobbies = signupForm.value.hobbies.split(' ');
    this.backService.signUp(signupForm)
    .subscribe(user=>{
      this.user = user;
    })
  }

  constructor(private backService:ServerLinkService) { }

  ngOnInit() {
  }

}
