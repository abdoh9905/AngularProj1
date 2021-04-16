import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EspaceclientService } from 'src/app/services/espaceclient.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private myServ:EspaceclientService) { }
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
