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
  comments:any
  comment:any = {
    owner: '',
    hub: '',
    content: '',
  }
  isNotParticipant:boolean = true
  hubIsFull:boolean = false

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
    //este error no impacta en nada a la página. EL username sí se renderiza.

    this.backService.getAllComments(this.id) //this.id = id del hub
    .subscribe(commentsFound=>{
      this.comments = commentsFound
    })

    //checa si el usuario ya se unió al hub
    for (var i = 0; i <= this.user.hubs.length; i++)
    if(this.user.hubs[i]._id == this.id) return this.isNotParticipant = false;

    //checa si aun hay espacios disponibles en el hub
    if (this.hub.participants.length >= this.hub.numberParticipants) return this.hubIsFull = true;
  }

  makeComment(commentToPost){
    //se guarda el owner del comentario y en que hub se hizo
    commentToPost.owner = this.user._id;
    commentToPost.hub = this.hub._id;
    //crea el comentario y recarga la pagina para que se muestre.
    this.backService.newComment(commentToPost)
    .subscribe(success=>{
      window.location.reload();
    })
  }

  joinHub(){
    this.backService.updateHubParticipants(this.id, this.user._id)
    .subscribe(hub=>{
      this.hub = hub
    })

    this.backService.updateUserHub(this.user._id, this.id)
    .subscribe(user=>{
      this.user = user;

      //update el localStorage user
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(this.user))
      window.location.reload()
    })
  }

}
