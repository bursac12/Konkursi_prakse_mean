import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import {UsersService} from '../users.service';
import {User} from '../user.model';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})





export class StudentComponent implements OnInit {


  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  private querySubscription;
  savedChanges:boolean = false;

  konkurs:String;
  kompanija:String;
  delatnost:Array<String>=[];

  vrsta:String;
  kompanije: Array<Object>;
  kompanije1: Array<Object>;
  prikaz:boolean =false;
  pr=null;
  
  constructor(private _route: Router, private _usersService: UsersService) { }

  ngOnInit() {

    
  }


prijava(own,id){

var data={
owner:own,
idkonkurs:id,
username: window.localStorage.getItem("user"),

}
this.savedChanges=false;
this.pr=data;



this.querySubscription = this._usersService.prijava(data).subscribe((res) => {
  if (res["errorCode"] > 0) {
    this.error = false;
    this.errorMessage = "";
    this.dataLoading = false;
    this.savedChanges=true;
   // window.localStorage.setItem('isDipl', res["data"].isDipl);
   window.scroll(0,0);
    
    //this.kompanije=res["data"];

    
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

pretragacomp():void{
this.kompanije=null;
this.kompanije1=null;
this.prikaz=false;


if (this.kompanija!=null  && this.kompanija!=""){
  this.querySubscription = this._usersService.pretraga1("", this.kompanija,"").subscribe((res) => {
    if (res["errorCode"] > 0) {
      this.error = false;
      this.errorMessage = "";
      this.dataLoading = false;
      
     // window.localStorage.setItem('isDipl', res["data"].isDipl);
      
      
      this.kompanije1=res["data"];
      this.prikaz=true;
      
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






  this.dataLoading = true;
  this.querySubscription = this._usersService.pretragacomp(this.konkurs, this.kompanija,this.delatnost).subscribe((res) => {
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

        




