import { Component, OnInit } from '@angular/core';
import { ServerLinkService } from '../../services/server-link.service';

@Component({
  selector: 'app-hubs',
  templateUrl: './hubs.component.html',
  styleUrls: ['./hubs.component.css']
})
export class HubsComponent implements OnInit {
  hubs = []
  user:any

  constructor(
    private backService:ServerLinkService,
  ) { }

  ngOnInit() {
    this.backService.getAllHubs()
    .subscribe(hubs=>{
      this.hubs = hubs

    this.user = this.backService.getLocalUser();
    })
    
  }

}
