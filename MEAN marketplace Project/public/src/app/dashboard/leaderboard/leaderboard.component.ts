import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import {TestManagerService} from '../../test-manager.service';
import {UserControllerService} from '../../user-controller.service';
import {Test} from '../../test';
@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  testArray = [];
  loginState;
  constructor(private _route: ActivatedRoute, private _testmanagerService: TestManagerService, private _userService: UserControllerService) {
    this._testmanagerService.testObserver.subscribe(
      (data)=>{
        this.testArray=data;
      }
    )
    this._userService.userObserver.subscribe(
      (data)=>{
        this.loginState=data;
      }
    )
  }
  ngOnInit() {
    this.getTests();
  }
  getTests():void {
    this._testmanagerService.retrieveTests();
  }
}
