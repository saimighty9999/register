import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit,DoCheck {

  constructor() { }
  recivedData:any
  ngOnInit(): void {
    let data=localStorage.getItem(JSON.stringify(localStorage.getItem('logged-User')))
      if(data!==null){
      let inboxData=JSON.parse(data)
      this.recivedData=inboxData[0].recievedMail
      }
  }
  ngDoCheck(): void {
      // let alerts=this.recivedData.length
      let alerts=this.recivedData.length
      localStorage.setItem('alerts',JSON.stringify(alerts))
  }
  }

