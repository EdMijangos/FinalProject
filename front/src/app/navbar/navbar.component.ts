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
    private serverService: ServerLinkService,
    private router: Router,
  ) { }

  ngOnInit() {
  this.getUser()
  }


  getUser(){
    this.user = JSON.parse(localStorage.getItem('user'))
  }

  logout(){
    this.serverService.logout();
    this.router.navigate(['']);
    window.location.reload()
  }

}
