import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import {UsersService} from '../users.service';
import {User} from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  private querySubscription;


  constructor(private _route: Router, private _backendService: UsersService) { }

  ngOnInit() {
    
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("isAdmin");
    window.localStorage.removeItem("isComp");
    window.localStorage.removeItem("nazivcomp");
  }

  login():void{
    this.dataLoading = true;
    this.querySubscription = this._backendService.login(this.username, this.password).subscribe((res) => {
        if (res["errorCode"] > 0) {
          this.error = false;
          this.errorMessage = "";
          this.dataLoading = false;
          window.localStorage.setItem('user', res["data"].token);
         // window.localStorage.setItem('isDipl', res["data"].isDipl);
          window.localStorage.setItem('isAdmin', res["data"].isAdmin);
          window.localStorage.setItem('isComp', res["data"].isComp);

          if (res["data"].isDipl==1) this._route.navigate(['/student']);
          if (res["data"].isDipl==0 && res["data"].isAdmin==0 && res["data"].isComp==0) this._route.navigate(['/student']);
          if (res["data"].isAdmin==1) this._route.navigate(['/admin']);
          if (res["data"].isComp==1) {
            this._route.navigate(['/kompanija']);
            window.localStorage.setItem('nazivcomp', res["data"].nazivcomp);
          }
          
      } else {
          this.error = true;
          this.errorMessage = res["errorMessage"];
          this.dataLoading = false;
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




