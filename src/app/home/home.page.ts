import { Component, OnInit } from '@angular/core';

import  *  as  data  from  '../../assets/json/profile-data.json';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  contacts = (data  as  any).default;
  activeChatHistory = 0;
  innerWidth:number;
  showScreen = 'contact-chats';

  constructor() {}

  ngOnInit(){ 
    this.innerWidth = window.innerWidth;
  }

  setActiveChat(evt){
    this.activeChatHistory = evt;
    this.showScreen = 'chat-history';
  }

  showInfoContact(evt){
    if(evt==='info'){
      this.showScreen = 'contact-info';
    }else{
      this.showScreen = 'contact-chats';
    }
    
  }

}
