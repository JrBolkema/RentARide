import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from './models/vehicles';
import { ThrowStmt } from '@angular/compiler';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private httpClient: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  
  
  public getAllVehicles() :Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(environment.Vehicles);
  }

  addVehicle(newVehicle:Vehicle){
    return this.httpClient.post<Vehicle>(environment.Vehicles,newVehicle).subscribe(
      response => console.log(response),
      err => console.log(err)
    )
  }

  updateVehicle(updatedVehicle:Vehicle){
    var formattedUrl = `${environment.Vehicles}/${updatedVehicle.vehicleId}`
    return this.httpClient.put<Vehicle>(environment.Vehicles,updatedVehicle).subscribe(
      response => console.log(response),
      err => console.log(err)
    )
  }
}
