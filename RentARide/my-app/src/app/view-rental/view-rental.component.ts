import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { DatabaseService } from '../database.service';
import { Reservation } from '../models/reservation';

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
    selectedReservation: Reservation;
    showReservation:boolean = false;

  ngOnInit() {
  }
  getRes(data) {
    this.databaseService.getReservation(data.ReservationNumber).toPromise().then(x => {
      this.selectedReservation = x[0]
      this.showReservation = true;
      
    }
      )

  }

  cancelReservation(data){
    this.databaseService.cancelReservation(data.ReservationNumber).toPromise().then(x => {
      this.showReservation = false    
    })
  }

}
