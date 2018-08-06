import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerLinkService } from '../../services/server-link.service'

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  user:any;
  photo: any

  constructor(
    private router:Router,
    private backService:ServerLinkService,
  ) { }

  ngOnInit() {
    this.user = this.backService.getLocalUser()
    if(!this.user){
      this.router.navigate(['login']);
    }
  }

  getPhoto(e){
    this.photo = e.target.files[0]
  }

}
