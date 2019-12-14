import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { XyzComponent } from "./xyz/xyz.component";
import { CheckInComponent } from "./check-in/check-in.component";
import { CheckOutComponent } from "./check-out/check-out.component";
import { RentComponent } from "./rent/rent.component";
import { ViewRentalComponent } from "./view-rental/view-rental.component";
import { FleetComponent } from './fleet/fleet.component';

const routes: Routes = [
  {path: 'xyz', component: XyzComponent },
  {path: 'check-in', component: CheckInComponent },
  {path: 'check-out', component: CheckOutComponent },
  {path: 'rent', component: RentComponent },
  {path: 'view-rental', component: ViewRentalComponent },
  {path: 'xyz', component: XyzComponent },
  {path: 'fleetMaintainance', component: FleetComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
