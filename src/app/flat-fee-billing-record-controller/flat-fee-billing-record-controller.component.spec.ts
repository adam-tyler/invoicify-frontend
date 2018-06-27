import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatFeeBillingRecordControllerComponent } from './flat-fee-billing-record-controller.component';

describe('FlatFeeBillingRecordControllerComponent', () => {
  let component: FlatFeeBillingRecordControllerComponent;
  let fixture: ComponentFixture<FlatFeeBillingRecordControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatFeeBillingRecordControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatFeeBillingRecordControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
