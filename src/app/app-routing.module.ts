import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { NetworkComponent } from './network/network.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { PersondetailsComponent } from './persondetails/persondetails.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';

const routes: Routes = [
  {path:"",redirectTo:'login',pathMatch:"full"},
  {path:"Home", canActivate:[AuthGuard],component:HomeComponent},
  {path:"People",canActivate:[AuthGuard],component:PeopleComponent},
  {path:"Network",canActivate:[AuthGuard],component:NetworkComponent},
  {path:"About",canActivate:[AuthGuard],component:AboutComponent},
  {path:"Tv",canActivate:[AuthGuard],component:TvComponent},
  {path:"moviedetails/:id",canActivate:[AuthGuard],component:MoviedetailsComponent},
  {path:"persondetails/:id",canActivate:[AuthGuard],component:PersondetailsComponent},
  {path:"tvdetails/:id",canActivate:[AuthGuard],component:TvdetailsComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"**",component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
