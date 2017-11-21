import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
// classes
import {Test} from './test';
import {User} from './user';

@Injectable()
export class TestManagerService {
  tests:Array<Test> = [];
  mytests:Array<Test>=[];
  mysortedtests:Array<Test>=[];
  sortedtests:Array<Test> = [];
  testInstance:Test;
  testObserver = new BehaviorSubject(this.tests)
  myTestsObserver = new BehaviorSubject(this.mytests)
  constructor(private _http:Http) { }
  sorted(array:Array<Test>, property:string): Array<Test> {
    function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
    }
    return array.sort(dynamicSort(property))
  }
  myTests(){
    this._http.get('/mytests').subscribe(
      (response) => {
        this.mytests = response.json();
        this.mysortedtests = this.sorted(this.mytests, "-score");
        this.myTestsObserver.next(this.mysortedtests);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  retrieveTests(){
    this._http.get('/tests').subscribe(
      (response) => {
        this.tests = response.json();
        this.sortedtests = this.sorted(this.tests, "-score");
        this.testObserver.next(this.sortedtests);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  retrieveTest(id,callback){
    this._http.get('/tests/'+id).subscribe(
      (response) => {
        this.testInstance = response.json();
        callback(this.testInstance);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  deleteTest(id){
    this._http.delete('/tests/'+id).subscribe(
      (response) => {
        console.log(response.json())
      },
      (err) => {
        console.log(err);
      }
    );
    this.retrieveTests();
    this.myTests();
  }
  updateTest(test,id){
    console.log(id);
    console.log(test);
    this._http.put('/tests/'+id,test).subscribe(
      (response) => {
        console.log(response.json())
      },
      (err) => {
        console.log(err);
      }
    );
    this.retrieveTests();
  }
  createTest(test){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post('/tests', test, options).subscribe(
      (response) => {
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
