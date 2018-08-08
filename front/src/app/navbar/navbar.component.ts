import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ServerLinkService } from '../../services/server-link.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user = '';

  constructor(
    private backService: ServerLinkService,
    private router: Router,
  ) { }

  ngOnInit() {
  this.user = this.backService.getLocalUser()
  }

  logout(){
    this.backService.logout();
    this.router.navigate(['']);
    this.ngOnInit();
  }

}
