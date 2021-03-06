import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {Error404Component} from './error404/error404.component';
import {ContactComponent} from './contact/contact.component';
import {BlogComponent} from './blog/blog.component';
import {MessageDetailsComponent} from './message-details/message-details.component';
import {UserGuard} from './shared/guards/user.guard';
import {MessageGuard} from './shared/guards/message.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'blog',
    component: BlogComponent,
    canActivate: [UserGuard, MessageGuard]
  },
  {
    path: 'message',
    component: MessageDetailsComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
