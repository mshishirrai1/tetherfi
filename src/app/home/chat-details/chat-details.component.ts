import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chat-details',
  templateUrl: './chat-details.component.html',
  styleUrls: ['./chat-details.component.scss'],
})
export class ChatDetailsComponent implements OnInit {
  @Input()contactActive;
  @Output()showContactInfoEmit = new EventEmitter();
  innerWidth:number;

  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  showContactInfo(val){
    this.showContactInfoEmit.emit(val)
  }

}
