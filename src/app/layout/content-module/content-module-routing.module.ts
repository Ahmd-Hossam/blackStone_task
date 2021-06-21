import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { SavedPostComponent } from './saved-post/saved-post.component';
import { SittingsComponent } from './sittings/sittings.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component:HomeComponent },
  { path: "messages", component: MessagesComponent },
  { path: "profile", component: ProfileComponent },
  { path: "saved_post", component: SavedPostComponent },
  { path: "sittings", component: SittingsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentModuleRoutingModule { }
