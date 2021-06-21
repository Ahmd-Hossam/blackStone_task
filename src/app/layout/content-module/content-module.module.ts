import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentModuleRoutingModule } from './content-module-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { SavedPostComponent } from './saved-post/saved-post.component';
import { SittingsComponent } from './sittings/sittings.component';






@NgModule({
  declarations: [
    ProfileComponent,
    HomeComponent,
    MessagesComponent,
    SavedPostComponent,
    SittingsComponent,
  ],
  imports: [
    CommonModule,
    ContentModuleRoutingModule
  ]
})
export class ContentModuleModule { }
