import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private notifyService : NotificationService) { }

  ngOnInit(): void {
    localStorage.setItem('isUserValid',JSON.stringify(false))
  }
  loginForm=new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required]),
  })
  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }


  validate(){
  let data=localStorage.getItem(JSON.stringify(this.loginForm.value.email))
    if(data!==null){
      let regdata=JSON.parse(data)
      // console.log(regdata[0]);
      // console.log(regdata[0].user);
      // console.log(regdata[0].user.email);
      // console.log(regdata[0].user.password);
    if(regdata[0].user.email===this.loginForm.value.email && regdata[0].user.password===this.loginForm.value.password){
      localStorage.setItem('isUserValid',JSON.stringify(true))
      localStorage.setItem('logged-User',this.loginForm.value.email)
        this.router.navigate(['inbox'])
        this.notifyService.showSuccess('welcome to Mail','login Sucess')
    }else{
      // alert('! Credientials Mismatch')
      this.notifyService.showWarning("please enter a correct email and password", "! Credientials Mismatch")

      }
    }else{
      // alert('No User ID found !please register')
      this.notifyService.showError("New to Mail ? please register to login ", "! No User ID found")
      this.router.navigate(['register'])
    }
  }
  nav_register(){
    this.router.navigate(['register'])
  }
}
