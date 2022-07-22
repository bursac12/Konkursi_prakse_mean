import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import {UsersService} from '../users.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  private querySubscription;
  savedChanges: boolean = false;


 
  vrsta: String="student";

  username: String;
  password: String;
  password1: String;

  nazivcomp: String;
  adresacomp: String;
  grad: String;
  ime: String;
  prezime: String;
  pib: number;
  brzap: number;
  email: String;
  sajt: String;
  tel: String;
  god: number;
  dipl: boolean = false;
  delatnost: String;
  specijalnost: String;




  constructor(private _route: Router, private _userService: UsersService) { }

  ngOnInit() {
  }


  setUser(){
    this.savedChanges=false;

     const data={
      username:this.username,
      password:this.password,
      password1:this.password1,
      nazivcomp: this.nazivcomp,
      adresacomp: this.adresacomp,
      grad: this.grad,
      ime: this.ime,
      prezime: this.prezime,
      pib: this.pib,
      brzap: this.brzap,
      email: this.email,
      sajt: this.sajt,
      tel: this.tel,
      god: this.god,
      dipl: this.dipl,
      delatnost: this.delatnost,
      specijalnost: this.specijalnost,
      vrsta: this.vrsta

    }


    this.dataLoading = true;
    this.querySubscription = this._userService.setUser(data).subscribe((res) => {
      if (res["errorCode"] > 0) {
          this.error = false;
          this.errorMessage = "";
          this.dataLoading = false;
          this.savedChanges = true;
      } else {
          this.error = true;
          this.errorMessage =res["errorMessage"];
          this.dataLoading = false;
          window.scroll(0,0);
      }
  },
      (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
      },
      () => {
          this.dataLoading = false;
      });
}

}
