import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import {NgForm} from '@angular/forms'
import {QuizManagerService} from '../../quiz-manager.service';
import {Question} from '../../question';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  questionInstance:Question = new Question();
  subscription:Subscription;
  constructor(private _router:Router, private _route:ActivatedRoute, private _questionmanagerService:QuizManagerService) {
  }

  ngOnInit() {
  }
  onSubmit(){
    this._questionmanagerService.createQuestion(this.questionInstance);
    this.questionInstance = new Question();
    this._questionmanagerService.retrieveQuestions();
    this._questionmanagerService.myQuestions();
  }
}
