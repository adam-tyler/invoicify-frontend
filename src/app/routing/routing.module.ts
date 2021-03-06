import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyComponent }   from '../company/company.component';
import { CompanyFormComponent }   from '../company-form/company-form.component';
import { HomeComponent }   from '../home/home.component';
import { UserComponent } from '../user/user.component';
import { UserFormComponent } from '../user-form/user-form.component';
import { BillingRecordComponent } from '../billing-record/billing-record.component';
import { FlatFeeBillingRecordControllerComponent } from '../flat-fee-billing-record-controller/flat-fee-billing-record-controller.component';
import { RateBasedBillingRecordFormComponent } from '../rate-based-billing-record-form/rate-based-billing-record-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'company',  component: CompanyComponent },
  { path: 'company/edit/:id', component: CompanyFormComponent },
  { path: 'company/add', component: CompanyFormComponent },
  { path: 'user', component: UserComponent},
  { path: 'user/edit/:id', component: UserFormComponent},
  { path: 'user/add', component: UserFormComponent},
  { path: 'billing-record', component: BillingRecordComponent},
  { path: 'billing-record/flat-fee/add', component: FlatFeeBillingRecordControllerComponent},
  { path: 'billing-record/rate-based/add', component: RateBasedBillingRecordFormComponent}
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
