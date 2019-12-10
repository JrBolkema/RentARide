import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DatabaseService } from '../database.service';
import { Vehicle } from '../models/vehicles';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.css']
})
export class FleetComponent implements OnInit {

  constructor(private databaseService:DatabaseService) { }
  selectedVehicle:Vehicle;
  vehicleForm:FormGroup;
  allVehicles:Vehicle[];
  isAddOperation: boolean = true;
  
  ngOnInit() {
    this.initializeVehicleForm()
    this.getAllVehicles()
  }

  initializeVehicleForm() {
    this.vehicleForm = new FormGroup({
      ID: new FormControl(''),
      VIN: new FormControl(''),
      Make: new FormControl(''),
      Model: new FormControl(''),
      Year: new FormControl(''),
      DailyRate: new FormControl(''),
      CurrentLocation: new FormControl(''),
      VehicleType: new FormControl(''),
      FleetStatus: new FormControl(''),
    });

  }
  selectedVehicleChanged(event){
    this.selectedVehicle = event.value    
    if (event.value != undefined) {
      this.isAddOperation=false

      this.vehicleForm.patchValue({
        Id:this.selectedVehicle.vehicleId,
        VIN:this.selectedVehicle.vinNumber,
        Make:this.selectedVehicle.make,
        Model:this.selectedVehicle.model,
        Year:this.selectedVehicle.vehicleYear,
        DailyRate:this.selectedVehicle.dailyRate,
        CurrentLocation:this.selectedVehicle.currentLocation,
        VehicleType:this.selectedVehicle.vehicleType,
        FleetStatus:this.selectedVehicle.fleetStatus,
      })
    } else {
      this.selectedVehicle=null
      this.isAddOperation=true
      this.vehicleForm.reset()
    }
    
  }
  
  createVehicleObjectFromForm():Vehicle{
    var vehicle: Vehicle = {
      vehicleId: this.selectedVehicle != undefined ? this.selectedVehicle.vehicleId:null,
      make: this.vehicleForm.value.Make,
      model: this.vehicleForm.value.Model,
      vehicleYear: this.vehicleForm.value.Year,
      vinNumber: this.vehicleForm.value.VIN,
      dailyRate: this.vehicleForm.value.CurrentLocation,
      currentLocation: this.vehicleForm.value.CurrentLocation,
      vehicleType: this.vehicleForm.value.VehicleType,
      fleetStatus: this.vehicleForm.value.FleetStatus,
    }
    console.log(vehicle);
    
    return vehicle

    }
  
  invokeAddOrUpdateService(){
    var vehicle = this.createVehicleObjectFromForm()
    if (this.isAddOperation) {
      this.databaseService.addVehicle(vehicle)
    } else {
      this.databaseService.updateVehicle(vehicle)
    }
  }
  
  getAllVehicles(){
    this.databaseService.getAllVehicles().toPromise().then(result => this.allVehicles = result);
    }
  }


