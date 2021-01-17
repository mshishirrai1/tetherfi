import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss'],
})
export class ContactInfoComponent implements OnInit {
  @Input()contactActive;
  @Output()closeContactInfo = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  closeContact(){
    this.closeContactInfo.emit('conact');
  }

}
