import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  constructor() { }
  checkInForm:FormGroup;

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(){
    this.checkInForm = new FormGroup({
      ReservationNumber: new FormControl(''),
      CheckInTime: new FormControl(''),
      VehicleCondition: new FormControl('')
    })
  }
  checkIn(data) {
    console.log(data.ReservationNumber);
    console.log(data.CheckInTime);
    console.log(data.VehicleCondition);
    
  }


}
