import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-sent-mails',
  templateUrl: './sent-mails.component.html',
  styleUrls: ['./sent-mails.component.css']
})
export class SentMailsComponent implements OnInit {

  constructor(private notifyService : NotificationService) { }

  recivedData:any
  ngOnInit(): void {
    let data=localStorage.getItem(JSON.stringify(localStorage.getItem('logged-User')))
  if(data!==null){
  let inboxData=JSON.parse(data)
  this.recivedData=inboxData[0].sentMail
  }
  }
}
