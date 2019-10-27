import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http";
import { Vehicle } from "./models/Vehicle";
import { isProtractorLocator } from 'protractor/built/locators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseConnectionService {

  constructor() { }

  public getVehicleById(id:number) : number
  {
      return id

  }

}

