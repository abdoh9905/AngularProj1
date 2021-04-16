import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class EspacevendeurService {

  jwtHelper = new JwtHelperService();
  decodeToken: any;
  urlApi = "http://localhost:";
  constructor(private http:HttpClient) { }

  SignIn(vendeurs){
    //return this.http.post<>(this.urlApi,vendeurs);
  }

  
  login(model: any) {
    return this.http.post(this.urlApi + "login", model).pipe(
      map((response: any) => {
        const recruiter = response;
        if (recruiter) {
          localStorage.setItem("token", recruiter.token);
          this.decodeToken = this.jwtHelper.decodeToken(recruiter.token);
          console.log(this.decodeToken);
        }
      })
    );
  }
  loggedIn() {
    const token = localStorage.getItem("token")!;
    return !this.jwtHelper.isTokenExpired(token);
  }
}
