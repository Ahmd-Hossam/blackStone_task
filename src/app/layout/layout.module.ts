import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ContentComponent } from './content/content.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { RightBarComponent } from './right-bar/right-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';

import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    ContentComponent,
    MainComponent,
    NavComponent,
    RightBarComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HttpClientModule
  ]
})
export class LayoutModule { }
