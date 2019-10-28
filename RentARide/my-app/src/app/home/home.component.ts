import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { vehicles } from '../vehicles';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  vehilces = vehicles;
  vehicleNames = [];
  show = false;

  constructor() {
    vehicles.forEach(car => {
      this.vehicleNames.push({Name : car.make, Visible : false});
    });
  }

  ngOnInit() {
  }

  public getCars(car) {
    if(this.vehicleNames[this.vehilces.indexOf(car)].Visible == false) {
      this.show = true;
      this.vehicleNames[this.vehilces.indexOf(car)].Visible = true;
    } else {
      this.show = false;
      this.vehicleNames[this.vehilces.indexOf(car)].Visible = false;
    }
  }

}

