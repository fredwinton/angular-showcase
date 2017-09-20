import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookFriendComponent } from './facebook-friend.component';

describe('FacebookFriendComponent', () => {
  let component: FacebookFriendComponent;
  let fixture: ComponentFixture<FacebookFriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookFriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
