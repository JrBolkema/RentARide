import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { XyzComponent } from "./xyz/xyz.component";



const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'xyz', component: XyzComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
