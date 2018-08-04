import { Routes } from '@angular/router'

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HubCreateComponent } from './hub-create/hub-create.component'
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PeopleComponent } from './people/people.component';
import { HubsComponent } from './hubs/hubs.component';
import { ProfileComponent } from './profile/profile.component';
import { HubComponent } from './hub/hub.component';

//paths
export const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'newHub', component:HubCreateComponent},
  {path:'myProfile', component:MyProfileComponent},
  {path:'people', component: PeopleComponent},
  {path:'people/:id', component:ProfileComponent},
  {path:'hubs', component:HubsComponent},
  {path:'hubs/:id', component:HubComponent}

]