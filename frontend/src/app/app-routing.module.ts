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
import {AddClinicAdministratorComponent} from './components/add-clinic-administrator/add-clinic-administrator.component';
import {NurseDatePickerComponent} from './components/nurse-date-picker/nurse-date-picker.component';
import {NurseListPatientComponent} from './components/nurse-list-patient/nurse-list-patient.component';
import {NurseVacationRequestComponent} from './components/nurse-vacation-request/nurse-vacation-request.component';
import {VacationRequestRegisterComponent} from './components/vacation-request-register/vacation-request-register.component';
import {DoctorVacationRequestComponent} from './components/doctor-vacation-request/doctor-vacation-request.component';
import {DoctorMedicalRecordComponent} from './components/doctor-medical-record/doctor-medical-record.component';

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

  {
    path: 'clinical-centre-admin/addAdmins',
    component: AddClinicAdministratorComponent,
  },

  {
    path: 'nurse/WorkCalendar',
    component: NurseDatePickerComponent,
  },

  {
    path: 'nurse/ListOfPatient',
    component: NurseListPatientComponent,
  },
  {
    path: 'nurse/VacationRequest',
    component: NurseVacationRequestComponent,
  },
  {
    path: 'clinical-centre-admin/VacationRequests',
    component: VacationRequestRegisterComponent,
  },
  {
    path: 'doctor/VacationRequest',
    component: DoctorVacationRequestComponent,
  },
  {
    path: 'doctor/MedicalRecord',
    component: DoctorMedicalRecordComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
