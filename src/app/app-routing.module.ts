import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

const routes: Routes = [
  { path: 'customer-details', component: CustomerDetailsComponent }, // Add this route
  { path: '', redirectTo: '/customer-details', pathMatch: 'full' },  // Optional: Redirect to default route
  { path: '**', redirectTo: '/customer-details' },        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
