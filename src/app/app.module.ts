import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { InboxComponent } from './inbox/inbox.component';
import { SentMailsComponent } from './sent-mails/sent-mails.component';
import { EmailComponent } from './email/email.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './Guards/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './services/notification.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    InboxComponent,
    SentMailsComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [AuthService,AuthGuard,NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
