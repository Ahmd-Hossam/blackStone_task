import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import {HomeComponent as small_home} from '../app/layout/content-module/home/home.component'


const routes: Routes = [
  {path:"", component:HomeComponent, children:[
    {path:"", loadChildren:()=>import('./layout/layout.module').then(m => m.LayoutModule)}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
