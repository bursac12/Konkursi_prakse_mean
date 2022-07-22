import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import {UsersService} from '../users.service';
import {User} from '../user.model';

@Component({
  selector: 'app-lozinka',
  templateUrl: './lozinka.component.html',
  styleUrls: ['./lozinka.component.css']
})
export class LozinkaComponent implements OnInit {

  constructor(private _route: Router, private _userService: UsersService) { }

  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  private querySubscription;
  savedChanges:boolean = false;

  username: String;
  password: String;
  password1: String;





    lozinka():void{
    this.savedChanges=false;
    this.dataLoading = true;
    this.querySubscription = this._userService.lozinka(this.username, this.password, this.password1).subscribe((res) => {
      if (res["errorCode"] > 0) {
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.savedChanges = true;

        this._route.navigate(['/login']);
          
    } else {
        this.error = true;
        this.errorMessage =res["errorMessage"];
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



  ngOnInit() {
  }







  
}
