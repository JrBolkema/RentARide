import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { DatabaseService } from '../database.service';
import { checkInAndOut } from '../models/checkIn';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  constructor(private databaseService:DatabaseService) { }
  checkInForm:FormGroup;
  allLocations:Location[];


  ngOnInit() {
    this.initializeForm();
    this.getAllLocations();
  }

  initializeForm(){
    this.checkInForm = new FormGroup({
      ReservationNumber: new FormControl(''),
      CheckInTime: new FormControl(''),
      CurrentLocation: new FormControl(''),
      VehicleCondition: new FormControl('')
    })
  }
  checkIn(data) {
    
    
    var checkIn: checkInAndOut = {
      confirmationCode: data.ReservationNumber,
      returnedLocationId: data.CurrentLocation.locationId,
      vehicleCondition: data.VehicleCondition,
      actualCheckIn:data.CheckInTime,
    }

    this.databaseService.checkIn(checkIn).toPromise().then(result => console.log("success"))

  }

  getAllLocations(){
    this.databaseService.getLocations().toPromise().then(result => this.allLocations = result)
  }


}
