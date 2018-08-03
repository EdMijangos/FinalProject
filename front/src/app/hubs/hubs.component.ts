import { Component, OnInit } from '@angular/core';
import { ServerLinkService } from '../../services/server-link.service';

@Component({
  selector: 'app-hubs',
  templateUrl: './hubs.component.html',
  styleUrls: ['./hubs.component.css']
})
export class HubsComponent implements OnInit {
  hubs = []

  constructor(
    private backService:ServerLinkService,
  ) { }

  ngOnInit() {
    this.backService.getAllUsers()
    .subscribe(hubs=>{
      this.hubs = hubs
    })
    
  }

}
