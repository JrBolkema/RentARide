import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { XyzComponent } from "./xyz/xyz.component";
import { FleetComponent } from './fleet/fleet.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'xyz', component: XyzComponent },
  {path: 'fleetMaintainance', component: FleetComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
