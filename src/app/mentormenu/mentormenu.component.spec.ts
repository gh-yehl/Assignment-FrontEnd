import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentormenuComponent } from './mentormenu.component';

describe('MentormenuComponent', () => {
  let component: MentormenuComponent;
  let fixture: ComponentFixture<MentormenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentormenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentormenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
