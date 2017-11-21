import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import {NgForm} from '@angular/forms'
import {UserControllerService} from '../../user-controller.service';
import {User} from '../../user';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  message:string;
  userInstance:User = new User();
  subscription:Subscription;
  constructor(private _router:Router, private _route:ActivatedRoute, private _usersService:UserControllerService) {
  }

  ngOnInit() {
  }
  onSubmit(){
    this._usersService.createUser(this.userInstance,(pass) => {
      if (pass.errmsg){
        this.message = pass.errmsg;
      }else {
        this.message ="Registration Successful: "+pass.email+" created!";
      }
    });
    this.userInstance = new User();
  }
}
