import { Component, OnInit } from '@angular/core';
import { ServerLinkService } from '../../services/server-link.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  users:any = []

  constructor(
    private backService:ServerLinkService,
  ) { }

  ngOnInit() {
    this.backService.getAllUsers()
    .subscribe(users=>{
      this.users = users
    })
    
  }

}
