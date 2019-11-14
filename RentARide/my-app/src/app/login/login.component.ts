import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SecurityService } from "../security.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;
  isAuthenticatedUser: boolean = false

  constructor(private securityService: SecurityService) { }

  ngOnInit() {
    this.initializeLoginForm()
  }

  initializeLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });

  }


  onSubmit() {
    window.alert(`Username: ${this.loginForm.value.username} Password: ${this.loginForm.value.password}`)
    if(this.securityService.isEmployee(this.loginForm.value.username,this.loginForm.value.password))
    { 
      window.alert("true")
      this.isAuthenticatedUser = true
    }
    //this.submitToService();
  };
  onLogoutClick(){
    this.isAuthenticatedUser = false
  }

}
//   submitToService() {


// }
