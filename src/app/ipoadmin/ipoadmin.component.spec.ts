import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoadminComponent } from './ipoadmin.component';

describe('IpoadminComponent', () => {
  let component: IpoadminComponent;
  let fixture: ComponentFixture<IpoadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpoadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
