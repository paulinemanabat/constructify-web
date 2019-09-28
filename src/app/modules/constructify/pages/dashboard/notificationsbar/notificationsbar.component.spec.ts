import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsbarComponent } from './notificationsbar.component';

describe('NotificationsbarComponent', () => {
  let component: NotificationsbarComponent;
  let fixture: ComponentFixture<NotificationsbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
