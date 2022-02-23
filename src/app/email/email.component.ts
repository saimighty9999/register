import { Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit,DoCheck {
  @ViewChild('closemodal') element:any
  constructor(private notifyService : NotificationService) { }
  userMailID:any
  show:boolean=false
  notifications:number=0
  ngOnInit(): void {
  }
  ngDoCheck(): void {
  this.userMailID=localStorage.getItem('logged-User')
  let userLogged=localStorage.getItem('isUserValid')
   if(userLogged!==null){
   this.show=JSON.parse(userLogged)
  }
  let alerts=localStorage.getItem('alerts')
  if(alerts!==null){
    let inboxAlerts=JSON.parse(alerts)
    this.notifications=inboxAlerts
  }
  }

  composeForm=new FormGroup({
    from:new FormControl("",[Validators.email]),
    to:new FormControl("",[Validators.email]),
    cc:new FormControl("",[Validators.email]),
    subject:new FormControl(""),
    message:new FormControl("",[Validators.required])
  })
  get from(){
    return this.composeForm.get('from')
  }
  get to(){
    return this.composeForm.get('to')
  }
  get cc(){
    return this.composeForm.get('cc')
  }
  get subject(){
    return this.composeForm.get('subject')
  }
  get message(){
    return this.composeForm.get('message')
  }
  send(){
    //getting the respective users data based on there emails and storing in a variable
    let senderdata=localStorage.getItem(JSON.stringify(this.composeForm.value.from))
    let reciverdata=localStorage.getItem(JSON.stringify(this.composeForm.value.to))
    // let ccdata=localStorage.getItem(JSON.stringify(this.composeForm.value.cc))
    // console.log(this.composeForm.value.cc);
    // let ccArray=[this.composeForm.value.cc]
    // console.log(ccArray);


    //checking if the users data exists in localstorage or not
      // if(senderdata!==null && reciverdata!==null && ccdata!==null){
        if(senderdata!==null && reciverdata!==null){
    //if users exists
    //parse the senderdata and acces the sentMail and push the whole form values object to it
      let sData=JSON.parse(senderdata)
      sData[0].sentMail.push(this.composeForm.value)
    //parse the reciversdata and acces the sentMail and push the whole form values object to it
      let rData=JSON.parse(reciverdata)
      rData[0].recievedMail.push(this.composeForm.value)

      // let cData=JSON.parse(ccdata)
      // cData[0].recievedMail.push(this.composeForm.value)


      //send the updated data to the local storage
      localStorage.setItem(JSON.stringify(this.composeForm.value.to),JSON.stringify(rData))
      localStorage.setItem(JSON.stringify(this.composeForm.value.from),JSON.stringify(sData))
    // alert('Mail Sent Successfully')
    this.notifyService.showSuccess('','Mail Sent Successfully')
    this.element.nativeElement.click()
    this.composeForm.reset({from:this.userMailID,to:'',subject:'',message:''})
    }
      else{
        // alert('Invalid User')
        this.notifyService.showError('email which you entered does not exit','! invalid email')
        this.composeForm.reset({from:this.userMailID,to:'',subject:'',message:''})
      }
  }

  logout(){
    localStorage.setItem('isUserValid',JSON.stringify(false))
    this.notifyService.showWarning('','Logged out')
  }
}
