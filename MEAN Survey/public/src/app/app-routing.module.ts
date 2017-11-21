import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
const routes: Routes = [
  {
  path:'',
  pathMatch: 'full',
  component: LandingPageComponent,
  },
  {
    path:'dashboard',
    component: DashboardComponent,
    children: [
      {
        path:'leaderboard',
        pathMatch: 'full',
        component: LeaderboardComponent,
      },
      {
        path:'lets_play',
        pathMatch: 'full',
        component: TakeQuizComponent,
      },
      {
        path:'new_question',
        pathMatch: 'full',
        component: AddQuestionComponent,
      },
      {
        path:'myquestions',
        pathMatch: 'full',
        component: MyQuestionsComponent,
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
