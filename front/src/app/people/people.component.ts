import { Component, OnInit } from '@angular/core';
import { ServerLinkService } from '../../services/server-link.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  users:any = [];
  nameFilter:String = '';
  interestFilter:String = '';

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
