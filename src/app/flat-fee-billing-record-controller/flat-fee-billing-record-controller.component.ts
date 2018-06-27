import { Component, OnInit, ViewChild } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service'
import { fadeInAnimation } from '../animations/fade-in.animation';

@Component({
  selector: 'app-flat-fee-billing-record-controller',
  templateUrl: './flat-fee-billing-record-controller.component.html',
  styleUrls: ['./flat-fee-billing-record-controller.component.css'],
  animations: [fadeInAnimation]
})
export class FlatFeeBillingRecordControllerComponent implements OnInit {

  flatfeeForm: NgForm;
  @ViewChild('flatfeeForm') currentForm: NgForm;

  successMessage: string;
  errorMessage: string;

  record: object;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
  }

  saveRecord(flatfeeForm: NgForm){
    this.dataService.addRecord("billing-record/flat-fee", flatfeeForm.value)
    .subscribe(
            company => this.successMessage = "Record added successfully",
            error =>  this.errorMessage = <any>error);
            this.record = {};
            this.flatfeeForm.reset()

  }

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    this.flatfeeForm = this.currentForm;
    this.flatfeeForm.valueChanges
      .subscribe(
        data => this.onValueChanged(data)
      );
  }

  onValueChanged(data?: any) {
    let form = this.flatfeeForm.form;

    for (let field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'amount': ''
  };

  validationMessages = {
    'amount': {
      'required': 'amount is required.'
    }
  };

}
