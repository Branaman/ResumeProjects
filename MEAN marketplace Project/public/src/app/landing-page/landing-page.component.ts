import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {UserControllerService} from '../user-controller.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  loginState;
  constructor(private _userService: UserControllerService) {
    this._userService.userObserver.subscribe(
      (data)=>{
        this.loginState=data;
      }
    )
  }

  ngOnInit() {
  }

}
