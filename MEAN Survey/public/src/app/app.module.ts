import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { MaterializeModule } from "angular2-materialize";
// services
import {UserControllerService} from './user-controller.service';
import {QuizManagerService} from './quiz-manager.service';
import {TestManagerService} from './test-manager.service';
// components
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogInComponent } from './landing-page/log-in/log-in.component';
import { RegistrationComponent } from './landing-page/registration/registration.component';
import { AddQuestionComponent } from './dashboard/add-question/add-question.component';
import { TakeQuizComponent } from './dashboard/take-quiz/take-quiz.component';
import { MyQuestionsComponent } from './dashboard/my-questions/my-questions.component';
import { LeaderboardComponent } from './dashboard/leaderboard/leaderboard.component';
import { ResultsFilterPipe } from './results-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DashboardComponent,
    LogInComponent,
    RegistrationComponent,
    AddQuestionComponent,
    TakeQuizComponent,
    MyQuestionsComponent,
    LeaderboardComponent,
    ResultsFilterPipe
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [UserControllerService,QuizManagerService,TestManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
