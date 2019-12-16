import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Reservation } from '../models/reservation';
import { DatabaseService } from '../database.service';


@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  formdata;
  pickUpDate;
  dropOffDate;

  proc1 = false;
  proc2 = false;
  view = false;
  reservationNumberView = false;

  procedureOneForm: FormGroup;
  viewVehiclesForm: FormGroup;
  procTwoForm: FormGroup;

  locations: Location[];
  public reservation: Reservation;
  confNum;

  avaliableVehicles;

  constructor(private formBuilder: FormBuilder,private databaseService:DatabaseService) {
    this.proc1 = true;

    this.reservation = new Reservation();
  }

  ngOnInit() {
    this.getLocation()
    this.procedureOneForm = this.formBuilder.group({
      location: new FormControl("", Validators.compose([
        Validators.required
      ])),
      pickUpDate: new FormControl("", Validators.compose([
        Validators.required
      ])),
      dropOffDate: new FormControl("", Validators.compose([
        Validators.required
      ]))
    })

    this.procTwoForm = this.formBuilder.group({
      name: new FormControl("", Validators.compose([
        Validators.required
      ])),
      creditCard: new FormControl("", Validators.compose([
        Validators.required
      ])),
      cvc: new FormControl("", Validators.compose([
        Validators.required
      ])),
    })

  }

  getLocation() {
    // Call out for all the locations in the database, return list of locations
    this.databaseService.getLocations().toPromise().then(result => this.locations = result)
  }

  getAvaliableVehicles(data) {
    this.proc1 = false;
    this.view = true;

    this.reservation.locationId = data.location;
    this.reservation.pickUp = data.pickUpDate;
    this.reservation.dropOff = data.dropOffDate;

    this.viewVehiclesForm = this.formBuilder.group({
      carId: new FormControl("")
    })
    // Avaliable vehicles need to be put into array
    this.avaliableVehicles = [{
      Name: "Car1",
      Id: 1
    },
    {
      Name: "Car2",
      Id: 2
    },
    {
      Name: "Car3",
      Id: 3
    }
    ];
    // Run Procedure 1 and return vehicle data
  }
  // Gives car id
  selectCar(event) {
    this.view = false;
    this.proc2 = true;

    this.reservation.carId = event.target.id;
  }
  // Gives name, car id, credit card, and cvc
  createReservation(data) {
    this.proc2 = false;
    this.reservationNumberView = true;

    this.reservation.name = data.value.name;
    this.reservation.creditCard = data.value.creditCard;
    this.reservation.CVC = data.value.cvc;

    console.log(data);

    console.log(this.reservation);

    this.confNum = "Confirmation Code here"
  }

}

