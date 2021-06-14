import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentGuide2Component } from './payment-guide2.component';

describe('PaymentGuide2Component', () => {
  let component: PaymentGuide2Component;
  let fixture: ComponentFixture<PaymentGuide2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentGuide2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentGuide2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
