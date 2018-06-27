import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-billing-record',
  templateUrl: './billing-record.component.html',
  styleUrls: ['./billing-record.component.css'],
  animations: [fadeInAnimation]
})
export class BillingRecordComponent implements OnInit {

  errorMessage: string;
  successMessage: string;
  billingrecord: any[];


  constructor(private dataService: DataService, public dialog: MatDialog) {}

  ngOnInit() {this.getBillingRecords(); }

  getBillingRecords() {
    this.dataService.getRecords("billing-record")
      .subscribe(
        billingrecord => this.billingrecord = billingrecord,
        error =>  this.errorMessage = <any>error);
  }
}
