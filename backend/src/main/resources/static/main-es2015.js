(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n               [mode]=\"(isHandset$ | async) ? 'over' : 'side'\" [opened]=\"(isHandset$ | async) === true\">\r\n\r\n    <mat-toolbar color=\"accent\">Menu</mat-toolbar>\r\n    <mat-nav-list *ngIf = \"isNone()\">\r\n      <a mat-list-item routerLink=\"/login\">Login</a>\r\n      <a mat-list-item routerLink=\"/patient/register\">Register</a>\r\n    </mat-nav-list>\r\n\r\n    <mat-nav-list *ngIf=\"isPatient()\">\r\n      <a mat-list-item routerLink=\"/patient/profile\">Profile</a>\r\n      <a mat-list-item routerLink=\"/patient/medicalRecord\">Medical record</a>\r\n      <a mat-list-item routerLink=\"/patient/medicalHistory\">Medical history</a>\r\n      <a mat-list-item routerLink=\"/patient/clinics\">Clinics</a>\r\n      <a mat-list-item (click)=\"onLogout()\">Logout</a>\r\n    </mat-nav-list>\r\n\r\n    <mat-nav-list *ngIf=\"isDoctor()\">\r\n      <a mat-list-item routerLink=\"/doctor/list_of_patients\">List of patients</a>\r\n      <a mat-list-item routerLink=\"/doctor/exemination\">Exemination</a>\r\n      <a mat-list-item routerLink=\"/doctor/work_calendar\">Work calendar</a>\r\n      <a mat-list-item routerLink=\"/doctor/requests\">Requests</a>\r\n      <a mat-list-item routerLink=\"/doctor/operations\">Operations</a>\r\n      <a mat-list-item routerLink=\"/doctor/profile\">Profile</a>\r\n      <a mat-list-item routerLink=\"/doctor/VacationRequest\">VacationRequest</a>\r\n      <a mat-list-item routerLink=\"/doctor/MedicalRecord\">MedicalRecords</a>\r\n      <a mat-list-item (click)=\"onLogout()\">Logout</a>\r\n    </mat-nav-list>\r\n\r\n    <mat-nav-list *ngIf=\"isClinicAdmin()\">\r\n      <a mat-list-item routerLink=\"/admin_clinic/profile\">Profile</a>\r\n      <a mat-list-item (click)=\"onLogout()\">Logout</a>\r\n    </mat-nav-list>\r\n\r\n    <mat-nav-list *ngIf=\"isNurse()\">\r\n      <a mat-list-item routerLink=\"/nurse/profile\">Profile</a>\r\n      <a mat-list-item routerLink=\"/nurse/ListOfPatient\">List Of Patients</a>\r\n      <a mat-list-item routerLink=\"/nurse/WorkCalendar\">WorkCalendar</a>\r\n      <a mat-list-item routerLink=\"/nurse/VacationRequest\">Vacation requests</a>\r\n      <a mat-list-item (click)=\"onLogout()\">Logout</a>\r\n    </mat-nav-list>\r\n\r\n    <mat-nav-list *ngIf=\"isClinicalCentreAdmin()\">\r\n      <a mat-list-item routerLink=\"/clinical-centre-admin/profile\">Profile</a>\r\n      <a mat-list-item routerLink=\"/clinical-centre-admin/addClinic\">Add Clinic</a>\r\n      <a mat-list-item routerLink=\"/clinical-centre-admin/addAdmins\">Add Administrator</a>\r\n      <a mat-list-item routerLink=\"/clinical-centre-admin/requests\">Requests</a>\r\n      <a mat-list-item routerLink=\"/clinical-centre-admin/VacationRequests\">Vacation Requests</a>\r\n\r\n      <a mat-list-item (click)=\"onLogout()\">Logout</a>\r\n    </mat-nav-list>\r\n\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar color=\"accent\">\r\n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n      <span>Clinical Centre</span>\r\n    </mat-toolbar>\r\n    <!-- Add Content Here -->\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/activated-account-patient/activated-account-patient.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/activated-account-patient/activated-account-patient.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"success\" class=\"main-content\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 offset-md-2\">\n        <mat-card>\n          <h3>Account activated successfully!</h3>\n          <hr>\n          <p>Success! Your account is now active.</p>\n          <p>Login page <span><a\n            routerLink=\"/login\">this link</a></span></p>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-clinic-administrator/add-clinic-administrator.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-clinic-administrator/add-clinic-administrator.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 offset-md-2\">\r\n        <mat-card>\r\n          <h3>Profile</h3>\r\n          <hr>\r\n          <form [formGroup]=\"addClinicAdministratorForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n            <div class=\"form-group\">\r\n              <mat-label for=\"email\">Email</mat-label>\r\n              <input type=\"email\"  id=\"email\" formControlName=\"email\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && addClinicAdministratorForm.get('email').errors }\">\r\n\r\n              <div *ngIf=\"submitted && addClinicAdministratorForm.get('email').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"addClinicAdministratorForm.get('email').errors['required']\">Email is required</div>\r\n                <div *ngIf=\"addClinicAdministratorForm.get('email').errors['email']\">Email must be a valid email address</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">Password</label>\r\n              <input type=\"text\" id=\"password\" formControlName=\"password\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && addClinicAdministratorForm.get('password').errors }\">\r\n              <div *ngIf=\"submitted && addClinicAdministratorForm.get('password').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"addClinicAdministratorForm.get('password').errors['required']\">Password is required</div>\r\n                <div *ngIf=\"addClinicAdministratorForm.get('password').errors['minlength']\">Password must be at least 8 characters\r\n                  long</div>\r\n                <div *ngIf=\"addClinicAdministratorForm.get('password').errors['pattern']\">Password must contain at least 1 lowercase,\r\n                  1 uppercase letter\r\n                  and 1 number</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">First Name</label>\r\n              <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && addClinicAdministratorForm.get('name').errors }\" />\r\n              <div *ngIf=\"submitted && addClinicAdministratorForm.get('name').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\" addClinicAdministratorForm.get('name').errors['required']\">First Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"surname\">Last Name</label>\r\n              <input type=\"text\" id=\"surname\" formControlName=\"surname\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && addClinicAdministratorForm.get('surname').errors }\" />\r\n              <div *ngIf=\"submitted && addClinicAdministratorForm.get('surname').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"addClinicAdministratorForm.get('surname').errors['required']\">Last Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"number\">Phone Number</label>\r\n              <input type=\"number\" id=\"number\" formControlName=\"number\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && addClinicAdministratorForm.get('number').errors }\" />\r\n              <div *ngIf=\"submitted && addClinicAdministratorForm.get('number').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"addClinicAdministratorForm.get('number').errors['required']\">Phone Number is required</div>\r\n                <div *ngIf=\"addClinicAdministratorForm.get('number').errors['minlength']\">A phone number must have at least 9\r\n                  digits\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <button mat-raised-button color=\"primary\" class=\"pull-right\">Save</button>\r\n\r\n          </form>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<mat-form-field>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n<table mat-table\r\n       [dataSource]=\"dataSource\" multiTemplateDataRows\r\n       class=\"mat-elevation-z8\">\r\n  <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of displayedColumns\">\r\n    <th mat-header-cell *matHeaderCellDef> {{column}} </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\"></tr>\r\n</table>\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-clinic/add-clinic.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-clinic/add-clinic.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 offset-md-2\">\r\n        <mat-card>\r\n          <h3>Add Clinic</h3>\r\n          <hr>\r\n          <form [formGroup]=\"addClinicForm\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Name</label>\r\n              <input type=\"name\" id=\"name\" formControlName=\"name\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && addClinicForm.get('name').errors }\">\r\n\r\n              <div *ngIf=\"submitted && addClinicForm.get('name').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"addClinicForm.get('name').errors['required']\">Email is required</div>\r\n                <div *ngIf=\"addClinicForm.get('name').errors['name']\">Email must be a valid email address</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"address\">Address</label>\r\n              <input type=\"text\" id=\"address\" formControlName=\"address\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && addClinicForm.get('address').errors }\" />\r\n              <div *ngIf=\"submitted && addClinicForm.get('address').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"addClinicForm.get('address').errors['required']\">Address is required</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"description\">Description</label>\r\n              <input type=\"text\" id=\"description\" formControlName=\"description\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && addClinicForm.get('description').errors }\" />\r\n              <div *ngIf=\"submitted && addClinicForm.get('description').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"addClinicForm.get('description').errors['required']\">Country is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"grade\">Grade</label>\r\n              <input type=\"grade\" id=\"grade\" formControlName=\"grade\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && addClinicForm.get('grade').errors }\" />\r\n              <div *ngIf=\"submitted && addClinicForm.get('grade').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"addClinicForm.get('grade').errors['required']\">Phone Number is required</div>\r\n                <div *ngIf=\"addClinicForm.get('grade').errors['minlength']\">A phone number must have at least 9\r\n                  digits\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <button mat-raised-button style=\"position: center\" color=\"primary\" class=\"pull-right\">Save</button>\r\n          </form>\r\n\r\n\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<mat-form-field>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n<table mat-table\r\n       [dataSource]=\"dataSource\" multiTemplateDataRows\r\n       class=\"mat-elevation-z8\">\r\n  <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of displayedColumns\">\r\n    <th mat-header-cell *matHeaderCellDef> {{column}} </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n</table>\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-clinic-profile/admin-clinic-profile.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-clinic-profile/admin-clinic-profile.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 offset-md-2\">\r\n        <mat-card>\r\n          <h3>Profile</h3>\r\n          <hr>\r\n          <form [formGroup]=\"adminClinicProfileForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n            <div class=\"form-group\">\r\n              <mat-label for=\"email\">Email</mat-label>\r\n              <input type=\"email\" readonly=\"readonly\" id=\"email\" formControlName=\"email\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && adminClinicProfileForm.get('email').errors }\">\r\n\r\n              <div *ngIf=\"submitted && adminClinicProfileForm.get('email').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"adminClinicProfileForm.get('email').errors['required']\">Email is required</div>\r\n                <div *ngIf=\"adminClinicProfileForm.get('email').errors['email']\">Email must be a valid email address</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">Password</label>\r\n              <input type=\"text\" id=\"password\" formControlName=\"password\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && adminClinicProfileForm.get('password').errors }\">\r\n              <div *ngIf=\"submitted && adminClinicProfileForm.get('password').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"adminClinicProfileForm.get('password').errors['required']\">Password is required</div>\r\n                <div *ngIf=\"adminClinicProfileForm.get('password').errors['minlength']\">Password must be at least 8 characters\r\n                  long</div>\r\n                <div *ngIf=\"adminClinicProfileForm.get('password').errors['pattern']\">Password must contain at least 1 lowercase,\r\n                  1 uppercase letter\r\n                  and 1 number</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">First Name</label>\r\n              <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && adminClinicProfileForm.get('name').errors }\" />\r\n              <div *ngIf=\"submitted && adminClinicProfileForm.get('name').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\" adminClinicProfileForm.get('name').errors['required']\">First Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"surname\">Last Name</label>\r\n              <input type=\"text\" id=\"surname\" formControlName=\"surname\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && adminClinicProfileForm.get('surname').errors }\" />\r\n              <div *ngIf=\"submitted && adminClinicProfileForm.get('surname').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"adminClinicProfileForm.get('surname').errors['required']\">Last Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"number\">Phone Number</label>\r\n              <input type=\"number\" id=\"number\" formControlName=\"number\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && adminClinicProfileForm.get('number').errors }\" />\r\n              <div *ngIf=\"submitted && adminClinicProfileForm.get('number').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"adminClinicProfileForm.get('number').errors['required']\">Phone Number is required</div>\r\n                <div *ngIf=\"adminClinicProfileForm.get('number').errors['minlength']\">A phone number must have at least 9\r\n                  digits\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <button mat-raised-button color=\"primary\" class=\"pull-right\">Save</button>\r\n\r\n          </form>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinic-search-dialog/clinic-search-dialog.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinic-search-dialog/clinic-search-dialog.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Search for clinics</h2>\r\n\r\n<mat-dialog-content [formGroup]=\"SearchClinicsGroup\">\r\n  <div>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input required=\"required\" matInput id=\"date\" formControlName = \"date\" [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>\r\n  </div>\r\n  <div>\r\n    <mat-form-field>\r\n      <mat-select required=\"required\" id=\"type\" formControlName = \"type\" placeholder=\"Select examination type\">\r\n        <mat-option *ngFor=\"let examination_type of types\" value=\"{{examination_type.label}}\">{{examination_type.label}}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button class=\"mat-raised-button\"(click)=\"close()\">Close</button>\r\n  <button class=\"mat-raised-button mat-primary\"(click)=\"save()\">Search</button>\r\n</mat-dialog-actions>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinics-list-patient/clinics-list.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinics-list-patient/clinics-list.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n<table mat-table\r\n       [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n\r\n  <ng-container matColumnDef=\"Name\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Clinic name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"Address\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Clinic address </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.address}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"ClinicRating\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Clinic rating </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.clinicRating}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"Doctors\">\r\n    <th mat-header-cell *matHeaderCellDef> Doctors </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <button mat-flat-button color=\"warn\" (click)=\"doctorList(element)\"> Doctors </button>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n<button mat-raised-button color=\"primary\" (click)=\"openDialog()\">Search</button>\r\n<button mat-raised-button color=\"accent\" (click)=\"predefDialog()\">Predef examinations</button>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-list-patient/doctor-list-patient.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-list-patient/doctor-list-patient.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n<table mat-table\r\n       [dataSource]=\"doctorDataSource\" class=\"mat-elevation-z8\" matSort>\r\n\r\n  <ng-container matColumnDef=\"Name\">\r\n    <th mat-header-cell *matHeaderCellDef> Doctor name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"Surname\">\r\n    <th mat-header-cell *matHeaderCellDef> Doctor surname </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.surname}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"DoctorRating\">\r\n    <th mat-header-cell *matHeaderCellDef> Doctor rating </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.doctorRating}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"Price\">\r\n    <th mat-header-cell *matHeaderCellDef> Price </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.specialized.price}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"Make\">\r\n    <th mat-header-cell *matHeaderCellDef> Schedule it </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"make(element)\">Schedule it</button>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n<button mat-raised-button color=\"primary\" (click)=\"searchDoctors()\">Search</button>\r\n<mat-dialog-actions>\r\n  <button class=\"mat-raised-button\"(click)=\"close()\">Close</button>\r\n</mat-dialog-actions>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-medical-record/doctor-medical-record.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-medical-record/doctor-medical-record.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n<table mat-table [dataSource]=\"DataSource\" class=\"mat-elevation-z8\">\r\n\r\n  <ng-container matColumnDef=\"startTime\">\r\n    <th mat-header-cell *matHeaderCellDef> Start time </th>\r\n    <td mat-cell *matCellDef=\"let examination\"> {{examination.interval.startTime}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"endTime\">\r\n    <th mat-header-cell *matHeaderCellDef> End Time </th>\r\n    <td mat-cell *matCellDef=\"let examination\"> {{examination.interval.endTime}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"patientName\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let examination\"> {{examination.patient.name}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"patientSurname\">\r\n    <th mat-header-cell *matHeaderCellDef> Surname </th>\r\n    <td mat-cell *matCellDef=\"let examination\"> {{examination.patient.surname}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"Edit\">\r\n    <th mat-header-cell *matHeaderCellDef> Edit </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <button mat-flat-button color=\"warn\" (click)=\"edit(element)\"> Edit </button>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-profile/doctor-profile.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-profile/doctor-profile.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 offset-md-2\">\r\n        <mat-card>\r\n          <h3>Profile</h3>\r\n          <hr>\r\n          <form [formGroup]=\"doctorProfileForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n            <div class=\"form-group\">\r\n              <mat-label for=\"email\">Email</mat-label>\r\n              <input type=\"email\" readonly=\"readonly\" id=\"email\" formControlName=\"email\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && doctorProfileForm.get('email').errors }\">\r\n\r\n              <div *ngIf=\"submitted && doctorProfileForm.get('email').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"doctorProfileForm.get('email').errors['required']\">Email is required</div>\r\n                <div *ngIf=\"doctorProfileForm.get('email').errors['email']\">Email must be a valid email address</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">Password</label>\r\n              <input type=\"text\" id=\"password\" formControlName=\"password\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && doctorProfileForm.get('password').errors }\">\r\n              <div *ngIf=\"submitted && doctorProfileForm.get('password').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"doctorProfileForm.get('password').errors['required']\">Password is required</div>\r\n                <div *ngIf=\"doctorProfileForm.get('password').errors['minlength']\">Password must be at least 8 characters\r\n                  long</div>\r\n                <div *ngIf=\"doctorProfileForm.get('password').errors['pattern']\">Password must contain at least 1 lowercase,\r\n                  1 uppercase letter\r\n                  and 1 number</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">First Name</label>\r\n              <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && doctorProfileForm.get('name').errors }\" />\r\n              <div *ngIf=\"submitted && doctorProfileForm.get('name').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\" doctorProfileForm.get('name').errors['required']\">First Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"surname\">Last Name</label>\r\n              <input type=\"text\" id=\"surname\" formControlName=\"surname\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && doctorProfileForm.get('surname').errors }\" />\r\n              <div *ngIf=\"submitted && doctorProfileForm.get('surname').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"doctorProfileForm.get('surname').errors['required']\">Last Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"number\">Phone Number</label>\r\n              <input type=\"number\" id=\"number\" formControlName=\"number\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && doctorProfileForm.get('number').errors }\" />\r\n              <div *ngIf=\"submitted && doctorProfileForm.get('number').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"doctorProfileForm.get('number').errors['required']\">Phone Number is required</div>\r\n                <div *ngIf=\"doctorProfileForm.get('number').errors['minlength']\">A phone number must have at least 9\r\n                  digits\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"workHoursFrom\">Work hours from</label>\r\n              <input type=\"number\" id=\"workHoursFrom\" formControlName=\"workHoursFrom\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && doctorProfileForm.get('number').errors }\" />\r\n              <div *ngIf=\"submitted && doctorProfileForm.get('number').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"doctorProfileForm.get('number').errors['required']\">Work hours from is required</div>\r\n                <div *ngIf=\"doctorProfileForm.get('number').errors['minlength']\">A work hours must have at least 2\r\n                  digits\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"workHoursTo\">Work hours to</label>\r\n              <input type=\"number\" id=\"workHoursTo\" formControlName=\"workHoursTo\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && doctorProfileForm.get('number').errors }\" />\r\n              <div *ngIf=\"submitted && doctorProfileForm.get('number').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"doctorProfileForm.get('number').errors['required']\">Work hours to is required</div>\r\n                <div *ngIf=\"doctorProfileForm.get('number').errors['minlength']\">A work hours to must have at least 2\r\n                  digits\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <button mat-raised-button color=\"primary\" class=\"pull-right\">Save</button>\r\n\r\n          </form>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-search-dialog/doctor-search-dialog.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-search-dialog/doctor-search-dialog.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Search for doctors</h2>\r\n<mat-dialog-content [formGroup]=\"SearchDoctorGroup\">\r\n  <div>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input required=\"required\" id=\"name\" formControlName=\"name\" matInput placeholder=\"Doctor name\">\r\n    </mat-form-field>\r\n  </div>\r\n  <div>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input required=\"required\" id=\"surname\" formControlName=\"surname\" matInput placeholder=\"Doctor surname\">\r\n    </mat-form-field>\r\n  </div>\r\n  <div>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input required=\"required\" id=\"rating\" formControlName=\"rating\" matInput placeholder=\"Doctor rating\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button class=\"mat-raised-button\"(click)=\"close()\">Close</button>\r\n  <button class=\"mat-raised-button mat-primary\"(click)=\"save()\">Save</button>\r\n</mat-dialog-actions>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-vacation-request/doctor-vacation-request.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-vacation-request/doctor-vacation-request.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 offset-md-2\">\r\n        <mat-card>\r\n          <h3>Vacation request</h3>\r\n          <hr>\r\n          <form [formGroup]=\"vacationRequestForm\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">EMAIL</label>\r\n              <input type=\"email\" id=\"email\" formControlName=\"email\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && vacationRequestForm.get('email').errors }\">\r\n              <div *ngIf=\"submitted && vacationRequestForm.get('email').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"vacationRequestForm.get('email').errors['required']\">Email is required</div>\r\n                <div *ngIf=\"vacationRequestForm.get('email').errors['email']\">Email must be a valid email address</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Name</label>\r\n              <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && vacationRequestForm.get('name').errors }\">\r\n\r\n              <div *ngIf=\"submitted && vacationRequestForm.get('name').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"vacationRequestForm.get('name').errors['required']\">Email is required</div>\r\n                <div *ngIf=\"vacationRequestForm.get('name').errors['name']\">Email must be a valid email address</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"surname\">Surname</label>\r\n              <input type=\"text\" id=\"surname\" formControlName=\"surname\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && vacationRequestForm.get('surname').errors }\" />\r\n              <div *ngIf=\"submitted && vacationRequestForm.get('surname').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"vacationRequestForm.get('surname').errors['surname']\">Address is required</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"startingDate\">StartingDate</label>\r\n              <input type=\"text\" id=\"startingDate\" formControlName=\"startingDate\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && vacationRequestForm.get('startingDate').errors }\" />\r\n              <div *ngIf=\"submitted && vacationRequestForm.get('startingDate').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"vacationRequestForm.get('startingDate').errors['required']\">Country is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"finishDate\">FinishDate</label>\r\n              <input type=\"text\" id=\"finishDate\" formControlName=\"finishDate\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && vacationRequestForm.get('finishDate').errors }\" />\r\n              <div *ngIf=\"submitted && vacationRequestForm.get('finishDate').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"vacationRequestForm.get('finishDate').errors['required']\">Phone Number is required</div>\r\n                digits\r\n              </div>\r\n            </div>\r\n            <button mat-raised-button style=\"position: center\" color=\"primary\" class=\"pull-right\">Save</button>\r\n          </form>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-admin-clinic/home-page-admin-clinic.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-admin-clinic/home-page-admin-clinic.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Welcome</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-clinical-centre-administrator/home-page-clinical-centre-administrator.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-clinical-centre-administrator/home-page-clinical-centre-administrator.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-doctor/home-page-doctor.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-doctor/home-page-doctor.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>home-page-doctor works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-nurse/home-page-nurse.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-nurse/home-page-nurse.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>nurse-home-page works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-patient/home-page-patient.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-patient/home-page-patient.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Welcome</h3>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"image\">\r\n  <img src=\"2.jpg\">\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 offset-md-2\">\n        <mat-card>\n          <h3>Login</h3>\n          <hr>\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n\n            <div class=\"form-group\">\n              <label for=\"email\">Email</label>\n              <input type=\"email\" id=\"email\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n              <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\n              <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                <div *ngIf=\"f.password.errors.minlength\">Password must be at least 8 characters long</div>\n                <div *ngIf=\"f.password.errors.pattern\">Password must contain at least 1 lowercase, 1 uppercase letter and 1 number</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <a routerLink=\"/patient/register\">Don't have an account? Register here.</a>\n            </div>\n\n            <button mat-raised-button color=\"primary\" class=\"pull-right\">Login</button>\n\n          </form>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/medical-history-patient/medical-history-patient.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/medical-history-patient/medical-history-patient.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n<table mat-table [dataSource]=\"medicalDataSource\" matSort class=\"mat-elevation-z8\">\r\n\r\n  <ng-container matColumnDef=\"Kind\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Kind </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <div *ngIf=\"element.kind === 1; else elseBlock\">Operation</div>\r\n      <ng-template #elseBlock>Examination</ng-template>\r\n    </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"Clinic\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Clinic </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.clinic.name}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"Doctor\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Doctor </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <div *ngFor=\"let doctor of element.doctors\">{{doctor.name}}</div>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"StartTime\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Start date and time </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.interval.startTime}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"EndTime\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> End date and time </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.interval.endTime}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/medical-record-dialog/medical-record-dialog.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/medical-record-dialog/medical-record-dialog.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 offset-md-2\">\r\n        <mat-card>\r\n          <h3>Profile</h3>\r\n          <hr>\r\n          <form [formGroup]=\"medicalRecordForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n            <div>\r\n              <mat-form-field class=\"form-group\">\r\n                <input type=\"text\" id=\"height\" formControlName=\"height\"  class=\"form-control\" matInput placeholder=\"Height\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && medicalRecordForm.get('height').errors }\">\r\n                <div *ngIf=\"submitted && medicalRecordForm.get('height').errors\" class=\"invalid-feedback\"></div>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div>\r\n              <mat-form-field class=\"form-group\">\r\n                <input type=\"text\" id=\"weight\" formControlName=\"weight\"  class=\"form-control\" matInput placeholder=\"Weight\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && medicalRecordForm.get('weight').errors }\">\r\n                <div *ngIf=\"submitted && medicalRecordForm.get('weight').errors\" class=\"invalid-feedback\"></div>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div>\r\n              <mat-form-field class=\"form-group\">\r\n                <input type=\"text\" id=\"bloodType\" formControlName=\"bloodType\"  class=\"form-control\" matInput placeholder=\"Blood Type\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && medicalRecordForm.get('bloodType').errors }\">\r\n                <div *ngIf=\"submitted && medicalRecordForm.get('bloodType').errors\" class=\"invalid-feedback\"></div>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div>\r\n              <mat-form-field class=\"form-group\">\r\n                <input type=\"text\" id=\"allergies\" formControlName=\"allergies\"  class=\"form-control\" matInput placeholder=\"Allergies\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && medicalRecordForm.get('allergies').errors }\">\r\n                <div *ngIf=\"submitted && medicalRecordForm.get('allergies').errors\" class=\"invalid-feedback\"></div>\r\n              </mat-form-field>\r\n            </div>\r\n            <div>\r\n              <mat-form-field class=\"form-group\">\r\n                <input type=\"text\" id=\"reports\" formControlName=\"reports\"  class=\"form-control\" matInput placeholder=\"Reports\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && medicalRecordForm.get('reports').errors }\">\r\n                <div *ngIf=\"submitted && medicalRecordForm.get('reports').errors\" class=\"invalid-feedback\"></div>\r\n              </mat-form-field>\r\n\r\n            </div>\r\n            <button  mat-raised-button color=\"primary\" class=\"pull-right\">Save</button>\r\n\r\n          </form>\r\n          <div mat-dialog-actions align=\"end\">\r\n            <button class=\"mat-raised-button\"(click)=\"close()\">Close</button>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/medical-record-patient/medical-record-patient.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/medical-record-patient/medical-record-patient.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 offset-md-2\">\r\n        <mat-card>\r\n          <h3>Medical Record</h3>\r\n          <hr>\r\n            <form class=\"medicalRecordForm\">\r\n              <div class=\"form-group\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input readonly=\"readonly\" matInput placeholder=\"Height\" value=\"{{height}}\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input readonly=\"readonly\" matInput placeholder=\"Weight\" value=\"{{weight}}\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input readonly=\"readonly\" matInput placeholder=\"Blood type\" value=\"{{bloodType}}\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <mat-form-field class=\"toast-top-full-width\">\r\n                  <textarea readonly=\"readonly\" matInput placeholder=\"Allergies\" value=\"{{allergies}}\"></textarea>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <mat-form-field class=\"toast-top-full-width\">\r\n                  <textarea readonly=\"readonly\" matInput placeholder=\"Examination reports\" value=\"{{reports}}\"></textarea>\r\n                </mat-form-field>\r\n              </div>\r\n            </form>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-date-picker/nurse-date-picker.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-date-picker/nurse-date-picker.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Welcome</p>\r\n\r\n\r\n<mat-form-field>\r\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\r\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker></mat-datepicker>\r\n</mat-form-field>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-list-patient/nurse-list-patient.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-list-patient/nurse-list-patient.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n<table mat-table\r\n       [dataSource]=\"dataSource\" multiTemplateDataRows\r\n       class=\"mat-elevation-z8\">\r\n  <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of displayedColumns\">\r\n    <th mat-header-cell *matHeaderCellDef> {{column}} </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\r\n  <ng-container matColumnDef=\"expandedDetail\">\r\n    <td mat-cell *matCellDef=\"let clinic\" [attr.colspan]=\"displayedColumns.length\">\r\n      <div class=\"example-element-detail\"\r\n           [@detailExpand]=\"clinic == expandedElement ? 'expanded' : 'collapsed'\">\r\n      </div>\r\n\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\"\r\n      class=\"example-element-row\"\r\n      [class.example-expanded-row]=\"expandedElement === element\"\r\n      (click)=\"expandedElement = expandedElement === element ? null : element\">\r\n  </tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n</table>\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-profile/nurse-profile.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-profile/nurse-profile.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 offset-md-2\">\r\n        <mat-card>\r\n          <h3>Profile</h3>\r\n          <hr>\r\n          <form [formGroup]=\"nurseProfileForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n            <div class=\"form-group\">\r\n              <mat-label for=\"email\">Email</mat-label>\r\n              <input type=\"email\" readonly=\"readonly\" id=\"email\" formControlName=\"email\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && nurseProfileForm.get('email').errors }\">\r\n\r\n              <div *ngIf=\"submitted && nurseProfileForm.get('email').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"nurseProfileForm.get('email').errors['required']\">Email is required</div>\r\n                <div *ngIf=\"nurseProfileForm.get('email').errors['email']\">Email must be a valid email address</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">Password</label>\r\n              <input type=\"text\" id=\"password\" formControlName=\"password\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && nurseProfileForm.get('password').errors }\">\r\n              <div *ngIf=\"submitted && nurseProfileForm.get('password').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"nurseProfileForm.get('password').errors['required']\">Password is required</div>\r\n                <div *ngIf=\"nurseProfileForm.get('password').errors['minlength']\">Password must be at least 8 characters\r\n                  long</div>\r\n                <div *ngIf=\"nurseProfileForm.get('password').errors['pattern']\">Password must contain at least 1 lowercase,\r\n                  1 uppercase letter\r\n                  and 1 number</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">First Name</label>\r\n              <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && nurseProfileForm.get('name').errors }\" />\r\n              <div *ngIf=\"submitted && nurseProfileForm.get('name').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\" nurseProfileForm.get('name').errors['required']\">First Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"surname\">Last Name</label>\r\n              <input type=\"text\" id=\"surname\" formControlName=\"surname\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && nurseProfileForm.get('surname').errors }\" />\r\n              <div *ngIf=\"submitted && nurseProfileForm.get('surname').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"nurseProfileForm.get('surname').errors['required']\">Last Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"workHoursFrom\">WorkHoursFrom</label>\r\n              <input type=\"workHoursFrom\" id=\"workHoursFrom\" formControlName=\"workHoursFrom\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted &&  nurseProfileForm.get('workHoursFrom').errors }\" />\r\n              <div *ngIf=\"submitted && nurseProfileForm.get('workHoursFrom').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"nurseProfileForm.get('workHoursFrom').errors['required']\">Health Insurance ID is required\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"workHoursTo\">WorkHoursTo</label>\r\n                <input type=\"text\" id=\"workHoursTo\" formControlName=\"workHoursTo\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && nurseProfileForm.get('workHoursTo').errors }\" />\r\n                <div *ngIf=\"submitted && nurseProfileForm.get('workHoursTo').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"nurseProfileForm.get('workHoursTo').errors['required']\">Address is required</div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"phone\">PhoneNumber</label>\r\n                <input type=\"phone\" id=\"phone\" formControlName=\"phone\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && nurseProfileForm.get('phone').errors }\" />\r\n                <div *ngIf=\"submitted && nurseProfileForm.get('phone').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"nurseProfileForm.get('phone').errors['required']\">Phone Number is required</div>\r\n                  <div *ngIf=\"nurseProfileForm.get('phone').errors['minlength']\">A phone number must have at least 9\r\n                    digits\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n              <button mat-raised-button color=\"primary\" class=\"pull-right\">Save</button>\r\n            </div>\r\n          </form>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-vacation-request/nurse-vacation-request.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-vacation-request/nurse-vacation-request.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 offset-md-2\">\r\n        <mat-card>\r\n          <h3>Vacation request</h3>\r\n          <hr>\r\n          <form [formGroup]=\"vacationRequestForm\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">EMAIL</label>\r\n              <input type=\"email\" id=\"email\" formControlName=\"email\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && vacationRequestForm.get('email').errors }\">\r\n              <div *ngIf=\"submitted && vacationRequestForm.get('email').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"vacationRequestForm.get('email').errors['required']\">Email is required</div>\r\n                <div *ngIf=\"vacationRequestForm.get('email').errors['email']\">Email must be a valid email address</div>\r\n              </div>\r\n            </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">Name</label>\r\n                <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && vacationRequestForm.get('name').errors }\">\r\n\r\n                <div *ngIf=\"submitted && vacationRequestForm.get('name').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"vacationRequestForm.get('name').errors['required']\">Email is required</div>\r\n                  <div *ngIf=\"vacationRequestForm.get('name').errors['name']\">Email must be a valid email address</div>\r\n                </div>\r\n              </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"surname\">Surname</label>\r\n              <input type=\"text\" id=\"surname\" formControlName=\"surname\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && vacationRequestForm.get('surname').errors }\" />\r\n              <div *ngIf=\"submitted && vacationRequestForm.get('surname').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"vacationRequestForm.get('surname').errors['surname']\">Address is required</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"startingDate\">StartingDate</label>\r\n              <input type=\"text\" id=\"startingDate\" formControlName=\"startingDate\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && vacationRequestForm.get('startingDate').errors }\" />\r\n              <div *ngIf=\"submitted && vacationRequestForm.get('startingDate').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"vacationRequestForm.get('startingDate').errors['required']\">Country is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"finishDate\">FinishDate</label>\r\n              <input type=\"text\" id=\"finishDate\" formControlName=\"finishDate\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && vacationRequestForm.get('finishDate').errors }\" />\r\n              <div *ngIf=\"submitted && vacationRequestForm.get('finishDate').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"vacationRequestForm.get('finishDate').errors['required']\">Phone Number is required</div>\r\n                  digits\r\n                </div>\r\n              </div>\r\n            <button mat-raised-button style=\"position: center\" color=\"primary\" class=\"pull-right\">Save</button>\r\n          </form>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-make-examination/patient-make-examination.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-make-examination/patient-make-examination.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Making an appointment</h2>\r\n<mat-dialog-content [formGroup]=\"MakeGroup\">\r\n  <div>\r\n  <mat-form-field>\r\n    <mat-select required=\"required\" id=\"terminTime\" formControlName = \"terminTime\" placeholder=\"Select date and time\">\r\n      <mat-option *ngFor=\"let termin of termins\" value=\"{{termin}}\">{{termin}}</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  </div>\r\n  <div>\r\n    <mat-form-field>\r\n      <mat-select required=\"required\" id = \"kind\" formControlName=\"kind\" placeholder=\"Select operation kind\">\r\n        <mat-option *ngFor=\"let kindd of kinds\" value = \"{{kindd}}\"> {{kindd}}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button class=\"mat-raised-button\"(click)=\"close()\">Close</button>\r\n  <button class=\"mat-raised-button mat-primary\"(click)=\"save()\">Save</button>\r\n</mat-dialog-actions>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-profile/patient-profile.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-profile/patient-profile.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 offset-md-2\">\r\n        <mat-card>\r\n          <h3>Profile</h3>\r\n          <hr>\r\n          <form [formGroup]=\"patientProfileForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n            <div class=\"form-group\">\r\n              <mat-label for=\"email\">Email</mat-label>\r\n              <input type=\"email\" readonly=\"readonly\" id=\"email\" formControlName=\"email\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && patientProfileForm.get('email').errors }\">\r\n\r\n              <div *ngIf=\"submitted && patientProfileForm.get('email').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"patientProfileForm.get('email').errors['required']\">Email is required</div>\r\n                <div *ngIf=\"patientProfileForm.get('email').errors['email']\">Email must be a valid email address</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">Password</label>\r\n              <input type=\"text\" id=\"password\" formControlName=\"password\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && patientProfileForm.get('password').errors }\">\r\n              <div *ngIf=\"submitted && patientProfileForm.get('password').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"patientProfileForm.get('password').errors['required']\">Password is required</div>\r\n                <div *ngIf=\"patientProfileForm.get('password').errors['minlength']\">Password must be at least 8 characters\r\n                  long</div>\r\n                <div *ngIf=\"patientProfileForm.get('password').errors['pattern']\">Password must contain at least 1 lowercase,\r\n                  1 uppercase letter\r\n                  and 1 number</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">First Name</label>\r\n              <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && patientProfileForm.get('name').errors }\" />\r\n              <div *ngIf=\"submitted && patientProfileForm.get('name').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\" patientProfileForm.get('name').errors['required']\">First Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"surname\">Last Name</label>\r\n              <input type=\"text\" id=\"surname\" formControlName=\"surname\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && patientProfileForm.get('surname').errors }\" />\r\n              <div *ngIf=\"submitted && patientProfileForm.get('surname').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"patientProfileForm.get('surname').errors['required']\">Last Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"address\">Address</label>\r\n              <input type=\"text\" id=\"address\" formControlName=\"address\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && patientProfileForm.get('address').errors }\" />\r\n              <div *ngIf=\"submitted && patientProfileForm.get('address').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"patientProfileForm.get('address').errors['required']\">Address is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"city\">City</label>\r\n              <input type=\"text\" id=\"city\" formControlName=\"city\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && patientProfileForm.get('city').errors }\" />\r\n              <div *ngIf=\"submitted && patientProfileForm.get('city').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"patientProfileForm.get('city').errors['required']\">City is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"country\">Country</label>\r\n              <input type=\"text\" id=\"country\" formControlName=\"country\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && patientProfileForm.get('country').errors }\" />\r\n              <div *ngIf=\"submitted && patientProfileForm.get('country').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"patientProfileForm.get('country').errors['required']\">Country is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"number\">Phone Number</label>\r\n              <input type=\"number\" id=\"number\" formControlName=\"number\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && patientProfileForm.get('number').errors }\" />\r\n              <div *ngIf=\"submitted && patientProfileForm.get('number').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"patientProfileForm.get('number').errors['required']\">Phone Number is required</div>\r\n                <div *ngIf=\"patientProfileForm.get('number').errors['minlength']\">A phone number must have at least 9\r\n                  digits\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"insuranceID\">Health Insurance ID</label>\r\n              <input type=\"text\" readonly=\"readonly\" id=\"insuranceID\" formControlName=\"insuranceID\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted &&  patientProfileForm.get('insuranceID').errors }\" />\r\n              <div *ngIf=\"submitted && patientProfileForm.get('insuranceID').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"patientProfileForm.get('insuranceID').errors['required']\">Health Insurance ID is required\r\n                </div>\r\n                <div\r\n                  *ngIf=\"patientProfileForm.get('insuranceID').errors['minlength'] ||patientProfileForm.get('insuranceID').errors['maxlength']\">\r\n                  Health\r\n                  Insurance ID must contain exactly 13 characters</div>\r\n              </div>\r\n            </div>\r\n\r\n            <button mat-raised-button color=\"primary\" class=\"pull-right\">Save</button>\r\n\r\n          </form>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/predef-examination-dialog/predef-examination-dialog.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/predef-examination-dialog/predef-examination-dialog.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table mat-table\n       [dataSource]=\"ExaminationDataSource\" class=\"mat-elevation-z8\" matSort>\n\n  <ng-container matColumnDef=\"StartDate\">\n    <th mat-header-cell *matHeaderCellDef> Start date </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.interval.startTime}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"EndDate\">\n    <th mat-header-cell *matHeaderCellDef> End date </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.interval.endTime}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"DoctorName\">\n    <th mat-header-cell *matHeaderCellDef> Doctor name </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <div *ngFor=\"let doctor of element.doctors\">\n        {{doctor.name}}\n      </div>\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"DoctorSurname\">\n    <th mat-header-cell *matHeaderCellDef> Doctor surname </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <div *ngFor=\"let doctor of element.doctors\">\n        {{doctor.surname}}\n      </div>\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"Type\">\n    <th mat-header-cell *matHeaderCellDef> Type </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.examinationType.label}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"Price\">\n    <th mat-header-cell *matHeaderCellDef> Price </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.examinationType.price}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"Discount\">\n    <th mat-header-cell *matHeaderCellDef> Discount </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.discount}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"Make\">\n    <th mat-header-cell *matHeaderCellDef> Make an appointment  </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <button mat-raised-button color=\"primary\" (click)=\"make(element)\">Schedule it</button>\n    </td>\n  </ng-container>\n\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n<mat-dialog-actions>\n  <button class=\"mat-raised-button\"(click)=\"close()\">Close</button>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-requests/register-requests.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-requests/register-requests.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table mat-table [dataSource]=\"RequestsDataSource\" class=\"mat-elevation-z8\">\r\n\r\n  <ng-container matColumnDef=\"email\">\r\n    <th mat-header-cell *matHeaderCellDef> Email </th>\r\n    <td mat-cell *matCellDef=\"let patient\"> {{patient.email}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"approving\">\r\n    <th mat-header-cell *matHeaderCellDef> Approving </th>\r\n    <td mat-cell *matCellDef=\"let patient\">\r\n      <button mat-raised-button color=\"primary\" class=\"pull-right\" (click)=\"onAccept(patient)\">Accept</button>\r\n      <button mat-raised-button color=\"warn\" class=\"pull-right\">Decline</button>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registration/registration.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/registration/registration.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 offset-md-2\">\n        <mat-card>\n          <h3>Patient Registration</h3>\n          <hr>\n          <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n\n            <div class=\"form-group\">\n              <label for=\"email\">Email</label>\n              <input type=\"email\" id=\"email\" formControlName=\"email\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('email').errors }\">\n\n              <div *ngIf=\"submitted && registerForm.get('email').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"registerForm.get('email').errors['required']\">Email is required</div>\n                <div *ngIf=\"registerForm.get('email').errors['email']\">Email must be a valid email address</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('password').errors }\">\n              <div *ngIf=\"submitted && registerForm.get('password').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"registerForm.get('password').errors['required']\">Password is required</div>\n                <div *ngIf=\"registerForm.get('password').errors['minlength']\">Password must be at least 8 characters\n                  long</div>\n                <div *ngIf=\"registerForm.get('password').errors['pattern']\">Password must contain at least 1 lowercase,\n                  1 uppercase letter\n                  and 1 number</div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"password\">Repeat password</label>\n              <input type=\"password\" id=\"repeatPassword\" formControlName=\"repeatPassword\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('repeatPassword').errors }\">\n              <div *ngIf=\"submitted && registerForm.get('repeatPassword').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"registerForm.get('repeatPassword').errors['required']\">Repeat password is required</div>\n                <div *ngIf=\"registerForm.get('repeatPassword').errors['minlength']\">Repeat password  must be at least 8 characters\n                  long</div>\n                <div *ngIf=\"registerForm.get('repeatPassword').errors['pattern']\">Repeat password  must contain at least 1 lowercase,\n                  1 uppercase letter\n                  and 1 number and Must be same like password</div>\n              </div>\n            </div>\n\n\n            <div class=\"form-group\">\n              <label for=\"name\">First Name</label>\n              <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('name').errors }\" />\n              <div *ngIf=\"submitted && registerForm.get('name').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\" registerForm.get('name').errors['required']\">First Name is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"surname\">Last Name</label>\n              <input type=\"text\" id=\"surname\" formControlName=\"surname\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('surname').errors }\" />\n              <div *ngIf=\"submitted && registerForm.get('surname').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"registerForm.get('surname').errors['required']\">Last Name is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"address\">Address</label>\n              <input type=\"text\" id=\"address\" formControlName=\"address\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('address').errors }\" />\n              <div *ngIf=\"submitted && registerForm.get('address').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"registerForm.get('address').errors['required']\">Address is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"city\">City</label>\n              <input type=\"text\" id=\"city\" formControlName=\"city\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('city').errors }\" />\n              <div *ngIf=\"submitted && registerForm.get('city').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"registerForm.get('city').errors['required']\">City is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"country\">Country</label>\n              <input type=\"text\" id=\"country\" formControlName=\"country\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('country').errors }\" />\n              <div *ngIf=\"submitted && registerForm.get('country').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"registerForm.get('country').errors['required']\">Country is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"number\">Phone Number</label>\n              <input type=\"number\" id=\"number\" formControlName=\"number\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('number').errors }\" />\n              <div *ngIf=\"submitted && registerForm.get('number').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"registerForm.get('number').errors['required']\">Phone Number is required</div>\n                <div *ngIf=\"registerForm.get('number').errors['minlength']\">A phone number must have at least 9\n                  digits\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"insuranceID\">Health Insurance ID</label>\n              <input type=\"text\" id=\"insuranceID\" formControlName=\"insuranceID\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted &&  registerForm.get('insuranceID').errors }\" />\n              <div *ngIf=\"submitted && registerForm.get('insuranceID').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"registerForm.get('insuranceID').errors['required']\">Health Insurance ID is required\n                </div>\n                <div\n                  *ngIf=\"registerForm.get('insuranceID').errors['minlength'] ||registerForm.get('insuranceID').errors['maxlength']\">\n                  Health\n                  Insurance ID must contain exactly 13 characters</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <a routerLink=\"/patient/login\">Already have an account? Login here.</a>\n            </div>\n\n            <button mat-raised-button color=\"primary\" class=\"pull-right\">Register</button>\n\n          </form>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vacation-request-register/vacation-request-register.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vacation-request-register/vacation-request-register.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table mat-table [dataSource]=\"RequestsDataSource\" class=\"mat-elevation-z8\">\r\n\r\n  <ng-container matColumnDef=\"email\">\r\n    <th mat-header-cell *matHeaderCellDef> email </th>\r\n    <td mat-cell *matCellDef=\"let zahtev\"> {{zahtev.email}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"startingDate\">\r\n    <th mat-header-cell *matHeaderCellDef> startingDate </th>\r\n    <td mat-cell *matCellDef=\"let zahtev\"> {{zahtev.startingDate}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"finishDate\">\r\n    <th mat-header-cell *matHeaderCellDef> finishDate </th>\r\n    <td mat-cell *matCellDef=\"let zahtev\"> {{zahtev.finishDate}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"approving\">\r\n    <th mat-header-cell *matHeaderCellDef> Approving </th>\r\n    <td mat-cell *matCellDef=\"let zahtev\">\r\n      <button mat-raised-button color=\"primary\" class=\"pull-right\" (click)=\"onAccept(zahtev)\">Accept</button>\r\n      <button mat-raised-button color=\"warn\" class=\"pull-right\">Decline</button>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _components_home_page_patient_home_page_patient_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home-page-patient/home-page-patient.component */ "./src/app/components/home-page-patient/home-page-patient.component.ts");
/* harmony import */ var _components_clinics_list_patient_clinics_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/clinics-list-patient/clinics-list.component */ "./src/app/components/clinics-list-patient/clinics-list.component.ts");
/* harmony import */ var _components_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/patient-profile/patient-profile.component */ "./src/app/components/patient-profile/patient-profile.component.ts");
/* harmony import */ var _components_home_page_doctor_home_page_doctor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home-page-doctor/home-page-doctor.component */ "./src/app/components/home-page-doctor/home-page-doctor.component.ts");
/* harmony import */ var _components_doctor_profile_doctor_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/doctor-profile/doctor-profile.component */ "./src/app/components/doctor-profile/doctor-profile.component.ts");
/* harmony import */ var _components_home_page_nurse_home_page_nurse_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home-page-nurse/home-page-nurse.component */ "./src/app/components/home-page-nurse/home-page-nurse.component.ts");
/* harmony import */ var _components_nurse_profile_nurse_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/nurse-profile/nurse-profile.component */ "./src/app/components/nurse-profile/nurse-profile.component.ts");
/* harmony import */ var _components_home_page_admin_clinic_home_page_admin_clinic_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home-page-admin-clinic/home-page-admin-clinic.component */ "./src/app/components/home-page-admin-clinic/home-page-admin-clinic.component.ts");
/* harmony import */ var _components_admin_clinic_profile_admin_clinic_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin-clinic-profile/admin-clinic-profile.component */ "./src/app/components/admin-clinic-profile/admin-clinic-profile.component.ts");
/* harmony import */ var _components_home_page_clinical_centre_administrator_home_page_clinical_centre_administrator_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home-page-clinical-centre-administrator/home-page-clinical-centre-administrator.component */ "./src/app/components/home-page-clinical-centre-administrator/home-page-clinical-centre-administrator.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_add_clinic_add_clinic_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/add-clinic/add-clinic.component */ "./src/app/components/add-clinic/add-clinic.component.ts");
/* harmony import */ var _components_register_requests_register_requests_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/register-requests/register-requests.component */ "./src/app/components/register-requests/register-requests.component.ts");
/* harmony import */ var _components_medical_history_patient_medical_history_patient_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/medical-history-patient/medical-history-patient.component */ "./src/app/components/medical-history-patient/medical-history-patient.component.ts");
/* harmony import */ var _components_medical_record_patient_medical_record_patient_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/medical-record-patient/medical-record-patient.component */ "./src/app/components/medical-record-patient/medical-record-patient.component.ts");
/* harmony import */ var _components_add_clinic_administrator_add_clinic_administrator_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/add-clinic-administrator/add-clinic-administrator.component */ "./src/app/components/add-clinic-administrator/add-clinic-administrator.component.ts");
/* harmony import */ var _components_nurse_date_picker_nurse_date_picker_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/nurse-date-picker/nurse-date-picker.component */ "./src/app/components/nurse-date-picker/nurse-date-picker.component.ts");
/* harmony import */ var _components_nurse_list_patient_nurse_list_patient_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/nurse-list-patient/nurse-list-patient.component */ "./src/app/components/nurse-list-patient/nurse-list-patient.component.ts");
/* harmony import */ var _components_nurse_vacation_request_nurse_vacation_request_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/nurse-vacation-request/nurse-vacation-request.component */ "./src/app/components/nurse-vacation-request/nurse-vacation-request.component.ts");
/* harmony import */ var _components_vacation_request_register_vacation_request_register_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/vacation-request-register/vacation-request-register.component */ "./src/app/components/vacation-request-register/vacation-request-register.component.ts");
/* harmony import */ var _components_doctor_vacation_request_doctor_vacation_request_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/doctor-vacation-request/doctor-vacation-request.component */ "./src/app/components/doctor-vacation-request/doctor-vacation-request.component.ts");
/* harmony import */ var _components_activated_account_patient_activated_account_patient_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/activated-account-patient/activated-account-patient.component */ "./src/app/components/activated-account-patient/activated-account-patient.component.ts");
/* harmony import */ var _components_doctor_medical_record_doctor_medical_record_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/doctor-medical-record/doctor-medical-record.component */ "./src/app/components/doctor-medical-record/doctor-medical-record.component.ts");




























const routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
    },
    {
        path: 'patient/register',
        component: _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"],
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    },
    {
        path: 'patient/home',
        component: _components_home_page_patient_home_page_patient_component__WEBPACK_IMPORTED_MODULE_5__["HomePagePatientComponent"],
    },
    {
        path: 'patient/medicalHistory',
        component: _components_medical_history_patient_medical_history_patient_component__WEBPACK_IMPORTED_MODULE_18__["MedicalHistoryPatientComponent"],
    },
    {
        path: 'patient/clinics',
        component: _components_clinics_list_patient_clinics_list_component__WEBPACK_IMPORTED_MODULE_6__["ClinicsListComponent"],
    },
    {
        path: 'patient/profile',
        component: _components_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_7__["PatientProfileComponent"],
    },
    {
        path: 'patient/medicalRecord',
        component: _components_medical_record_patient_medical_record_patient_component__WEBPACK_IMPORTED_MODULE_19__["MedicalRecordPatientComponent"],
    },
    {
        path: 'patient/activatedAccount/:id',
        component: _components_activated_account_patient_activated_account_patient_component__WEBPACK_IMPORTED_MODULE_26__["ActivatedAccountPatientComponent"],
    },
    {
        path: 'doctor/home',
        component: _components_home_page_doctor_home_page_doctor_component__WEBPACK_IMPORTED_MODULE_8__["HomePageDoctorComponent"],
    },
    {
        path: 'doctor/profile',
        component: _components_doctor_profile_doctor_profile_component__WEBPACK_IMPORTED_MODULE_9__["DoctorProfileComponent"],
    },
    {
        path: 'nurse/home',
        component: _components_home_page_nurse_home_page_nurse_component__WEBPACK_IMPORTED_MODULE_10__["HomePageNurseComponent"],
    },
    {
        path: 'nurse/profile',
        component: _components_nurse_profile_nurse_profile_component__WEBPACK_IMPORTED_MODULE_11__["NurseProfileComponent"],
    },
    {
        path: 'admin_clinic/home',
        component: _components_home_page_admin_clinic_home_page_admin_clinic_component__WEBPACK_IMPORTED_MODULE_12__["HomePageAdminClinicComponent"],
    },
    {
        path: 'admin_clinic/profile',
        component: _components_admin_clinic_profile_admin_clinic_profile_component__WEBPACK_IMPORTED_MODULE_13__["AdminClinicProfileComponent"],
    },
    {
        path: 'clinical-centre-admin/home',
        component: _components_home_page_clinical_centre_administrator_home_page_clinical_centre_administrator_component__WEBPACK_IMPORTED_MODULE_14__["HomePageClinicalCentreAdministratorComponent"],
    },
    {
        path: 'clinical-centre-admin/addClinic',
        component: _components_add_clinic_add_clinic_component__WEBPACK_IMPORTED_MODULE_16__["AddClinicComponent"],
    },
    {
        path: 'clinical-centre-admin/requests',
        component: _components_register_requests_register_requests_component__WEBPACK_IMPORTED_MODULE_17__["RegisterRequestsComponent"],
    },
    {
        path: 'clinical-centre-admin/addAdmins',
        component: _components_add_clinic_administrator_add_clinic_administrator_component__WEBPACK_IMPORTED_MODULE_20__["AddClinicAdministratorComponent"],
    },
    {
        path: 'nurse/WorkCalendar',
        component: _components_nurse_date_picker_nurse_date_picker_component__WEBPACK_IMPORTED_MODULE_21__["NurseDatePickerComponent"],
    },
    {
        path: 'nurse/ListOfPatient',
        component: _components_nurse_list_patient_nurse_list_patient_component__WEBPACK_IMPORTED_MODULE_22__["NurseListPatientComponent"],
    },
    {
        path: 'nurse/VacationRequest',
        component: _components_nurse_vacation_request_nurse_vacation_request_component__WEBPACK_IMPORTED_MODULE_23__["NurseVacationRequestComponent"],
    },
    {
        path: 'clinical-centre-admin/VacationRequests',
        component: _components_vacation_request_register_vacation_request_register_component__WEBPACK_IMPORTED_MODULE_24__["VacationRequestRegisterComponent"],
    },
    {
        path: 'doctor/VacationRequest',
        component: _components_doctor_vacation_request_doctor_vacation_request_component__WEBPACK_IMPORTED_MODULE_25__["DoctorVacationRequestComponent"],
    },
    {
        path: 'doctor/MedicalRecord',
        component: _components_doctor_medical_record_doctor_medical_record_component__WEBPACK_IMPORTED_MODULE_27__["DoctorMedicalRecordComponent"],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\r\n  height: 100%;\r\n}\r\n\r\n.sidenav {\r\n  width: 200px;\r\n}\r\n\r\n.mat-nav-list{\r\n  background-color: khaki;\r\n}\r\n\r\n.mat-toolbar.mat-primary {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4ubWF0LW5hdi1saXN0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGtoYWtpO1xyXG59XHJcbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/user-service.service */ "./src/app/services/user-service.service.ts");





let AppComponent = class AppComponent {
    constructor(breakpointObserver, userService) {
        this.breakpointObserver = breakpointObserver;
        this.userService = userService;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
    }
    isLoggedIn() {
        return this.userService.isLoggedIn();
    }
    isNone() {
        return this.userService.isNone();
    }
    isClinicalCentreAdmin() {
        return this.userService.isClinicalCentreAdmin();
    }
    isClinicAdmin() {
        return this.userService.isClinicalAdmin();
    }
    isPatient() {
        return this.userService.isPatient();
    }
    isDoctor() {
        return this.userService.isDoctor();
    }
    isNurse() {
        return this.userService.isNurse();
    }
    onLogout() {
        this.userService.logOut();
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] },
    { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_4__["UserServiceService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _components_home_page_patient_home_page_patient_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home-page-patient/home-page-patient.component */ "./src/app/components/home-page-patient/home-page-patient.component.ts");
/* harmony import */ var _components_clinics_list_patient_clinics_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/clinics-list-patient/clinics-list.component */ "./src/app/components/clinics-list-patient/clinics-list.component.ts");
/* harmony import */ var _components_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/patient-profile/patient-profile.component */ "./src/app/components/patient-profile/patient-profile.component.ts");
/* harmony import */ var _components_home_page_doctor_home_page_doctor_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/home-page-doctor/home-page-doctor.component */ "./src/app/components/home-page-doctor/home-page-doctor.component.ts");
/* harmony import */ var _components_doctor_profile_doctor_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/doctor-profile/doctor-profile.component */ "./src/app/components/doctor-profile/doctor-profile.component.ts");
/* harmony import */ var _components_nurse_profile_nurse_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/nurse-profile/nurse-profile.component */ "./src/app/components/nurse-profile/nurse-profile.component.ts");
/* harmony import */ var _components_home_page_nurse_home_page_nurse_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/home-page-nurse/home-page-nurse.component */ "./src/app/components/home-page-nurse/home-page-nurse.component.ts");
/* harmony import */ var _components_home_page_admin_clinic_home_page_admin_clinic_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/home-page-admin-clinic/home-page-admin-clinic.component */ "./src/app/components/home-page-admin-clinic/home-page-admin-clinic.component.ts");
/* harmony import */ var _components_admin_clinic_profile_admin_clinic_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/admin-clinic-profile/admin-clinic-profile.component */ "./src/app/components/admin-clinic-profile/admin-clinic-profile.component.ts");
/* harmony import */ var _components_home_page_clinical_centre_administrator_home_page_clinical_centre_administrator_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/home-page-clinical-centre-administrator/home-page-clinical-centre-administrator.component */ "./src/app/components/home-page-clinical-centre-administrator/home-page-clinical-centre-administrator.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_add_clinic_add_clinic_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/add-clinic/add-clinic.component */ "./src/app/components/add-clinic/add-clinic.component.ts");
/* harmony import */ var _components_register_requests_register_requests_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/register-requests/register-requests.component */ "./src/app/components/register-requests/register-requests.component.ts");
/* harmony import */ var _components_medical_history_patient_medical_history_patient_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/medical-history-patient/medical-history-patient.component */ "./src/app/components/medical-history-patient/medical-history-patient.component.ts");
/* harmony import */ var _components_medical_record_patient_medical_record_patient_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/medical-record-patient/medical-record-patient.component */ "./src/app/components/medical-record-patient/medical-record-patient.component.ts");
/* harmony import */ var _components_add_clinic_administrator_add_clinic_administrator_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/add-clinic-administrator/add-clinic-administrator.component */ "./src/app/components/add-clinic-administrator/add-clinic-administrator.component.ts");
/* harmony import */ var _components_clinic_search_dialog_clinic_search_dialog_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/clinic-search-dialog/clinic-search-dialog.component */ "./src/app/components/clinic-search-dialog/clinic-search-dialog.component.ts");
/* harmony import */ var _components_doctor_list_patient_doctor_list_patient_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/doctor-list-patient/doctor-list-patient.component */ "./src/app/components/doctor-list-patient/doctor-list-patient.component.ts");
/* harmony import */ var _components_nurse_date_picker_nurse_date_picker_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/nurse-date-picker/nurse-date-picker.component */ "./src/app/components/nurse-date-picker/nurse-date-picker.component.ts");
/* harmony import */ var _components_nurse_list_patient_nurse_list_patient_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/nurse-list-patient/nurse-list-patient.component */ "./src/app/components/nurse-list-patient/nurse-list-patient.component.ts");
/* harmony import */ var _components_nurse_vacation_request_nurse_vacation_request_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/nurse-vacation-request/nurse-vacation-request.component */ "./src/app/components/nurse-vacation-request/nurse-vacation-request.component.ts");
/* harmony import */ var _components_vacation_request_register_vacation_request_register_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/vacation-request-register/vacation-request-register.component */ "./src/app/components/vacation-request-register/vacation-request-register.component.ts");
/* harmony import */ var _components_doctor_vacation_request_doctor_vacation_request_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/doctor-vacation-request/doctor-vacation-request.component */ "./src/app/components/doctor-vacation-request/doctor-vacation-request.component.ts");
/* harmony import */ var _components_doctor_search_dialog_doctor_search_dialog_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/doctor-search-dialog/doctor-search-dialog.component */ "./src/app/components/doctor-search-dialog/doctor-search-dialog.component.ts");
/* harmony import */ var _components_doctor_medical_record_doctor_medical_record_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/doctor-medical-record/doctor-medical-record.component */ "./src/app/components/doctor-medical-record/doctor-medical-record.component.ts");
/* harmony import */ var _components_medical_record_dialog_medical_record_dialog_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/medical-record-dialog/medical-record-dialog.component */ "./src/app/components/medical-record-dialog/medical-record-dialog.component.ts");
/* harmony import */ var _components_predef_examination_dialog_predef_examination_dialog_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/predef-examination-dialog/predef-examination-dialog.component */ "./src/app/components/predef-examination-dialog/predef-examination-dialog.component.ts");
/* harmony import */ var _components_patient_make_examination_patient_make_examination_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/patient-make-examination/patient-make-examination.component */ "./src/app/components/patient-make-examination/patient-make-examination.component.ts");
/* harmony import */ var _components_activated_account_patient_activated_account_patient_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/activated-account-patient/activated-account-patient.component */ "./src/app/components/activated-account-patient/activated-account-patient.component.ts");











































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_13__["RegistrationComponent"],
            _components_home_page_patient_home_page_patient_component__WEBPACK_IMPORTED_MODULE_14__["HomePagePatientComponent"],
            _components_clinics_list_patient_clinics_list_component__WEBPACK_IMPORTED_MODULE_15__["ClinicsListComponent"],
            _components_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_16__["PatientProfileComponent"],
            _components_home_page_doctor_home_page_doctor_component__WEBPACK_IMPORTED_MODULE_17__["HomePageDoctorComponent"],
            _components_doctor_profile_doctor_profile_component__WEBPACK_IMPORTED_MODULE_18__["DoctorProfileComponent"],
            _components_nurse_profile_nurse_profile_component__WEBPACK_IMPORTED_MODULE_19__["NurseProfileComponent"],
            _components_home_page_nurse_home_page_nurse_component__WEBPACK_IMPORTED_MODULE_20__["HomePageNurseComponent"],
            _components_home_page_admin_clinic_home_page_admin_clinic_component__WEBPACK_IMPORTED_MODULE_21__["HomePageAdminClinicComponent"],
            _components_admin_clinic_profile_admin_clinic_profile_component__WEBPACK_IMPORTED_MODULE_22__["AdminClinicProfileComponent"],
            _components_home_page_clinical_centre_administrator_home_page_clinical_centre_administrator_component__WEBPACK_IMPORTED_MODULE_23__["HomePageClinicalCentreAdministratorComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"],
            _components_add_clinic_add_clinic_component__WEBPACK_IMPORTED_MODULE_25__["AddClinicComponent"],
            _components_register_requests_register_requests_component__WEBPACK_IMPORTED_MODULE_26__["RegisterRequestsComponent"],
            _components_medical_history_patient_medical_history_patient_component__WEBPACK_IMPORTED_MODULE_27__["MedicalHistoryPatientComponent"],
            _components_medical_record_patient_medical_record_patient_component__WEBPACK_IMPORTED_MODULE_28__["MedicalRecordPatientComponent"],
            _components_add_clinic_administrator_add_clinic_administrator_component__WEBPACK_IMPORTED_MODULE_29__["AddClinicAdministratorComponent"],
            _components_clinic_search_dialog_clinic_search_dialog_component__WEBPACK_IMPORTED_MODULE_30__["ClinicSearchDialogComponent"],
            _components_doctor_list_patient_doctor_list_patient_component__WEBPACK_IMPORTED_MODULE_31__["DoctorListPatientComponent"],
            _components_nurse_date_picker_nurse_date_picker_component__WEBPACK_IMPORTED_MODULE_32__["NurseDatePickerComponent"],
            _components_nurse_list_patient_nurse_list_patient_component__WEBPACK_IMPORTED_MODULE_33__["NurseListPatientComponent"],
            _components_nurse_vacation_request_nurse_vacation_request_component__WEBPACK_IMPORTED_MODULE_34__["NurseVacationRequestComponent"],
            _components_vacation_request_register_vacation_request_register_component__WEBPACK_IMPORTED_MODULE_35__["VacationRequestRegisterComponent"],
            _components_doctor_vacation_request_doctor_vacation_request_component__WEBPACK_IMPORTED_MODULE_36__["DoctorVacationRequestComponent"],
            _components_doctor_search_dialog_doctor_search_dialog_component__WEBPACK_IMPORTED_MODULE_37__["DoctorSearchDialogComponent"],
            _components_predef_examination_dialog_predef_examination_dialog_component__WEBPACK_IMPORTED_MODULE_40__["PredefExaminationDialogComponent"],
            _components_patient_make_examination_patient_make_examination_component__WEBPACK_IMPORTED_MODULE_41__["PatientMakeExaminationComponent"],
            _components_activated_account_patient_activated_account_patient_component__WEBPACK_IMPORTED_MODULE_42__["ActivatedAccountPatientComponent"],
            _components_doctor_medical_record_doctor_medical_record_component__WEBPACK_IMPORTED_MODULE_38__["DoctorMedicalRecordComponent"],
            _components_medical_record_dialog_medical_record_dialog_component__WEBPACK_IMPORTED_MODULE_39__["MedicalRecordDialogComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot({
                timeOut: 2000,
                positionClass: 'toast-top-right',
                preventDuplicates: true,
            }),
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_12__["DemoMaterialModule"],
        ],
        entryComponents: [
            _components_clinic_search_dialog_clinic_search_dialog_component__WEBPACK_IMPORTED_MODULE_30__["ClinicSearchDialogComponent"],
            _components_doctor_list_patient_doctor_list_patient_component__WEBPACK_IMPORTED_MODULE_31__["DoctorListPatientComponent"],
            _components_doctor_search_dialog_doctor_search_dialog_component__WEBPACK_IMPORTED_MODULE_37__["DoctorSearchDialogComponent"],
            _components_predef_examination_dialog_predef_examination_dialog_component__WEBPACK_IMPORTED_MODULE_40__["PredefExaminationDialogComponent"],
            _components_patient_make_examination_patient_make_examination_component__WEBPACK_IMPORTED_MODULE_41__["PatientMakeExaminationComponent"],
            _components_medical_record_dialog_medical_record_dialog_component__WEBPACK_IMPORTED_MODULE_39__["MedicalRecordDialogComponent"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/activated-account-patient/activated-account-patient.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/activated-account-patient/activated-account-patient.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWN0aXZhdGVkLWFjY291bnQtcGF0aWVudC9hY3RpdmF0ZWQtYWNjb3VudC1wYXRpZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/activated-account-patient/activated-account-patient.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/activated-account-patient/activated-account-patient.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ActivatedAccountPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivatedAccountPatientComponent", function() { return ActivatedAccountPatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ActivatedAccountPatientComponent = class ActivatedAccountPatientComponent {
    constructor(patientService, router, activatedRoute) {
        this.patientService = patientService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.success = false;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params) => {
            const param = params.get('id');
            this.activatePatient(+param);
        });
    }
    activatePatient(id) {
        this.patientService.activatePatient(id).subscribe(() => {
            this.success = true;
        }, () => {
            alert('Your account is already activated');
            this.router.navigate(['']);
        });
    }
};
ActivatedAccountPatientComponent.ctorParameters = () => [
    { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ActivatedAccountPatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activated-account-patient',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./activated-account-patient.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/activated-account-patient/activated-account-patient.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./activated-account-patient.component.css */ "./src/app/components/activated-account-patient/activated-account-patient.component.css")).default]
    })
], ActivatedAccountPatientComponent);



/***/ }),

/***/ "./src/app/components/add-clinic-administrator/add-clinic-administrator.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/add-clinic-administrator/add-clinic-administrator.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\r\n  width: 100%;\r\n\r\n}\r\n\r\ntable {\r\n  width: 75%;\r\n  margin-top:50px;\r\n  margin-left:300px;\r\n\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  margin-top:50px;\r\n  margin-left:300px;\r\n  width: 75%;\r\n}\r\n\r\nmat-paginator {\r\n  width: 75%;\r\n  margin-left:300px;\r\n}\r\n\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: #777;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n\r\n.example-element-diagram {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n\r\n.example-element-name {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n\r\n.example-element-description {\r\n  padding: 16px;\r\n}\r\n\r\n.example-element-description-attribution {\r\n  opacity: 0.5;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtY2xpbmljLWFkbWluaXN0cmF0b3IvYWRkLWNsaW5pYy1hZG1pbmlzdHJhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXOztBQUViOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixpQkFBaUI7O0FBRW5COztBQUNBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBYTtFQUFiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC1jbGluaWMtYWRtaW5pc3RyYXRvci9hZGQtY2xpbmljLWFkbWluaXN0cmF0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW4tdG9wOjUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6MzAwcHg7XHJcblxyXG59XHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi10b3A6NTBweDtcclxuICBtYXJnaW4tbGVmdDozMDBweDtcclxuICB3aWR0aDogNzUlO1xyXG59XHJcbm1hdC1wYWdpbmF0b3Ige1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luLWxlZnQ6MzAwcHg7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNzc3O1xyXG59XHJcblxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGlhZ3JhbSB7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGhlaWdodDogMTA0cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24ge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24tYXR0cmlidXRpb24ge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/add-clinic-administrator/add-clinic-administrator.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/add-clinic-administrator/add-clinic-administrator.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddClinicAdministratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClinicAdministratorComponent", function() { return AddClinicAdministratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _model_adminClinic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/adminClinic */ "./src/app/model/adminClinic.ts");
/* harmony import */ var _services_admin_clinic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/admin-clinic.service */ "./src/app/services/admin-clinic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");







let AddClinicAdministratorComponent = class AddClinicAdministratorComponent {
    constructor(formBuilder, adminClinicService, router) {
        this.formBuilder = formBuilder;
        this.adminClinicService = adminClinicService;
        this.router = router;
        this.submitted = false;
        this.displayedColumns = ['name', 'surname', 'number'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"]();
        this.admins = new Array();
        this.admins = this.adminClinicService.getAllClinicAdmins();
        this.all();
    }
    ngOnInit() {
        this.addClinicAdministratorForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9)]),
        });
        this.all();
        this.dataSource.paginator = this.paginator;
    }
    get f() {
        return this.addClinicAdministratorForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        // Stop here if form is invalid
        if (this.addClinicAdministratorForm.invalid) {
            return;
        }
        this.adminClinic = new _model_adminClinic__WEBPACK_IMPORTED_MODULE_3__["AdminClinic"](this.f.email.value, this.f.password.value, this.f.name.value, this.f.surname.value, this.f.number.value);
        this.adminClinic = new _model_adminClinic__WEBPACK_IMPORTED_MODULE_3__["AdminClinic"](this.f.email.value, this.f.password.value, this.f.name.value, this.f.surname.value, this.f.number.value);
        this.createClinicAdministrator();
    }
    createClinicAdministrator() {
        this.adminClinicService.newAdminClinic(this.adminClinic).subscribe(data => {
            this.adminClinicService.addAdminClinic(this.adminClinic);
            this.router.navigate(['/clinical-centre-admin/home']);
        }, error => {
            alert('Error registration patient');
            console.log(error);
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    all() {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.adminClinicService.getAllClinicAdmins());
    }
};
AddClinicAdministratorComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_admin_clinic_service__WEBPACK_IMPORTED_MODULE_4__["AdminClinicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], { static: true })
], AddClinicAdministratorComponent.prototype, "paginator", void 0);
AddClinicAdministratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-clinic-administrator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-clinic-administrator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-clinic-administrator/add-clinic-administrator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-clinic-administrator.component.css */ "./src/app/components/add-clinic-administrator/add-clinic-administrator.component.css")).default]
    })
], AddClinicAdministratorComponent);



/***/ }),

/***/ "./src/app/components/add-clinic/add-clinic.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/add-clinic/add-clinic.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\r\n  width: 100%;\r\n\r\n}\r\n\r\ntable {\r\n  width: 75%;\r\n  margin-top:50px;\r\n  margin-left:300px;\r\n\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  margin-top:50px;\r\n  margin-left:300px;\r\n  width: 75%;\r\n}\r\n\r\nmat-paginator {\r\n  width: 75%;\r\n  margin-left:300px;\r\n}\r\n\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: #777;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n\r\n.example-element-diagram {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n\r\n.example-element-name {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n\r\n.example-element-description {\r\n  padding: 16px;\r\n}\r\n\r\n.example-element-description-attribution {\r\n  opacity: 0.5;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtY2xpbmljL2FkZC1jbGluaWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7O0FBRWI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjs7QUFFbkI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFhO0VBQWIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWNsaW5pYy9hZGQtY2xpbmljLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luLXRvcDo1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OjMwMHB4O1xyXG5cclxufVxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tdG9wOjUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6MzAwcHg7XHJcbiAgd2lkdGg6IDc1JTtcclxufVxyXG5tYXQtcGFnaW5hdG9yIHtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbi1sZWZ0OjMwMHB4O1xyXG59XHJcblxyXG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzc3NztcclxufVxyXG5cclxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRpYWdyYW0ge1xyXG4gIG1pbi13aWR0aDogODBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBoZWlnaHQ6IDEwNHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LW5hbWUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/add-clinic/add-clinic.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/add-clinic/add-clinic.component.ts ***!
  \***************************************************************/
/*! exports provided: AddClinicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClinicComponent", function() { return AddClinicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _model_clinic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/clinic */ "./src/app/model/clinic.ts");
/* harmony import */ var _services_clinic_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/clinic.service */ "./src/app/services/clinic.service.ts");







let AddClinicComponent = class AddClinicComponent {
    constructor(dialog, formBuilder, router, clinicService) {
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.router = router;
        this.clinicService = clinicService;
        this.submitted = false;
        this.displayedColumns = ['name', 'address', 'description'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.clinics = new Array();
        this.clinics = this.clinicService.getAllClinics();
        this.all();
    }
    ngOnInit() {
        this.addClinicForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            grade: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
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
        this.clinic = new _model_clinic__WEBPACK_IMPORTED_MODULE_5__["Clinic"](this.f.name.value, this.f.address.value, this.f.description.value, this.f.grade.value);
        this.clinic = new _model_clinic__WEBPACK_IMPORTED_MODULE_5__["Clinic"](this.f.name.value, this.f.address.value, this.f.description.value, this.f.grade.value);
        this.createClinic();
    }
    createClinic() {
        this.clinicService.newClinic(this.clinic).subscribe(data => {
            this.clinicService.addClinic(this.clinic);
            this.router.navigate(['/clinical-centre-admin/home']);
        }, error => {
            alert('Error registration patient');
            console.log(error);
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    all() {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.clinicService.getAllClinics());
    }
};
AddClinicComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_clinic_service__WEBPACK_IMPORTED_MODULE_6__["ClinicService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], AddClinicComponent.prototype, "paginator", void 0);
AddClinicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-clinic',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-clinic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-clinic/add-clinic.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-clinic.component.css */ "./src/app/components/add-clinic/add-clinic.component.css")).default]
    })
], AddClinicComponent);



/***/ }),

/***/ "./src/app/components/admin-clinic-profile/admin-clinic-profile.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/admin-clinic-profile/admin-clinic-profile.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tY2xpbmljLXByb2ZpbGUvYWRtaW4tY2xpbmljLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/admin-clinic-profile/admin-clinic-profile.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/admin-clinic-profile/admin-clinic-profile.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AdminClinicProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminClinicProfileComponent", function() { return AdminClinicProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _model_adminClinic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/adminClinic */ "./src/app/model/adminClinic.ts");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _model_role__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/role */ "./src/app/model/role.ts");
/* harmony import */ var _services_admin_clinic_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/admin-clinic.service */ "./src/app/services/admin-clinic.service.ts");









let AdminClinicProfileComponent = class AdminClinicProfileComponent {
    constructor(formBuilder, router, adminClinicService, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.adminClinicService = adminClinicService;
        this.userService = userService;
        this.submitted = false;
        this.user = JSON.parse(userService.isLoggedIn());
        console.log(this.user);
        this.selectedAdminClinic = adminClinicService.getAdminClinic(this.user.email);
    }
    ngOnInit() {
        this.adminClinicProfileForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedAdminClinic.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedAdminClinic.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedAdminClinic.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedAdminClinic.surname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedAdminClinic.number, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9)]),
        });
    }
    get f() {
        return this.adminClinicProfileForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        // Stop here if form is invalid
        if (this.adminClinicProfileForm.invalid) {
            return;
        }
        this.adminClinic = new _model_adminClinic__WEBPACK_IMPORTED_MODULE_3__["AdminClinic"](this.f.email.value, this.f.password.value, this.f.name.value, this.f.surname.value, this.f.number.value);
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_4__["User"](this.f.email.value, this.f.password.value, _model_role__WEBPACK_IMPORTED_MODULE_7__["Role"].CLINIC_ADMINISTRATOR);
        this.editAdminClinic();
    }
    editAdminClinic() {
        this.adminClinicService.editAdminClinic(this.adminClinic).subscribe(data => {
            this.userService.setUser(this.user);
            this.adminClinicService.setAdminClinic(this.adminClinic);
            this.router.navigate(['/admin_clinic/home']);
        }, error => {
            alert('Error edit doctor');
            console.log(error);
        });
    }
};
AdminClinicProfileComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_admin_clinic_service__WEBPACK_IMPORTED_MODULE_8__["AdminClinicService"] },
    { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_6__["UserServiceService"] }
];
AdminClinicProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-clinic-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-clinic-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-clinic-profile/admin-clinic-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-clinic-profile.component.css */ "./src/app/components/admin-clinic-profile/admin-clinic-profile.component.css")).default]
    })
], AdminClinicProfileComponent);



/***/ }),

/***/ "./src/app/components/clinic-search-dialog/clinic-search-dialog.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/clinic-search-dialog/clinic-search-dialog.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpbmljLXNlYXJjaC1kaWFsb2cvY2xpbmljLXNlYXJjaC1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/clinic-search-dialog/clinic-search-dialog.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/clinic-search-dialog/clinic-search-dialog.component.ts ***!
  \***********************************************************************************/
/*! exports provided: Result, ClinicSearchDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicSearchDialogComponent", function() { return ClinicSearchDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_examination_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/examination-type.service */ "./src/app/services/examination-type.service.ts");
/* harmony import */ var _services_clinic_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/clinic.service */ "./src/app/services/clinic.service.ts");






class Result {
    constructor() {
        this.clinics = new Array();
    }
}
let ClinicSearchDialogComponent = class ClinicSearchDialogComponent {
    constructor(clinicService, formBuilder, examinationTypeService, dialogRef, data) {
        this.clinicService = clinicService;
        this.formBuilder = formBuilder;
        this.examinationTypeService = examinationTypeService;
        this.dialogRef = dialogRef;
        this.clinics = new Array();
        this.types = new Array();
        this.result = new Result();
        this.myFilter = (d) => {
            const day = d.getDay();
            // Subota i nedelja se ne radi.
            return day !== 0 && day !== 6;
        };
        this.types = examinationTypeService.getAllTypes();
    }
    ngOnInit() {
        this.SearchClinicsGroup = this.formBuilder.group({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    get f() {
        return this.SearchClinicsGroup.controls;
    }
    save() {
        if (this.SearchClinicsGroup.invalid) {
            return;
        }
        console.log(this.f.type.value);
        this.clinicService.setType(this.f.type.value);
        const a = new Date(this.f.date.value);
        const date = a.toLocaleDateString();
        console.log(date);
        this.clinics = this.clinicService.getClinicsWithType(this.f.type.value, date);
        this.result.date = date;
        this.result.clinics = this.clinics;
        this.dialogRef.close(this.result);
    }
    close() {
        this.dialogRef.close();
    }
};
ClinicSearchDialogComponent.ctorParameters = () => [
    { type: _services_clinic_service__WEBPACK_IMPORTED_MODULE_5__["ClinicService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_examination_type_service__WEBPACK_IMPORTED_MODULE_4__["ExaminationsTypeService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
ClinicSearchDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clinic-search-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clinic-search-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinic-search-dialog/clinic-search-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clinic-search-dialog.component.css */ "./src/app/components/clinic-search-dialog/clinic-search-dialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], ClinicSearchDialogComponent);



/***/ }),

/***/ "./src/app/components/clinics-list-patient/clinics-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/clinics-list-patient/clinics-list.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\r\n  width: 100%;\r\n\r\n}\r\n\r\ntable {\r\n  width: 75%;\r\n  margin-top:50px;\r\n  margin-left:300px;\r\n\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  margin-top:50px;\r\n  margin-left:300px;\r\n  width: 75%;\r\n}\r\n\r\nmat-paginator {\r\n  width: 75%;\r\n  margin-left:300px;\r\n}\r\n\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: #777;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n\r\n.example-element-diagram {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n\r\n.example-element-name {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n\r\n.example-element-description {\r\n  padding: 16px;\r\n}\r\n\r\n.example-element-description-attribution {\r\n  opacity: 0.5;\r\n}\r\n\r\n.mat-raised-button {\r\n  margin-left:300px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGluaWNzLWxpc3QtcGF0aWVudC9jbGluaWNzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7O0FBRWI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjs7QUFFbkI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFhO0VBQWIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpbmljcy1saXN0LXBhdGllbnQvY2xpbmljcy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luLXRvcDo1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OjMwMHB4O1xyXG5cclxufVxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tdG9wOjUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6MzAwcHg7XHJcbiAgd2lkdGg6IDc1JTtcclxufVxyXG5tYXQtcGFnaW5hdG9yIHtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbi1sZWZ0OjMwMHB4O1xyXG59XHJcblxyXG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzc3NztcclxufVxyXG5cclxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRpYWdyYW0ge1xyXG4gIG1pbi13aWR0aDogODBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBoZWlnaHQ6IDEwNHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LW5hbWUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDozMDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/clinics-list-patient/clinics-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/clinics-list-patient/clinics-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: ClinicsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicsListComponent", function() { return ClinicsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_clinic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/clinic.service */ "./src/app/services/clinic.service.ts");
/* harmony import */ var _services_doctor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/doctor.service */ "./src/app/services/doctor.service.ts");
/* harmony import */ var _clinic_search_dialog_clinic_search_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../clinic-search-dialog/clinic-search-dialog.component */ "./src/app/components/clinic-search-dialog/clinic-search-dialog.component.ts");
/* harmony import */ var _doctor_list_patient_doctor_list_patient_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../doctor-list-patient/doctor-list-patient.component */ "./src/app/components/doctor-list-patient/doctor-list-patient.component.ts");
/* harmony import */ var _predef_examination_dialog_predef_examination_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../predef-examination-dialog/predef-examination-dialog.component */ "./src/app/components/predef-examination-dialog/predef-examination-dialog.component.ts");








let ClinicsListComponent = class ClinicsListComponent {
    constructor(clinicService, doctorService, dialog, doctorsDialog, predefExaminaitonDialog) {
        this.clinicService = clinicService;
        this.doctorService = doctorService;
        this.dialog = dialog;
        this.doctorsDialog = doctorsDialog;
        this.predefExaminaitonDialog = predefExaminaitonDialog;
        this.displayedColumns = ['Name', 'Address', 'ClinicRating', 'Doctors'];
        this.tmp1 = new Array();
        this.arr = new Array();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.clinics = new Array();
        // this.doctors = this.doctorService.getAllDoctors();
        this.clinics = this.clinicService.getAllClinics();
        this.all();
        this.condition = true;
    }
    ngOnInit() {
        this.all();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    all() {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.clinicService.getAllClinics());
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        // this.doctordataSource = new MatTableDataSource<Doctor>(this.doctorService.getAllDoctors());
    }
    openDialog() {
        const dialog = this.dialog.open(_clinic_search_dialog_clinic_search_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ClinicSearchDialogComponent"]);
        dialog.afterClosed().subscribe(data => {
            console.log('DATA ISPOD ZA KLINIKE');
            console.log(data);
            if (data !== undefined) {
                this.clinics = data.clinics;
                console.log(this.clinics);
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.clinics);
                this.condition = false;
                this.tmp = data.date;
                this.doctorService.setDate(data.date);
            }
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    doctorList(element) {
        this.doctorService.setDoctorss(element.doctors);
        this.clinicService.setClinicForExamination(element);
        this.arr = new Array();
        for (const d of element.doctors) {
            this.tmp1 = new Array();
            // this.tmp1 = this.doctorService.getDoctorsTermins(this.tmp, d.email);
        }
        // this.doctorService.setExaminationsInterval(this.arr);
        // const dialog = this.doctorsDialog.open(DoctorListPatientComponent);
        // setTimeout(() => {const dialog = this.doctorsDialog.open(DoctorListPatientComponent);  dialog.updateSize('1000px', '600'); }, 800);
        const dialog = this.doctorsDialog.open(_doctor_list_patient_doctor_list_patient_component__WEBPACK_IMPORTED_MODULE_6__["DoctorListPatientComponent"]);
        dialog.updateSize('1000px', '600');
    }
    predefDialog() {
        const dialog = this.predefExaminaitonDialog.open(_predef_examination_dialog_predef_examination_dialog_component__WEBPACK_IMPORTED_MODULE_7__["PredefExaminationDialogComponent"]);
        dialog.updateSize('1000px', '600');
    }
};
ClinicsListComponent.ctorParameters = () => [
    { type: _services_clinic_service__WEBPACK_IMPORTED_MODULE_3__["ClinicService"] },
    { type: _services_doctor_service__WEBPACK_IMPORTED_MODULE_4__["DoctorService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], ClinicsListComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
], ClinicsListComponent.prototype, "sort", void 0);
ClinicsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clinics-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clinics-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinics-list-patient/clinics-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clinics-list.component.css */ "./src/app/components/clinics-list-patient/clinics-list.component.css")).default]
    })
], ClinicsListComponent);



/***/ }),

/***/ "./src/app/components/doctor-list-patient/doctor-list-patient.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/doctor-list-patient/doctor-list-patient.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" table {\r\n   width: 100%;\r\n }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb2N0b3ItbGlzdC1wYXRpZW50L2RvY3Rvci1saXN0LXBhdGllbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQztHQUNFLFdBQVc7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jdG9yLWxpc3QtcGF0aWVudC9kb2N0b3ItbGlzdC1wYXRpZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgdGFibGUge1xyXG4gICB3aWR0aDogMTAwJTtcclxuIH1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/doctor-list-patient/doctor-list-patient.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/doctor-list-patient/doctor-list-patient.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DataTable, DoctorListPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTable", function() { return DataTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorListPatientComponent", function() { return DoctorListPatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_doctor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/doctor.service */ "./src/app/services/doctor.service.ts");
/* harmony import */ var _doctor_search_dialog_doctor_search_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../doctor-search-dialog/doctor-search-dialog.component */ "./src/app/components/doctor-search-dialog/doctor-search-dialog.component.ts");
/* harmony import */ var _patient_make_examination_patient_make_examination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../patient-make-examination/patient-make-examination.component */ "./src/app/components/patient-make-examination/patient-make-examination.component.ts");






class DataTable {
    constructor() { }
}
let DoctorListPatientComponent = class DoctorListPatientComponent {
    constructor(doctorService, searchDialog, dialog, dialogRef) {
        this.doctorService = doctorService;
        this.searchDialog = searchDialog;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.displayedColumns = ['Name', 'Surname', 'DoctorRating', 'Price', 'Make'];
        this.termins = new Array();
        this.doctors = doctorService.getDoctorss();
        this.termins = doctorService.getExaminationsInterval();
        this.doctorDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.doctors);
    }
    ngOnInit() {
    }
    applyFilter(filterValue) {
        this.doctorDataSource.filter = filterValue.trim().toLowerCase();
        if (this.doctorDataSource.paginator) {
            this.doctorDataSource.paginator.firstPage();
        }
    }
    searchDoctors() {
        const dialog = this.searchDialog.open(_doctor_search_dialog_doctor_search_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DoctorSearchDialogComponent"]);
        dialog.afterClosed().subscribe(data => {
            if (data !== undefined) {
                this.doctors = data;
                this.doctorDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
            }
        });
    }
    close() {
        this.dialogRef.close();
    }
    make(element) {
        this.doctorService.setDoctorForMake(element);
        setTimeout(() => {
            const dialog = this.searchDialog.open(_patient_make_examination_patient_make_examination_component__WEBPACK_IMPORTED_MODULE_5__["PatientMakeExaminationComponent"]);
            dialog.afterClosed().subscribe(data => {
                this.dialogRef.close();
            });
        }, 200);
        // const dialog = this.searchDialog.open(PatientMakeExaminationComponent);
    }
};
DoctorListPatientComponent.ctorParameters = () => [
    { type: _services_doctor_service__WEBPACK_IMPORTED_MODULE_3__["DoctorService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DoctorListPatientComponent.prototype, "doctorSearchDialog", void 0);
DoctorListPatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doctor-list-patient',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./doctor-list-patient.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-list-patient/doctor-list-patient.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./doctor-list-patient.component.css */ "./src/app/components/doctor-list-patient/doctor-list-patient.component.css")).default]
    })
], DoctorListPatientComponent);



/***/ }),

/***/ "./src/app/components/doctor-medical-record/doctor-medical-record.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/doctor-medical-record/doctor-medical-record.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  width: 75%;\r\n  margin-top:50px;\r\n  margin-left:300px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb2N0b3ItbWVkaWNhbC1yZWNvcmQvZG9jdG9yLW1lZGljYWwtcmVjb3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjs7QUFFbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RvY3Rvci1tZWRpY2FsLXJlY29yZC9kb2N0b3ItbWVkaWNhbC1yZWNvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbi10b3A6NTBweDtcclxuICBtYXJnaW4tbGVmdDozMDBweDtcclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/doctor-medical-record/doctor-medical-record.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/doctor-medical-record/doctor-medical-record.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DoctorMedicalRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorMedicalRecordComponent", function() { return DoctorMedicalRecordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_medical_record_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/medical-record.service */ "./src/app/services/medical-record.service.ts");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _medical_record_dialog_medical_record_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../medical-record-dialog/medical-record-dialog.component */ "./src/app/components/medical-record-dialog/medical-record-dialog.component.ts");
/* harmony import */ var _services_examination_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/examination.service */ "./src/app/services/examination.service.ts");








let DoctorMedicalRecordComponent = class DoctorMedicalRecordComponent {
    constructor(dialog, medReqDialog, medicalRecServis, patientService, medicalService, examinationService, userService) {
        this.dialog = dialog;
        this.medReqDialog = medReqDialog;
        this.medicalRecServis = medicalRecServis;
        this.patientService = patientService;
        this.medicalService = medicalService;
        this.examinationService = examinationService;
        this.userService = userService;
        this.displayedColumns = ['startTime', 'endTime', 'patientName', 'patientSurname', 'Edit'];
        this.rec = new Array();
        this.rec = this.medicalRecServis.getAllMedicalRecords();
        const user = JSON.parse(userService.isLoggedIn());
        this.pat = this.examinationService.getExaminationsForDoctor(user.email);
        this.condition = false;
        console.log('Ispod1');
        console.log(this.pat);
        this.all();
    }
    ngOnInit() {
        this.all();
        this.DataSource.paginator = this.paginator;
    }
    applyFilter(filterValue) {
        this.DataSource.filter = filterValue.trim().toLowerCase();
    }
    all() {
        this.DataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.pat);
    }
    edit(element) {
        setTimeout(() => {
            const medicalRecordForDialog = this.medicalRecServis.getMedicalRecordForPatient(element.patient.email);
            this.medicalService.setMedicalRecordForDialog(medicalRecordForDialog);
        }, 750);
        this.patientService.setPatient1(element.patient);
        this.condition = this.medicalService.getLocalDateAndTime(element.interval.startTime, element.interval.endTime);
        //  setTimeout(() => {
        if (this.condition === true) {
            console.log('u kondition sam');
            console.log(this.condition);
            const dialog = this.medReqDialog.open(_medical_record_dialog_medical_record_dialog_component__WEBPACK_IMPORTED_MODULE_6__["MedicalRecordDialogComponent"]);
        }
        //   }, 200);
    }
};
DoctorMedicalRecordComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _services_medical_record_service__WEBPACK_IMPORTED_MODULE_3__["MedicalRecordService"] },
    { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_4__["PatientService"] },
    { type: _services_medical_record_service__WEBPACK_IMPORTED_MODULE_3__["MedicalRecordService"] },
    { type: _services_examination_service__WEBPACK_IMPORTED_MODULE_7__["ExaminationService"] },
    { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_5__["UserServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], DoctorMedicalRecordComponent.prototype, "paginator", void 0);
DoctorMedicalRecordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doctor-medical-record',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./doctor-medical-record.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-medical-record/doctor-medical-record.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./doctor-medical-record.component.css */ "./src/app/components/doctor-medical-record/doctor-medical-record.component.css")).default]
    })
], DoctorMedicalRecordComponent);



/***/ }),

/***/ "./src/app/components/doctor-profile/doctor-profile.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/doctor-profile/doctor-profile.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jdG9yLXByb2ZpbGUvZG9jdG9yLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/doctor-profile/doctor-profile.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/doctor-profile/doctor-profile.component.ts ***!
  \***********************************************************************/
/*! exports provided: DoctorProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorProfileComponent", function() { return DoctorProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _model_doctor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/doctor */ "./src/app/model/doctor.ts");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _services_doctor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/doctor.service */ "./src/app/services/doctor.service.ts");
/* harmony import */ var _model_role__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/role */ "./src/app/model/role.ts");









let DoctorProfileComponent = class DoctorProfileComponent {
    constructor(formBuilder, router, doctorService, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.doctorService = doctorService;
        this.userService = userService;
        this.submitted = false;
        this.user = JSON.parse(userService.isLoggedIn());
        console.log(this.user);
        this.selectedDoctor = doctorService.getDoctor(this.user.email);
    }
    ngOnInit() {
        this.doctorProfileForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedDoctor.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedDoctor.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedDoctor.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedDoctor.surname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedDoctor.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9)]),
            workHoursFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedDoctor.workHoursFrom, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)]),
            workHoursTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedDoctor.workHoursTo, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)]),
        });
    }
    get f() {
        return this.doctorProfileForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        // Stop here if form is invalid
        if (this.doctorProfileForm.invalid) {
            return;
        }
        this.doctor = new _model_doctor__WEBPACK_IMPORTED_MODULE_3__["Doctor"](this.f.email.value, this.f.password.value, this.f.name.value, this.f.surname.value, this.f.number.value, this.f.workHoursFrom.value, this.f.workHoursTo.value);
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_4__["User"](this.f.email.value, this.f.password.value, _model_role__WEBPACK_IMPORTED_MODULE_8__["Role"].DOCTOR);
        this.editDoctor();
    }
    editDoctor() {
        this.doctorService.editDoctor(this.doctor).subscribe(data => {
            this.userService.setUser(this.user);
            this.doctorService.setDoctor(this.doctor);
            this.router.navigate(['/doctor/home']);
            console.log('uspesno');
        }, error => {
            alert('Error edit doctor');
            console.log(error);
        });
    }
};
DoctorProfileComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_doctor_service__WEBPACK_IMPORTED_MODULE_7__["DoctorService"] },
    { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_6__["UserServiceService"] }
];
DoctorProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doctor-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./doctor-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-profile/doctor-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./doctor-profile.component.css */ "./src/app/components/doctor-profile/doctor-profile.component.css")).default]
    })
], DoctorProfileComponent);



/***/ }),

/***/ "./src/app/components/doctor-search-dialog/doctor-search-dialog.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/doctor-search-dialog/doctor-search-dialog.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jdG9yLXNlYXJjaC1kaWFsb2cvZG9jdG9yLXNlYXJjaC1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/doctor-search-dialog/doctor-search-dialog.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/doctor-search-dialog/doctor-search-dialog.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DoctorSearchDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorSearchDialogComponent", function() { return DoctorSearchDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_doctor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/doctor.service */ "./src/app/services/doctor.service.ts");





let DoctorSearchDialogComponent = class DoctorSearchDialogComponent {
    constructor(formBuilder, doctorService, dialogRef, data) {
        this.formBuilder = formBuilder;
        this.doctorService = doctorService;
        this.dialogRef = dialogRef;
        this.doctors = new Array();
    }
    ngOnInit() {
        this.SearchDoctorGroup = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-5]*')]),
        });
    }
    get f() {
        return this.SearchDoctorGroup.controls;
    }
    close() {
        this.dialogRef.close();
    }
    save() {
        if (this.SearchDoctorGroup.invalid) {
            return;
        }
        this.doctors = this.doctorService.getDoctrosWithSearch(this.f.name.value, this.f.surname.value, this.f.rating.value);
        console.log(this.doctors);
        this.dialogRef.close(this.doctors);
    }
};
DoctorSearchDialogComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_doctor_service__WEBPACK_IMPORTED_MODULE_4__["DoctorService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
DoctorSearchDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doctor-search-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./doctor-search-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-search-dialog/doctor-search-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./doctor-search-dialog.component.css */ "./src/app/components/doctor-search-dialog/doctor-search-dialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], DoctorSearchDialogComponent);



/***/ }),

/***/ "./src/app/components/doctor-vacation-request/doctor-vacation-request.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/doctor-vacation-request/doctor-vacation-request.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jdG9yLXZhY2F0aW9uLXJlcXVlc3QvZG9jdG9yLXZhY2F0aW9uLXJlcXVlc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/doctor-vacation-request/doctor-vacation-request.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/doctor-vacation-request/doctor-vacation-request.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DoctorVacationRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorVacationRequestComponent", function() { return DoctorVacationRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _model_Zahtev__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/Zahtev */ "./src/app/model/Zahtev.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_vacation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/vacation.service */ "./src/app/services/vacation.service.ts");
/* harmony import */ var _model_ZahtevStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/ZahtevStatus */ "./src/app/model/ZahtevStatus.ts");








let DoctorVacationRequestComponent = class DoctorVacationRequestComponent {
    constructor(dialog, formBuilder, router, vacationService) {
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.router = router;
        this.vacationService = vacationService;
        this.submitted = false;
    }
    ngOnInit() {
        this.vacationRequestForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            startingDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            finishDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    get f() {
        return this.vacationRequestForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        // Stop here if form is invalid
        if (this.vacationRequestForm.invalid) {
            return;
        }
        this.zahtev = new _model_Zahtev__WEBPACK_IMPORTED_MODULE_3__["Zahtev"](this.f.email.value, this.f.name.value, this.f.surname.value, this.f.startingDate.value, this.f.finishDate.value, _model_ZahtevStatus__WEBPACK_IMPORTED_MODULE_7__["ZahtevStatus"].AWAITING_APPROVAL);
        this.zahtev = new _model_Zahtev__WEBPACK_IMPORTED_MODULE_3__["Zahtev"](this.f.email.value, this.f.name.value, this.f.surname.value, this.f.startingDate.value, this.f.finishDate.value, _model_ZahtevStatus__WEBPACK_IMPORTED_MODULE_7__["ZahtevStatus"].AWAITING_APPROVAL);
        this.createVacation();
    }
    createVacation() {
        console.log('ovde sam');
        this.vacationService.newVacation1(this.zahtev).subscribe(data => {
            console.log('unutra sam');
            this.vacationService.addVacation1(this.zahtev);
            this.router.navigate(['/doctor/home']);
        }, error => {
            console.log(error);
            console.log('greska');
        });
    }
};
DoctorVacationRequestComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_vacation_service__WEBPACK_IMPORTED_MODULE_6__["VacationService"] }
];
DoctorVacationRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doctor-vacation-request',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./doctor-vacation-request.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-vacation-request/doctor-vacation-request.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./doctor-vacation-request.component.css */ "./src/app/components/doctor-vacation-request/doctor-vacation-request.component.css")).default]
    })
], DoctorVacationRequestComponent);



/***/ }),

/***/ "./src/app/components/home-page-admin-clinic/home-page-admin-clinic.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/home-page-admin-clinic/home-page-admin-clinic.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1wYWdlLWFkbWluLWNsaW5pYy9ob21lLXBhZ2UtYWRtaW4tY2xpbmljLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/home-page-admin-clinic/home-page-admin-clinic.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/home-page-admin-clinic/home-page-admin-clinic.component.ts ***!
  \***************************************************************************************/
/*! exports provided: HomePageAdminClinicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageAdminClinicComponent", function() { return HomePageAdminClinicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomePageAdminClinicComponent = class HomePageAdminClinicComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomePageAdminClinicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page-admin-clinic',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page-admin-clinic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-admin-clinic/home-page-admin-clinic.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page-admin-clinic.component.css */ "./src/app/components/home-page-admin-clinic/home-page-admin-clinic.component.css")).default]
    })
], HomePageAdminClinicComponent);



/***/ }),

/***/ "./src/app/components/home-page-clinical-centre-administrator/home-page-clinical-centre-administrator.component.css":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/components/home-page-clinical-centre-administrator/home-page-clinical-centre-administrator.component.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1wYWdlLWNsaW5pY2FsLWNlbnRyZS1hZG1pbmlzdHJhdG9yL2hvbWUtcGFnZS1jbGluaWNhbC1jZW50cmUtYWRtaW5pc3RyYXRvci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/home-page-clinical-centre-administrator/home-page-clinical-centre-administrator.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/components/home-page-clinical-centre-administrator/home-page-clinical-centre-administrator.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: HomePageClinicalCentreAdministratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageClinicalCentreAdministratorComponent", function() { return HomePageClinicalCentreAdministratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomePageClinicalCentreAdministratorComponent = class HomePageClinicalCentreAdministratorComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomePageClinicalCentreAdministratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page-clinical-centre-administrator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page-clinical-centre-administrator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-clinical-centre-administrator/home-page-clinical-centre-administrator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page-clinical-centre-administrator.component.css */ "./src/app/components/home-page-clinical-centre-administrator/home-page-clinical-centre-administrator.component.css")).default]
    })
], HomePageClinicalCentreAdministratorComponent);



/***/ }),

/***/ "./src/app/components/home-page-doctor/home-page-doctor.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/home-page-doctor/home-page-doctor.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1wYWdlLWRvY3Rvci9ob21lLXBhZ2UtZG9jdG9yLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/home-page-doctor/home-page-doctor.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/home-page-doctor/home-page-doctor.component.ts ***!
  \***************************************************************************/
/*! exports provided: HomePageDoctorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageDoctorComponent", function() { return HomePageDoctorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomePageDoctorComponent = class HomePageDoctorComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomePageDoctorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page-doctor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page-doctor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-doctor/home-page-doctor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page-doctor.component.css */ "./src/app/components/home-page-doctor/home-page-doctor.component.css")).default]
    })
], HomePageDoctorComponent);



/***/ }),

/***/ "./src/app/components/home-page-nurse/home-page-nurse.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/home-page-nurse/home-page-nurse.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1wYWdlLW51cnNlL2hvbWUtcGFnZS1udXJzZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/home-page-nurse/home-page-nurse.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/home-page-nurse/home-page-nurse.component.ts ***!
  \*************************************************************************/
/*! exports provided: HomePageNurseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageNurseComponent", function() { return HomePageNurseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomePageNurseComponent = class HomePageNurseComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomePageNurseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nurse-home-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page-nurse.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-nurse/home-page-nurse.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page-nurse.component.css */ "./src/app/components/home-page-nurse/home-page-nurse.component.css")).default]
    })
], HomePageNurseComponent);



/***/ }),

/***/ "./src/app/components/home-page-patient/home-page-patient.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/home-page-patient/home-page-patient.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1wYWdlLXBhdGllbnQvaG9tZS1wYWdlLXBhdGllbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/home-page-patient/home-page-patient.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/home-page-patient/home-page-patient.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HomePagePatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePagePatientComponent", function() { return HomePagePatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_examination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/examination.service */ "./src/app/services/examination.service.ts");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user-service.service */ "./src/app/services/user-service.service.ts");




let HomePagePatientComponent = class HomePagePatientComponent {
    constructor(examinationService, userService) {
        this.examinationService = examinationService;
        this.userService = userService;
        this.user = this.userService.getLoggedUser();
        this.tmp = examinationService.getMHforP(this.user.email);
        this.examinationService.setMHFP(this.tmp);
    }
    ngOnInit() {
    }
};
HomePagePatientComponent.ctorParameters = () => [
    { type: _services_examination_service__WEBPACK_IMPORTED_MODULE_2__["ExaminationService"] },
    { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"] }
];
HomePagePatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page-patient',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page-patient.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-patient/home-page-patient.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page-patient.component.css */ "./src/app/components/home-page-patient/home-page-patient.component.css")).default]
    })
], HomePagePatientComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".image{\r\n  height:40em; background-size:cover; width:auto;\r\n  background-image:url('2.jpg');\r\n  background-position:50% 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBRSxxQkFBcUIsRUFBRSxVQUFVO0VBQzlDLDZCQUE2QjtFQUM3QiwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdle1xyXG4gIGhlaWdodDo0MGVtOyBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7IHdpZHRoOmF1dG87XHJcbiAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJzIuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjo1MCUgNTAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.main-content {\r\n  margin: 20px 0;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYzs7QUFFaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginUser, LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUser", function() { return LoginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _model_role__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/role */ "./src/app/model/role.ts");
/* harmony import */ var _services_doctor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/doctor.service */ "./src/app/services/doctor.service.ts");
/* harmony import */ var _services_clinic_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/clinic.service */ "./src/app/services/clinic.service.ts");
/* harmony import */ var _services_nurse_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/nurse-service.service */ "./src/app/services/nurse-service.service.ts");
/* harmony import */ var _services_admin_clinic_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/admin-clinic.service */ "./src/app/services/admin-clinic.service.ts");
/* harmony import */ var _services_clinical_centre_administrator_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/clinical-centre-administrator.service */ "./src/app/services/clinical-centre-administrator.service.ts");
/* harmony import */ var _model_patientStatus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../model/patientStatus */ "./src/app/model/patientStatus.ts");
/* harmony import */ var _services_examination_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/examination.service */ "./src/app/services/examination.service.ts");
/* harmony import */ var _services_medical_record_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/medical-record.service */ "./src/app/services/medical-record.service.ts");
/* harmony import */ var _services_examination_type_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/examination-type.service */ "./src/app/services/examination-type.service.ts");
















class LoginUser {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}
let LoginComponent = class LoginComponent {
    constructor(patientService, formBuilder, router, userService, doctorService, clinicalService, nurseService, adminClinicService, clinicalCentreAdministratorService, examinationService, medicalRecordService, examinationsTypeService) {
        this.patientService = patientService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.doctorService = doctorService;
        this.clinicalService = clinicalService;
        this.nurseService = nurseService;
        this.adminClinicService = adminClinicService;
        this.clinicalCentreAdministratorService = clinicalCentreAdministratorService;
        this.examinationService = examinationService;
        this.medicalRecordService = medicalRecordService;
        this.examinationsTypeService = examinationsTypeService;
        this.submitted = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    // Convenience getter for easy access to form fields
    get f() {
        return this.loginForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        // Stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loginUser = new LoginUser(this.f.email.value, this.f.password.value);
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value));
        this.user = this.userService.getUser(this.f.email.value);
        this.patient = this.patientService.getPatient(this.f.email.value);
        this.attemptPatientLogin();
    }
    attemptPatientLogin() {
        if (this.user.role === _model_role__WEBPACK_IMPORTED_MODULE_6__["Role"].PATIENT && this.loginUser.password === this.user.password && this.patient.status === _model_patientStatus__WEBPACK_IMPORTED_MODULE_12__["PatientStatus"].ACTIVATED) {
            this.patientService.loginPatient(this.user).subscribe(data => {
                console.log(data);
                if (data !== null) {
                    alert('Successful logged in');
                    this.userService.setLoggedUser(this.user);
                    this.MRFR = this.medicalRecordService.getMRforP(this.user.email);
                    this.medicalRecordService.setMRFP(this.MRFR);
                    this.router.navigate(['/patient/home']);
                }
                else {
                    alert('Login error');
                }
            }, error => {
                console.log(error);
            });
        }
        else if (this.user.role === _model_role__WEBPACK_IMPORTED_MODULE_6__["Role"].DOCTOR && this.loginUser.password === this.user.password) {
            this.doctorService.loginDoctor(this.user).subscribe(data => {
                console.log(data);
                if (data !== null) {
                    alert('Successful logged in');
                    this.router.navigate(['/doctor/home']);
                }
                else {
                    alert('Login error');
                }
            }, error => {
                console.log(error);
            });
        }
        else if (this.user.role === _model_role__WEBPACK_IMPORTED_MODULE_6__["Role"].NURSE && this.loginUser.password === this.user.password) {
            console.log(this.user);
            this.nurseService.loginNurse(this.user).subscribe(data => {
                console.log(data);
                if (data !== null) {
                    alert('Successful logged in');
                    this.router.navigate(['/nurse/home']);
                }
                else {
                    alert('Login error');
                }
            }, error => {
                console.log(error);
            });
        }
        else if (this.user.role === _model_role__WEBPACK_IMPORTED_MODULE_6__["Role"].CLINIC_ADMINISTRATOR && this.loginUser.password === this.user.password) {
            console.log(this.user);
            this.adminClinicService.loginAdminClinic(this.user).subscribe(data => {
                console.log(data);
                if (data !== null) {
                    alert('Successful logged in');
                    this.router.navigate(['/admin_clinic/home']);
                }
                else {
                    alert('Login error');
                }
            }, error => {
                console.log(error);
            });
        }
        else if (this.user.role === _model_role__WEBPACK_IMPORTED_MODULE_6__["Role"].CLINICAL_CENTRE_ADMINISTRATOR && this.loginUser.password === this.user.password) {
            console.log(this.user);
            this.clinicalCentreAdministratorService.loginAdmin(this.user).subscribe(data => {
                console.log(data);
                if (data !== null) {
                    alert('Successful logged in');
                    this.router.navigate(['/clinical-centre-admin/home']);
                }
                else {
                    alert('Login error');
                }
            }, error => {
                console.log(error);
            });
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_5__["UserServiceService"] },
    { type: _services_doctor_service__WEBPACK_IMPORTED_MODULE_7__["DoctorService"] },
    { type: _services_clinic_service__WEBPACK_IMPORTED_MODULE_8__["ClinicService"] },
    { type: _services_nurse_service_service__WEBPACK_IMPORTED_MODULE_9__["NurseServiceService"] },
    { type: _services_admin_clinic_service__WEBPACK_IMPORTED_MODULE_10__["AdminClinicService"] },
    { type: _services_clinical_centre_administrator_service__WEBPACK_IMPORTED_MODULE_11__["ClinicalCentreAdministratorService"] },
    { type: _services_examination_service__WEBPACK_IMPORTED_MODULE_13__["ExaminationService"] },
    { type: _services_medical_record_service__WEBPACK_IMPORTED_MODULE_14__["MedicalRecordService"] },
    { type: _services_examination_type_service__WEBPACK_IMPORTED_MODULE_15__["ExaminationsTypeService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/medical-history-patient/medical-history-patient.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/medical-history-patient/medical-history-patient.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  width: 75%;\r\n  margin-top:50px;\r\n  margin-left:300px;\r\n}\r\n\r\nth.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  margin-top:50px;\r\n  margin-left:300px;\r\n  width: 75%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZWRpY2FsLWhpc3RvcnktcGF0aWVudC9tZWRpY2FsLWhpc3RvcnktcGF0aWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lZGljYWwtaGlzdG9yeS1wYXRpZW50L21lZGljYWwtaGlzdG9yeS1wYXRpZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW4tdG9wOjUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6MzAwcHg7XHJcbn1cclxuXHJcbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tdG9wOjUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6MzAwcHg7XHJcbiAgd2lkdGg6IDc1JTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/medical-history-patient/medical-history-patient.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/medical-history-patient/medical-history-patient.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MedicalHistoryPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalHistoryPatientComponent", function() { return MedicalHistoryPatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _services_examination_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/examination.service */ "./src/app/services/examination.service.ts");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _model_examinationStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/examinationStatus */ "./src/app/model/examinationStatus.ts");







let MedicalHistoryPatientComponent = class MedicalHistoryPatientComponent {
    constructor(patientService, examinationService, userService) {
        this.patientService = patientService;
        this.examinationService = examinationService;
        this.userService = userService;
        this.displayedColumns = ['Kind', 'Clinic', 'Doctor', 'StartTime', 'EndTime'];
        this.medicalDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.examinations = this.examinationService.getAllExaminations();
        this.tmp = new Array();
        this.loggedUser = this.userService.isLoggedIn();
        this.tmpStr = this.loggedUser.split(',');
        this.tmpStr1 = this.tmpStr[0].split(':');
        this.user = JSON.parse(this.loggedUser);
    }
    ngOnInit() {
        this.all();
    }
    all() {
        // Ovako ostavljeno posto ovako jedino radi tabela.
        for (const c of this.examinations) {
            if (c.status !== _model_examinationStatus__WEBPACK_IMPORTED_MODULE_6__["ExaminationStatus"].PREDEF_AVAILABLE) {
                if (c.patient.email === this.user.email) {
                    this.tmp.push(c);
                }
            }
        }
        this.medicalDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tmp);
    }
};
MedicalHistoryPatientComponent.ctorParameters = () => [
    { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"] },
    { type: _services_examination_service__WEBPACK_IMPORTED_MODULE_4__["ExaminationService"] },
    { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_5__["UserServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], MedicalHistoryPatientComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
], MedicalHistoryPatientComponent.prototype, "sort", void 0);
MedicalHistoryPatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-medical-history-patient',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./medical-history-patient.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/medical-history-patient/medical-history-patient.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./medical-history-patient.component.css */ "./src/app/components/medical-history-patient/medical-history-patient.component.css")).default]
    })
], MedicalHistoryPatientComponent);



/***/ }),

/***/ "./src/app/components/medical-record-dialog/medical-record-dialog.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/medical-record-dialog/medical-record-dialog.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVkaWNhbC1yZWNvcmQtZGlhbG9nL21lZGljYWwtcmVjb3JkLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/medical-record-dialog/medical-record-dialog.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/medical-record-dialog/medical-record-dialog.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MedicalRecordDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalRecordDialogComponent", function() { return MedicalRecordDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_medical_record_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/medical-record.service */ "./src/app/services/medical-record.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let MedicalRecordDialogComponent = class MedicalRecordDialogComponent {
    constructor(formBuilder, patientService, dialogRef, medicalService, router, data) {
        this.formBuilder = formBuilder;
        this.patientService = patientService;
        this.dialogRef = dialogRef;
        this.medicalService = medicalService;
        this.router = router;
        this.submitted = false;
        this.records = medicalService.getAllMedicalRecords();
        this.record = patientService.getPatient1();
        this.setAll();
        this.medicalRecord = medicalService.getMedicalRecordForDialog();
        console.log('blabla');
        console.log(this.medicalRecord);
    }
    ngOnInit() {
        // this.setAll();
        this.medicalRecordForm = this.formBuilder.group({
            height: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.medicalRecord.height),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.medicalRecord.weight),
            bloodType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.medicalRecord.bloodType),
            allergies: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.medicalRecord.allergies),
            reports: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.medicalRecord.examinationReports)
        });
    }
    get f() {
        return this.medicalRecordForm.controls;
    }
    close() {
        this.dialogRef.close();
    }
    onSubmit() {
        if (this.medicalRecordForm.invalid) {
            return;
        }
        //  this.medicalRecord.set(this.f.height.value, this.f.weight.value, this.f.bloodType.value, this.f.allergies.value)
        this.medicalRecord.height = this.f.height.value;
        this.medicalRecord.weight = this.f.weight.value;
        this.medicalRecord.bloodType = this.f.bloodType.value;
        this.medicalRecord.allergies = this.f.allergies.value;
        this.medicalRecord.examinationReports = this.f.reports.value;
        console.log(this.medicalRecord);
        this.editMedicalRecord();
        this.dialogRef.close(this.medicalRecord);
    }
    editMedicalRecord() {
        this.medicalService.editMedicalRecord(this.medicalRecord).subscribe(data => {
            this.medicalService.setMedicalRecord(this.medicalRecord);
            this.router.navigate(['/doctor/MedicalRecord']);
        }, error => {
            alert('Error edit Medical record');
            console.log(error);
        });
    }
    setAll() {
        for (const c of this.records) {
            if (c.patient.email === this.record.email) {
                this.medicalRecord = c;
                // Ovde da se otkomentarise kad se doda reports iz baza u klasu medicalRecord
                // for (const r of this.mr.reports) {
                // this.reports = r.comment + ' ';
                // }
            }
        }
    }
};
MedicalRecordDialogComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: _services_medical_record_service__WEBPACK_IMPORTED_MODULE_5__["MedicalRecordService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
];
MedicalRecordDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-medical-record-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./medical-record-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/medical-record-dialog/medical-record-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./medical-record-dialog.component.css */ "./src/app/components/medical-record-dialog/medical-record-dialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
], MedicalRecordDialogComponent);



/***/ }),

/***/ "./src/app/components/medical-record-patient/medical-record-patient.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/medical-record-patient/medical-record-patient.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-input-placeholder {\r\n  size: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZWRpY2FsLXJlY29yZC1wYXRpZW50L21lZGljYWwtcmVjb3JkLXBhdGllbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVkaWNhbC1yZWNvcmQtcGF0aWVudC9tZWRpY2FsLXJlY29yZC1wYXRpZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBzaXplOiBhdXRvO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/medical-record-patient/medical-record-patient.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/medical-record-patient/medical-record-patient.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MedicalRecordPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalRecordPatientComponent", function() { return MedicalRecordPatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_medical_record_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/medical-record.service */ "./src/app/services/medical-record.service.ts");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user-service.service */ "./src/app/services/user-service.service.ts");




let MedicalRecordPatientComponent = class MedicalRecordPatientComponent {
    constructor(medicalRecordService, userService) {
        this.medicalRecordService = medicalRecordService;
        this.userService = userService;
        this.height = 0;
        this.weight = 0;
        this.bloodType = '';
        this.allergies = '';
        this.reports = '';
        this.records = new Array();
        this.loggedUser = this.userService.isLoggedIn();
        this.mr = medicalRecordService.getMRFP();
        this.user = JSON.parse(this.loggedUser);
        this.setAll();
    }
    ngOnInit() {
        this.setAll();
    }
    setAll() {
        if (this.mr !== null) {
            this.height = this.mr.height;
            this.weight = this.mr.weight;
            this.bloodType = this.mr.bloodType;
            this.allergies = this.mr.allergies;
            for (const r of this.mr.examinationReports) {
                this.reports = r.comment + '\n';
            }
        }
    }
};
MedicalRecordPatientComponent.ctorParameters = () => [
    { type: _services_medical_record_service__WEBPACK_IMPORTED_MODULE_2__["MedicalRecordService"] },
    { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"] }
];
MedicalRecordPatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-medical-record-patient',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./medical-record-patient.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/medical-record-patient/medical-record-patient.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./medical-record-patient.component.css */ "./src/app/components/medical-record-patient/medical-record-patient.component.css")).default]
    })
], MedicalRecordPatientComponent);



/***/ }),

/***/ "./src/app/components/nurse-date-picker/nurse-date-picker.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/nurse-date-picker/nurse-date-picker.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnVyc2UtZGF0ZS1waWNrZXIvbnVyc2UtZGF0ZS1waWNrZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/nurse-date-picker/nurse-date-picker.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/nurse-date-picker/nurse-date-picker.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NurseDatePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NurseDatePickerComponent", function() { return NurseDatePickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NurseDatePickerComponent = class NurseDatePickerComponent {
    constructor() { }
    ngOnInit() {
    }
};
NurseDatePickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nurse-date-picker',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nurse-date-picker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-date-picker/nurse-date-picker.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nurse-date-picker.component.css */ "./src/app/components/nurse-date-picker/nurse-date-picker.component.css")).default]
    })
], NurseDatePickerComponent);

/** @title Basic datepicker */


/***/ }),

/***/ "./src/app/components/nurse-list-patient/nurse-list-patient.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/nurse-list-patient/nurse-list-patient.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\r\n  width: 100%;\r\n\r\n}\r\n\r\ntable {\r\n  width: 75%;\r\n  margin-top:50px;\r\n  margin-left:300px;\r\n\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  margin-top:50px;\r\n  margin-left:300px;\r\n  width: 75%;\r\n}\r\n\r\nmat-paginator {\r\n  width: 75%;\r\n  margin-left:300px;\r\n}\r\n\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: #777;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n\r\n.example-element-diagram {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n\r\n.example-element-name {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n\r\n.example-element-description {\r\n  padding: 16px;\r\n}\r\n\r\n.example-element-description-attribution {\r\n  opacity: 0.5;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9udXJzZS1saXN0LXBhdGllbnQvbnVyc2UtbGlzdC1wYXRpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXOztBQUViOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixpQkFBaUI7O0FBRW5COztBQUNBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBYTtFQUFiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL251cnNlLWxpc3QtcGF0aWVudC9udXJzZS1saXN0LXBhdGllbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW4tdG9wOjUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6MzAwcHg7XHJcblxyXG59XHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi10b3A6NTBweDtcclxuICBtYXJnaW4tbGVmdDozMDBweDtcclxuICB3aWR0aDogNzUlO1xyXG59XHJcbm1hdC1wYWdpbmF0b3Ige1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luLWxlZnQ6MzAwcHg7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNzc3O1xyXG59XHJcblxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGlhZ3JhbSB7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGhlaWdodDogMTA0cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24ge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24tYXR0cmlidXRpb24ge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/nurse-list-patient/nurse-list-patient.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/nurse-list-patient/nurse-list-patient.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NurseListPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NurseListPatientComponent", function() { return NurseListPatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let NurseListPatientComponent = class NurseListPatientComponent {
    constructor(patientService) {
        this.patientService = patientService;
        this.displayedColumns = ['name', 'surname', 'insuranceID'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.patients = new Array();
        this.patients = this.patientService.getAllPatients();
        this.all();
    }
    ngOnInit() {
        this.all();
        this.dataSource.paginator = this.paginator;
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    all() {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.patientService.getAllPatients());
    }
};
NurseListPatientComponent.ctorParameters = () => [
    { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], NurseListPatientComponent.prototype, "paginator", void 0);
NurseListPatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nurse-list-patient',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nurse-list-patient.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-list-patient/nurse-list-patient.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nurse-list-patient.component.css */ "./src/app/components/nurse-list-patient/nurse-list-patient.component.css")).default]
    })
], NurseListPatientComponent);



/***/ }),

/***/ "./src/app/components/nurse-profile/nurse-profile.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/nurse-profile/nurse-profile.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnVyc2UtcHJvZmlsZS9udXJzZS1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/nurse-profile/nurse-profile.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/nurse-profile/nurse-profile.component.ts ***!
  \*********************************************************************/
/*! exports provided: NurseProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NurseProfileComponent", function() { return NurseProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _model_nurse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/nurse */ "./src/app/model/nurse.ts");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_nurse_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/nurse-service.service */ "./src/app/services/nurse-service.service.ts");
/* harmony import */ var _model_role__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/role */ "./src/app/model/role.ts");









let NurseProfileComponent = class NurseProfileComponent {
    constructor(formBuilder, router, nurseService, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.nurseService = nurseService;
        this.userService = userService;
        this.submitted = false;
        this.user = JSON.parse(userService.isLoggedIn());
        console.log(this.user);
        this.selectedNurse = nurseService.getNurse(this.user.email);
    }
    ngOnInit() {
        this.nurseProfileForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedNurse.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedNurse.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedNurse.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedNurse.surname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedNurse.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            workHoursFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedNurse.workHoursFrom, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            workHoursTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedNurse.workHoursTo, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    get f() {
        return this.nurseProfileForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        // Stop here if form is invalid
        if (this.nurseProfileForm.invalid) {
            return;
        }
        this.nurse = new _model_nurse__WEBPACK_IMPORTED_MODULE_3__["Nurse"](this.f.email.value, this.f.password.value, this.f.name.value, this.f.surname.value, this.f.phone.value, this.f.workHoursFrom.value, this.f.workHoursTo.value);
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_4__["User"](this.f.email.value, this.f.password.value, _model_role__WEBPACK_IMPORTED_MODULE_8__["Role"].NURSE);
        this.editNurse();
    }
    editNurse() {
        this.nurseService.editNurse(this.nurse).subscribe(data => {
            this.userService.setUser(this.user);
            this.nurseService.setNurse(this.nurse);
            this.router.navigate(['/nurse/home']);
        }, error => {
            alert('Error edit nurse');
            console.log(error);
        });
    }
};
NurseProfileComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_nurse_service_service__WEBPACK_IMPORTED_MODULE_7__["NurseServiceService"] },
    { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_5__["UserServiceService"] }
];
NurseProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nurse-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nurse-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-profile/nurse-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nurse-profile.component.css */ "./src/app/components/nurse-profile/nurse-profile.component.css")).default]
    })
], NurseProfileComponent);



/***/ }),

/***/ "./src/app/components/nurse-vacation-request/nurse-vacation-request.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/nurse-vacation-request/nurse-vacation-request.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnVyc2UtdmFjYXRpb24tcmVxdWVzdC9udXJzZS12YWNhdGlvbi1yZXF1ZXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/nurse-vacation-request/nurse-vacation-request.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/nurse-vacation-request/nurse-vacation-request.component.ts ***!
  \***************************************************************************************/
/*! exports provided: NurseVacationRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NurseVacationRequestComponent", function() { return NurseVacationRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _model_Zahtev__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/Zahtev */ "./src/app/model/Zahtev.ts");
/* harmony import */ var _services_vacation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/vacation.service */ "./src/app/services/vacation.service.ts");
/* harmony import */ var _model_ZahtevStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/ZahtevStatus */ "./src/app/model/ZahtevStatus.ts");








let NurseVacationRequestComponent = class NurseVacationRequestComponent {
    constructor(dialog, formBuilder, router, vacationService) {
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.router = router;
        this.vacationService = vacationService;
        this.submitted = false;
    }
    ngOnInit() {
        this.vacationRequestForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            startingDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            finishDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    get f() {
        return this.vacationRequestForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        // Stop here if form is invalid
        if (this.vacationRequestForm.invalid) {
            return;
        }
        this.zahtev = new _model_Zahtev__WEBPACK_IMPORTED_MODULE_5__["Zahtev"](this.f.email.value, this.f.name.value, this.f.surname.value, this.f.startingDate.value, this.f.finishDate.value, _model_ZahtevStatus__WEBPACK_IMPORTED_MODULE_7__["ZahtevStatus"].AWAITING_APPROVAL);
        // tslint:disable-next-line:max-line-length
        this.zahtev = new _model_Zahtev__WEBPACK_IMPORTED_MODULE_5__["Zahtev"](this.f.email.value, this.f.name.value, this.f.surname.value, this.f.startingDate.value, this.f.finishDate.value, _model_ZahtevStatus__WEBPACK_IMPORTED_MODULE_7__["ZahtevStatus"].AWAITING_APPROVAL);
        this.createVacation();
    }
    createVacation() {
        console.log('ovde sam');
        this.vacationService.newVacation(this.zahtev).subscribe(data => {
            console.log('unutra sam');
            this.vacationService.addVacation(this.zahtev);
            this.router.navigate(['/nurse/home']);
        }, error => {
            console.log(error);
            console.log('greska');
        });
    }
};
NurseVacationRequestComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_vacation_service__WEBPACK_IMPORTED_MODULE_6__["VacationService"] }
];
NurseVacationRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nurse-vacation-request',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nurse-vacation-request.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-vacation-request/nurse-vacation-request.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nurse-vacation-request.component.css */ "./src/app/components/nurse-vacation-request/nurse-vacation-request.component.css")).default]
    })
], NurseVacationRequestComponent);



/***/ }),

/***/ "./src/app/components/patient-make-examination/patient-make-examination.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/patient-make-examination/patient-make-examination.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF0aWVudC1tYWtlLWV4YW1pbmF0aW9uL3BhdGllbnQtbWFrZS1leGFtaW5hdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/patient-make-examination/patient-make-examination.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/patient-make-examination/patient-make-examination.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PatientMakeExaminationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientMakeExaminationComponent", function() { return PatientMakeExaminationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_doctor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/doctor.service */ "./src/app/services/doctor.service.ts");
/* harmony import */ var _services_examination_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/examination.service */ "./src/app/services/examination.service.ts");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _services_clinic_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/clinic.service */ "./src/app/services/clinic.service.ts");
/* harmony import */ var _services_admin_clinic_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/admin-clinic.service */ "./src/app/services/admin-clinic.service.ts");









let PatientMakeExaminationComponent = class PatientMakeExaminationComponent {
    constructor(dialogRef, doctorService, clinicService, formBuilder, examinationServce, userService, adminClinicService, data) {
        this.dialogRef = dialogRef;
        this.doctorService = doctorService;
        this.clinicService = clinicService;
        this.formBuilder = formBuilder;
        this.examinationServce = examinationServce;
        this.userService = userService;
        this.adminClinicService = adminClinicService;
        this.termins = new Array();
        this.kinds = new Array();
        this.AdminClinics = new Array();
        this.k = 'Examination';
        this.k1 = 'Operation';
        this.adminsClinic = '';
        this.doctor = doctorService.getDoctorForMake();
        this.date = doctorService.getDate();
        this.termins = doctorService.getDoctorsTermins(this.date, this.doctor.email);
        this.user = userService.getLoggedUser();
        this.type = clinicService.getType();
        this.clinic = clinicService.getClinicForExamination();
        this.kinds = new Array();
        this.kinds.push(this.k);
        this.kinds.push(this.k1);
        this.AdminClinics = adminClinicService.getAdminClinicsWithClinicId(this.clinic.id.toString());
    }
    ngOnInit() {
        this.MakeGroup = this.formBuilder.group({
            terminTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            kind: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
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
        const interval = this.f.terminTime.value;
        console.log(this.AdminClinics);
        for (const a of this.AdminClinics) {
            this.adminsClinic = this.adminsClinic + a.email + ',';
        }
        const finalAdminClinic = this.adminsClinic.substring(0, this.adminsClinic.length - 1);
        console.log(finalAdminClinic);
        this.examinationServce.makeExamination(interval, this.user.email, this.doctor.email, this.type, this.clinic.id.toString(), kindTest, finalAdminClinic).subscribe(data => {
            this.dialogRef.close();
        }, error => {
            console.log(error);
        });
    }
    close() {
        this.dialogRef.close();
    }
};
PatientMakeExaminationComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: _services_doctor_service__WEBPACK_IMPORTED_MODULE_4__["DoctorService"] },
    { type: _services_clinic_service__WEBPACK_IMPORTED_MODULE_7__["ClinicService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_examination_service__WEBPACK_IMPORTED_MODULE_5__["ExaminationService"] },
    { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_6__["UserServiceService"] },
    { type: _services_admin_clinic_service__WEBPACK_IMPORTED_MODULE_8__["AdminClinicService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
PatientMakeExaminationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patient-make-examination',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./patient-make-examination.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-make-examination/patient-make-examination.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./patient-make-examination.component.css */ "./src/app/components/patient-make-examination/patient-make-examination.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], PatientMakeExaminationComponent);



/***/ }),

/***/ "./src/app/components/patient-profile/patient-profile.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/patient-profile/patient-profile.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF0aWVudC1wcm9maWxlL3BhdGllbnQtcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/patient-profile/patient-profile.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/patient-profile/patient-profile.component.ts ***!
  \*************************************************************************/
/*! exports provided: PatientProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientProfileComponent", function() { return PatientProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _model_patient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/patient */ "./src/app/model/patient.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _model_patientStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/patientStatus */ "./src/app/model/patientStatus.ts");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _model_role__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model/role */ "./src/app/model/role.ts");










let PatientProfileComponent = class PatientProfileComponent {
    constructor(formBuilder, router, patientService, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.patientService = patientService;
        this.userService = userService;
        this.submitted = false;
        this.user = JSON.parse(userService.isLoggedIn());
        console.log(this.user);
        this.selectedPatient = patientService.getPatient(this.user.email);
    }
    ngOnInit() {
        this.patientProfileForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedPatient.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedPatient.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedPatient.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedPatient.surname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedPatient.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedPatient.city, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedPatient.country, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedPatient.number, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9)]),
            insuranceID: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedPatient.insuranceID, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(13),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(13)]),
        });
    }
    get f() {
        return this.patientProfileForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        // Stop here if form is invalid
        if (this.patientProfileForm.invalid) {
            return;
        }
        this.patient = new _model_patient__WEBPACK_IMPORTED_MODULE_3__["Patient"](this.f.email.value, this.f.password.value, this.f.name.value, this.f.surname.value, this.f.number.value, this.f.address.value, this.f.city.value, this.f.country.value, this.f.insuranceID.value, _model_patientStatus__WEBPACK_IMPORTED_MODULE_5__["PatientStatus"].AWAITING_APPROVAL);
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_8__["User"](this.f.email.value, this.f.password.value, _model_role__WEBPACK_IMPORTED_MODULE_9__["Role"].PATIENT);
        this.editPatient();
    }
    editPatient() {
        this.patientService.editPatient(this.patient).subscribe(data => {
            this.userService.setUser(this.user);
            this.patientService.setPatient(this.patient);
            this.router.navigate(['/patient/home']);
        }, error => {
            alert('Error edit patient');
            console.log(error);
        });
    }
};
PatientProfileComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_6__["PatientService"] },
    { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_7__["UserServiceService"] }
];
PatientProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patient-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./patient-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-profile/patient-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./patient-profile.component.css */ "./src/app/components/patient-profile/patient-profile.component.css")).default]
    })
], PatientProfileComponent);



/***/ }),

/***/ "./src/app/components/predef-examination-dialog/predef-examination-dialog.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/predef-examination-dialog/predef-examination-dialog.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmVkZWYtZXhhbWluYXRpb24tZGlhbG9nL3ByZWRlZi1leGFtaW5hdGlvbi1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJlZGVmLWV4YW1pbmF0aW9uLWRpYWxvZy9wcmVkZWYtZXhhbWluYXRpb24tZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/predef-examination-dialog/predef-examination-dialog.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/predef-examination-dialog/predef-examination-dialog.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: PredefExaminationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredefExaminationDialogComponent", function() { return PredefExaminationDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_examination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/examination.service */ "./src/app/services/examination.service.ts");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user-service.service */ "./src/app/services/user-service.service.ts");





let PredefExaminationDialogComponent = class PredefExaminationDialogComponent {
    constructor(examinationService, userService, dialogRef) {
        this.examinationService = examinationService;
        this.userService = userService;
        this.dialogRef = dialogRef;
        this.displayedColumns = ['StartDate', 'EndDate', 'DoctorName', 'DoctorSurname', 'Type', 'Price', 'Discount', 'Make'];
        this.examinations = new Array();
        this.examinations = examinationService.getAllPredefExaminations();
        console.log(this.examinations);
        this.ExaminationDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.examinations);
    }
    ngOnInit() {
    }
    close() {
        this.dialogRef.close();
    }
    make(examination) {
        const id = examination.id.toLocaleString();
        const user = this.userService.getLoggedUser();
        this.examinationService.makePredefExamination(id, user.email).subscribe(data => {
            this.examinations = this.examinationService.getAllPredefExaminations();
            this.ExaminationDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.examinations);
        }, error => {
            console.log(error);
        });
        this.dialogRef.close();
    }
};
PredefExaminationDialogComponent.ctorParameters = () => [
    { type: _services_examination_service__WEBPACK_IMPORTED_MODULE_3__["ExaminationService"] },
    { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_4__["UserServiceService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
PredefExaminationDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-predef-examination-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./predef-examination-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/predef-examination-dialog/predef-examination-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./predef-examination-dialog.component.css */ "./src/app/components/predef-examination-dialog/predef-examination-dialog.component.css")).default]
    })
], PredefExaminationDialogComponent);



/***/ }),

/***/ "./src/app/components/register-requests/register-requests.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/register-requests/register-requests.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  width: 75%;\r\n  margin-top:50px;\r\n  margin-left:300px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci1yZXF1ZXN0cy9yZWdpc3Rlci1yZXF1ZXN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixpQkFBaUI7O0FBRW5CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci1yZXF1ZXN0cy9yZWdpc3Rlci1yZXF1ZXN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luLXRvcDo1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OjMwMHB4O1xyXG5cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/register-requests/register-requests.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/register-requests/register-requests.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RegisterRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRequestsComponent", function() { return RegisterRequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _model_patientStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/patientStatus */ "./src/app/model/patientStatus.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let RegisterRequestsComponent = class RegisterRequestsComponent {
    constructor(patientService, changeDetectorRef, router) {
        this.patientService = patientService;
        this.changeDetectorRef = changeDetectorRef;
        this.router = router;
        this.displayedColumns = ['email', 'approving'];
        this.RequestsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.all();
    }
    ngOnInit() {
        this.all();
    }
    all() {
        this.RequestsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.patientService.getAllRequests());
    }
    onAccept(patient) {
        this.p = this.patientService.getPatient(patient.email);
        this.p.status = _model_patientStatus__WEBPACK_IMPORTED_MODULE_4__["PatientStatus"].APPROVED;
        this.editPatient(patient);
        this.deleteRow(patient);
    }
    editPatient(patient) {
        this.patientService.editPatient(this.p).subscribe(data => {
            this.patientService.setPatient(this.p);
            this.deleteRow(patient);
            this.router.navigate(['/clinical-centre-admin/requests']);
        }, error => {
            alert('Error edit patient');
            console.log(error);
        });
    }
    deleteRow(d) {
        const index = this.RequestsDataSource.data.indexOf(d);
        this.RequestsDataSource.data.splice(index, 1);
    }
};
RegisterRequestsComponent.ctorParameters = () => [
    { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
RegisterRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-requests',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register-requests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-requests/register-requests.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register-requests.component.css */ "./src/app/components/register-requests/register-requests.component.css")).default]
    })
], RegisterRequestsComponent);



/***/ }),

/***/ "./src/app/components/registration/registration.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/registration/registration.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.main-content {\r\n  padding: 20px 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/registration/registration.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/registration/registration.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_patient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/patient */ "./src/app/model/patient.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _model_patientStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/patientStatus */ "./src/app/model/patientStatus.ts");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _model_role__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/role */ "./src/app/model/role.ts");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/user-service.service */ "./src/app/services/user-service.service.ts");










let RegistrationComponent = class RegistrationComponent {
    constructor(patientService, formBuilder, router, userService) {
        this.patientService = patientService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.submitted = false;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
            repeatPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(9)]),
            insuranceID: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(13)]),
        });
    }
    get f() {
        return this.registerForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        // Stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        if (this.f.password.value !== this.f.repeatPassword.value) {
            alert('Repeat password must be like passoword');
            return;
        }
        this.patient = new _model_patient__WEBPACK_IMPORTED_MODULE_2__["Patient"](this.f.email.value, this.f.password.value, this.f.name.value, this.f.surname.value, this.f.number.value, this.f.address.value, this.f.city.value, this.f.country.value, this.f.insuranceID.value, _model_patientStatus__WEBPACK_IMPORTED_MODULE_6__["PatientStatus"].AWAITING_APPROVAL);
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_7__["User"](this.f.email.value, this.f.password.value, _model_role__WEBPACK_IMPORTED_MODULE_8__["Role"].PATIENT);
        this.createPatient();
    }
    createPatient() {
        this.patientService.newPatient(this.patient).subscribe(data => {
            this.userService.addUser(this.user);
            this.patientService.addPatient(this.patient);
            this.router.navigate(['/login']);
            alert('Successful register');
        }, error => {
            alert('Error registration');
            console.log(error);
        });
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_9__["UserServiceService"] }
];
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registration/registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.component.css */ "./src/app/components/registration/registration.component.css")).default]
    })
], RegistrationComponent);



/***/ }),

/***/ "./src/app/components/vacation-request-register/vacation-request-register.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/vacation-request-register/vacation-request-register.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  width: 75%;\r\n  margin-top:50px;\r\n  margin-left:300px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92YWNhdGlvbi1yZXF1ZXN0LXJlZ2lzdGVyL3ZhY2F0aW9uLXJlcXVlc3QtcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsaUJBQWlCOztBQUVuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmFjYXRpb24tcmVxdWVzdC1yZWdpc3Rlci92YWNhdGlvbi1yZXF1ZXN0LXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW4tdG9wOjUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6MzAwcHg7XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/vacation-request-register/vacation-request-register.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/vacation-request-register/vacation-request-register.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: VacationRequestRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VacationRequestRegisterComponent", function() { return VacationRequestRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_vacation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/vacation.service */ "./src/app/services/vacation.service.ts");
/* harmony import */ var _model_ZahtevStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/ZahtevStatus */ "./src/app/model/ZahtevStatus.ts");






let VacationRequestRegisterComponent = class VacationRequestRegisterComponent {
    constructor(vacationService, changeDetectorRef, router) {
        this.vacationService = vacationService;
        this.changeDetectorRef = changeDetectorRef;
        this.router = router;
        this.displayedColumns = ['email', 'startingDate', 'finishDate', 'approving'];
        this.RequestsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.all();
    }
    ngOnInit() {
        this.all();
    }
    all() {
        this.RequestsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.vacationService.getAllRequests());
    }
    onAccept(zahtev) {
        this.p = this.vacationService.getVacations(zahtev.email);
        this.p.status = _model_ZahtevStatus__WEBPACK_IMPORTED_MODULE_5__["ZahtevStatus"].APPROVED;
        this.editVacation(zahtev);
        this.deleteRow(zahtev);
    }
    editVacation(zahtev) {
        this.vacationService.editVacation(this.p).subscribe(data => {
            this.vacationService.setVacation(this.p);
            this.deleteRow(zahtev);
            this.router.navigate(['/clinical-centre-admin/VacationRequests']);
        }, error => {
            alert('Error edit request');
            console.log(error);
        });
    }
    deleteRow(d) {
        const index = this.RequestsDataSource.data.indexOf(d);
        this.RequestsDataSource.data.splice(index, 1);
    }
};
VacationRequestRegisterComponent.ctorParameters = () => [
    { type: _services_vacation_service__WEBPACK_IMPORTED_MODULE_4__["VacationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
VacationRequestRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vacation-request-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vacation-request-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vacation-request-register/vacation-request-register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vacation-request-register.component.css */ "./src/app/components/vacation-request-register/vacation-request-register.component.css")).default]
    })
], VacationRequestRegisterComponent);



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");










































let DemoMaterialModule = class DemoMaterialModule {
};
DemoMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        ]
    })
], DemoMaterialModule);



/***/ }),

/***/ "./src/app/model/ClinicalCentreAdministrator.ts":
/*!******************************************************!*\
  !*** ./src/app/model/ClinicalCentreAdministrator.ts ***!
  \******************************************************/
/*! exports provided: ClinicalCentreAdministrator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalCentreAdministrator", function() { return ClinicalCentreAdministrator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ClinicalCentreAdministrator {
    constructor(email, password, name, surname, number1) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.number = number1;
    }
}


/***/ }),

/***/ "./src/app/model/Zahtev.ts":
/*!*********************************!*\
  !*** ./src/app/model/Zahtev.ts ***!
  \*********************************/
/*! exports provided: Zahtev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zahtev", function() { return Zahtev; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Zahtev {
    constructor(email, name, surname, startingDate, finishDate, status) {
        this.email = email;
        this.name = name;
        this.surname = surname;
        this.startingDate = startingDate;
        this.finishDate = finishDate;
        // this.doctor = doctor;
        this.status = status;
    }
}


/***/ }),

/***/ "./src/app/model/ZahtevStatus.ts":
/*!***************************************!*\
  !*** ./src/app/model/ZahtevStatus.ts ***!
  \***************************************/
/*! exports provided: ZahtevStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZahtevStatus", function() { return ZahtevStatus; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ZahtevStatus;
(function (ZahtevStatus) {
    ZahtevStatus[ZahtevStatus["AWAITING_APPROVAL"] = 0] = "AWAITING_APPROVAL";
    ZahtevStatus[ZahtevStatus["APPROVED"] = 1] = "APPROVED";
})(ZahtevStatus || (ZahtevStatus = {}));


/***/ }),

/***/ "./src/app/model/adminClinic.ts":
/*!**************************************!*\
  !*** ./src/app/model/adminClinic.ts ***!
  \**************************************/
/*! exports provided: AdminClinic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminClinic", function() { return AdminClinic; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AdminClinic {
    constructor(email, password, name, surname, number1, clinic, status) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.number = number1;
        this.status = status;
        this.clinic = clinic;
    }
}


/***/ }),

/***/ "./src/app/model/adminClinicStatus.ts":
/*!********************************************!*\
  !*** ./src/app/model/adminClinicStatus.ts ***!
  \********************************************/
/*! exports provided: AdminClinicStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminClinicStatus", function() { return AdminClinicStatus; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var AdminClinicStatus;
(function (AdminClinicStatus) {
    AdminClinicStatus[AdminClinicStatus["ACTIVE"] = 0] = "ACTIVE";
    AdminClinicStatus[AdminClinicStatus["DELETED"] = 1] = "DELETED";
})(AdminClinicStatus || (AdminClinicStatus = {}));


/***/ }),

/***/ "./src/app/model/clinic.ts":
/*!*********************************!*\
  !*** ./src/app/model/clinic.ts ***!
  \*********************************/
/*! exports provided: Clinic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clinic", function() { return Clinic; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Clinic {
    constructor(name, address, description, doctors, types, clinicRating, id) {
        this.doctors = new Array();
        this.types = new Array();
        this.name = name;
        this.address = address;
        this.description = description;
        this.doctors = doctors;
        this.clinicRating = clinicRating;
        this.types = types;
        this.id = id;
    }
}


/***/ }),

/***/ "./src/app/model/doctor.ts":
/*!*********************************!*\
  !*** ./src/app/model/doctor.ts ***!
  \*********************************/
/*! exports provided: Doctor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doctor", function() { return Doctor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Doctor {
    constructor(email, password, name, surname, number1, workHoursFrom, workHoursTo, specialized, doctorRating, clinic) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.phone = number1;
        this.workHoursFrom = workHoursFrom;
        this.workHoursTo = workHoursTo;
        this.doctorRating = doctorRating;
        this.specialized = specialized;
        this.clinic = clinic;
    }
}


/***/ }),

/***/ "./src/app/model/examination.ts":
/*!**************************************!*\
  !*** ./src/app/model/examination.ts ***!
  \**************************************/
/*! exports provided: Examination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Examination", function() { return Examination; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Examination {
    constructor(kind, status, examinationType, discount, doctorRating, clinicRating, nurse, clinic, patient, doctors, id, interval) {
        this.doctors = new Array();
        this.kind = kind;
        this.status = status;
        this.examinationType = examinationType;
        this.discount = discount;
        this.doctorRating = doctorRating;
        this.clinicRating = clinicRating;
        this.nurse = nurse;
        this.clinic = clinic;
        this.patient = patient;
        this.doctors = doctors;
        this.id = id;
        this.interval = interval;
    }
}


/***/ }),

/***/ "./src/app/model/examinationKind.ts":
/*!******************************************!*\
  !*** ./src/app/model/examinationKind.ts ***!
  \******************************************/
/*! exports provided: ExaminationKind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationKind", function() { return ExaminationKind; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ExaminationKind;
(function (ExaminationKind) {
    ExaminationKind[ExaminationKind["EXAMINATION"] = 0] = "EXAMINATION";
    ExaminationKind[ExaminationKind["OPERATION"] = 1] = "OPERATION";
})(ExaminationKind || (ExaminationKind = {}));


/***/ }),

/***/ "./src/app/model/examinationStatus.ts":
/*!********************************************!*\
  !*** ./src/app/model/examinationStatus.ts ***!
  \********************************************/
/*! exports provided: ExaminationStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationStatus", function() { return ExaminationStatus; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ExaminationStatus;
(function (ExaminationStatus) {
    ExaminationStatus[ExaminationStatus["APPROVED"] = 0] = "APPROVED";
    ExaminationStatus[ExaminationStatus["AWAITING"] = 1] = "AWAITING";
    ExaminationStatus[ExaminationStatus["PREDEF_BOOKED"] = 2] = "PREDEF_BOOKED";
    ExaminationStatus[ExaminationStatus["PREDEF_AVAILABLE"] = 3] = "PREDEF_AVAILABLE";
})(ExaminationStatus || (ExaminationStatus = {}));


/***/ }),

/***/ "./src/app/model/examinationType.ts":
/*!******************************************!*\
  !*** ./src/app/model/examinationType.ts ***!
  \******************************************/
/*! exports provided: ExaminationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationType", function() { return ExaminationType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ExaminationType {
    constructor(label, price) {
        this.label = label;
        this.price = price;
    }
}


/***/ }),

/***/ "./src/app/model/medicalRecord.ts":
/*!****************************************!*\
  !*** ./src/app/model/medicalRecord.ts ***!
  \****************************************/
/*! exports provided: MedicalRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalRecord", function() { return MedicalRecord; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class MedicalRecord {
    constructor(id, height, weight, bloodType, allergies, patient, examinationReports) {
        this.examinationReports = new Array();
        this.id = id;
        this.height = height;
        this.weight = weight;
        this.bloodType = bloodType;
        this.allergies = allergies;
        this.patient = patient;
        this.examinationReports = examinationReports;
    }
    set(height, weight, bloodType, allergies, examinationReports) {
        this.height = height;
        this.weight = weight;
        this.bloodType = bloodType;
        this.allergies = allergies;
        this.examinationReports = examinationReports;
    }
}


/***/ }),

/***/ "./src/app/model/nurse.ts":
/*!********************************!*\
  !*** ./src/app/model/nurse.ts ***!
  \********************************/
/*! exports provided: Nurse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nurse", function() { return Nurse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Nurse {
    constructor(email, password, name, surname, phone, worhHoursTo, worhHoursFrom) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.workHoursFrom = worhHoursFrom;
        this.workHoursTo = worhHoursTo;
    }
}


/***/ }),

/***/ "./src/app/model/patient.ts":
/*!**********************************!*\
  !*** ./src/app/model/patient.ts ***!
  \**********************************/
/*! exports provided: Patient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patient", function() { return Patient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Patient {
    constructor(email, password, name, surname, number1, address, city, country, insuranceId, status) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.number = number1;
        this.address = address;
        this.country = country;
        this.city = city;
        this.insuranceID = insuranceId;
        this.status = status;
    }
}


/***/ }),

/***/ "./src/app/model/patientStatus.ts":
/*!****************************************!*\
  !*** ./src/app/model/patientStatus.ts ***!
  \****************************************/
/*! exports provided: PatientStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientStatus", function() { return PatientStatus; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var PatientStatus;
(function (PatientStatus) {
    PatientStatus[PatientStatus["ACTIVATED"] = 0] = "ACTIVATED";
    PatientStatus[PatientStatus["AWAITING_APPROVAL"] = 1] = "AWAITING_APPROVAL";
    PatientStatus[PatientStatus["APPROVED"] = 2] = "APPROVED";
})(PatientStatus || (PatientStatus = {}));


/***/ }),

/***/ "./src/app/model/role.ts":
/*!*******************************!*\
  !*** ./src/app/model/role.ts ***!
  \*******************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Role;
(function (Role) {
    Role[Role["PATIENT"] = 0] = "PATIENT";
    Role[Role["DOCTOR"] = 1] = "DOCTOR";
    Role[Role["NURSE"] = 2] = "NURSE";
    Role[Role["CLINIC_ADMINISTRATOR"] = 3] = "CLINIC_ADMINISTRATOR";
    Role[Role["CLINICAL_CENTRE_ADMINISTRATOR"] = 4] = "CLINICAL_CENTRE_ADMINISTRATOR";
    Role[Role["NONE"] = 5] = "NONE";
})(Role || (Role = {}));


/***/ }),

/***/ "./src/app/model/user.ts":
/*!*******************************!*\
  !*** ./src/app/model/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(email, password, role) {
        this.email = email;
        this.password = password;
        this.role = role;
    }
    setAll(email, password, role) {
        this.email = email;
        this.password = password;
        this.role = role;
    }
}


/***/ }),

/***/ "./src/app/services/admin-clinic.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/admin-clinic.service.ts ***!
  \**************************************************/
/*! exports provided: AdminClinicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminClinicService", function() { return AdminClinicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _model_adminClinic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/adminClinic */ "./src/app/model/adminClinic.ts");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _model_adminClinicStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/adminClinicStatus */ "./src/app/model/adminClinicStatus.ts");







let AdminClinicService = class AdminClinicService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
        this.urlAdminClinic = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].adminClinic;
        this.listAdminClinic = new Array();
        this.adminClinicsWithClinicId = new Array();
        this.getAllClinicAdmins();
    }
    loginAdminClinic(adminClinic) {
        this.userService.setToken(adminClinic);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/login', adminClinic, { responseType: 'text' });
    }
    editAdminClinic(adminClinic) {
        return this.http.post(this.urlAdminClinic + '/edit', adminClinic, { responseType: 'text' });
    }
    getAdminClinic(email) {
        if (this.listAdminClinic.length === 0) {
            return null;
        }
        for (const u of this.listAdminClinic) {
            if (u.email === email) {
                return u;
            }
        }
        return null;
    }
    setAdminClinic(ac) {
        for (const ac1 of this.listAdminClinic) {
            if (ac1.email === ac.email) {
                ac1.password = ac.password;
                ac1.name = ac.name;
                ac1.surname = ac.surname;
                ac1.number = ac.number;
            }
        }
    }
    addClinicAdmin(a) {
        if (this.getAdminClinic(a.email) === null) {
            this.listAdminClinic.push(a);
        }
    }
    whichStatus(status) {
        if (status === 'ACTIVE') {
            return _model_adminClinicStatus__WEBPACK_IMPORTED_MODULE_6__["AdminClinicStatus"].ACTIVE;
        }
        else {
            return _model_adminClinicStatus__WEBPACK_IMPORTED_MODULE_6__["AdminClinicStatus"].DELETED;
        }
    }
    getAllClinicAdmins() {
        this.http.get(this.urlAdminClinic + '/all').subscribe((data) => {
            for (const c of data) {
                this.adminClinic = new _model_adminClinic__WEBPACK_IMPORTED_MODULE_3__["AdminClinic"](c.email, c.password, c.name, c.surname, c.number, c.clinic, this.whichStatus(c.status.toString()));
                this.addClinicAdmin(this.adminClinic);
                console.log(c);
                console.log('Ispod admin klinike');
                console.log(this.adminClinic);
            }
        }, error => {
            console.log(error);
        });
        return this.listAdminClinic;
    }
    newAdminClinic(adminClinic) {
        return this.http.post(this.urlAdminClinic + '/clinical-centre-admin/addAdmins', adminClinic);
    }
    addAdminClinic(ac) {
        if (this.getAdminClinic(ac.email) === null) {
            this.listAdminClinic.push(ac);
        }
    }
    getAdminClinicsWithClinicId(id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]();
        params = params.append('id', id);
        this.http.get(this.urlAdminClinic + '/adminClinicsWithClinicId', { params }).subscribe((data) => {
            this.adminClinicsWithClinicId = data;
            console.log('Admin clinic get ispod');
            console.log(this.adminClinicsWithClinicId);
        }, error => {
            console.log(error);
        });
        return this.adminClinicsWithClinicId;
    }
};
AdminClinicService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _user_service_service__WEBPACK_IMPORTED_MODULE_4__["UserServiceService"] }
];
AdminClinicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdminClinicService);



/***/ }),

/***/ "./src/app/services/clinic.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/clinic.service.ts ***!
  \********************************************/
/*! exports provided: ClinicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicService", function() { return ClinicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _model_clinic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/clinic */ "./src/app/model/clinic.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _examination_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examination-type.service */ "./src/app/services/examination-type.service.ts");






let ClinicService = class ClinicService {
    constructor(http, examinationTypeService) {
        this.http = http;
        this.examinationTypeService = examinationTypeService;
        this.urlClinic = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].clinic;
        this.listClinics = new Array();
        this.clinicsTypes = new Array();
        this.examinationTypes = new Array();
        this.examinationTypes = examinationTypeService.getAllTypes();
        this.getAllClinics();
    }
    addClinic(c) {
        if (this.getClinic(c.name) === null) {
            this.listClinics.push(c);
        }
    }
    getClinic(name) {
        if (this.listClinics.length === 0) {
            return null;
        }
        for (const u of this.listClinics) {
            if (u.name === name) {
                return u;
            }
        }
        return null;
    }
    getClinicByName(name) {
        return this.http.get(this.urlClinic + '/' + name);
    }
    getAllClinics() {
        this.http.get(this.urlClinic + '/all').subscribe((data) => {
            for (const c of data) {
                this.clinic = new _model_clinic__WEBPACK_IMPORTED_MODULE_3__["Clinic"](c.name, c.address, c.description, c.doctors, c.types, c.clinicRating, c.id);
                this.addClinic(this.clinic);
            }
        }, error => {
            console.log(error);
        });
        return this.listClinics;
    }
    newClinic(clinic) {
        return this.http.post(this.urlClinic + '/clinical-centre-admin/addClinic', clinic);
    }
    getClinicsWithType(type, date) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();
        params = params.append('type', type);
        params = params.append('date', date);
        this.clinicsTypes = new Array();
        this.http.get(this.urlClinic + '/allWithTypes', { params }).subscribe((data) => {
            for (const c of data) {
                this.clinic = new _model_clinic__WEBPACK_IMPORTED_MODULE_3__["Clinic"](c.name, c.address, c.description, c.doctors, c.types, c.clinicRating, c.id);
                this.clinicsTypes.push(this.clinic);
            }
        }, error => {
            console.log(error);
        });
        return this.clinicsTypes;
    }
    getClinicsWithTypes() {
        return this.clinicsTypes;
    }
    setType(type) {
        this.type = type;
    }
    getType() {
        return this.type;
    }
    setClinicForExamination(clinic) {
        this.clinicForExamination = clinic;
    }
    getClinicForExamination() {
        return this.clinicForExamination;
    }
};
ClinicService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _examination_type_service__WEBPACK_IMPORTED_MODULE_5__["ExaminationsTypeService"] }
];
ClinicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ClinicService);



/***/ }),

/***/ "./src/app/services/clinical-centre-administrator.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/clinical-centre-administrator.service.ts ***!
  \*******************************************************************/
/*! exports provided: ClinicalCentreAdministratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalCentreAdministratorService", function() { return ClinicalCentreAdministratorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _model_ClinicalCentreAdministrator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/ClinicalCentreAdministrator */ "./src/app/model/ClinicalCentreAdministrator.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _model_patient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/patient */ "./src/app/model/patient.ts");
/* harmony import */ var _model_patientStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/patientStatus */ "./src/app/model/patientStatus.ts");
/* harmony import */ var _patient_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patient.service */ "./src/app/services/patient.service.ts");









let ClinicalCentreAdministratorService = class ClinicalCentreAdministratorService {
    constructor(http, userService, patientService) {
        this.http = http;
        this.userService = userService;
        this.patientService = patientService;
        this.urlAdmin = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ClinicalCentreAdministrator;
        this.listAdmins = new Array();
        this.clinicalCentreAdministrator = new _model_ClinicalCentreAdministrator__WEBPACK_IMPORTED_MODULE_3__["ClinicalCentreAdministrator"]('zejak@email.com', 'Zejake123', 'Nikola', 'Zejak', '789456321');
        this.listAdmins.push(this.clinicalCentreAdministrator);
    }
    loginAdmin(clinicalCentreAdministrator) {
        this.userService.setToken(clinicalCentreAdministrator);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/login', clinicalCentreAdministrator, { responseType: 'text' });
    }
    editAdmin(clinicalCentreAdministrator) {
        return this.http.post(this.urlAdmin + '/edit', clinicalCentreAdministrator, { responseType: 'text' });
    }
    getAdmin(email) {
        if (this.listAdmins.length === 0) {
            return null;
        }
        for (const u of this.listAdmins) {
            if (u.email === email) {
                return u;
            }
        }
        return null;
    }
    setAdmin(d) {
        for (const d1 of this.listAdmins) {
            if (d1.email === d.email) {
                d1.password = d.password;
                d1.name = d.name;
                d1.surname = d.surname;
                d1.number = d.number;
            }
        }
    }
    getAllRequests() {
        this.http.get(this.urlAdmin + '/requests').subscribe((data) => {
            this.tmp = new Array();
            for (const c of data) {
                if (this.patientService.whichStatus(c.status.toString()) === _model_patientStatus__WEBPACK_IMPORTED_MODULE_7__["PatientStatus"].AWAITING_APPROVAL) {
                    this.patient = new _model_patient__WEBPACK_IMPORTED_MODULE_6__["Patient"](c.email, c.password, c.name, c.surname, c.number, c.address, c.city, c.country, c.insuranceID, this.patientService.whichStatus(c.status.toString()));
                    this.tmp.push(this.patient);
                }
            }
        }, error => {
            console.log(error);
        });
        return this.tmp;
    }
};
ClinicalCentreAdministratorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _user_service_service__WEBPACK_IMPORTED_MODULE_5__["UserServiceService"] },
    { type: _patient_service__WEBPACK_IMPORTED_MODULE_8__["PatientService"] }
];
ClinicalCentreAdministratorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ClinicalCentreAdministratorService);



/***/ }),

/***/ "./src/app/services/doctor.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/doctor.service.ts ***!
  \********************************************/
/*! exports provided: DoctorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorService", function() { return DoctorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _model_doctor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/doctor */ "./src/app/model/doctor.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-service.service */ "./src/app/services/user-service.service.ts");






let DoctorService = class DoctorService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
        this.urlDoctor = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].doctor;
        this.listDoctors = new Array();
        this.doctorss = new Array();
        this.termins = new Array();
        this.doctorsWithSearch = new Array();
        this.intervals = new Array();
        this.getAllDoctors();
    }
    loginDoctor(doctor) {
        this.userService.setToken(doctor);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/login', doctor, { responseType: 'text' });
    }
    editDoctor(doctor) {
        return this.http.post(this.urlDoctor + '/edit', doctor, { responseType: 'text' });
    }
    getDoctor(email) {
        if (this.listDoctors.length === 0) {
            return null;
        }
        for (const u of this.listDoctors) {
            if (u.email === email) {
                return u;
            }
        }
        return null;
    }
    addDoctor(d) {
        if (this.getDoctor(d.email) === null) {
            this.listDoctors.push(d);
        }
    }
    setDoctor(d) {
        for (const d1 of this.listDoctors) {
            if (d1.email === d.email) {
                d1.password = d.password;
                d1.name = d.name;
                d1.surname = d.surname;
                d1.phone = d.phone;
                d1.workHoursFrom = d.workHoursFrom;
                d1.workHoursTo = d.workHoursTo;
            }
        }
    }
    getAllDoctors() {
        this.http.get(this.urlDoctor + '/all').subscribe((data) => {
            for (const c of data) {
                this.doctor = new _model_doctor__WEBPACK_IMPORTED_MODULE_3__["Doctor"](c.email, c.password, c.name, c.surname, c.phone, c.workHoursFrom, c.workHoursTo, c.specialized, c.doctorRating, c.clinic);
                this.addDoctor(this.doctor);
            }
        }, error => {
            console.log(error);
        });
        return this.listDoctors;
    }
    getDoctorsTermins(date, email) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();
        params = params.append('date', date);
        params = params.append('email', email);
        console.log(params);
        this.http.get(this.urlDoctor + '/terminString', { params }).subscribe((data) => {
            this.termins = new Array();
            console.log('Ispod ovde');
            console.log(data);
            this.termins = data;
            this.intervals.push(this.termins);
        }, error => {
            console.log(error);
        });
        return this.termins;
    }
    getDoctorss() {
        return this.doctorss;
    }
    setDoctorss(doctorss) {
        this.doctorss = doctorss;
    }
    getDoctrosWithSearch(name, surname, rating) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();
        params = params.append('name', name);
        params = params.append('surname', surname);
        params = params.append('rating', rating);
        this.doctorsWithSearch = new Array();
        this.http.get(this.urlDoctor + '/allWithSearch', { params }).subscribe((data) => {
            console.log(data);
            for (const c of data) {
                this.doctor = new _model_doctor__WEBPACK_IMPORTED_MODULE_3__["Doctor"](c.email, c.password, c.name, c.surname, c.phone, c.workHoursFrom, c.workHoursTo, c.specialized, c.doctorRating, c.clinic);
                this.doctorsWithSearch.push(this.doctor);
                console.log(this.doctor);
            }
        }, error => {
            console.log(error);
        });
        return this.doctorsWithSearch;
    }
    setExaminationsInterval(intervals) {
        this.intervals = intervals;
        console.log('ISPOD INTERVALI');
        console.log(this.intervals);
    }
    getExaminationsInterval() {
        return this.intervals;
    }
    setDate(date) {
        this.date = date;
    }
    getDate() {
        return this.date;
    }
    setDoctorForMake(doctor) {
        this.doctorForMake = doctor;
    }
    getDoctorForMake() {
        return this.doctorForMake;
    }
};
DoctorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _user_service_service__WEBPACK_IMPORTED_MODULE_5__["UserServiceService"] }
];
DoctorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DoctorService);



/***/ }),

/***/ "./src/app/services/examination-type.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/examination-type.service.ts ***!
  \******************************************************/
/*! exports provided: ExaminationsTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationsTypeService", function() { return ExaminationsTypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_examinationType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/examinationType */ "./src/app/model/examinationType.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





let ExaminationsTypeService = class ExaminationsTypeService {
    constructor(http) {
        this.http = http;
        this.urlExaminationType = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].examinationType;
        this.examinationTypes = new Array();
    }
    getAllTypes() {
        this.http.get(this.urlExaminationType + '/all').subscribe((data) => {
            for (const c of data) {
                this.type = new _model_examinationType__WEBPACK_IMPORTED_MODULE_2__["ExaminationType"](c.label, c.price);
                this.addType(this.type);
            }
        }, error => {
            console.log(error);
        });
        console.log(this.examinationTypes);
        return this.examinationTypes;
    }
    addType(t) {
        if (this.getType(t.label) === null) {
            this.examinationTypes.push(t);
        }
    }
    getType(name) {
        if (this.examinationTypes.length === 0) {
            return null;
        }
        for (const u of this.examinationTypes) {
            if (u.label === name) {
                return u;
            }
        }
        return null;
    }
};
ExaminationsTypeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ExaminationsTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ExaminationsTypeService);



/***/ }),

/***/ "./src/app/services/examination.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/examination.service.ts ***!
  \*************************************************/
/*! exports provided: ExaminationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationService", function() { return ExaminationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _model_examination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/examination */ "./src/app/model/examination.ts");
/* harmony import */ var _model_examinationKind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/examinationKind */ "./src/app/model/examinationKind.ts");
/* harmony import */ var _model_examinationStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/examinationStatus */ "./src/app/model/examinationStatus.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");







let ExaminationService = class ExaminationService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].examination;
        this.listExaminations = new Array();
        this.examinationForDoctor = new Array();
        this.predefExaminations = new Array();
        this.MHFP = new Array();
        this.tmp = new Array();
        this.getAllExaminations();
    }
    whichKindExamination(kind) {
        if (kind === 'EXAMINATION') {
            return _model_examinationKind__WEBPACK_IMPORTED_MODULE_4__["ExaminationKind"].EXAMINATION;
        }
        else {
            return _model_examinationKind__WEBPACK_IMPORTED_MODULE_4__["ExaminationKind"].OPERATION;
        }
    }
    whichStatusExamination(status) {
        if (status === 'APPROVED') {
            return _model_examinationStatus__WEBPACK_IMPORTED_MODULE_5__["ExaminationStatus"].APPROVED;
        }
        else if (status === 'AWAITING') {
            return _model_examinationStatus__WEBPACK_IMPORTED_MODULE_5__["ExaminationStatus"].AWAITING;
        }
        else if (status === 'PREDEF_BOOKED') {
            return _model_examinationStatus__WEBPACK_IMPORTED_MODULE_5__["ExaminationStatus"].PREDEF_BOOKED;
        }
        else {
            return _model_examinationStatus__WEBPACK_IMPORTED_MODULE_5__["ExaminationStatus"].PREDEF_AVAILABLE;
        }
    }
    getAllExaminations() {
        this.http.get(this.url + '/all').subscribe((data) => {
            this.listExaminations = new Array();
            for (const c of data) {
                this.examination = new _model_examination__WEBPACK_IMPORTED_MODULE_3__["Examination"](this.whichKindExamination(c.kind.toString()), this.whichStatusExamination(c.status.toString()), c.examinationType, c.discount, c.doctorRating, c.clinicRating, c.nurse, c.clinic, c.patient, c.doctors, c.id, c.interval);
                this.listExaminations.push(this.examination);
            }
        }, error => {
            console.log(error);
        });
        console.log(this.listExaminations);
        return this.listExaminations;
    }
    addExamination(e) {
        if (this.getExamination(e.id) === null) {
            this.listExaminations.push(e);
        }
    }
    getExamination(id) {
        if (this.listExaminations.length === 0) {
            return null;
        }
        for (const e of this.listExaminations) {
            if (e.id === id) {
                return e;
            }
        }
        return null;
    }
    getAllPredefExaminations() {
        this.http.get(this.url + '/allPredefExaminations').subscribe((data) => {
            console.log('data ispod');
            console.log(data);
            this.predefExaminations = new Array();
            for (const c of data) {
                this.examination = new _model_examination__WEBPACK_IMPORTED_MODULE_3__["Examination"](this.whichKindExamination(c.kind.toString()), this.whichStatusExamination(c.status.toString()), c.examinationType, c.discount, c.doctorRating, c.clinicRating, c.nurse, c.clinic, c.patient, c.doctors, c.id, c.interval);
                this.predefExaminations.push(this.examination);
            }
        }, error => {
            console.log(error);
        });
        console.log(this.predefExaminations);
        return this.predefExaminations;
    }
    getMHforP(email) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]();
        params = params.append('email', email);
        this.tmp = new Array();
        this.http.get(this.url + '/getMHforP', { params }).subscribe((data) => {
            for (const c of data) {
                this.examination = new _model_examination__WEBPACK_IMPORTED_MODULE_3__["Examination"](this.whichKindExamination(c.kind.toString()), this.whichStatusExamination(c.status.toString()), c.examinationType, c.discount, c.doctorRating, c.clinicRating, c.nurse, c.clinic, c.patient, c.doctors, c.id, c.interval);
                this.tmp.push(this.examination);
            }
        }, error => {
            console.log(error);
        });
        this.MHFP = this.tmp;
        return this.MHFP;
    }
    setMHFP(examinations) {
        this.MHFP = examinations;
    }
    getMHFP() {
        return this.MHFP;
    }
    makePredefExamination(id, email) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]();
        params = params.append('id', id);
        params = params.append('email', email);
        return this.http.post(this.url + '/makePredefExamination', params);
    }
    makeExamination(date, patientEmail, doctorEmail, type, clinicId, kind, adminsClinic) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]();
        params = params.append('date', date);
        params = params.append('patientEmail', patientEmail);
        params = params.append('doctorEmail', doctorEmail);
        params = params.append('type', type);
        params = params.append('clinicId', clinicId);
        params = params.append('kind', kind);
        params = params.append('adminsClinic', adminsClinic);
        return this.http.post(this.url + '/addExaminationPatient', params);
    }
    getExaminationsForDoctor(email) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]();
        params = params.append('email', email);
        this.examinationForDoctor = new Array();
        this.http.get(this.url + '/allExaminationsForDoctor', { params }).subscribe((data) => {
            for (const c of data) {
                this.examinationDoctor = new _model_examination__WEBPACK_IMPORTED_MODULE_3__["Examination"](this.whichKindExamination(c.kind.toString()), this.whichStatusExamination(c.status.toString()), c.examinationType, c.discount, c.doctorRating, c.clinicRating, c.nurse, c.clinic, c.patient, c.doctors, c.id, c.interval);
                this.examinationForDoctor.push(this.examinationDoctor);
            }
        }, error => {
            console.log(error);
        });
        console.log('Ispod');
        console.log(this.examinationForDoctor);
        return this.examinationForDoctor;
    }
    getPatientForDoctors() {
        return this.examinationForDoctor;
    }
};
ExaminationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
ExaminationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ExaminationService);



/***/ }),

/***/ "./src/app/services/medical-record.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/medical-record.service.ts ***!
  \****************************************************/
/*! exports provided: MedicalRecordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalRecordService", function() { return MedicalRecordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _model_medicalRecord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/medicalRecord */ "./src/app/model/medicalRecord.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let MedicalRecordService = class MedicalRecordService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].medicalRecord;
        this.listMedicalRecord = new Array();
        this.dialogDate = false;
        this.getAllMedicalRecords();
    }
    addMedicalRecord(mr) {
        if (this.getMedicalRecord(mr.id) === null) {
            this.listMedicalRecord.push(mr);
        }
    }
    getAllMedicalRecords() {
        this.http.get(this.url + '/all').subscribe((data) => {
            this.listMedicalRecord = new Array();
            for (const c of data) {
                // Ostalo je da se doda examinaton_report u konstruktoru
                console.log('Ispod data za medial rekod');
                console.log(c);
                this.medicalRecord = new _model_medicalRecord__WEBPACK_IMPORTED_MODULE_3__["MedicalRecord"](c.id, c.height, c.weight, c.bloodType, c.allergies, c.patient, c.examinationReports);
                this.listMedicalRecord.push(this.medicalRecord);
                console.log(this.medicalRecord);
            }
        }, error => {
            console.log(error);
        });
        console.log(this.listMedicalRecord);
        return this.listMedicalRecord;
    }
    getMRforP(email) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();
        params = params.append('email', email);
        this.http.get(this.url + '/mrForP', { params }).subscribe((data) => {
            this.MRFP = data;
            console.log(this.MRFP);
        }, error => {
            console.log(error);
        });
        return this.MRFP;
    }
    getMRFP() {
        return this.MRFP;
    }
    setMRFP(medicalRecord) {
        this.MRFP = medicalRecord;
    }
    getMedicalRecord(id) {
        if (this.listMedicalRecord.length === 0) {
            return null;
        }
        for (const e of this.listMedicalRecord) {
            if (e.id === id) {
                return e;
            }
        }
    }
    editMedicalRecord(medicalRecord) {
        return this.http.post(this.url + '/edit', medicalRecord, { responseType: 'text' });
    }
    setMedicalRecord(p) {
        for (const p1 of this.listMedicalRecord) {
            if (p1.id === p.id) {
                p1.weight = p.weight;
                p1.bloodType = p.bloodType;
                p1.allergies = p.allergies;
                p1.examinationReports = p.examinationReports;
                p1.height = p.height;
                p1.patient = p.patient;
                p1.examinationReports = p.examinationReports;
                return;
            }
        }
    }
    getMedicalRecordForPatient(email) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();
        params = params.append('email', email);
        this.http.get(this.url + '/MedicalRecordForPatient', { params }).subscribe((data) => {
            this.medicalRecordForPatient = data;
        }, error => {
            console.log(error);
        });
        console.log('Ispod');
        console.log(this.medicalRecordForPatient);
        return this.medicalRecordForPatient;
    }
    setMedicalRecordForDialog(medicalRecord) {
        console.log('medicalRecord');
        this.medicalRecordForDialog = medicalRecord;
    }
    getMedicalRecordForDialog() {
        return this.medicalRecordForDialog;
    }
    getLocalDateAndTime(interval, interval1) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();
        params = params.append('interval', interval);
        params = params.append('interval1', interval1);
        this.http.get(this.url + '/DateAndTime', { params }).subscribe((data) => {
            this.dialogDate = data;
            console.log('localDateAndTime');
        }, error => {
            console.log(error);
        });
        return this.dialogDate;
    }
};
MedicalRecordService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
MedicalRecordService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MedicalRecordService);



/***/ }),

/***/ "./src/app/services/nurse-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/nurse-service.service.ts ***!
  \***************************************************/
/*! exports provided: NurseServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NurseServiceService", function() { return NurseServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _model_nurse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/nurse */ "./src/app/model/nurse.ts");






let NurseServiceService = class NurseServiceService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
        this.urlNurse = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].nurse;
        this.listNurses = new Array();
        this.getAllNurses();
    }
    loginNurse(nurse) {
        this.userService.setToken(nurse);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/login', nurse, { responseType: 'text' });
    }
    editNurse(nurse) {
        return this.http.post(this.urlNurse + '/edit', nurse, { responseType: 'text' });
    }
    getNurse(email) {
        if (this.listNurses.length === 0) {
            return null;
        }
        for (const u of this.listNurses) {
            if (u.email === email) {
                return u;
            }
        }
        return null;
    }
    setNurse(p) {
        for (const p1 of this.listNurses) {
            if (p1.email === p.email) {
                p1.name = p.name;
                p1.phone = p.phone;
                p1.surname = p.surname;
                p1.workHoursTo = p.workHoursTo;
                p1.workHoursFrom = p.workHoursFrom;
                p1.password = p.password;
                return;
            }
        }
    }
    addNurse(n) {
        if (this.getNurse(n.email) === null) {
            this.listNurses.push(n);
        }
    }
    getAllNurses() {
        this.http.get(this.urlNurse + '/all').subscribe((data) => {
            for (const c of data) {
                this.nurse = new _model_nurse__WEBPACK_IMPORTED_MODULE_5__["Nurse"](c.email, c.password, c.name, c.surname, c.phone, c.workHoursTo, c.workHoursFrom);
                this.addNurse(this.nurse);
            }
        }, error => {
            console.log(error);
        });
        return this.listNurses;
    }
};
NurseServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _user_service_service__WEBPACK_IMPORTED_MODULE_4__["UserServiceService"] }
];
NurseServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NurseServiceService);



/***/ }),

/***/ "./src/app/services/patient.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/patient.service.ts ***!
  \*********************************************/
/*! exports provided: PatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return PatientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _model_patient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/patient */ "./src/app/model/patient.ts");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _model_patientStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/patientStatus */ "./src/app/model/patientStatus.ts");







let PatientService = class PatientService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
        this.urlPatient = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].patient;
        this.listPatients = new Array();
        this.patientWithDoctor = new Array();
        this.patients = new Array();
        this.getAllPatients();
        this.getAllRequests();
    }
    newPatient(patient) {
        return this.http.post(this.urlPatient + '/register', patient);
    }
    loginPatient(patient) {
        this.userService.setToken(patient);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/login', patient, { responseType: 'text' });
    }
    activatePatient(id) {
        return this.http.put(this.urlPatient + '/activatePatient', id);
    }
    editPatient(patient) {
        return this.http.post(this.urlPatient + '/edit', patient, { responseType: 'text' });
    }
    addPatient(p) {
        if (this.getPatient(p.email) === null) {
            this.listPatients.push(p);
        }
    }
    getPatient(email) {
        if (this.listPatients.length === 0) {
            return null;
        }
        for (const u of this.listPatients) {
            if (u.email === email) {
                return u;
            }
        }
        return null;
    }
    setPatient(p) {
        for (const p1 of this.listPatients) {
            if (p1.email === p.email) {
                p1.name = p.name;
                p1.number = p.number;
                p1.country = p.country;
                p1.address = p.address;
                p1.surname = p.surname;
                p1.city = p.city;
                p1.password = p.password;
                return;
            }
        }
    }
    whichStatus(status) {
        if (status === 'AWAITING_APPROVAL') {
            return _model_patientStatus__WEBPACK_IMPORTED_MODULE_6__["PatientStatus"].AWAITING_APPROVAL;
        }
        else if (status === 'APPROVED') {
            return _model_patientStatus__WEBPACK_IMPORTED_MODULE_6__["PatientStatus"].APPROVED;
        }
        else {
            return _model_patientStatus__WEBPACK_IMPORTED_MODULE_6__["PatientStatus"].ACTIVATED;
        }
    }
    getAllPatients() {
        this.http.get(this.urlPatient + '/all').subscribe((data) => {
            for (const c of data) {
                this.patient = new _model_patient__WEBPACK_IMPORTED_MODULE_4__["Patient"](c.email, c.password, c.name, c.surname, c.number, c.address, c.city, c.country, c.insuranceID, this.whichStatus(c.status.toString()));
                this.addPatient(this.patient);
            }
        }, error => {
            console.log(error);
        });
        return this.listPatients;
    }
    getAllRequests() {
        this.http.get(this.urlPatient + '/requests').subscribe((data) => {
            this.tmp = new Array();
            for (const c of data) {
                this.patient = new _model_patient__WEBPACK_IMPORTED_MODULE_4__["Patient"](c.email, c.password, c.name, c.surname, c.number, c.address, c.city, c.country, c.insuranceID, _model_patientStatus__WEBPACK_IMPORTED_MODULE_6__["PatientStatus"].AWAITING_APPROVAL);
                this.tmp.push(this.patient);
                console.log(this.patient);
            }
        }, error => {
            console.log(error);
        });
        console.log(this.tmp);
        return this.tmp;
    }
    getPatientsForDoctor(email) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('email', email);
        this.patientWithDoctor = new Array();
        this.http.get(this.urlPatient + '/allPatientsForDoctor', { params }).subscribe((data) => {
            for (const c of data) {
                this.patient = new _model_patient__WEBPACK_IMPORTED_MODULE_4__["Patient"](c.email, c.password, c.name, c.surname, c.number, c.address, c.city, c.country, c.insuranceID, c.status);
                this.patientWithDoctor.push(this.patient);
            }
        }, error => {
            console.log(error);
        });
        console.log('Ispod');
        console.log(this.patientWithDoctor);
        return this.patientWithDoctor;
    }
    getPatientForDoctors() {
        return this.patientWithDoctor;
    }
    getPatient1() {
        return this.patient1;
    }
    setPatient1(pat) {
        console.log('setPatient');
        this.patient1 = pat;
    }
};
PatientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _user_service_service__WEBPACK_IMPORTED_MODULE_5__["UserServiceService"] }
];
PatientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PatientService);



/***/ }),

/***/ "./src/app/services/user-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/user-service.service.ts ***!
  \**************************************************/
/*! exports provided: TOKEN, UserServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN", function() { return TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceService", function() { return UserServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _model_role__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/role */ "./src/app/model/role.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







const TOKEN = 'LoggedInUser';
let UserServiceService = class UserServiceService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.list = new Array();
        this.urlUser = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].user;
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"]('', '', _model_role__WEBPACK_IMPORTED_MODULE_3__["Role"].NONE);
        this.getAllUsers();
        localStorage.setItem(TOKEN, JSON.stringify(this.user));
    }
    addUser(u) {
        if (this.getUser(u.email) === null) {
            this.list.push(u);
        }
    }
    getUser(email) {
        if (this.list.length === 0) {
            return null;
        }
        for (const u of this.list) {
            if (u.email === email) {
                return u;
            }
        }
        return null;
    }
    setUser(u) {
        for (const p1 of this.list) {
            if (p1.email === u.email) {
                p1.password = u.password;
                return;
            }
        }
    }
    setToken(user) {
        localStorage.setItem(TOKEN, JSON.stringify(user));
        this.user = user;
    }
    isLoggedIn() {
        if (localStorage.getItem(TOKEN) !== null) {
            return localStorage.getItem(TOKEN);
        }
        else {
            return null;
        }
    }
    logOut() {
        this.router.navigate(['']);
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"]('', '', _model_role__WEBPACK_IMPORTED_MODULE_3__["Role"].NONE);
        localStorage.removeItem(TOKEN);
        localStorage.setItem(TOKEN, JSON.stringify(this.user));
    }
    isPatient() {
        if (this.isLoggedIn()) {
            return this.user.role === _model_role__WEBPACK_IMPORTED_MODULE_3__["Role"].PATIENT;
        }
    }
    isDoctor() {
        if (this.isLoggedIn()) {
            return this.user.role === _model_role__WEBPACK_IMPORTED_MODULE_3__["Role"].DOCTOR;
        }
    }
    isNurse() {
        if (this.isLoggedIn()) {
            return this.user.role === _model_role__WEBPACK_IMPORTED_MODULE_3__["Role"].NURSE;
        }
    }
    isClinicalAdmin() {
        if (this.isLoggedIn()) {
            return this.user.role === _model_role__WEBPACK_IMPORTED_MODULE_3__["Role"].CLINIC_ADMINISTRATOR;
        }
    }
    isClinicalCentreAdmin() {
        if (this.isLoggedIn()) {
            return this.user.role === _model_role__WEBPACK_IMPORTED_MODULE_3__["Role"].CLINICAL_CENTRE_ADMINISTRATOR;
        }
    }
    isNone() {
        if (this.isLoggedIn()) {
            return this.user.role === _model_role__WEBPACK_IMPORTED_MODULE_3__["Role"].NONE;
        }
    }
    whichRole(role) {
        if (role === 'PATIENT') {
            return _model_role__WEBPACK_IMPORTED_MODULE_3__["Role"].PATIENT;
        }
        else if (role === 'DOCTOR') {
            return _model_role__WEBPACK_IMPORTED_MODULE_3__["Role"].DOCTOR;
        }
        else if (role === 'NURSE') {
            return _model_role__WEBPACK_IMPORTED_MODULE_3__["Role"].NURSE;
        }
        else if (role === 'CLINIC_ADMINISTRATOR') {
            return _model_role__WEBPACK_IMPORTED_MODULE_3__["Role"].CLINIC_ADMINISTRATOR;
        }
        else if (role === 'CLINICAL_CENTRE_ADMINISTRATOR') {
            return _model_role__WEBPACK_IMPORTED_MODULE_3__["Role"].CLINICAL_CENTRE_ADMINISTRATOR;
        }
        else {
            return null;
        }
    }
    getAllUsers() {
        this.http.get(this.urlUser + '/all').subscribe((data) => {
            for (const c of data) {
                this.u = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"](c.email, c.password, this.whichRole(c.role.toString()));
                this.addUser(this.u);
            }
        }, error => {
            console.log(error);
        });
        console.log(this.list);
        return this.list;
    }
    setLoggedUser(user) {
        this.user = user;
    }
    getLoggedUser() {
        return this.user;
    }
};
UserServiceService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
UserServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserServiceService);



/***/ }),

/***/ "./src/app/services/vacation.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/vacation.service.ts ***!
  \**********************************************/
/*! exports provided: VacationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VacationService", function() { return VacationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_Zahtev__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/Zahtev */ "./src/app/model/Zahtev.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _model_ZahtevStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/ZahtevStatus */ "./src/app/model/ZahtevStatus.ts");







let VacationService = class VacationService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
        this.urlVacation = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].zahtev;
        this.listVacation = new Array();
        this.getAllVacations();
        this.getAllRequests();
    }
    newVacation(zahtev) {
        return this.http.post(this.urlVacation + '/nurse/VacationRequest', zahtev);
    }
    newVacation1(zahtev) {
        return this.http.post(this.urlVacation + '/doctor/VacationRequest', zahtev);
    }
    addVacation(v) {
        if (this.getVacations(v.email) === null) {
            this.listVacation.push(v);
        }
    }
    addVacation1(v) {
        if (this.getVacations(v.email) === null) {
            this.listVacation.push(v);
        }
    }
    getVacations(email) {
        if (this.listVacation.length === 0) {
            return null;
        }
        for (const u of this.listVacation) {
            if (u.email === email) {
                return u;
            }
        }
        return null;
    }
    getVacations1(email) {
        if (this.listVacation.length === 0) {
            return null;
        }
        for (const u of this.listVacation) {
            if (u.email === email) {
                return u;
            }
        }
        return null;
    }
    editVacation(zahtev) {
        return this.http.post(this.urlVacation + '/edit', zahtev, { responseType: 'text' });
    }
    setVacation(p) {
        for (const p1 of this.listVacation) {
            if (p1.email === p.email) {
                p1.name = p.name;
                p1.surname = p.surname;
                p1.startingDate = p.startingDate;
                p1.finishDate = p.finishDate;
                return;
            }
        }
    }
    setVacation1(p) {
        for (const p1 of this.listVacation) {
            if (p1.email === p.email) {
                p1.name = p.name;
                p1.surname = p.surname;
                p1.startingDate = p.startingDate;
                p1.finishDate = p.finishDate;
                return;
            }
        }
    }
    whichStatus(status) {
        if (status === 'AWAITING_APPROVAL') {
            return _model_ZahtevStatus__WEBPACK_IMPORTED_MODULE_6__["ZahtevStatus"].AWAITING_APPROVAL;
        }
        else {
            return _model_ZahtevStatus__WEBPACK_IMPORTED_MODULE_6__["ZahtevStatus"].APPROVED;
        }
    }
    getAllVacations() {
        this.http.get(this.urlVacation + '/all').subscribe((data) => {
            for (const c of data) {
                this.zahtev = new _model_Zahtev__WEBPACK_IMPORTED_MODULE_2__["Zahtev"](c.email, c.name, c.surname, c.startingDate, c.finishDate, this.whichStatus(c.status.toString()));
                this.addVacation(this.zahtev);
            }
        }, error => {
            console.log(error);
        });
        return this.listVacation;
    }
    getAllRequests() {
        this.http.get(this.urlVacation + '/VacationRequest').subscribe((data) => {
            this.tmp = new Array();
            for (const c of data) {
                this.zahtev = new _model_Zahtev__WEBPACK_IMPORTED_MODULE_2__["Zahtev"](c.email, c.name, c.surname, c.startingDate, c.finishDate, _model_ZahtevStatus__WEBPACK_IMPORTED_MODULE_6__["ZahtevStatus"].AWAITING_APPROVAL);
                this.tmp.push(this.zahtev);
                console.log(this.zahtev);
            }
        }, error => {
            console.log(error);
        });
        console.log(this.tmp);
        return this.tmp;
    }
};
VacationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _user_service_service__WEBPACK_IMPORTED_MODULE_5__["UserServiceService"] }
];
VacationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VacationService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    baseUrl: 'http://localhost:8081',
    user: '/user',
    patient: '/patient',
    doctor: '/doctor',
    clinic: '/clinic',
    nurse: '/nurse',
    adminClinic: '/admin_clinic',
    ClinicalCentreAdministrator: '/clinical-centre-admin',
    examination: '/examination',
    medicalRecord: '/medicalRecord',
    examinationType: '/examinationType',
    zahtev: '/zahtev',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\PSW-ISA\TIM5_PSW_2019-20\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map