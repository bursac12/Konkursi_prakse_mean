import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

//import { LoginComponent } from '../login/login.component';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  uri='http://localhost:4000'

  constructor(private http: HttpClient) { }

  login(username, password){
    const data = {
      username: username,
      password: password
    };

  let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
  let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
  return this.http.post("http://localhost:4000/login",data, httpOptions);
  }

  setUser(data){   
  let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
  let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
  return this.http.post("http://localhost:4000/signup", data, httpOptions);
  }


  dodajk(data){   
    return this.http.post("http://localhost:4000/kompanija/dodaj", data);
    }

  lozinka(username, password, password1){
    const data = {
      username: username,
      password: password,
      password1: password1
    };

   return this.http.post("http://localhost:4000/lozinka",data);
  }



  pretraga(grad,kompanija,delatnost){
    const data = {
      grad: grad,
      kompanija: kompanija,
      delatnost: delatnost
    };
  return this.http.post("http://localhost:4000/pretraga",data);
  }


  pretragacomp(konkurs,kompanija,delatnost){
    const data = {
      konkurs: konkurs,
      kompanija: kompanija,
      delatnost: delatnost
    };  
  return this.http.post("http://localhost:4000/student",data);
  }

  pretraga1(konkurs,kompanija,delatnost){
    const data = {
      konkurs: konkurs,
      kompanija: kompanija,
      delatnost: delatnost
    };  
  return this.http.post("http://localhost:4000/student/kompanije",data);
  }

  prijava(data){    
  return this.http.post("http://localhost:4000/student/prijava",data);
  }



}
