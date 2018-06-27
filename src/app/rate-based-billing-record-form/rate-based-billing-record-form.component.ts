import { Component, OnInit, ViewChild }      from '@angular/core';
import { NgForm } from '@angular/forms';

import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service'
import { fadeInAnimation } from '../animations/fade-in.animation';

@Component({
  selector: 'app-rate-based-billing-record-form',
  templateUrl: './rate-based-billing-record-form.component.html',
  styleUrls: ['./rate-based-billing-record-form.component.css'],
  animations: [fadeInAnimation]
})
export class RateBasedBillingRecordFormComponent implements OnInit {

  rateBasedForm: NgForm;
  @ViewChild('rateBasedForm') currentForm: NgForm;

  successMessage: string;
  errorMessage: string;

  record: object;
  companies: any[];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.dataService.getRecords("company")
      .subscribe(
        companies => this.companies = companies,
        error =>  this.errorMessage = <any>error);
  }

  saveRecord(rateBasedForm: NgForm){
    this.dataService.addRecord("billing-record/rate-based/" + rateBasedForm.value.clientId, rateBasedForm.value)
          .subscribe(
            record => this.successMessage = "Record added successfully",
            error =>  this.errorMessage = <any>error);
            this.record = {};
            this.rateBasedForm.reset()

  }

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    this.rateBasedForm = this.currentForm;
    this.rateBasedForm.valueChanges
      .subscribe(
        data => this.onValueChanged(data)
      );
  }

  onValueChanged(data?: any) {
    let form = this.rateBasedForm.form;

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
    'description': '',
    'client': '',
    'rate': '',
    'quantity': ''

  };

  validationMessages = {
    'description': {
      'required': 'Description is required.',
      'minlength': 'Description must be at least 2 characters long.',
      'maxlength': 'Description cannot be more than 300 characters long.'
    },
    'client': {
      'required': 'Client is required.',
    },
    'rate': {
      'required': 'Rate is required.',
    },
    'quantity': {
      'required': 'Quantity is required.',
    }
  };

}
