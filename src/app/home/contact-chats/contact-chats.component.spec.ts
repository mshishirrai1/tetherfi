import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactChatsComponent } from './contact-chats.component';

describe('ContactChatsComponent', () => {
  let component: ContactChatsComponent;
  let fixture: ComponentFixture<ContactChatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactChatsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
