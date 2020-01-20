import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Clinic} from '../../model/clinic';
import {ClinicService} from '../../services/clinic.service';
import {AdminClinic} from '../../model/adminClinic';

@Component({
  selector: 'app-add-clinic',
  templateUrl: './add-clinic.component.html',
  styleUrls: ['./add-clinic.component.css']
})
export class AddClinicComponent implements OnInit {

  addClinicForm: FormGroup;
  submitted = false;
  clinic: Clinic;
  displayedColumns: string[] = ['name', 'address', 'description' ];
  dataSource = new MatTableDataSource<Clinic>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  expandedElement: Clinic;
  clinics: Array<Clinic> = new Array<Clinic>();

  constructor(public dialog: MatDialog,
              private formBuilder: FormBuilder,
              private router: Router,
              private clinicService: ClinicService) {

    this.clinics = this.clinicService.getAllClinics();
    this.all();
  }

  address: string;
  name: string;
  description: string;
  grade: string;

  ngOnInit() {
    this.addClinicForm = this.formBuilder.group({

      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      grade: new FormControl('', [Validators.required]),
    });

    this.all();
    this.dataSource.paginator = this.paginator;
  }


  get f() {
    return this.addClinicForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.addClinicForm.invalid) {
      return;
    }

    this.clinic = new Clinic(
      this.f.name.value,
      this.f.address.value,
      this.f.description.value,
      this.f.grade.value,
    );

    this.clinic = new Clinic(this.f.name.value, this.f.address.value, this.f.description.value, this.f.grade.value);

    this.createClinic();
  }

  private createClinic() {
    this.clinicService.newClinic(this.clinic).subscribe(
      data => {
        this.clinicService.addClinic(this.clinic);
        this.router.navigate(['/clinical-centre-admin/home']);
      },
      error => {
        alert('Error registration patient');
        console.log(error);
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  all() {
    this.dataSource = new MatTableDataSource<Clinic>(this.clinicService.getAllClinics());
  }

}
