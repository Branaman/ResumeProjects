import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import {UserControllerService} from '../../user-controller.service';
import {QuizManagerService} from '../../quiz-manager.service';
import {TestManagerService} from '../../test-manager.service';
import {Question} from '../../question';
import {Test} from '../../test';

@Component({
  selector: 'app-take-quiz',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.css']
})
export class TakeQuizComponent implements OnInit {
  loginState;
  questionArray = [];
  AllQuestions = [];
  testInstance:Test = new Test();
  testSheet = [{question:"",answers:[]},{question:"",answers:[]},{question:"",answers:[]}];
  testKey = {answer:["","",""]};
  test = {answer:["","",""]};
  usedQs = {};
  constructor(private _router: Router, private _route: ActivatedRoute,private _userService: UserControllerService, private _questionmanagerService: QuizManagerService, private _testmanagerService: TestManagerService) {
    this._questionmanagerService.questionObserver.subscribe(
      (data)=>{
        this.AllQuestions=data;
      }
    )
    this._userService.userObserver.subscribe(
      (data)=>{
        this.loginState=data;
      }
    )
  }
  ngOnInit() {
    this._userService.checkLogIn((pass)=>{});
    this.generateTest();
  }
  randomNewIDX(){
    let number = Math.floor(Math.random()*this.AllQuestions.length)
    if (number in this.usedQs){
        number = this.randomNewIDX();
    }
    this.usedQs[number] = 1;
    return number
  }
  generateTest(){
    if (this.AllQuestions.length > 3){
      for (let i = 0; i < 3; i++) {
        let random = this.randomNewIDX();
        this.questionArray.push(this.AllQuestions[random]);
      }
    }
    for(let i = 0; i<3; i++){
      let answers = [0,1,2];
      this.testSheet[i].question = this.questionArray[i].question
      let index = Math.floor(Math.random()*answers.length)
      let answer1 = answers[index]
      answers.splice(index,1)
      this.testSheet[i].answers[answer1] = this.questionArray[i].Canswer
      index = Math.floor(Math.random()*answers.length)
      let answer2 = answers[index]
      answers.splice(index,1)
      this.testSheet[i].answers[answer2] = this.questionArray[i].Fanswer1
      index = Math.floor(Math.random()*answers.length)
      let answer3 = answers[index]
      answers.splice(index,1)
      this.testSheet[i].answers[answer3] = this.questionArray[i].Fanswer2
    }
    for (let i = 0; i < 3; i++) {
      this.testKey.answer[i] = this.questionArray[i].Canswer
    }
  }
  onSubmit(){
    for (let i =0; i <3; i++){
      if (this.testKey.answer[i]===this.test.answer[i]) {
        this.testInstance.score ++;
      }
    }
    this._testmanagerService.createTest(this.testInstance);
    this._testmanagerService.retrieveTests();
    this._router.navigate(['dashboard']);
  }
}
