import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { XyzComponent } from "./xyz/xyz.component";
import { CheckInComponent } from "./check-in/check-in.component";
import { CheckOutComponent } from "./check-out/check-out.component";
import { RentComponent } from "./rent/rent.component";
import { ViewRentalComponent } from "./view-rental/view-rental.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'xyz', component: XyzComponent },
  {path: 'check-in', component: CheckInComponent },
  {path: 'check-out', component: CheckOutComponent },
  {path: 'rent', component: RentComponent },
  {path: 'view-rental', component: ViewRentalComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
