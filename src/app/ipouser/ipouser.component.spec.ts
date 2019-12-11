import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpouserComponent } from './ipouser.component';

describe('IpouserComponent', () => {
  let component: IpouserComponent;
  let fixture: ComponentFixture<IpouserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpouserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
