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
  allLocations:Location[];
  isAddOperation: boolean = true;
  
  ngOnInit() {
    this.initializeVehicleForm()
    this.getAllVehicles()
    this.getAllLocations()
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
    
    
    console.log()
    if (event.value != undefined) {
      this.isAddOperation=false

      this.vehicleForm.patchValue({
        Id:this.selectedVehicle.vehicleId,
        VIN:this.selectedVehicle.vinNumber,
        Make:this.selectedVehicle.make,
        Model:this.selectedVehicle.model,
        Year:this.selectedVehicle.vehicleYear,
        DailyRate:this.selectedVehicle.dailyRate,
        CurrentLocation:this.allLocations[this.selectedVehicle.currentLocation-1],
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
      vehicleId: this.selectedVehicle != undefined ? this.selectedVehicle.vehicleId:-1,
      make: this.vehicleForm.value.Make,
      model: this.vehicleForm.value.Model,
      vehicleYear: this.vehicleForm.value.Year,
      vinNumber: this.vehicleForm.value.VIN,
      dailyRate: this.vehicleForm.value.DailyRate,
      currentLocation: this.vehicleForm.value.CurrentLocation.locationId,
      vehicleType: this.vehicleForm.value.VehicleType,
      fleetStatus: this.vehicleForm.value.FleetStatus,
    }
    
    
    
    return vehicle

    }
  
  invokeAddOrUpdateService(){
    var vehicle = this.createVehicleObjectFromForm()
    if (this.isAddOperation) {
      this.databaseService
      .addVehicle(vehicle)
      .toPromise()
      .then(response => console.log(response)
      )
    } else {
      this.databaseService.updateVehicle(vehicle).toPromise().then(x => console.log(x)
      )
    }
  }
  
  getAllVehicles(){
    this.databaseService.getAllVehicles().toPromise().then(result => this.allVehicles = result);
    }
  getAllLocations(){
    this.databaseService.getLocations().toPromise().then(result => this.allLocations = result)
  }
  }


