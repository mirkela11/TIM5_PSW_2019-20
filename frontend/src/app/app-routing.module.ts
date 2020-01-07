import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {HomePagePatientComponent} from './components/home-page-patient/home-page-patient.component';
import {ClinicsListComponent} from './components/clinics-list-patient/clinics-list.component';
import {PatientProfileComponent} from './components/patient-profile/patient-profile.component';
import {HomePageDoctorComponent} from './components/home-page-doctor/home-page-doctor.component';
import {DoctorProfileComponent} from './components/doctor-profile/doctor-profile.component';
import {HomePageNurseComponent} from './components/home-page-nurse/home-page-nurse.component';
import {NurseProfileComponent} from './components/nurse-profile/nurse-profile.component';
import {HomePageAdminClinicComponent} from './components/home-page-admin-clinic/home-page-admin-clinic.component';
import {AdminClinicProfileComponent} from './components/admin-clinic-profile/admin-clinic-profile.component';
import {HomePageClinicalCentreAdministratorComponent} from './components/home-page-clinical-centre-administrator/home-page-clinical-centre-administrator.component';
import {HomeComponent} from './components/home/home.component';
import {AppComponent} from './app.component';
import {AddClinicComponent} from './components/add-clinic/add-clinic.component';
import {RegisterRequestsComponent} from './components/register-requests/register-requests.component';
import {MedicalHistoryPatientComponent} from './components/medical-history-patient/medical-history-patient.component';
import {MedicalRecordPatientComponent} from './components/medical-record-patient/medical-record-patient.component';

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
    path: 'patient/medicalHistory',
    component: MedicalHistoryPatientComponent,
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
    path: 'patient/medicalRecord',
    component: MedicalRecordPatientComponent,
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
    path: 'admin_clinic/home',
    component: HomePageAdminClinicComponent,
  },
  {
    path: 'admin_clinic/profile',
    component: AdminClinicProfileComponent,
  },
  {
    path: 'clinical-centre-admin/home',
    component: HomePageClinicalCentreAdministratorComponent,
  },
  {
    path: 'clinical-centre-admin/addClinic',
    component: AddClinicComponent,
  },
  {
    path: 'clinical-centre-admin/requests',
    component: RegisterRequestsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
