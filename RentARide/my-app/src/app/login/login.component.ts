import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor() { }

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
    // Process checkout data here
    
    console.warn('Your order has been submitted');
    this.submitToService();
  }

  submitToService() {
    console.log(this.loginForm)
    console.log(this.loginForm.value.username)
    console.log(this.loginForm.value.password)
  }

}
