import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EspacevendeurService } from 'src/app/services/espacevendeur.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private myServ:EspacevendeurService) { }
  model: any = {};
  alertMessage = '';
  ngOnInit(): void {
  }

  login() {
    this.myServ.login(this.model).subscribe(
      () => {},
      (error) => {
        if (error == 'OK'){
          error = 'Unauthorized.';
        }
        this.alertMessage = error;
      },
      () => {
        this.router.navigate(['']);
      }
    );
  }

  loggedIn() {
    return this.myServ.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  
}
