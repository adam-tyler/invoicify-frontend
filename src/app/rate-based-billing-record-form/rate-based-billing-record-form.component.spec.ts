import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateBasedBillingRecordFormComponent } from './rate-based-billing-record-form.component';

describe('RateBasedBillingRecordFormComponent', () => {
  let component: RateBasedBillingRecordFormComponent;
  let fixture: ComponentFixture<RateBasedBillingRecordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateBasedBillingRecordFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateBasedBillingRecordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
