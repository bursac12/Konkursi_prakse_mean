import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import {UsersService} from '../users.service';
import { getLocaleDateTimeFormat, Time } from '@angular/common';

@Component({
  selector: 'app-kompanija',
  templateUrl: './kompanija.component.html',
  styleUrls: ['./kompanija.component.css']
})


export class KompanijaComponent implements OnInit {

  constructor(private _route: Router, private _userService: UsersService) { }

  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  private querySubscription;
  savedChanges: boolean = false;


  rokd:Date;
  rokt:Time;
  rok:String;
  vrsta:String="Praksa";
  naziv:String;
  tekst:String;

  



  ngOnInit() {

  }

dodaj(){
  this.rok=""+this.rokd +" "+ this.rokt;
  this.savedChanges=false;

  const data={
   naziv:this.naziv,
   tekst:this.tekst,
   rok:this.rok,
   vrsta: this.vrsta,
   nazivcomp: window.localStorage.getItem('nazivcomp')

 }


 this.dataLoading = true;
 this.querySubscription = this._userService.dodajk(data).subscribe((res) => {
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
