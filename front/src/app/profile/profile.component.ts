import { Component, OnInit } from '@angular/core';
import { ServerLinkService } from '../../services/server-link.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id = '';
  user = {} //el usuario del que se ve se profile
  localUser:any //el usuario loggead

  constructor(
    private backService:ServerLinkService,
    private activedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.localUser = this.backService.getLocalUser()

    //guarda el id del usuario clickeado
    this.activedRoute.params
    .subscribe(params=>{
      this.id = params.id
    })

    //busca al usuario en la BD y lo guarda
    this.backService.getSingleUser(this.id)
    .subscribe(user=>{
      this.user = user
    })
  }

}
