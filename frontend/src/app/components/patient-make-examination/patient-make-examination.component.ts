import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Doctor} from '../../model/doctor';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DoctorService} from '../../services/doctor.service';
import {ExaminationService} from '../../services/examination.service';
import {Patient} from '../../model/patient';
import {PatientService} from '../../services/patient.service';
import {User} from '../../model/user';
import {UserServiceService} from '../../services/user-service.service';
import {ClinicService} from '../../services/clinic.service';
import {Clinic} from '../../model/clinic';

@Component({
  selector: 'app-patient-make-examination',
  templateUrl: './patient-make-examination.component.html',
  styleUrls: ['./patient-make-examination.component.css']
})
export class PatientMakeExaminationComponent implements OnInit {

  MakeGroup: FormGroup;
  termins: Array<string> = new Array<string>();
  kinds: Array<string> = new Array<string>();
  doctor: Doctor;
  date: string;
  user: User;
  clinic: Clinic;
  type: string;
  k = 'Examination';
  k1 = 'Operation';

  constructor(private dialogRef: MatDialogRef<PatientMakeExaminationComponent>,
              private doctorService: DoctorService,
              private clinicService: ClinicService,
              private formBuilder: FormBuilder,
              private examinationServce: ExaminationService,
              private userService: UserServiceService,
              @Inject(MAT_DIALOG_DATA) data) {
      this.doctor = doctorService.getDoctorForMake();
      this.date = doctorService.getDate();
      this.termins = doctorService.getDoctorsTermins(this.date, this.doctor.email);
      this.user = userService.getLoggedUser();
      this.type = clinicService.getType();
      this.clinic = clinicService.getClinicForExamination();
      this.kinds = new Array<string>();
      this.kinds.push(this.k);
      this.kinds.push(this.k1);
  }

  ngOnInit() {
    this.MakeGroup = this.formBuilder.group({
      terminTime: new FormControl(''),
      kind: new FormControl('')
    });
  }


  get f() {
    return this.MakeGroup.controls;
  }

  save() {
    if (this.MakeGroup.invalid) {
      return;
    }

    const kindTest = this.f.kind.value;
    console.log('KIND ISPOD');
    console.log(kindTest);
    const interval = this.f.terminTime.value;
    this.examinationServce.makeExamination(interval, this.user.email, this.doctor.email, this.type, this.clinic.id.toString(), kindTest).subscribe(data => {
      this.dialogRef.close();
    }, error => {
      console.log(error);
    });
  }
  close() {
    this.dialogRef.close();
  }

}
