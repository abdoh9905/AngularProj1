import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EspaceclientService } from 'src/app/services/espaceclient.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  myClients:any=[];
  myclients:any={
    id:'',
    name:'',
    email:'',
    password:''
  }

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4),
    
  ]);

  passFormControl = new FormControl("", [
    Validators.required,
    
    Validators.minLength(8)
  ]);
  constructor(private http:EspaceclientService,private myServ:EspaceclientService) { }

  ngOnInit(): void {
  }
  register() {
  //this.http.SignIn("http://localhost:3000/sendmail", user).subscribe(
    //data => {
      //let res:any = data; 
   // }
  //);
}

viderCases(){
  this.myclients = {
    name:"",
    email:'',
    password:''
  }
}

}
