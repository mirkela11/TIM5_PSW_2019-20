import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import {DemoMaterialModule} from './material-module';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomePagePatientComponent } from './components/home-page-patient/home-page-patient.component';
import { ClinicsListComponent } from './components/clinics-list-patient/clinics-list.component';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import {HomePageDoctorComponent} from './components/home-page-doctor/home-page-doctor.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { NurseProfileComponent } from './components/nurse-profile/nurse-profile.component';
import { HomePageNurseComponent } from './components/home-page-nurse/home-page-nurse.component';
import { HomePageAdminClinicComponent } from './components/home-page-admin-clinic/home-page-admin-clinic.component';
import { AdminClinicProfileComponent } from './components/admin-clinic-profile/admin-clinic-profile.component';
import { HomePageClinicalCentreAdministratorComponent } from './components/home-page-clinical-centre-administrator/home-page-clinical-centre-administrator.component';
import { HomeComponent } from './components/home/home.component';
import { AddClinicComponent } from './components/add-clinic/add-clinic.component';
import { RegisterRequestsComponent } from './components/register-requests/register-requests.component';
import { MedicalHistoryPatientComponent } from './components/medical-history-patient/medical-history-patient.component';
import { MedicalRecordPatientComponent } from './components/medical-record-patient/medical-record-patient.component';
import {AddClinicAdministratorComponent} from './components/add-clinic-administrator/add-clinic-administrator.component';
import { ClinicSearchDialogComponent } from './components/clinic-search-dialog/clinic-search-dialog.component';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,

    RegistrationComponent,

    HomePagePatientComponent,

    ClinicsListComponent,

    PatientProfileComponent,

    HomePageDoctorComponent,

    DoctorProfileComponent,

    NurseProfileComponent,

    HomePageNurseComponent,

    HomePageAdminClinicComponent,

    AdminClinicProfileComponent,

    HomePageClinicalCentreAdministratorComponent,

    HomeComponent,

    AddClinicComponent,

    RegisterRequestsComponent,

    MedicalHistoryPatientComponent,

    MedicalRecordPatientComponent,

    AddClinicAdministratorComponent,

    ClinicSearchDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    DemoMaterialModule,


  ],
  entryComponents: [
    ClinicSearchDialogComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
