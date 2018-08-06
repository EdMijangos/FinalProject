import { Component, OnInit } from '@angular/core';
import { ServerLinkService } from '../../services/server-link.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.css']
})
export class HubComponent implements OnInit {
  id:any;
  hub:any = {};
  user:any

  constructor(
    private backService:ServerLinkService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit() {
    //check if logged in
    this.user = this.backService.getLocalUser()


    this.activatedRoute.params
    .subscribe(params =>{
      this.id = params.id
    })

    this.backService.getSingleHub(this.id)
    .subscribe(result=>{
      this.hub = result
    })
    //debido al async de js, la consola arroja un error, que no encuentra la propiedad username
    //este error no impacta en nada a la página. EL username si aparece en ella.
  }

}
