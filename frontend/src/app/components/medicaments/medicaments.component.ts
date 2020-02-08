import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Nurse} from '../../model/nurse';
import {User} from '../../model/user';
import {Router} from '@angular/router';
import {NurseServiceService} from '../../services/nurse-service.service';
import {UserServiceService} from '../../services/user-service.service';
import {Role} from '../../model/role';
import {Medicaments} from '../../model/Medicaments';
import {MedicamentsService} from '../../services/medicaments.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Clinic} from '../../model/clinic';

@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styleUrls: ['./medicaments.component.css']
})
export class MedicamentsComponent implements OnInit {

  addMedicamentForm: FormGroup;
  submitted = false;
  medicaments: Array<Medicaments> = new Array<Medicaments>();
  medicament: Medicaments;
  dataSource = new MatTableDataSource<Medicaments>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns = ['id', 'title', 'description', 'strenght'];

  constructor(private formBuilder: FormBuilder, private router: Router, private medicamentService: MedicamentsService,
              private  userService: UserServiceService) {

    this.medicaments = this.medicamentService.getAllMedicaments();
    this.all();
  }

  ngOnInit() {
    this.addMedicamentForm = this.formBuilder.group({

      id: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      strenght: new FormControl('', [Validators.required]),
    });

    this.all();
    this.dataSource.paginator = this.paginator;
  }

  get f() {
    return this.addMedicamentForm.controls;
  }


  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.addMedicamentForm.invalid) {
      return;
    }

    this.medicament = new Medicaments(
      this.f.id.value,
      this.f.title.value,
      this.f.description.value,
      this.f.strenght.value,
    );

    this.medicament = new Medicaments(this.f.id.value,
      this.f.title.value,
      this.f.description.value,
      this.f.strenght.value);
    this.createMedicament();
  }

  private createMedicament() {
    this.medicamentService.newMedicament(this.medicament).subscribe(
      data => {
        this.medicamentService.addMedicament(this.medicament);
        this.router.navigate(['/clinical-centre-admin/home']);
      },
      error => {
        alert('Error adding medicament');
        console.log(error);
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  all() {
    this.dataSource = new MatTableDataSource<Medicaments>(this.medicamentService.getAllMedicaments());
  }
}
