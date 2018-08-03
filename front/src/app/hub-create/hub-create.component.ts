import { Component, OnInit } from '@angular/core';
import { ServerLinkService } from '../../services/server-link.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-hub-create',
  templateUrl: './hub-create.component.html',
  styleUrls: ['./hub-create.component.css']
})
export class HubCreateComponent implements OnInit {
  user:any ={}
  newHub:any ={};

  constructor(
    private backService:ServerLinkService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.user = this.backService.getLocalUser()
    if(!this.user){
      this.router.navigate(['login']);
    }
  }

  makeHub(hubForm){
    hubForm.owner = this.user._id;
    this.backService.newHub(hubForm)
    .subscribe(userUpdated=>{
      return userUpdated
    })
  }

}
