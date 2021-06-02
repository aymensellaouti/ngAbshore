import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { FirstComponent } from './components/first/first.component';
import { ColorComponent } from './components/color/color.component';
import { SecondComponent } from './components/second/second.component';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'cv', component: CvComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'word', component: MiniWordComponent },
  { path: 'color/:myColor', component: ColorComponent },
  /*   { path: ':param', component: SecondComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
