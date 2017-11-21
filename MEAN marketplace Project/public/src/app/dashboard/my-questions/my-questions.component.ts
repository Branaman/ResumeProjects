import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import {QuizManagerService} from '../../quiz-manager.service';
import {Question} from '../../question';

@Component({
  selector: 'app-my-questions',
  templateUrl: './my-questions.component.html',
  styleUrls: ['./my-questions.component.css']
})
export class MyQuestionsComponent implements OnInit {
  updatedQuestion;
  myQuestionListings = [];
  constructor(private _route: ActivatedRoute, private _questionmanagerService: QuizManagerService) {
    this._questionmanagerService.myQuestionsObserver.subscribe(
      (data)=>{
        this.myQuestionListings=data;
      }
    )
  }
  ngOnInit() {
    this.myQuestions();
  }
  update(idx){
    this.updatedQuestion = this.myQuestionListings[idx];
    this._questionmanagerService.updateQuestion(this.updatedQuestion,this.updatedQuestion._id);
  }
  delete(id){
    this._questionmanagerService.deleteQuestion(id);
  }
  myQuestions():void {
    this._questionmanagerService.myQuestions();
  }
}
