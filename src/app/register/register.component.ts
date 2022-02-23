import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private notifyService : NotificationService) {}
  ngOnInit(): void {}
  regForm=new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.pattern('^[A-Za-z]+$')]),
  })
  get email(){
    return this.regForm.get('email')
  }
  get password(){
    return this.regForm.get('password')
  }
  // array=new Array()
  validate(){
    if(localStorage.getItem(JSON.stringify(this.regForm.value.email))===null){
      let datainfo=[{
        recievedMail: [],
        sentMail: [],
        user: this.regForm.value
        }]
      localStorage.setItem(JSON.stringify(this.regForm.value.email),JSON.stringify(datainfo))
      // alert("Successfully Registered")
      this.notifyService.showSuccess('','Successfully Registered')
      this.router.navigate(['login'])
    }else{
      this.notifyService.showError('','user Already exists')
      // alert('user Already exists')
    }
  }
  nav_login(){
    this.router.navigate(['login'])
  }
}
