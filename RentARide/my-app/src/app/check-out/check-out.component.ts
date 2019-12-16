import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  constructor() { }
  checkOutForm: FormGroup;

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(){
    this.checkOutForm = new FormGroup({
      ReservationNumber: new FormControl(''),
      CheckOutTime: new FormControl(''),
      VehicleCondition: new FormControl('')
    })
  }
  checkOut(data) {
    console.log(data.ReservationNumber);
    console.log(data.CheckOutTime);
    console.log(data.VehicleCondition);
  }


}
