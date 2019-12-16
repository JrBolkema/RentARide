import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { checkInAndOut } from '../models/checkIn';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  constructor(private databaseService:DatabaseService) { }
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
    var checkOut: checkInAndOut = {
      confirmationCode: data.ReservationNumber,
      vehicleCondition: data.VehicleCondition,
      actualCheckOut:data.CheckOutTime,
    }
    
    

    this.databaseService.checkOut(checkOut).toPromise().then(result => console.log("success"))

  }


}
