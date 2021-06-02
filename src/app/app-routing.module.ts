import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { FirstComponent } from './components/first/first.component';
import { ColorComponent } from './components/color/color.component';
import { CONSTANTES } from './constantes';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { FrontComponent } from './components/front/front.component';
import { BackComponent } from './components/back/back.component';
import { SecondComponent } from './components/second/second.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: FirstComponent },
  {
    path: CONSTANTES.router.CV_PREFIX,
    children: [
      { path: CONSTANTES.router.CV, component: CvComponent },
      { path: CONSTANTES.router.DETAIL_CV, component: DetailCvComponent },
    ],
  },
  {
    path: CONSTANTES.router.FRONT,
    component: FrontComponent,
    children: [{ path: CONSTANTES.router.TODO, component: TodoComponent }],
  },
  {
    path: CONSTANTES.router.BACK,
    component: BackComponent,
    children: [{ path: CONSTANTES.router.SECOND, component: SecondComponent }],
  },

  { path: CONSTANTES.router.WORD, component: MiniWordComponent },
  { path: CONSTANTES.router.COLOR, component: ColorComponent },
  { path: CONSTANTES.router.COLOR, component: ColorComponent },
  { path: CONSTANTES.router.LOGIN, component: LoginComponent },
  { path: '**', redirectTo: CONSTANTES.router.CV_PREFIX, pathMatch: 'full' },
  /*   { path: ':param', component: SecondComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
