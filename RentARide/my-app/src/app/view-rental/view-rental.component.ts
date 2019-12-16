import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-view-rental',
  templateUrl: './view-rental.component.html',
  styleUrls: ['./view-rental.component.css']
})
export class ViewRentalComponent implements OnInit {

  getReservation: FormGroup;

  constructor(private formBuilder: FormBuilder, private databaseService:DatabaseService) {
    this.getReservation = this.formBuilder.group({
      ReservationNumber: new FormControl("")
    })
    }

  ngOnInit() {
  }
  getRes(data) {

    console.log(data.ReservationNumber);
    this.databaseService.getReservation(data.ReservationNumber).toPromise().then(x => console.log(x[0]))
  }

  cancelReservation(){
    console.log("Cancel");
    
  }

}
