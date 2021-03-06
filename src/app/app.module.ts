import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { MessagesComponent } from './messages/messages.component';
import { FooterComponent } from './footer/footer.component';
import { MessageComponent } from './messages/message/message.component';
import { UppercasePipe } from './shared/pipes/uppercase.pipe';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './error404/error404.component';
import { MessageDetailsComponent } from './message-details/message-details.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    MessagesComponent,
    FooterComponent,
    MessageComponent,
    UppercasePipe,
    HomeComponent,
    ContactComponent,
    BlogComponent,
    Error404Component,
    MessageDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
