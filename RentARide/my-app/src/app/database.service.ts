import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from './models/vehicles';
import { ThrowStmt } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private httpClient: HttpClient) { }
  
  public getAllVehicles() {
    return this.httpClient.get<Vehicle[]>(environment.getAllVehicles);
    
  }
}
