import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerLinkService } from '../../services/server-link.service'
import { FirebaseService} from '../../services/firebase.service'

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  user:any;
  photo: any

  constructor(
    private router:Router,
    private backService:ServerLinkService,
    private firebaseService:FirebaseService
  ) { }

  ngOnInit() {
    this.user = this.backService.getLocalUser();

    //finds and updates the user in localStorage. 
    //this is so the profile will show new hubs and friends added during the session.
    this.backService.getSingleUser(this.user._id)
    .subscribe(user=>{
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(user))
    });
    
    if(!this.user){
      this.router.navigate(['login']);
    }
  }

  //para poder cambiar la foto del profile
  photoClick(){
    document.getElementById('form').click();
  }

  getPhoto(e){
    //this.photo = e.target.files[0]
    this.firebaseService.uploadFile(e.target.files[0])
      .then(r=>{
        this.photo = r
        this.user.photoURL = r
      })


    this.backService.updateUserPhoto(this.user._id, this.user.photoURL)
    .subscribe(user=>{
      this.user = user
    }

}
