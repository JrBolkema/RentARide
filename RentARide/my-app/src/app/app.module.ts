import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";
import { SatPopoverModule } from '@ncstate/sat-popover';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { XyzComponent } from './xyz/xyz.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { RentComponent } from './rent/rent.component';
import { ViewRentalComponent } from './view-rental/view-rental.component';
import { CheckInComponent } from './check-in/check-in.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    XyzComponent,
    LoginComponent,
    NavbarComponent,
    RentComponent,
    ViewRentalComponent,
    CheckInComponent,
    CheckOutComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    SatPopoverModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
