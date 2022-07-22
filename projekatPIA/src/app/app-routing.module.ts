import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { LozinkaComponent } from './lozinka/lozinka.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { KompanijaComponent } from './kompanija/kompanija.component';
import { PretragaComponent } from './pretraga/pretraga.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'lozinka', component: LozinkaComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'student', component: StudentComponent},
  { path: 'kompanija', component: KompanijaComponent},
  { path: 'pretraga', component: PretragaComponent},
  { path: 'home', component: HomeComponent},


];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}