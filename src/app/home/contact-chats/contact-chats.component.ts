import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-contact-chats',
  templateUrl: './contact-chats.component.html',
  styleUrls: ['./contact-chats.component.scss'],
})
export class ContactChatsComponent implements OnInit {
  @Input() contacts;
  activeChat:number = 0;
  previousActiveChat:number;
  @Output()setAtciveChatHistory = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  setActive(val){
    this.activeChat = val;
    this.previousActiveChat = this.activeChat;
    this.setAtciveChatHistory.emit(val);
  }

  setShadow(type,val){
    if(type==='set'){
      this.previousActiveChat = this.activeChat;
      this.activeChat = val;
    }else{
      this.activeChat = this.previousActiveChat;
    }
  }

}
