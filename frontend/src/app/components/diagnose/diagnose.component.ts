import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Diagnose} from '../../model/Diagnose';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {DiagnoseService} from '../../services/diagnose.service';

@Component({
  selector: 'app-diagnose',
  templateUrl: './diagnose.component.html',
  styleUrls: ['./diagnose.component.css']
})
export class DiagnoseComponent implements OnInit {

  addDiagnoseForm: FormGroup;
  submitted = false;
  diagnose: Diagnose;
  displayedColumns = ['id', 'title', 'description'];
  expandedElement: Diagnose;
  dataSource = new MatTableDataSource<Diagnose>();
  diagnoses: Array<Diagnose>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor( private formbuilder: FormBuilder,
               private diagnoseService: DiagnoseService,
               private router: Router,
               ) {
    this.diagnoses = this.diagnoseService.getAllDiagnoses();
    this.all();
  }

  id: number;
  title: string;
  description: string;

  ngOnInit() {
    this.addDiagnoseForm = this.formbuilder.group({
      id: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
    this.all();
    this.dataSource.paginator = this.paginator;
  }

  get f() {
    return this.addDiagnoseForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.addDiagnoseForm.invalid) {
      return;
    }

    this.diagnose = new Diagnose(
      this.f.id.value,
      this.f.title.value,
      this.f.description.value,
    );

    this.diagnose = new Diagnose(this.f.id.value, this.f.title.value, this.f.description.value);

    this.createDiagnose();
  }

  private createDiagnose() {
    this.diagnoseService.newDiagnose(this.diagnose).subscribe(
      data => {
        this.diagnoseService.addDiagnose(this.diagnose);
        this.router.navigate(['/clinical-centre-admin/home']);
      },
      error => {
        alert('Error adding diagnose');
        console.log(error);
      }
    );
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  all() {
    this.dataSource = new MatTableDataSource(this.diagnoseService.getAllDiagnoses());
  }




}
