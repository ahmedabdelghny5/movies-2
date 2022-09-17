import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isboolen:boolean=false
  constructor(private _AuthService:AuthService) {
    this._AuthService.currentUser.subscribe(()=>{
      if (_AuthService.currentUser.getValue()!=null) {
        this.isboolen=true
      } else {
        this.isboolen=false
      }
    })
   }
   isLogOut(){
    this._AuthService.logOut()

   }

  ngOnInit(): void {
  }

}
