import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-rental',
  templateUrl: './view-rental.component.html',
  styleUrls: ['./view-rental.component.css']
})
export class ViewRentalComponent implements OnInit {

  getReservation: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.getReservation = this.formBuilder.group({
      ReservationNumber: new FormControl("")
    })
    }

  ngOnInit() {
  }
  getRes(data) {

    console.log(data.ReservationNumber);

  }

}
