import { Component, OnInit } from '@angular/core';
import { ServerLinkService } from '../../services/server-link.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.css']
})
export class HubComponent implements OnInit {
  id:any;
  hub:any = {}

  constructor(
    private backService:ServerLinkService,
    private activatedRoute:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(params =>{
      this.id = params.id
    })

    this.backService.getSingleHub(this.id)
    .subscribe(result=>{
      this.hub = result
    })
  }

}
