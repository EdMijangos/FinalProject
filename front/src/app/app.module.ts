import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { Router, RouterModule } from '@angular/router';

//services
import { NgModel } from '@angular/forms';
import { ServerLinkService } from '../services/server-link.service'

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';

//routes
import { routes } from './routes';
import { HomeComponent } from './home/home.component';
import { HubCreateComponent } from './hub-create/hub-create.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PeopleComponent } from './people/people.component';
import { HubsComponent } from './hubs/hubs.component';
import { ProfileComponent } from './profile/profile.component';
import { HubComponent } from './hub/hub.component';
import { ActiveHubsComponent } from './active-hubs/active-hubs.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    HubCreateComponent,
    MyProfileComponent,
    PeopleComponent,
    HubsComponent,
    ProfileComponent,
    HubComponent,
    ActiveHubsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [NgModel, ServerLinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
