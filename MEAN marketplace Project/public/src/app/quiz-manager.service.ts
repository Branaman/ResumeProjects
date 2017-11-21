import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
// classes
import {Question} from './question';
import {User} from './user';

@Injectable()
export class QuizManagerService {
  questions:Array<Question> = [];
  myquestions:Array<Question>=[];
  mysortedquestions:Array<Question>=[];
  sortedquestions:Array<Question> = [];
  questionInstance:Question;
  questionObserver = new BehaviorSubject(this.questions)
  myQuestionsObserver = new BehaviorSubject(this.myquestions)
  constructor(private _http:Http) { }
  sorted(array:Array<Question>, property:string): Array<Question> {
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
  myQuestions(){
    this._http.get('/myquestions').subscribe(
      (response) => {
        this.myquestions = response.json();
        this.mysortedquestions = this.sorted(this.myquestions, "-created_at");
        this.myQuestionsObserver.next(this.mysortedquestions);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  retrieveQuestions(){
    this._http.get('/questions').subscribe(
      (response) => {
        this.questions = response.json();
        this.sortedquestions = this.sorted(this.questions, "-created_at");
        this.questionObserver.next(this.sortedquestions);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  retrieveQuestion(id,callback){
    this._http.get('/questions/'+id).subscribe(
      (response) => {
        this.questionInstance = response.json();
        callback(this.questionInstance);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  deleteQuestion(id){
    this._http.delete('/questions/'+id).subscribe(
      (response) => {
        console.log(response.json())
      },
      (err) => {
        console.log(err);
      }
    );
    this.retrieveQuestions();
    this.myQuestions();
  }
  updateQuestion(question,id){
    console.log(id);
    console.log(question);
    this._http.put('/questions/'+id,question).subscribe(
      (response) => {
        console.log(response.json())
      },
      (err) => {
        console.log(err);
      }
    );
    this.retrieveQuestions();
  }
  createQuestion(question){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post('/questions', question, options).subscribe(
      (response) => {
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
