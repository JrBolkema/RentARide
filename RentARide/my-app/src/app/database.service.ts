import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from './models/vehicles';
import { ThrowStmt } from '@angular/compiler';
import { HttpHeaders } from '@angular/common/http';
import { Reservation } from './models/reservation';

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

  addVehicle(newVehicle:Vehicle) : Observable<Vehicle>{       
    return this.httpClient.post<Vehicle>(environment.Vehicles,newVehicle)
  
  }

  updateVehicle(updatedVehicle:Vehicle): Observable<Vehicle>{  
    var formattedUrl = `${environment.Vehicles}/${updatedVehicle.vehicleId}`
    return this.httpClient.put<Vehicle>(formattedUrl,updatedVehicle)
  }

  getLocations(): Observable<Location[]>{
    return this.httpClient.get<Location[]>(`${environment.Reservations}/locations`)
  }
  getReservation(confirmationCode: string): Observable<Reservation>{
    return this.httpClient.get<Reservation>(`${environment.Reservations}/${confirmationCode}`)
  }
}