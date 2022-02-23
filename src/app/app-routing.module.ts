import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guards/auth.guard';
import { InboxComponent } from './inbox/inbox.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SentMailsComponent } from './sent-mails/sent-mails.component';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"inbox",component:InboxComponent,canActivate:[AuthGuard]},
  {path:"sentMails",component:SentMailsComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
