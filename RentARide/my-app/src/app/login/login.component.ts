import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
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

  @Output() login: EventEmitter<any> = new EventEmitter();
  @Output() logout: EventEmitter<any> = new EventEmitter();


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
    if(this.securityService.isEmployee(this.loginForm.value.username,this.loginForm.value.password))
    { 
      this.isAuthenticatedUser = true
      this.login.emit(null);
    }
    //this.submitToService();
  };
  onLogoutClick(){
    this.isAuthenticatedUser = false
    this.logout.emit(null)
  }

}
//   submitToService() {


// }
