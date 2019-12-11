import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestmenuComponent } from './guestmenu.component';

describe('GuestmenuComponent', () => {
  let component: GuestmenuComponent;
  let fixture: ComponentFixture<GuestmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
