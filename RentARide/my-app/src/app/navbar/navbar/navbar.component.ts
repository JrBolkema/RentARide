import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuthenticatedUser:boolean = false;


  constructor() { }

  ngOnInit() {
  }
  TriggerLogIn()
  {
    this.isAuthenticatedUser = true
  }

  TriggerLogOut()
  {
    this.isAuthenticatedUser = false;

  }
}
