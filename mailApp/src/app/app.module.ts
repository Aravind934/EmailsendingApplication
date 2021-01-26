import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MailComponent } from './mail/mail.component';
import {HttpClientModule} from '@angular/common/http'
import { MailService } from './mail.service';
@NgModule({
  declarations: [
    AppComponent,
    MailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
