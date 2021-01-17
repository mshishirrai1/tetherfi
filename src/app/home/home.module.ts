import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { ContactChatsComponent } from './contact-chats/contact-chats.component';
import { ChatDetailsComponent } from './chat-details/chat-details.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    ContactChatsComponent,
    ChatDetailsComponent,
    ContactInfoComponent
  ]
})
export class HomePageModule {}
