import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor() { }

  isEmployee(username: string, password: string) : boolean
  {
    var validUsername = "jon";
    var validPassword = '1234';

    if (username === validUsername && password === validPassword) {
      return true
    } else {
      return false
    }
    
  }
}
