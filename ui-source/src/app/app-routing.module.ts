import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CustomerComponent } from './components/customer/customer.component';
import { OwnerComponent } from './components/owner/owner.component';

const routes: Routes = [
  {
    path: "customer",
    component: CustomerComponent
  },
  {
    path: "owner",
    component: OwnerComponent
  },
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
