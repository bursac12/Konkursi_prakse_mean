import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import {UsersService} from '../users.service';
import {User} from '../user.model';

@Component({
  selector: 'app-pretraga',
  templateUrl: './pretraga.component.html',
  styleUrls: ['./pretraga.component.css']
})
export class PretragaComponent implements OnInit {

  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  private querySubscription;

  grad:String;
  kompanija:String;
  delatnost:Array<String>=[];

  vrsta:String;
  kompanije: Array<Object>;
  
  constructor(private _route: Router, private _backendService: UsersService) { }

  ngOnInit() {

    
  }


pretraga():void{
this.kompanije=null;

  this.dataLoading = true;
  this.querySubscription = this._backendService.pretraga(this.grad, this.kompanija,this.delatnost).subscribe((res) => {
      if (res["errorCode"] > 0) {
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        
       // window.localStorage.setItem('isDipl', res["data"].isDipl);
        
        
        this.kompanije=res["data"];
        
        
    } else {
        this.error = true;
        this.errorMessage = res["errorMessage"];
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
