import { Component, OnInit } from '@angular/core';
import { ServerLinkService } from '../../services/server-link.service';

@Component({
  selector: 'app-active-hubs',
  templateUrl: './active-hubs.component.html',
  styleUrls: ['./active-hubs.component.css']
})
export class ActiveHubsComponent implements OnInit {
  hubs = [] //los hubs del usuario
  user:any

  constructor(
    private backService:ServerLinkService,
  ) { }

  ngOnInit() {
    this.user = this.backService.getLocalUser();
    this.hubs = this.user.hubs
  }

}