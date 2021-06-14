import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidenPaymentComponent } from './guiden-payment.component';

describe('GuidenPaymentComponent', () => {
  let component: GuidenPaymentComponent;
  let fixture: ComponentFixture<GuidenPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidenPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidenPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
