import { Component, OnInit } from '@angular/core';
import { DatabaseConnectionService } from "../database-connection.service";

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {

  constructor(private databaseService:DatabaseConnectionService) {
    
   }

  ngOnInit() {
    var num = this.databaseService.getVehicleById(1230)
    console.log(num)
  }

}
