import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { QuizComponent } from './components/quiz/quiz.component';

const routes: Routes = [
  { path: '', component: CalculatorComponent },
  { path: 'quiz', component: QuizComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
