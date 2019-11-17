import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private httpClient: HttpClient) { }

  isEmployee(username: string, password: string) 
  {
    var formattedUrl = `${environment.login}?username=${username}&password=${password}`
    return this.httpClient.get<boolean>(formattedUrl);

  }
}
