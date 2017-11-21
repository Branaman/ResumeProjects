import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
// classes
import {User} from './user';


@Injectable()
export class UserControllerService {
  userInstance:{state:boolean,username:string} = {state:false,username:""};
  userObserver = new BehaviorSubject(this.userInstance)
  constructor(private _http:Http) { }
  checkLogIn(callback){
    this._http.get('/checkLogIn').subscribe(
      (response)=>{
        if (response.json()){
          this.userInstance = {state:true,username:response.json()};
        }
        callback(response.json());
        this.userObserver.next(this.userInstance)
      },
      (err)=>{
        console.log(err);
      }
    );
  }
  loginUser(user:User, callback){
    this._http.post('/login', user).subscribe(
      (response) => {
        let result = response.json();
        if (response.json().message){
          this.userInstance = {state:false,username:""};
          callback(response.json())
        }else {
          this.userInstance = {state:true,username:response.json()};
        }
        this.userObserver.next(this.userInstance)
      },
      (err) => {
        console.log(err)
      }
    )
  }
  createUser(user, callback){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post('/users', user, options).subscribe(
      (response) => {
        callback(response.json())
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
