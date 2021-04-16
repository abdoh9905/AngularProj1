import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EspaceclientService } from 'src/app/services/espaceclient.service';
import { EspacevendeurService } from 'src/app/services/espacevendeur.service';

@Component({
  selector: 'app-vendeur',
  templateUrl: './vendeur.component.html',
  styleUrls: ['./vendeur.component.css']
})
export class VendeurComponent implements OnInit {
  model: any = {};
  alertMessage = '';
  constructor(private router:Router,private http:EspacevendeurService,private myServ:EspacevendeurService) {
    
   }

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
