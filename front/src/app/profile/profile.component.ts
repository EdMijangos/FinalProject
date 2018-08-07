import { Component, OnInit } from '@angular/core';
import { ServerLinkService } from '../../services/server-link.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id = ''; //id del usuario del que se ve su profile
  user:any //el usuario del que se ve su profile
  localUser:any //el usuario loggeado
  isNotFriend:boolean = true

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

    //checa si ya esta el usuario en tu friend list
    for (var i = 0; i <= this.localUser.friendList.length; i++){
      if(this.localUser.friendList[i]._id == this.id) return this.isNotFriend = false;
    }
  }

  addFriend(){
    this.backService.updateUserFriend(this.localUser._id, this.id)
    .subscribe(user=>{
      this.localUser = user;

      //update el localStorage user
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(this.localUser))
      window.location.reload()
    })
  }

}
