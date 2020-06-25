import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { HerosDetailComponent } from './heros-detail/heros-detail.component';
import { HerosLiveComponent } from './heros-live/heros-live.component';
import { HerosInlineComponent } from './heros-inline/heros-inline.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"heros",
    pathMatch:"full"
  },
  {
    path:"heros",
    component: HerosComponent
  },
  {
    path:"heroslocal",
    component: HerosDetailComponent
  },
  {
    path:"heroslive",
    component: HerosLiveComponent
  },
  {
    path:"herosinline",
    component: HerosInlineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
