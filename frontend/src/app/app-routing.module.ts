import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {HomePagePatientComponent} from './components/home-page-patient/home-page-patient.component';
import {ClinicsListComponent} from './components/clinics-list/clinics-list.component';
import {PatientProfileComponent} from './components/patient-profile/patient-profile.component';
import {HomePageDoctorComponent} from './components/home-page-doctor/home-page-doctor.component';
import {DoctorProfileComponent} from "./components/doctor-profile/doctor-profile.component";
import {HomePageNurseComponent} from './components/home-page-nurse/home-page-nurse.component';
import {NurseProfileComponent} from './components/nurse-profile/nurse-profile.component';
import {HomePageClinicalCentreAdministratorComponent} from './components/home-page-clinical-centre-administrator/home-page-clinical-centre-administrator.component';
import {HomeComponent} from './components/home/home.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'patient/register',
    component: RegistrationComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'patient/home',
    component: HomePagePatientComponent,
  },
  {
    path: 'patient/clinics',
    component: ClinicsListComponent,
  },
  {
    path: 'patient/profile',
    component: PatientProfileComponent,
  },
  {
    path: 'doctor/home',
    component: HomePageDoctorComponent,
  },
  {
    path: 'doctor/profile',
    component: DoctorProfileComponent,
  },
  {
    path: 'nurse/home',
    component: HomePageNurseComponent,
  },
  {
    path: 'nurse/profile',
    component: NurseProfileComponent,
  },
  {
    path: 'clinical-centre-admin/home',
    component: HomePageClinicalCentreAdministratorComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
