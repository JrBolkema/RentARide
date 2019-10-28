import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { vehicles } from '../vehicles';
import { DatabaseService } from '../database.service';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //vehilces = vehicles;
  vehilces = [];
  vehicleNames = [];
  show = false;
  

  constructor(private databaseService:DatabaseService
    ) {
    
  }

  ngOnInit() {
    
    
    this.databaseService.getAllVehicles().toPromise().then(
      result => {
        result.forEach(car => {
          this.vehicleNames.push({Name : car.make, Visible : false});
          this.vehilces.push({car})
          console.log(car);
          
        });
        this.show = true;
      });
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

