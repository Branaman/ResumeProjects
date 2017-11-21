import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {UserControllerService} from './user-controller.service';
import {QuizManagerService} from './quiz-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Bike Maketplace';
  loginState;
  constructor(private _router:Router, private _route:ActivatedRoute, private _userService:UserControllerService, private _questionmanagerService:QuizManagerService) {
    this._userService.userObserver.subscribe(
      (data)=>{
        this.loginState=data;
      }
    )
  }

  ngOnInit() {
    this.loggedInCheck();
    this._questionmanagerService.retrieveQuestions();
  }
  loggedInCheck(){
    this._userService.checkLogIn((pass)=>{
      if (pass === true){
        this.loginState = true;
      }else{
        this.loginState = false;
      }
    });
  }
}
