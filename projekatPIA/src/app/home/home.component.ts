import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import {UsersService} from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private _route: Router, private _backendService: UsersService) { }

  ngOnInit() {
    
    if (window.localStorage.getItem("isAdmin") == "0" && window.localStorage.getItem("isComp") == "0") this._route.navigate(['/student']);
    else
    if (window.localStorage.getItem("isAdmin") == "1") this._route.navigate(['/admin']);
    else    
    if (window.localStorage.getItem("isComp") == "1") this._route.navigate(['/kompanija']);
    else
    this._route.navigate(['/login']);
  }

}
