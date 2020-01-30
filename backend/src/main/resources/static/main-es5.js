(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n               [mode]=\"(isHandset$ | async) ? 'over' : 'side'\" [opened]=\"(isHandset$ | async) === true\">\r\n\r\n    <mat-toolbar color=\"accent\">Menu</mat-toolbar>\r\n    <mat-nav-list *ngIf = \"isNone()\">\r\n      <a mat-list-item routerLink=\"/login\">Login</a>\r\n      <a mat-list-item routerLink=\"/patient/register\">Register</a>\r\n    </mat-nav-list>\r\n\r\n    <mat-nav-list *ngIf=\"isPatient()\">\r\n      <a mat-list-item routerLink=\"/patient/profile\">Profile</a>\r\n      <a mat-list-item routerLink=\"/patient/medicalRecord\">Medical record</a>\r\n      <a mat-list-item routerLink=\"/patient/medicalHistory\">Medical history</a>\r\n      <a mat-list-item routerLink=\"/patient/clinics\">Clinics</a>\r\n      <a mat-list-item (click)=\"onLogout()\">Logout</a>\r\n    </mat-nav-list>\r\n\r\n    <mat-nav-list *ngIf=\"isDoctor()\">\r\n      <a mat-list-item routerLink=\"/doctor/list_of_patients\">List of patients</a>\r\n      <a mat-list-item routerLink=\"/doctor/exemination\">Exemination</a>\r\n      <a mat-list-item routerLink=\"/doctor/work_calendar\">Work calendar</a>\r\n      <a mat-list-item routerLink=\"/doctor/requests\">Requests</a>\r\n      <a mat-list-item routerLink=\"/doctor/operations\">Operations</a>\r\n      <a mat-list-item routerLink=\"/doctor/profile\">Profile</a>\r\n      <a mat-list-item (click)=\"onLogout()\">Logout</a>\r\n    </mat-nav-list>\r\n\r\n    <mat-nav-list *ngIf=\"isClinicAdmin()\">\r\n      <a mat-list-item routerLink=\"/admin_clinic/profile\">Profile</a>\r\n      <a mat-list-item (click)=\"onLogout()\">Logout</a>\r\n    </mat-nav-list>\r\n\r\n    <mat-nav-list *ngIf=\"isNurse()\">\r\n      <a mat-list-item routerLink=\"/nurse/profile\">Profile</a>\r\n      <a mat-list-item routerLink=\"/nurse/WorkCalendar\">WorkCalendar</a>\r\n      <a mat-list-item (click)=\"onLogout()\">Logout</a>\r\n    </mat-nav-list>\r\n\r\n    <mat-nav-list *ngIf=\"isClinicalCentreAdmin()\">\r\n      <a mat-list-item routerLink=\"/clinical-centre-admin/profile\">Profile</a>\r\n      <a mat-list-item routerLink=\"/clinical-centre-admin/addClinic\">Add Clinic</a>\r\n      <a mat-list-item routerLink=\"/clinical-centre-admin/addAdmins\">Add Administrator</a>\r\n      <a mat-list-item routerLink=\"/clinical-centre-admin/requests\">Requests</a>\r\n      <a mat-list-item (click)=\"onLogout()\">Logout</a>\r\n    </mat-nav-list>\r\n\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar color=\"accent\">\r\n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n      <span>Clinical Centre</span>\r\n    </mat-toolbar>\r\n    <!-- Add Content Here -->\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-clinic-administrator/add-clinic-administrator.component.html": 
        /*!***********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-clinic-administrator/add-clinic-administrator.component.html ***!
          \***********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 offset-md-2\">\r\n        <mat-card>\r\n          <h3>Profile</h3>\r\n          <hr>\r\n          <form [formGroup]=\"addClinicAdministratorForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n            <div class=\"form-group\">\r\n              <mat-label for=\"email\">Email</mat-label>\r\n              <input type=\"email\"  id=\"email\" formControlName=\"email\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && addClinicAdministratorForm.get('email').errors }\">\r\n\r\n              <div *ngIf=\"submitted && addClinicAdministratorForm.get('email').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"addClinicAdministratorForm.get('email').errors['required']\">Email is required</div>\r\n                <div *ngIf=\"addClinicAdministratorForm.get('email').errors['email']\">Email must be a valid email address</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">Password</label>\r\n              <input type=\"text\" id=\"password\" formControlName=\"password\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && addClinicAdministratorForm.get('password').errors }\">\r\n              <div *ngIf=\"submitted && addClinicAdministratorForm.get('password').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"addClinicAdministratorForm.get('password').errors['required']\">Password is required</div>\r\n                <div *ngIf=\"addClinicAdministratorForm.get('password').errors['minlength']\">Password must be at least 8 characters\r\n                  long</div>\r\n                <div *ngIf=\"addClinicAdministratorForm.get('password').errors['pattern']\">Password must contain at least 1 lowercase,\r\n                  1 uppercase letter\r\n                  and 1 number</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">First Name</label>\r\n              <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && addClinicAdministratorForm.get('name').errors }\" />\r\n              <div *ngIf=\"submitted && addClinicAdministratorForm.get('name').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\" addClinicAdministratorForm.get('name').errors['required']\">First Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"surname\">Last Name</label>\r\n              <input type=\"text\" id=\"surname\" formControlName=\"surname\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && addClinicAdministratorForm.get('surname').errors }\" />\r\n              <div *ngIf=\"submitted && addClinicAdministratorForm.get('surname').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"addClinicAdministratorForm.get('surname').errors['required']\">Last Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"number\">Phone Number</label>\r\n              <input type=\"number\" id=\"number\" formControlName=\"number\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && addClinicAdministratorForm.get('number').errors }\" />\r\n              <div *ngIf=\"submitted && addClinicAdministratorForm.get('number').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"addClinicAdministratorForm.get('number').errors['required']\">Phone Number is required</div>\r\n                <div *ngIf=\"addClinicAdministratorForm.get('number').errors['minlength']\">A phone number must have at least 9\r\n                  digits\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <button mat-raised-button color=\"primary\" class=\"pull-right\">Save</button>\r\n\r\n          </form>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<mat-form-field>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n<table mat-table\r\n       [dataSource]=\"dataSource\" multiTemplateDataRows\r\n       class=\"mat-elevation-z8\">\r\n  <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of displayedColumns\">\r\n    <th mat-header-cell *matHeaderCellDef> {{column}} </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\r\n  <ng-container matColumnDef=\"expandedDetail\">\r\n    <td mat-cell *matCellDef=\"let clinic\" [attr.colspan]=\"displayedColumns.length\">\r\n      <div class=\"example-element-detail\"\r\n           [@detailExpand]=\"clinic == expandedElement ? 'expanded' : 'collapsed'\">\r\n      </div>\r\n\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\"\r\n      class=\"example-element-row\"\r\n      [class.example-expanded-row]=\"expandedElement === element\"\r\n      (click)=\"expandedElement = expandedElement === element ? null : element\">\r\n  </tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n</table>\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-clinic/add-clinic.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-clinic/add-clinic.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 offset-md-2\">\r\n        <mat-card>\r\n          <h3>Add Clinic</h3>\r\n          <hr>\r\n          <form [formGroup]=\"addClinicForm\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Name</label>\r\n              <input type=\"name\" id=\"name\" formControlName=\"name\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && addClinicForm.get('name').errors }\">\r\n\r\n              <div *ngIf=\"submitted && addClinicForm.get('name').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"addClinicForm.get('name').errors['required']\">Email is required</div>\r\n                <div *ngIf=\"addClinicForm.get('name').errors['name']\">Email must be a valid email address</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"address\">Address</label>\r\n              <input type=\"text\" id=\"address\" formControlName=\"address\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && addClinicForm.get('address').errors }\" />\r\n              <div *ngIf=\"submitted && addClinicForm.get('address').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"addClinicForm.get('address').errors['required']\">Address is required</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"description\">Description</label>\r\n              <input type=\"text\" id=\"description\" formControlName=\"description\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && addClinicForm.get('description').errors }\" />\r\n              <div *ngIf=\"submitted && addClinicForm.get('description').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"addClinicForm.get('description').errors['required']\">Country is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"grade\">Grade</label>\r\n              <input type=\"grade\" id=\"grade\" formControlName=\"grade\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && addClinicForm.get('grade').errors }\" />\r\n              <div *ngIf=\"submitted && addClinicForm.get('grade').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"addClinicForm.get('grade').errors['required']\">Phone Number is required</div>\r\n                <div *ngIf=\"addClinicForm.get('grade').errors['minlength']\">A phone number must have at least 9\r\n                  digits\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <button mat-raised-button style=\"position: center\" color=\"primary\" class=\"pull-right\">Save</button>\r\n          </form>\r\n\r\n\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<mat-form-field>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n<table mat-table\r\n       [dataSource]=\"dataSource\" multiTemplateDataRows\r\n       class=\"mat-elevation-z8\">\r\n  <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of displayedColumns\">\r\n    <th mat-header-cell *matHeaderCellDef> {{column}} </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\r\n  <ng-container matColumnDef=\"expandedDetail\">\r\n    <td mat-cell *matCellDef=\"let clinic\" [attr.colspan]=\"displayedColumns.length\">\r\n      <div class=\"example-element-detail\"\r\n           [@detailExpand]=\"clinic == expandedElement ? 'expanded' : 'collapsed'\">\r\n      </div>\r\n\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\"\r\n      class=\"example-element-row\"\r\n      [class.example-expanded-row]=\"expandedElement === element\"\r\n      (click)=\"expandedElement = expandedElement === element ? null : element\">\r\n  </tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n</table>\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-clinic-profile/admin-clinic-profile.component.html": 
        /*!***************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-clinic-profile/admin-clinic-profile.component.html ***!
          \***************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 offset-md-2\">\r\n        <mat-card>\r\n          <h3>Profile</h3>\r\n          <hr>\r\n          <form [formGroup]=\"adminClinicProfileForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n            <div class=\"form-group\">\r\n              <mat-label for=\"email\">Email</mat-label>\r\n              <input type=\"email\" readonly=\"readonly\" id=\"email\" formControlName=\"email\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && adminClinicProfileForm.get('email').errors }\">\r\n\r\n              <div *ngIf=\"submitted && adminClinicProfileForm.get('email').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"adminClinicProfileForm.get('email').errors['required']\">Email is required</div>\r\n                <div *ngIf=\"adminClinicProfileForm.get('email').errors['email']\">Email must be a valid email address</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">Password</label>\r\n              <input type=\"text\" id=\"password\" formControlName=\"password\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && adminClinicProfileForm.get('password').errors }\">\r\n              <div *ngIf=\"submitted && adminClinicProfileForm.get('password').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"adminClinicProfileForm.get('password').errors['required']\">Password is required</div>\r\n                <div *ngIf=\"adminClinicProfileForm.get('password').errors['minlength']\">Password must be at least 8 characters\r\n                  long</div>\r\n                <div *ngIf=\"adminClinicProfileForm.get('password').errors['pattern']\">Password must contain at least 1 lowercase,\r\n                  1 uppercase letter\r\n                  and 1 number</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">First Name</label>\r\n              <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && adminClinicProfileForm.get('name').errors }\" />\r\n              <div *ngIf=\"submitted && adminClinicProfileForm.get('name').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\" adminClinicProfileForm.get('name').errors['required']\">First Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"surname\">Last Name</label>\r\n              <input type=\"text\" id=\"surname\" formControlName=\"surname\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && adminClinicProfileForm.get('surname').errors }\" />\r\n              <div *ngIf=\"submitted && adminClinicProfileForm.get('surname').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"adminClinicProfileForm.get('surname').errors['required']\">Last Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"number\">Phone Number</label>\r\n              <input type=\"number\" id=\"number\" formControlName=\"number\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && adminClinicProfileForm.get('number').errors }\" />\r\n              <div *ngIf=\"submitted && adminClinicProfileForm.get('number').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"adminClinicProfileForm.get('number').errors['required']\">Phone Number is required</div>\r\n                <div *ngIf=\"adminClinicProfileForm.get('number').errors['minlength']\">A phone number must have at least 9\r\n                  digits\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <button mat-raised-button color=\"primary\" class=\"pull-right\">Save</button>\r\n\r\n          </form>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinic-search-dialog/clinic-search-dialog.component.html": 
        /*!***************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinic-search-dialog/clinic-search-dialog.component.html ***!
          \***************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Clinic search</h2>\n\n<mat-dialog-content [formGroup]=\"SearchClinicsGroup\">\n\n  <div>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput id=\"date\" [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n  </div>\n  <div>\n    <mat-form-field>\n      <mat-select id=\"type\" placeholder=\"Select examination type\">\n        <mat-option *ngFor=\"let examination_type of types\" value=\"option\">{{examination_type.label}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button class=\"mat-raised-button\"(click)=\"close()\">Close</button>\n  <button class=\"mat-raised-button mat-primary\"(click)=\"save()\">Search</button>\n</mat-dialog-actions>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinics-list-patient/clinics-list.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinics-list-patient/clinics-list.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n<table mat-table\r\n       [dataSource]=\"dataSource\" multiTemplateDataRows\r\n       class=\"mat-elevation-z8\">\r\n  <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of displayedColumns\">\r\n    <th mat-header-cell *matHeaderCellDef> {{column}} </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\r\n  <ng-container matColumnDef=\"expandedDetail\">\r\n    <td mat-cell *matCellDef=\"let clinic\" [attr.colspan]=\"displayedColumns.length\">\r\n      <div class=\"example-element-detail\"\r\n           [@detailExpand]=\"clinic == expandedElement ? 'expanded' : 'collapsed'\">\r\n             <table mat-table [dataSource]=\"doctordataSource\" class=\"mat-elevation-z8\">\r\n               <ng-container matColumnDef=\"name\">\r\n                 <th mat-header-cell *matHeaderCellDef> Doctor name </th>\r\n                 <td  mat-cell *matCellDef=\"let doctor\">\r\n                   <ng-template [ngIf]=\"clinic.id == doctor.clinic.id\">\r\n                     {{doctor.name}}\r\n                   </ng-template>\r\n                 </td>\r\n               </ng-container>\r\n                <ng-container matColumnDef=\"surname\">\r\n                 <th mat-header-cell *matHeaderCellDef> Doctor surname </th>\r\n                  <td mat-cell *matCellDef=\"let doctor\">\r\n                    <ng-template [ngIf]=\"clinic.id == doctor.clinic.id\">\r\n                      {{doctor.surname}}\r\n                    </ng-template>\r\n                     </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"scheduling\">\r\n                  <th mat-header-cell *matHeaderCellDef>Scheduling</th>\r\n                  <td mat-cell *matCellDef=\"let doctor\">\r\n                    <ng-template [ngIf]=\"clinic.id == doctor.clinic.id\">\r\n                      <button mat-raised-button color=\"primary\" class=\"pull-right\">Make an appointment</button>\r\n                    </ng-template>\r\n                  </td>\r\n                </ng-container>\r\n               <tr mat-header-row *matHeaderRowDef=\"displayedColumnsDoctor\"></tr>\r\n               <tr mat-row *matRowDef=\"let row; columns: displayedColumnsDoctor;\"></tr>\r\n             </table>\r\n      </div>\r\n\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\"\r\n      class=\"example-element-row\"\r\n      [class.example-expanded-row]=\"expandedElement === element\"\r\n      (click)=\"expandedElement = expandedElement === element ? null : element\">\r\n  </tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n</table>\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n<button mat-raised-button color=\"primary\" (click)=\"openDialog()\">Making an appointment</button>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-profile/doctor-profile.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-profile/doctor-profile.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 offset-md-2\">\r\n        <mat-card>\r\n          <h3>Profile</h3>\r\n          <hr>\r\n          <form [formGroup]=\"doctorProfileForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n            <div class=\"form-group\">\r\n              <mat-label for=\"email\">Email</mat-label>\r\n              <input type=\"email\" readonly=\"readonly\" id=\"email\" formControlName=\"email\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && doctorProfileForm.get('email').errors }\">\r\n\r\n              <div *ngIf=\"submitted && doctorProfileForm.get('email').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"doctorProfileForm.get('email').errors['required']\">Email is required</div>\r\n                <div *ngIf=\"doctorProfileForm.get('email').errors['email']\">Email must be a valid email address</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">Password</label>\r\n              <input type=\"text\" id=\"password\" formControlName=\"password\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && doctorProfileForm.get('password').errors }\">\r\n              <div *ngIf=\"submitted && doctorProfileForm.get('password').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"doctorProfileForm.get('password').errors['required']\">Password is required</div>\r\n                <div *ngIf=\"doctorProfileForm.get('password').errors['minlength']\">Password must be at least 8 characters\r\n                  long</div>\r\n                <div *ngIf=\"doctorProfileForm.get('password').errors['pattern']\">Password must contain at least 1 lowercase,\r\n                  1 uppercase letter\r\n                  and 1 number</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">First Name</label>\r\n              <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && doctorProfileForm.get('name').errors }\" />\r\n              <div *ngIf=\"submitted && doctorProfileForm.get('name').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\" doctorProfileForm.get('name').errors['required']\">First Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"surname\">Last Name</label>\r\n              <input type=\"text\" id=\"surname\" formControlName=\"surname\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && doctorProfileForm.get('surname').errors }\" />\r\n              <div *ngIf=\"submitted && doctorProfileForm.get('surname').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"doctorProfileForm.get('surname').errors['required']\">Last Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"number\">Phone Number</label>\r\n              <input type=\"number\" id=\"number\" formControlName=\"number\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && doctorProfileForm.get('number').errors }\" />\r\n              <div *ngIf=\"submitted && doctorProfileForm.get('number').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"doctorProfileForm.get('number').errors['required']\">Phone Number is required</div>\r\n                <div *ngIf=\"doctorProfileForm.get('number').errors['minlength']\">A phone number must have at least 9\r\n                  digits\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"workHoursFrom\">Work hours from</label>\r\n              <input type=\"number\" id=\"workHoursFrom\" formControlName=\"workHoursFrom\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && doctorProfileForm.get('number').errors }\" />\r\n              <div *ngIf=\"submitted && doctorProfileForm.get('number').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"doctorProfileForm.get('number').errors['required']\">Work hours from is required</div>\r\n                <div *ngIf=\"doctorProfileForm.get('number').errors['minlength']\">A work hours must have at least 2\r\n                  digits\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"workHoursTo\">Work hours to</label>\r\n              <input type=\"number\" id=\"workHoursTo\" formControlName=\"workHoursTo\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && doctorProfileForm.get('number').errors }\" />\r\n              <div *ngIf=\"submitted && doctorProfileForm.get('number').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"doctorProfileForm.get('number').errors['required']\">Work hours to is required</div>\r\n                <div *ngIf=\"doctorProfileForm.get('number').errors['minlength']\">A work hours to must have at least 2\r\n                  digits\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <button mat-raised-button color=\"primary\" class=\"pull-right\">Save</button>\r\n\r\n          </form>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-admin-clinic/home-page-admin-clinic.component.html": 
        /*!*******************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-admin-clinic/home-page-admin-clinic.component.html ***!
          \*******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>Welcome</p>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-clinical-centre-administrator/home-page-clinical-centre-administrator.component.html": 
        /*!*****************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-clinical-centre-administrator/home-page-clinical-centre-administrator.component.html ***!
          \*****************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-doctor/home-page-doctor.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-doctor/home-page-doctor.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>home-page-doctor works!</p>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-nurse/home-page-nurse.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-nurse/home-page-nurse.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>nurse-home-page works!</p>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-patient/home-page-patient.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-patient/home-page-patient.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h3>Welcome</h3>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"image\">\r\n  <img src=\"2.jpg\">\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 offset-md-2\">\n        <mat-card>\n          <h3>Login</h3>\n          <hr>\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n\n            <div class=\"form-group\">\n              <label for=\"email\">Email</label>\n              <input type=\"email\" id=\"email\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n              <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\n              <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                <div *ngIf=\"f.password.errors.minlength\">Password must be at least 8 characters long</div>\n                <div *ngIf=\"f.password.errors.pattern\">Password must contain at least 1 lowercase, 1 uppercase letter and 1 number</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <a routerLink=\"/patient/register\">Don't have an account? Register here.</a>\n            </div>\n\n            <button mat-raised-button color=\"primary\" class=\"pull-right\">Login</button>\n\n          </form>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/medical-history-patient/medical-history-patient.component.html": 
        /*!*********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/medical-history-patient/medical-history-patient.component.html ***!
          \*********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<table mat-table [dataSource]=\"medicalDataSource\" matSort class=\"mat-elevation-z8\">\r\n\r\n  <ng-container matColumnDef=\"kind\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Kind </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <div *ngIf=\"element.kind === 1; else elseBlock\">Operation</div>\r\n      <ng-template #elseBlock>Examination</ng-template>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"clinic\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Clinic </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.clinic.name}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"doctor\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Doctor </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <div *ngFor=\"let doctor of element.doctors\">{{doctor.name}}</div>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/medical-record-patient/medical-record-patient.component.html": 
        /*!*******************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/medical-record-patient/medical-record-patient.component.html ***!
          \*******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 offset-md-2\">\r\n        <mat-card>\r\n          <h3>Medical Record</h3>\r\n          <hr>\r\n            <form class=\"medicalRecordForm\">\r\n              <div class=\"form-group\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input readonly=\"readonly\" matInput placeholder=\"Height\" value=\"{{height}}\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input readonly=\"readonly\" matInput placeholder=\"Weight\" value=\"{{weight}}\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input readonly=\"readonly\" matInput placeholder=\"Blood type\" value=\"{{bloodType}}\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <mat-form-field class=\"toast-top-full-width\">\r\n                  <textarea readonly=\"readonly\" matInput placeholder=\"Allergies\" value=\"{{allergies}}\"></textarea>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <mat-form-field class=\"toast-top-full-width\">\r\n                  <textarea readonly=\"readonly\" matInput placeholder=\"Examination reports\" value=\"{{reports}}\"></textarea>\r\n                </mat-form-field>\r\n              </div>\r\n            </form>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-profile/nurse-profile.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-profile/nurse-profile.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 offset-md-2\">\r\n        <mat-card>\r\n          <h3>Profile</h3>\r\n          <hr>\r\n          <form [formGroup]=\"nurseProfileForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n            <div class=\"form-group\">\r\n              <mat-label for=\"email\">Email</mat-label>\r\n              <input type=\"email\" readonly=\"readonly\" id=\"email\" formControlName=\"email\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && nurseProfileForm.get('email').errors }\">\r\n\r\n              <div *ngIf=\"submitted && nurseProfileForm.get('email').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"nurseProfileForm.get('email').errors['required']\">Email is required</div>\r\n                <div *ngIf=\"nurseProfileForm.get('email').errors['email']\">Email must be a valid email address</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">Password</label>\r\n              <input type=\"text\" id=\"password\" formControlName=\"password\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && nurseProfileForm.get('password').errors }\">\r\n              <div *ngIf=\"submitted && nurseProfileForm.get('password').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"nurseProfileForm.get('password').errors['required']\">Password is required</div>\r\n                <div *ngIf=\"nurseProfileForm.get('password').errors['minlength']\">Password must be at least 8 characters\r\n                  long</div>\r\n                <div *ngIf=\"nurseProfileForm.get('password').errors['pattern']\">Password must contain at least 1 lowercase,\r\n                  1 uppercase letter\r\n                  and 1 number</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">First Name</label>\r\n              <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && nurseProfileForm.get('name').errors }\" />\r\n              <div *ngIf=\"submitted && nurseProfileForm.get('name').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\" nurseProfileForm.get('name').errors['required']\">First Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"surname\">Last Name</label>\r\n              <input type=\"text\" id=\"surname\" formControlName=\"surname\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && nurseProfileForm.get('surname').errors }\" />\r\n              <div *ngIf=\"submitted && nurseProfileForm.get('surname').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"nurseProfileForm.get('surname').errors['required']\">Last Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"workHoursFrom\">WorkHoursFrom</label>\r\n              <input type=\"workHoursFrom\" id=\"workHoursFrom\" formControlName=\"workHoursFrom\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted &&  nurseProfileForm.get('workHoursFrom').errors }\" />\r\n              <div *ngIf=\"submitted && nurseProfileForm.get('workHoursFrom').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"nurseProfileForm.get('workHoursFrom').errors['required']\">Health Insurance ID is required\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"workHoursTo\">WorkHoursTo</label>\r\n                <input type=\"text\" id=\"workHoursTo\" formControlName=\"workHoursTo\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && nurseProfileForm.get('workHoursTo').errors }\" />\r\n                <div *ngIf=\"submitted && nurseProfileForm.get('workHoursTo').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"nurseProfileForm.get('workHoursTo').errors['required']\">Address is required</div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"phone\">PhoneNumber</label>\r\n                <input type=\"phone\" id=\"phone\" formControlName=\"phone\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && nurseProfileForm.get('phone').errors }\" />\r\n                <div *ngIf=\"submitted && nurseProfileForm.get('phone').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"nurseProfileForm.get('phone').errors['required']\">Phone Number is required</div>\r\n                  <div *ngIf=\"nurseProfileForm.get('phone').errors['minlength']\">A phone number must have at least 9\r\n                    digits\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n              <button mat-raised-button color=\"primary\" class=\"pull-right\">Save</button>\r\n            </div>\r\n          </form>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-profile/patient-profile.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-profile/patient-profile.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 offset-md-2\">\r\n        <mat-card>\r\n          <h3>Profile</h3>\r\n          <hr>\r\n          <form [formGroup]=\"patientProfileForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n            <div class=\"form-group\">\r\n              <mat-label for=\"email\">Email</mat-label>\r\n              <input type=\"email\" readonly=\"readonly\" id=\"email\" formControlName=\"email\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && patientProfileForm.get('email').errors }\">\r\n\r\n              <div *ngIf=\"submitted && patientProfileForm.get('email').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"patientProfileForm.get('email').errors['required']\">Email is required</div>\r\n                <div *ngIf=\"patientProfileForm.get('email').errors['email']\">Email must be a valid email address</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">Password</label>\r\n              <input type=\"text\" id=\"password\" formControlName=\"password\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && patientProfileForm.get('password').errors }\">\r\n              <div *ngIf=\"submitted && patientProfileForm.get('password').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"patientProfileForm.get('password').errors['required']\">Password is required</div>\r\n                <div *ngIf=\"patientProfileForm.get('password').errors['minlength']\">Password must be at least 8 characters\r\n                  long</div>\r\n                <div *ngIf=\"patientProfileForm.get('password').errors['pattern']\">Password must contain at least 1 lowercase,\r\n                  1 uppercase letter\r\n                  and 1 number</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">First Name</label>\r\n              <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && patientProfileForm.get('name').errors }\" />\r\n              <div *ngIf=\"submitted && patientProfileForm.get('name').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\" patientProfileForm.get('name').errors['required']\">First Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"surname\">Last Name</label>\r\n              <input type=\"text\" id=\"surname\" formControlName=\"surname\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && patientProfileForm.get('surname').errors }\" />\r\n              <div *ngIf=\"submitted && patientProfileForm.get('surname').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"patientProfileForm.get('surname').errors['required']\">Last Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"address\">Address</label>\r\n              <input type=\"text\" id=\"address\" formControlName=\"address\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && patientProfileForm.get('address').errors }\" />\r\n              <div *ngIf=\"submitted && patientProfileForm.get('address').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"patientProfileForm.get('address').errors['required']\">Address is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"city\">City</label>\r\n              <input type=\"text\" id=\"city\" formControlName=\"city\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && patientProfileForm.get('city').errors }\" />\r\n              <div *ngIf=\"submitted && patientProfileForm.get('city').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"patientProfileForm.get('city').errors['required']\">City is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"country\">Country</label>\r\n              <input type=\"text\" id=\"country\" formControlName=\"country\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && patientProfileForm.get('country').errors }\" />\r\n              <div *ngIf=\"submitted && patientProfileForm.get('country').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"patientProfileForm.get('country').errors['required']\">Country is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"number\">Phone Number</label>\r\n              <input type=\"number\" id=\"number\" formControlName=\"number\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && patientProfileForm.get('number').errors }\" />\r\n              <div *ngIf=\"submitted && patientProfileForm.get('number').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"patientProfileForm.get('number').errors['required']\">Phone Number is required</div>\r\n                <div *ngIf=\"patientProfileForm.get('number').errors['minlength']\">A phone number must have at least 9\r\n                  digits\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"insuranceID\">Health Insurance ID</label>\r\n              <input type=\"text\" readonly=\"readonly\" id=\"insuranceID\" formControlName=\"insuranceID\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted &&  patientProfileForm.get('insuranceID').errors }\" />\r\n              <div *ngIf=\"submitted && patientProfileForm.get('insuranceID').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"patientProfileForm.get('insuranceID').errors['required']\">Health Insurance ID is required\r\n                </div>\r\n                <div\r\n                  *ngIf=\"patientProfileForm.get('insuranceID').errors['minlength'] ||patientProfileForm.get('insuranceID').errors['maxlength']\">\r\n                  Health\r\n                  Insurance ID must contain exactly 13 characters</div>\r\n              </div>\r\n            </div>\r\n\r\n            <button mat-raised-button color=\"primary\" class=\"pull-right\">Save</button>\r\n\r\n          </form>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-requests/register-requests.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-requests/register-requests.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<table mat-table [dataSource]=\"RequestsDataSource\" class=\"mat-elevation-z8\">\r\n\r\n  <ng-container matColumnDef=\"email\">\r\n    <th mat-header-cell *matHeaderCellDef> Email </th>\r\n    <td mat-cell *matCellDef=\"let patient\"> {{patient.email}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"approving\">\r\n    <th mat-header-cell *matHeaderCellDef> Approving </th>\r\n    <td mat-cell *matCellDef=\"let patient\">\r\n      <button mat-raised-button color=\"primary\" class=\"pull-right\" (click)=\"onAccept(patient)\">Accept</button>\r\n      <button mat-raised-button color=\"warn\" class=\"pull-right\">Decline</button>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registration/registration.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/registration/registration.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 offset-md-2\">\n        <mat-card>\n          <h3>Patient Registration</h3>\n          <hr>\n          <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n\n            <div class=\"form-group\">\n              <label for=\"email\">Email</label>\n              <input type=\"email\" id=\"email\" formControlName=\"email\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('email').errors }\">\n\n              <div *ngIf=\"submitted && registerForm.get('email').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"registerForm.get('email').errors['required']\">Email is required</div>\n                <div *ngIf=\"registerForm.get('email').errors['email']\">Email must be a valid email address</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('password').errors }\">\n              <div *ngIf=\"submitted && registerForm.get('password').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"registerForm.get('password').errors['required']\">Password is required</div>\n                <div *ngIf=\"registerForm.get('password').errors['minlength']\">Password must be at least 8 characters\n                  long</div>\n                <div *ngIf=\"registerForm.get('password').errors['pattern']\">Password must contain at least 1 lowercase,\n                  1 uppercase letter\n                  and 1 number</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"name\">First Name</label>\n              <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('name').errors }\" />\n              <div *ngIf=\"submitted && registerForm.get('name').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\" registerForm.get('name').errors['required']\">First Name is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"surname\">Last Name</label>\n              <input type=\"text\" id=\"surname\" formControlName=\"surname\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('surname').errors }\" />\n              <div *ngIf=\"submitted && registerForm.get('surname').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"registerForm.get('surname').errors['required']\">Last Name is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"address\">Address</label>\n              <input type=\"text\" id=\"address\" formControlName=\"address\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('address').errors }\" />\n              <div *ngIf=\"submitted && registerForm.get('address').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"registerForm.get('address').errors['required']\">Address is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"city\">City</label>\n              <input type=\"text\" id=\"city\" formControlName=\"city\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('city').errors }\" />\n              <div *ngIf=\"submitted && registerForm.get('city').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"registerForm.get('city').errors['required']\">City is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"country\">Country</label>\n              <input type=\"text\" id=\"country\" formControlName=\"country\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('country').errors }\" />\n              <div *ngIf=\"submitted && registerForm.get('country').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"registerForm.get('country').errors['required']\">Country is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"number\">Phone Number</label>\n              <input type=\"number\" id=\"number\" formControlName=\"number\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('number').errors }\" />\n              <div *ngIf=\"submitted && registerForm.get('number').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"registerForm.get('number').errors['required']\">Phone Number is required</div>\n                <div *ngIf=\"registerForm.get('number').errors['minlength']\">A phone number must have at least 9\n                  digits\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"insuranceID\">Health Insurance ID</label>\n              <input type=\"text\" id=\"insuranceID\" formControlName=\"insuranceID\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted &&  registerForm.get('insuranceID').errors }\" />\n              <div *ngIf=\"submitted && registerForm.get('insuranceID').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"registerForm.get('insuranceID').errors['required']\">Health Insurance ID is required\n                </div>\n                <div\n                  *ngIf=\"registerForm.get('insuranceID').errors['minlength'] ||registerForm.get('insuranceID').errors['maxlength']\">\n                  Health\n                  Insurance ID must contain exactly 13 characters</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <a routerLink=\"/patient/login\">Already have an account? Login here.</a>\n            </div>\n\n            <button mat-raised-button color=\"primary\" class=\"pull-right\">Register</button>\n\n          </form>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
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
            var routes = [
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
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\r\n  height: 100%;\r\n}\r\n\r\n.sidenav {\r\n  width: 200px;\r\n}\r\n\r\n.mat-nav-list{\r\n  background-color: khaki;\r\n}\r\n\r\n.mat-toolbar.mat-primary {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtBQUNaIiwiZmlsZSI6Ii4uL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5tYXQtbmF2LWxpc3R7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjoga2hha2k7XHJcbn1cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/user-service.service */ "./src/app/services/user-service.service.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(breakpointObserver, userService) {
                    this.breakpointObserver = breakpointObserver;
                    this.userService = userService;
                    this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
                }
                AppComponent.prototype.isLoggedIn = function () {
                    return this.userService.isLoggedIn();
                };
                AppComponent.prototype.isNone = function () {
                    return this.userService.isNone();
                };
                AppComponent.prototype.isClinicalCentreAdmin = function () {
                    return this.userService.isClinicalCentreAdmin();
                };
                AppComponent.prototype.isClinicAdmin = function () {
                    return this.userService.isClinicalAdmin();
                };
                AppComponent.prototype.isPatient = function () {
                    return this.userService.isPatient();
                };
                AppComponent.prototype.isDoctor = function () {
                    return this.userService.isDoctor();
                };
                AppComponent.prototype.isNurse = function () {
                    return this.userService.isNurse();
                };
                AppComponent.prototype.onLogout = function () {
                    this.userService.logOut();
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] },
                { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_4__["UserServiceService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
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
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
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
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/add-clinic-administrator/add-clinic-administrator.component.css": 
        /*!********************************************************************************************!*\
          !*** ./src/app/components/add-clinic-administrator/add-clinic-administrator.component.css ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div {\r\n  width: 100%;\r\n\r\n}\r\n\r\ntable {\r\n  width: 75%;\r\n  margin-top:50px;\r\n  margin-left:300px;\r\n\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  margin-top:50px;\r\n  margin-left:300px;\r\n  width: 75%;\r\n}\r\n\r\nmat-paginator {\r\n  width: 75%;\r\n  margin-left:300px;\r\n}\r\n\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: #777;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n\r\n.example-element-diagram {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n\r\n.example-element-name {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n\r\n.example-element-description {\r\n  padding: 16px;\r\n}\r\n\r\n.example-element-description-attribution {\r\n  opacity: 0.5;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jbGluaWMtYWRtaW5pc3RyYXRvci9hZGQtY2xpbmljLWFkbWluaXN0cmF0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7O0FBRWI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjs7QUFFbkI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoiYWRkLWNsaW5pYy1hZG1pbmlzdHJhdG9yL2FkZC1jbGluaWMtYWRtaW5pc3RyYXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbi10b3A6NTBweDtcclxuICBtYXJnaW4tbGVmdDozMDBweDtcclxuXHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLXRvcDo1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OjMwMHB4O1xyXG4gIHdpZHRoOiA3NSU7XHJcbn1cclxubWF0LXBhZ2luYXRvciB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW4tbGVmdDozMDBweDtcclxufVxyXG5cclxudHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM3Nzc7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kaWFncmFtIHtcclxuICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgaGVpZ2h0OiAxMDRweDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1uYW1lIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbiB7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/add-clinic-administrator/add-clinic-administrator.component.ts": 
        /*!*******************************************************************************************!*\
          !*** ./src/app/components/add-clinic-administrator/add-clinic-administrator.component.ts ***!
          \*******************************************************************************************/
        /*! exports provided: AddClinicAdministratorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClinicAdministratorComponent", function () { return AddClinicAdministratorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _model_adminClinic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/adminClinic */ "./src/app/model/adminClinic.ts");
            /* harmony import */ var _services_admin_clinic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/admin-clinic.service */ "./src/app/services/admin-clinic.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var AddClinicAdministratorComponent = /** @class */ (function () {
                function AddClinicAdministratorComponent(formBuilder, adminClinicService, router) {
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
                AddClinicAdministratorComponent.prototype.ngOnInit = function () {
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
                };
                Object.defineProperty(AddClinicAdministratorComponent.prototype, "f", {
                    get: function () {
                        return this.addClinicAdministratorForm.controls;
                    },
                    enumerable: true,
                    configurable: true
                });
                AddClinicAdministratorComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                    // Stop here if form is invalid
                    if (this.addClinicAdministratorForm.invalid) {
                        return;
                    }
                    this.adminClinic = new _model_adminClinic__WEBPACK_IMPORTED_MODULE_3__["AdminClinic"](this.f.email.value, this.f.password.value, this.f.name.value, this.f.surname.value, this.f.number.value);
                    this.adminClinic = new _model_adminClinic__WEBPACK_IMPORTED_MODULE_3__["AdminClinic"](this.f.email.value, this.f.password.value, this.f.name.value, this.f.surname.value, this.f.number.value);
                    this.createClinicAdministrator();
                };
                AddClinicAdministratorComponent.prototype.createClinicAdministrator = function () {
                    var _this = this;
                    this.adminClinicService.newAdminClinic(this.adminClinic).subscribe(function (data) {
                        _this.adminClinicService.addAdminClinic(_this.adminClinic);
                        _this.router.navigate(['/clinical-centre-admin/home']);
                    }, function (error) {
                        alert('Error registration patient');
                        console.log(error);
                    });
                };
                AddClinicAdministratorComponent.prototype.applyFilter = function (filterValue) {
                    this.dataSource.filter = filterValue.trim().toLowerCase();
                };
                AddClinicAdministratorComponent.prototype.all = function () {
                    this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.adminClinicService.getAllClinicAdmins());
                };
                return AddClinicAdministratorComponent;
            }());
            AddClinicAdministratorComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _services_admin_clinic_service__WEBPACK_IMPORTED_MODULE_4__["AdminClinicService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/components/add-clinic/add-clinic.component.css": 
        /*!****************************************************************!*\
          !*** ./src/app/components/add-clinic/add-clinic.component.css ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div {\r\n  width: 100%;\r\n\r\n}\r\n\r\ntable {\r\n  width: 75%;\r\n  margin-top:50px;\r\n  margin-left:300px;\r\n\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  margin-top:50px;\r\n  margin-left:300px;\r\n  width: 75%;\r\n}\r\n\r\nmat-paginator {\r\n  width: 75%;\r\n  margin-left:300px;\r\n}\r\n\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: #777;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n\r\n.example-element-diagram {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n\r\n.example-element-name {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n\r\n.example-element-description {\r\n  padding: 16px;\r\n}\r\n\r\n.example-element-description-attribution {\r\n  opacity: 0.5;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jbGluaWMvYWRkLWNsaW5pYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVzs7QUFFYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsaUJBQWlCOztBQUVuQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJhZGQtY2xpbmljL2FkZC1jbGluaWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW4tdG9wOjUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6MzAwcHg7XHJcblxyXG59XHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi10b3A6NTBweDtcclxuICBtYXJnaW4tbGVmdDozMDBweDtcclxuICB3aWR0aDogNzUlO1xyXG59XHJcbm1hdC1wYWdpbmF0b3Ige1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luLWxlZnQ6MzAwcHg7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNzc3O1xyXG59XHJcblxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGlhZ3JhbSB7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGhlaWdodDogMTA0cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24ge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24tYXR0cmlidXRpb24ge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/add-clinic/add-clinic.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/components/add-clinic/add-clinic.component.ts ***!
          \***************************************************************/
        /*! exports provided: AddClinicComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClinicComponent", function () { return AddClinicComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _model_clinic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/clinic */ "./src/app/model/clinic.ts");
            /* harmony import */ var _services_clinic_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/clinic.service */ "./src/app/services/clinic.service.ts");
            var AddClinicComponent = /** @class */ (function () {
                function AddClinicComponent(dialog, formBuilder, router, clinicService) {
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
                AddClinicComponent.prototype.ngOnInit = function () {
                    this.addClinicForm = this.formBuilder.group({
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                        address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                        description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                        grade: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                    });
                    this.all();
                    this.dataSource.paginator = this.paginator;
                };
                Object.defineProperty(AddClinicComponent.prototype, "f", {
                    get: function () {
                        return this.addClinicForm.controls;
                    },
                    enumerable: true,
                    configurable: true
                });
                AddClinicComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                    // Stop here if form is invalid
                    if (this.addClinicForm.invalid) {
                        return;
                    }
                    this.clinic = new _model_clinic__WEBPACK_IMPORTED_MODULE_5__["Clinic"](this.f.name.value, this.f.address.value, this.f.description.value, this.f.grade.value);
                    this.clinic = new _model_clinic__WEBPACK_IMPORTED_MODULE_5__["Clinic"](this.f.name.value, this.f.address.value, this.f.description.value, this.f.grade.value);
                    this.createClinic();
                };
                AddClinicComponent.prototype.createClinic = function () {
                    var _this = this;
                    this.clinicService.newClinic(this.clinic).subscribe(function (data) {
                        _this.clinicService.addClinic(_this.clinic);
                        _this.router.navigate(['/clinical-centre-admin/home']);
                    }, function (error) {
                        alert('Error registration patient');
                        console.log(error);
                    });
                };
                AddClinicComponent.prototype.applyFilter = function (filterValue) {
                    this.dataSource.filter = filterValue.trim().toLowerCase();
                };
                AddClinicComponent.prototype.all = function () {
                    this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.clinicService.getAllClinics());
                };
                return AddClinicComponent;
            }());
            AddClinicComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _services_clinic_service__WEBPACK_IMPORTED_MODULE_6__["ClinicService"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/components/admin-clinic-profile/admin-clinic-profile.component.css": 
        /*!************************************************************************************!*\
          !*** ./src/app/components/admin-clinic-profile/admin-clinic-profile.component.css ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1jbGluaWMtcHJvZmlsZS9hZG1pbi1jbGluaWMtcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/admin-clinic-profile/admin-clinic-profile.component.ts": 
        /*!***********************************************************************************!*\
          !*** ./src/app/components/admin-clinic-profile/admin-clinic-profile.component.ts ***!
          \***********************************************************************************/
        /*! exports provided: AdminClinicProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminClinicProfileComponent", function () { return AdminClinicProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _model_adminClinic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/adminClinic */ "./src/app/model/adminClinic.ts");
            /* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/user */ "./src/app/model/user.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user-service.service */ "./src/app/services/user-service.service.ts");
            /* harmony import */ var _model_role__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/role */ "./src/app/model/role.ts");
            /* harmony import */ var _services_admin_clinic_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/admin-clinic.service */ "./src/app/services/admin-clinic.service.ts");
            var AdminClinicProfileComponent = /** @class */ (function () {
                function AdminClinicProfileComponent(formBuilder, router, adminClinicService, userService) {
                    this.formBuilder = formBuilder;
                    this.router = router;
                    this.adminClinicService = adminClinicService;
                    this.userService = userService;
                    this.submitted = false;
                    this.user = JSON.parse(userService.isLoggedIn());
                    console.log(this.user);
                    this.selectedAdminClinic = adminClinicService.getAdminClinic(this.user.email);
                }
                AdminClinicProfileComponent.prototype.ngOnInit = function () {
                    this.adminClinicProfileForm = this.formBuilder.group({
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedAdminClinic.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
                        password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedAdminClinic.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedAdminClinic.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                        surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedAdminClinic.surname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                        number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedAdminClinic.number, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9)]),
                    });
                };
                Object.defineProperty(AdminClinicProfileComponent.prototype, "f", {
                    get: function () {
                        return this.adminClinicProfileForm.controls;
                    },
                    enumerable: true,
                    configurable: true
                });
                AdminClinicProfileComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                    // Stop here if form is invalid
                    if (this.adminClinicProfileForm.invalid) {
                        return;
                    }
                    this.adminClinic = new _model_adminClinic__WEBPACK_IMPORTED_MODULE_3__["AdminClinic"](this.f.email.value, this.f.password.value, this.f.name.value, this.f.surname.value, this.f.number.value);
                    this.user = new _model_user__WEBPACK_IMPORTED_MODULE_4__["User"](this.f.email.value, this.f.password.value, _model_role__WEBPACK_IMPORTED_MODULE_7__["Role"].CLINIC_ADMINISTRATOR);
                    this.editAdminClinic();
                };
                AdminClinicProfileComponent.prototype.editAdminClinic = function () {
                    var _this = this;
                    this.adminClinicService.editAdminClinic(this.adminClinic).subscribe(function (data) {
                        _this.userService.setUser(_this.user);
                        _this.adminClinicService.setAdminClinic(_this.adminClinic);
                        _this.router.navigate(['/admin_clinic/home']);
                    }, function (error) {
                        alert('Error edit doctor');
                        console.log(error);
                    });
                };
                return AdminClinicProfileComponent;
            }());
            AdminClinicProfileComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _services_admin_clinic_service__WEBPACK_IMPORTED_MODULE_8__["AdminClinicService"] },
                { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_6__["UserServiceService"] }
            ]; };
            AdminClinicProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admin-clinic-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-clinic-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-clinic-profile/admin-clinic-profile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-clinic-profile.component.css */ "./src/app/components/admin-clinic-profile/admin-clinic-profile.component.css")).default]
                })
            ], AdminClinicProfileComponent);
            /***/ 
        }),
        /***/ "./src/app/components/clinic-search-dialog/clinic-search-dialog.component.css": 
        /*!************************************************************************************!*\
          !*** ./src/app/components/clinic-search-dialog/clinic-search-dialog.component.css ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGluaWMtc2VhcmNoLWRpYWxvZy9jbGluaWMtc2VhcmNoLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/clinic-search-dialog/clinic-search-dialog.component.ts": 
        /*!***********************************************************************************!*\
          !*** ./src/app/components/clinic-search-dialog/clinic-search-dialog.component.ts ***!
          \***********************************************************************************/
        /*! exports provided: ClinicSearchDialogComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicSearchDialogComponent", function () { return ClinicSearchDialogComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _services_examination_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/examination-type.service */ "./src/app/services/examination-type.service.ts");
            var ClinicSearchDialogComponent = /** @class */ (function () {
                function ClinicSearchDialogComponent(formBuilder, examinationTypeService, dialogRef, data) {
                    this.formBuilder = formBuilder;
                    this.examinationTypeService = examinationTypeService;
                    this.dialogRef = dialogRef;
                    this.types = new Array();
                    this.myFilter = function (d) {
                        var day = d.getDay();
                        // Subota i nedelja se ne radi.
                        return day !== 0 && day !== 6;
                    };
                    this.types = examinationTypeService.getAllTypes();
                }
                ClinicSearchDialogComponent.prototype.ngOnInit = function () {
                    this.SearchClinicsGroup = this.formBuilder.group({
                        date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                        type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    });
                };
                Object.defineProperty(ClinicSearchDialogComponent.prototype, "f", {
                    get: function () {
                        return this.SearchClinicsGroup.controls;
                    },
                    enumerable: true,
                    configurable: true
                });
                ClinicSearchDialogComponent.prototype.save = function () {
                    this.dialogRef.close(this.SearchClinicsGroup.value);
                };
                ClinicSearchDialogComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                return ClinicSearchDialogComponent;
            }());
            ClinicSearchDialogComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _services_examination_type_service__WEBPACK_IMPORTED_MODULE_4__["ExaminationsTypeService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
            ]; };
            ClinicSearchDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-clinic-search-dialog',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clinic-search-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinic-search-dialog/clinic-search-dialog.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clinic-search-dialog.component.css */ "./src/app/components/clinic-search-dialog/clinic-search-dialog.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], ClinicSearchDialogComponent);
            /***/ 
        }),
        /***/ "./src/app/components/clinics-list-patient/clinics-list.component.css": 
        /*!****************************************************************************!*\
          !*** ./src/app/components/clinics-list-patient/clinics-list.component.css ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div {\r\n  width: 100%;\r\n\r\n}\r\n\r\ntable {\r\n  width: 75%;\r\n  margin-top:50px;\r\n  margin-left:300px;\r\n\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  margin-top:50px;\r\n  margin-left:300px;\r\n  width: 75%;\r\n}\r\n\r\nmat-paginator {\r\n  width: 75%;\r\n  margin-left:300px;\r\n}\r\n\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: #777;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n\r\n.example-element-diagram {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n\r\n.example-element-name {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n\r\n.example-element-description {\r\n  padding: 16px;\r\n}\r\n\r\n.example-element-description-attribution {\r\n  opacity: 0.5;\r\n}\r\n\r\n.mat-raised-button {\r\n  margin-left:300px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaW5pY3MtbGlzdC1wYXRpZW50L2NsaW5pY3MtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVzs7QUFFYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsaUJBQWlCOztBQUVuQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJjbGluaWNzLWxpc3QtcGF0aWVudC9jbGluaWNzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW4tdG9wOjUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6MzAwcHg7XHJcblxyXG59XHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi10b3A6NTBweDtcclxuICBtYXJnaW4tbGVmdDozMDBweDtcclxuICB3aWR0aDogNzUlO1xyXG59XHJcbm1hdC1wYWdpbmF0b3Ige1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luLWxlZnQ6MzAwcHg7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNzc3O1xyXG59XHJcblxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGlhZ3JhbSB7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGhlaWdodDogMTA0cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24ge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24tYXR0cmlidXRpb24ge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG4ubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OjMwMHB4O1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/clinics-list-patient/clinics-list.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/clinics-list-patient/clinics-list.component.ts ***!
          \***************************************************************************/
        /*! exports provided: ClinicsListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicsListComponent", function () { return ClinicsListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _services_clinic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/clinic.service */ "./src/app/services/clinic.service.ts");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            /* harmony import */ var _services_doctor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/doctor.service */ "./src/app/services/doctor.service.ts");
            /* harmony import */ var _clinic_search_dialog_clinic_search_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../clinic-search-dialog/clinic-search-dialog.component */ "./src/app/components/clinic-search-dialog/clinic-search-dialog.component.ts");
            var ClinicsListComponent = /** @class */ (function () {
                function ClinicsListComponent(clinicService, doctorService, dialog) {
                    this.clinicService = clinicService;
                    this.doctorService = doctorService;
                    this.dialog = dialog;
                    this.displayedColumns = ['name', 'address'];
                    this.displayedColumnsDoctor = ['name', 'surname', 'scheduling'];
                    this.doctordataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
                    this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
                    this.doctors = new Array();
                    this.clinics = new Array();
                    this.doctors = this.doctorService.getAllDoctors();
                    this.clinics = this.clinicService.getAllClinics();
                    this.all();
                }
                ClinicsListComponent.prototype.ngOnInit = function () {
                    this.all();
                    this.dataSource.paginator = this.paginator;
                };
                ClinicsListComponent.prototype.applyFilter = function (filterValue) {
                    this.dataSource.filter = filterValue.trim().toLowerCase();
                };
                ClinicsListComponent.prototype.all = function () {
                    this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.clinicService.getAllClinics());
                    this.doctordataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.doctorService.getAllDoctors());
                };
                ClinicsListComponent.prototype.openDialog = function () {
                    this.dialog.open(_clinic_search_dialog_clinic_search_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ClinicSearchDialogComponent"]);
                };
                return ClinicsListComponent;
            }());
            ClinicsListComponent.ctorParameters = function () { return [
                { type: _services_clinic_service__WEBPACK_IMPORTED_MODULE_3__["ClinicService"] },
                { type: _services_doctor_service__WEBPACK_IMPORTED_MODULE_5__["DoctorService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
            ], ClinicsListComponent.prototype, "paginator", void 0);
            ClinicsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-clinics-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clinics-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinics-list-patient/clinics-list.component.html")).default,
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('detailExpand', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '0px', minHeight: '0' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '*' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                        ]),
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clinics-list.component.css */ "./src/app/components/clinics-list-patient/clinics-list.component.css")).default]
                })
            ], ClinicsListComponent);
            /***/ 
        }),
        /***/ "./src/app/components/doctor-profile/doctor-profile.component.css": 
        /*!************************************************************************!*\
          !*** ./src/app/components/doctor-profile/doctor-profile.component.css ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N0b3ItcHJvZmlsZS9kb2N0b3ItcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/doctor-profile/doctor-profile.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/doctor-profile/doctor-profile.component.ts ***!
          \***********************************************************************/
        /*! exports provided: DoctorProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorProfileComponent", function () { return DoctorProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _model_doctor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/doctor */ "./src/app/model/doctor.ts");
            /* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/user */ "./src/app/model/user.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user-service.service */ "./src/app/services/user-service.service.ts");
            /* harmony import */ var _services_doctor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/doctor.service */ "./src/app/services/doctor.service.ts");
            /* harmony import */ var _model_role__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/role */ "./src/app/model/role.ts");
            var DoctorProfileComponent = /** @class */ (function () {
                function DoctorProfileComponent(formBuilder, router, doctorService, userService) {
                    this.formBuilder = formBuilder;
                    this.router = router;
                    this.doctorService = doctorService;
                    this.userService = userService;
                    this.submitted = false;
                    this.user = JSON.parse(userService.isLoggedIn());
                    console.log(this.user);
                    this.selectedDoctor = doctorService.getDoctor(this.user.email);
                }
                DoctorProfileComponent.prototype.ngOnInit = function () {
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
                };
                Object.defineProperty(DoctorProfileComponent.prototype, "f", {
                    get: function () {
                        return this.doctorProfileForm.controls;
                    },
                    enumerable: true,
                    configurable: true
                });
                DoctorProfileComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                    // Stop here if form is invalid
                    if (this.doctorProfileForm.invalid) {
                        return;
                    }
                    this.doctor = new _model_doctor__WEBPACK_IMPORTED_MODULE_3__["Doctor"](this.f.email.value, this.f.password.value, this.f.name.value, this.f.surname.value, this.f.number.value, this.f.workHoursFrom.value, this.f.workHoursTo.value);
                    this.user = new _model_user__WEBPACK_IMPORTED_MODULE_4__["User"](this.f.email.value, this.f.password.value, _model_role__WEBPACK_IMPORTED_MODULE_8__["Role"].DOCTOR);
                    this.editDoctor();
                };
                DoctorProfileComponent.prototype.editDoctor = function () {
                    var _this = this;
                    this.doctorService.editDoctor(this.doctor).subscribe(function (data) {
                        _this.userService.setUser(_this.user);
                        _this.doctorService.setDoctor(_this.doctor);
                        _this.router.navigate(['/doctor/home']);
                        console.log('uspesno');
                    }, function (error) {
                        alert('Error edit doctor');
                        console.log(error);
                    });
                };
                return DoctorProfileComponent;
            }());
            DoctorProfileComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _services_doctor_service__WEBPACK_IMPORTED_MODULE_7__["DoctorService"] },
                { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_6__["UserServiceService"] }
            ]; };
            DoctorProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-doctor-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./doctor-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-profile/doctor-profile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./doctor-profile.component.css */ "./src/app/components/doctor-profile/doctor-profile.component.css")).default]
                })
            ], DoctorProfileComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home-page-admin-clinic/home-page-admin-clinic.component.css": 
        /*!****************************************************************************************!*\
          !*** ./src/app/components/home-page-admin-clinic/home-page-admin-clinic.component.css ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXBhZ2UtYWRtaW4tY2xpbmljL2hvbWUtcGFnZS1hZG1pbi1jbGluaWMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/home-page-admin-clinic/home-page-admin-clinic.component.ts": 
        /*!***************************************************************************************!*\
          !*** ./src/app/components/home-page-admin-clinic/home-page-admin-clinic.component.ts ***!
          \***************************************************************************************/
        /*! exports provided: HomePageAdminClinicComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageAdminClinicComponent", function () { return HomePageAdminClinicComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomePageAdminClinicComponent = /** @class */ (function () {
                function HomePageAdminClinicComponent() {
                }
                HomePageAdminClinicComponent.prototype.ngOnInit = function () {
                };
                return HomePageAdminClinicComponent;
            }());
            HomePageAdminClinicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home-page-admin-clinic',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page-admin-clinic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-admin-clinic/home-page-admin-clinic.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page-admin-clinic.component.css */ "./src/app/components/home-page-admin-clinic/home-page-admin-clinic.component.css")).default]
                })
            ], HomePageAdminClinicComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home-page-clinical-centre-administrator/home-page-clinical-centre-administrator.component.css": 
        /*!**************************************************************************************************************************!*\
          !*** ./src/app/components/home-page-clinical-centre-administrator/home-page-clinical-centre-administrator.component.css ***!
          \**************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXBhZ2UtY2xpbmljYWwtY2VudHJlLWFkbWluaXN0cmF0b3IvaG9tZS1wYWdlLWNsaW5pY2FsLWNlbnRyZS1hZG1pbmlzdHJhdG9yLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/home-page-clinical-centre-administrator/home-page-clinical-centre-administrator.component.ts": 
        /*!*************************************************************************************************************************!*\
          !*** ./src/app/components/home-page-clinical-centre-administrator/home-page-clinical-centre-administrator.component.ts ***!
          \*************************************************************************************************************************/
        /*! exports provided: HomePageClinicalCentreAdministratorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageClinicalCentreAdministratorComponent", function () { return HomePageClinicalCentreAdministratorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomePageClinicalCentreAdministratorComponent = /** @class */ (function () {
                function HomePageClinicalCentreAdministratorComponent() {
                }
                HomePageClinicalCentreAdministratorComponent.prototype.ngOnInit = function () {
                };
                return HomePageClinicalCentreAdministratorComponent;
            }());
            HomePageClinicalCentreAdministratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home-page-clinical-centre-administrator',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page-clinical-centre-administrator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-clinical-centre-administrator/home-page-clinical-centre-administrator.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page-clinical-centre-administrator.component.css */ "./src/app/components/home-page-clinical-centre-administrator/home-page-clinical-centre-administrator.component.css")).default]
                })
            ], HomePageClinicalCentreAdministratorComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home-page-doctor/home-page-doctor.component.css": 
        /*!****************************************************************************!*\
          !*** ./src/app/components/home-page-doctor/home-page-doctor.component.css ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXBhZ2UtZG9jdG9yL2hvbWUtcGFnZS1kb2N0b3IuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/home-page-doctor/home-page-doctor.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/home-page-doctor/home-page-doctor.component.ts ***!
          \***************************************************************************/
        /*! exports provided: HomePageDoctorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageDoctorComponent", function () { return HomePageDoctorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomePageDoctorComponent = /** @class */ (function () {
                function HomePageDoctorComponent() {
                }
                HomePageDoctorComponent.prototype.ngOnInit = function () {
                };
                return HomePageDoctorComponent;
            }());
            HomePageDoctorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home-page-doctor',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page-doctor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-doctor/home-page-doctor.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page-doctor.component.css */ "./src/app/components/home-page-doctor/home-page-doctor.component.css")).default]
                })
            ], HomePageDoctorComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home-page-nurse/home-page-nurse.component.css": 
        /*!**************************************************************************!*\
          !*** ./src/app/components/home-page-nurse/home-page-nurse.component.css ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXBhZ2UtbnVyc2UvaG9tZS1wYWdlLW51cnNlLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/home-page-nurse/home-page-nurse.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/components/home-page-nurse/home-page-nurse.component.ts ***!
          \*************************************************************************/
        /*! exports provided: HomePageNurseComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageNurseComponent", function () { return HomePageNurseComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomePageNurseComponent = /** @class */ (function () {
                function HomePageNurseComponent() {
                }
                HomePageNurseComponent.prototype.ngOnInit = function () {
                };
                return HomePageNurseComponent;
            }());
            HomePageNurseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nurse-home-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page-nurse.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-nurse/home-page-nurse.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page-nurse.component.css */ "./src/app/components/home-page-nurse/home-page-nurse.component.css")).default]
                })
            ], HomePageNurseComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home-page-patient/home-page-patient.component.css": 
        /*!******************************************************************************!*\
          !*** ./src/app/components/home-page-patient/home-page-patient.component.css ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXBhZ2UtcGF0aWVudC9ob21lLXBhZ2UtcGF0aWVudC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/home-page-patient/home-page-patient.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/components/home-page-patient/home-page-patient.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: HomePagePatientComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePagePatientComponent", function () { return HomePagePatientComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomePagePatientComponent = /** @class */ (function () {
                function HomePagePatientComponent() {
                }
                HomePagePatientComponent.prototype.ngOnInit = function () {
                };
                return HomePagePatientComponent;
            }());
            HomePagePatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home-page-patient',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page-patient.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-patient/home-page-patient.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page-patient.component.css */ "./src/app/components/home-page-patient/home-page-patient.component.css")).default]
                })
            ], HomePagePatientComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/components/home/home.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".image{\r\n  height:40em; background-size:cover; width:auto;\r\n  background-image:url('2.jpg');\r\n  background-position:50% 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFFLHFCQUFxQixFQUFFLFVBQVU7RUFDOUMsNkJBQTZCO0VBQzdCLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZXtcclxuICBoZWlnaHQ6NDBlbTsgYmFja2dyb3VuZC1zaXplOmNvdmVyOyB3aWR0aDphdXRvO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcyLmpwZycpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246NTAlIDUwJTtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/home/home.component.ts ***!
          \***************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/components/login/login.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/components/login/login.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.main-content {\r\n  margin: 20px 0;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjOztBQUVoQiIsImZpbGUiOiJsb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG5cclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/login/login.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/login/login.component.ts ***!
          \*****************************************************/
        /*! exports provided: LoginUser, LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUser", function () { return LoginUser; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
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
            var LoginUser = /** @class */ (function () {
                function LoginUser(email, password) {
                    this.email = email;
                    this.password = password;
                }
                return LoginUser;
            }());
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(patientService, formBuilder, router, userService, doctorService, clinicalService, nurseService, adminClinicService, clinicalCentreAdministratorService, examinationService, medicalRecordService, examinationsTypeService) {
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
                LoginComponent.prototype.ngOnInit = function () {
                    this.loginForm = this.formBuilder.group({
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    });
                };
                Object.defineProperty(LoginComponent.prototype, "f", {
                    // Convenience getter for easy access to form fields
                    get: function () {
                        return this.loginForm.controls;
                    },
                    enumerable: true,
                    configurable: true
                });
                LoginComponent.prototype.onSubmit = function () {
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
                };
                LoginComponent.prototype.attemptPatientLogin = function () {
                    var _this = this;
                    if (this.user.role === _model_role__WEBPACK_IMPORTED_MODULE_6__["Role"].PATIENT && this.loginUser.password === this.user.password && this.patient.status === _model_patientStatus__WEBPACK_IMPORTED_MODULE_12__["PatientStatus"].APPROVED) {
                        this.patientService.loginPatient(this.user).subscribe(function (data) {
                            console.log(data);
                            if (data !== null) {
                                alert('Successful logged in');
                                _this.router.navigate(['/patient/home']);
                            }
                            else {
                                alert('Login error');
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    }
                    else if (this.user.role === _model_role__WEBPACK_IMPORTED_MODULE_6__["Role"].DOCTOR && this.loginUser.password === this.user.password) {
                        this.doctorService.loginDoctor(this.user).subscribe(function (data) {
                            console.log(data);
                            if (data !== null) {
                                alert('Successful logged in');
                                _this.router.navigate(['/doctor/home']);
                            }
                            else {
                                alert('Login error');
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    }
                    else if (this.user.role === _model_role__WEBPACK_IMPORTED_MODULE_6__["Role"].NURSE && this.loginUser.password === this.user.password) {
                        console.log(this.user);
                        this.nurseService.loginNurse(this.user).subscribe(function (data) {
                            console.log(data);
                            if (data !== null) {
                                alert('Successful logged in');
                                _this.router.navigate(['/nurse/home']);
                            }
                            else {
                                alert('Login error');
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    }
                    else if (this.user.role === _model_role__WEBPACK_IMPORTED_MODULE_6__["Role"].CLINIC_ADMINISTRATOR && this.loginUser.password === this.user.password) {
                        console.log(this.user);
                        this.adminClinicService.loginAdminClinic(this.user).subscribe(function (data) {
                            console.log(data);
                            if (data !== null) {
                                alert('Successful logged in');
                                _this.router.navigate(['/admin_clinic/home']);
                            }
                            else {
                                alert('Login error');
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    }
                    else if (this.user.role === _model_role__WEBPACK_IMPORTED_MODULE_6__["Role"].CLINICAL_CENTRE_ADMINISTRATOR && this.loginUser.password === this.user.password) {
                        console.log(this.user);
                        this.clinicalCentreAdministratorService.loginAdmin(this.user).subscribe(function (data) {
                            console.log(data);
                            if (data !== null) {
                                alert('Successful logged in');
                                _this.router.navigate(['/clinical-centre-admin/home']);
                            }
                            else {
                                alert('Login error');
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    }
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
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
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/components/medical-history-patient/medical-history-patient.component.css": 
        /*!******************************************************************************************!*\
          !*** ./src/app/components/medical-history-patient/medical-history-patient.component.css ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGljYWwtaGlzdG9yeS1wYXRpZW50L21lZGljYWwtaGlzdG9yeS1wYXRpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoibWVkaWNhbC1oaXN0b3J5LXBhdGllbnQvbWVkaWNhbC1oaXN0b3J5LXBhdGllbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/medical-history-patient/medical-history-patient.component.ts": 
        /*!*****************************************************************************************!*\
          !*** ./src/app/components/medical-history-patient/medical-history-patient.component.ts ***!
          \*****************************************************************************************/
        /*! exports provided: MedicalHistoryPatientComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalHistoryPatientComponent", function () { return MedicalHistoryPatientComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/patient.service */ "./src/app/services/patient.service.ts");
            /* harmony import */ var _services_examination_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/examination.service */ "./src/app/services/examination.service.ts");
            /* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user-service.service */ "./src/app/services/user-service.service.ts");
            var MedicalHistoryPatientComponent = /** @class */ (function () {
                function MedicalHistoryPatientComponent(patientService, examinationService, userService) {
                    this.patientService = patientService;
                    this.examinationService = examinationService;
                    this.userService = userService;
                    this.displayedColumns = ['kind', 'clinic', 'doctor'];
                    this.medicalDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
                    this.examinations = this.examinationService.getAllExaminations();
                    this.tmp = new Array();
                    this.loggedUser = this.userService.isLoggedIn();
                    this.tmpStr = this.loggedUser.split(',');
                    this.tmpStr1 = this.tmpStr[0].split(':');
                    this.user = JSON.parse(this.loggedUser);
                }
                MedicalHistoryPatientComponent.prototype.ngOnInit = function () {
                    this.all();
                };
                MedicalHistoryPatientComponent.prototype.all = function () {
                    for (var _i = 0, _a = this.examinations; _i < _a.length; _i++) {
                        var c = _a[_i];
                        if (c.patient.email === this.user.email) {
                            this.tmp.push(c);
                        }
                    }
                    this.medicalDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tmp);
                };
                return MedicalHistoryPatientComponent;
            }());
            MedicalHistoryPatientComponent.ctorParameters = function () { return [
                { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"] },
                { type: _services_examination_service__WEBPACK_IMPORTED_MODULE_4__["ExaminationService"] },
                { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_5__["UserServiceService"] }
            ]; };
            MedicalHistoryPatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-medical-history-patient',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./medical-history-patient.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/medical-history-patient/medical-history-patient.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./medical-history-patient.component.css */ "./src/app/components/medical-history-patient/medical-history-patient.component.css")).default]
                })
            ], MedicalHistoryPatientComponent);
            /***/ 
        }),
        /***/ "./src/app/components/medical-record-patient/medical-record-patient.component.css": 
        /*!****************************************************************************************!*\
          !*** ./src/app/components/medical-record-patient/medical-record-patient.component.css ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".mat-input-placeholder {\r\n  size: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGljYWwtcmVjb3JkLXBhdGllbnQvbWVkaWNhbC1yZWNvcmQtcGF0aWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6Im1lZGljYWwtcmVjb3JkLXBhdGllbnQvbWVkaWNhbC1yZWNvcmQtcGF0aWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgc2l6ZTogYXV0bztcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/medical-record-patient/medical-record-patient.component.ts": 
        /*!***************************************************************************************!*\
          !*** ./src/app/components/medical-record-patient/medical-record-patient.component.ts ***!
          \***************************************************************************************/
        /*! exports provided: MedicalRecordPatientComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalRecordPatientComponent", function () { return MedicalRecordPatientComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_medical_record_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/medical-record.service */ "./src/app/services/medical-record.service.ts");
            /* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user-service.service */ "./src/app/services/user-service.service.ts");
            var MedicalRecordPatientComponent = /** @class */ (function () {
                function MedicalRecordPatientComponent(medicalRecordService, userService) {
                    this.medicalRecordService = medicalRecordService;
                    this.userService = userService;
                    this.height = 0;
                    this.weight = 0;
                    this.bloodType = '';
                    this.allergies = '';
                    this.reports = '';
                    this.records = new Array();
                    this.loggedUser = this.userService.isLoggedIn();
                    this.records = medicalRecordService.getAllMedicalRecords();
                    this.user = JSON.parse(this.loggedUser);
                    this.setAll();
                }
                MedicalRecordPatientComponent.prototype.ngOnInit = function () {
                    this.records = this.medicalRecordService.getAllMedicalRecords();
                    this.setAll();
                };
                MedicalRecordPatientComponent.prototype.setAll = function () {
                    for (var _i = 0, _a = this.records; _i < _a.length; _i++) {
                        var c = _a[_i];
                        if (c.patient.email === this.user.email) {
                            this.mr = c;
                            this.height = this.mr.height;
                            this.weight = this.mr.weight;
                            this.bloodType = this.mr.bloodType;
                            this.allergies = this.mr.allergies;
                            // Ovde da se otkomentarise kad se doda reports iz baza u klasu medicalRecord
                            // for (const r of this.mr.reports) {
                            // this.reports = r.comment + ' ';
                            // }
                        }
                    }
                };
                return MedicalRecordPatientComponent;
            }());
            MedicalRecordPatientComponent.ctorParameters = function () { return [
                { type: _services_medical_record_service__WEBPACK_IMPORTED_MODULE_2__["MedicalRecordService"] },
                { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"] }
            ]; };
            MedicalRecordPatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-medical-record-patient',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./medical-record-patient.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/medical-record-patient/medical-record-patient.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./medical-record-patient.component.css */ "./src/app/components/medical-record-patient/medical-record-patient.component.css")).default]
                })
            ], MedicalRecordPatientComponent);
            /***/ 
        }),
        /***/ "./src/app/components/nurse-profile/nurse-profile.component.css": 
        /*!**********************************************************************!*\
          !*** ./src/app/components/nurse-profile/nurse-profile.component.css ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJudXJzZS1wcm9maWxlL251cnNlLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/nurse-profile/nurse-profile.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/components/nurse-profile/nurse-profile.component.ts ***!
          \*********************************************************************/
        /*! exports provided: NurseProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NurseProfileComponent", function () { return NurseProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _model_nurse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/nurse */ "./src/app/model/nurse.ts");
            /* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/user */ "./src/app/model/user.ts");
            /* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user-service.service */ "./src/app/services/user-service.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_nurse_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/nurse-service.service */ "./src/app/services/nurse-service.service.ts");
            /* harmony import */ var _model_role__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/role */ "./src/app/model/role.ts");
            var NurseProfileComponent = /** @class */ (function () {
                function NurseProfileComponent(formBuilder, router, nurseService, userService) {
                    this.formBuilder = formBuilder;
                    this.router = router;
                    this.nurseService = nurseService;
                    this.userService = userService;
                    this.submitted = false;
                    this.user = JSON.parse(userService.isLoggedIn());
                    console.log(this.user);
                    this.selectedNurse = nurseService.getNurse(this.user.email);
                }
                NurseProfileComponent.prototype.ngOnInit = function () {
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
                };
                Object.defineProperty(NurseProfileComponent.prototype, "f", {
                    get: function () {
                        return this.nurseProfileForm.controls;
                    },
                    enumerable: true,
                    configurable: true
                });
                NurseProfileComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                    // Stop here if form is invalid
                    if (this.nurseProfileForm.invalid) {
                        return;
                    }
                    this.nurse = new _model_nurse__WEBPACK_IMPORTED_MODULE_3__["Nurse"](this.f.email.value, this.f.password.value, this.f.name.value, this.f.surname.value, this.f.phone.value, this.f.workHoursFrom.value, this.f.workHoursTo.value);
                    this.user = new _model_user__WEBPACK_IMPORTED_MODULE_4__["User"](this.f.email.value, this.f.password.value, _model_role__WEBPACK_IMPORTED_MODULE_8__["Role"].NURSE);
                    this.editNurse();
                };
                NurseProfileComponent.prototype.editNurse = function () {
                    var _this = this;
                    this.nurseService.editNurse(this.nurse).subscribe(function (data) {
                        _this.userService.setUser(_this.user);
                        _this.nurseService.setNurse(_this.nurse);
                        _this.router.navigate(['/nurse/home']);
                    }, function (error) {
                        alert('Error edit nurse');
                        console.log(error);
                    });
                };
                return NurseProfileComponent;
            }());
            NurseProfileComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _services_nurse_service_service__WEBPACK_IMPORTED_MODULE_7__["NurseServiceService"] },
                { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_5__["UserServiceService"] }
            ]; };
            NurseProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nurse-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nurse-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-profile/nurse-profile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nurse-profile.component.css */ "./src/app/components/nurse-profile/nurse-profile.component.css")).default]
                })
            ], NurseProfileComponent);
            /***/ 
        }),
        /***/ "./src/app/components/patient-profile/patient-profile.component.css": 
        /*!**************************************************************************!*\
          !*** ./src/app/components/patient-profile/patient-profile.component.css ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXRpZW50LXByb2ZpbGUvcGF0aWVudC1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/patient-profile/patient-profile.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/components/patient-profile/patient-profile.component.ts ***!
          \*************************************************************************/
        /*! exports provided: PatientProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientProfileComponent", function () { return PatientProfileComponent; });
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
            var PatientProfileComponent = /** @class */ (function () {
                function PatientProfileComponent(formBuilder, router, patientService, userService) {
                    this.formBuilder = formBuilder;
                    this.router = router;
                    this.patientService = patientService;
                    this.userService = userService;
                    this.submitted = false;
                    this.user = JSON.parse(userService.isLoggedIn());
                    console.log(this.user);
                    this.selectedPatient = patientService.getPatient(this.user.email);
                }
                PatientProfileComponent.prototype.ngOnInit = function () {
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
                };
                Object.defineProperty(PatientProfileComponent.prototype, "f", {
                    get: function () {
                        return this.patientProfileForm.controls;
                    },
                    enumerable: true,
                    configurable: true
                });
                PatientProfileComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                    // Stop here if form is invalid
                    if (this.patientProfileForm.invalid) {
                        return;
                    }
                    this.patient = new _model_patient__WEBPACK_IMPORTED_MODULE_3__["Patient"](this.f.email.value, this.f.password.value, this.f.name.value, this.f.surname.value, this.f.number.value, this.f.address.value, this.f.city.value, this.f.country.value, this.f.insuranceID.value, _model_patientStatus__WEBPACK_IMPORTED_MODULE_5__["PatientStatus"].AWAITING_APPROVAL);
                    this.user = new _model_user__WEBPACK_IMPORTED_MODULE_8__["User"](this.f.email.value, this.f.password.value, _model_role__WEBPACK_IMPORTED_MODULE_9__["Role"].PATIENT);
                    this.editPatient();
                };
                PatientProfileComponent.prototype.editPatient = function () {
                    var _this = this;
                    this.patientService.editPatient(this.patient).subscribe(function (data) {
                        _this.userService.setUser(_this.user);
                        _this.patientService.setPatient(_this.patient);
                        _this.router.navigate(['/patient/home']);
                    }, function (error) {
                        alert('Error edit patient');
                        console.log(error);
                    });
                };
                return PatientProfileComponent;
            }());
            PatientProfileComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_6__["PatientService"] },
                { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_7__["UserServiceService"] }
            ]; };
            PatientProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-patient-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./patient-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-profile/patient-profile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./patient-profile.component.css */ "./src/app/components/patient-profile/patient-profile.component.css")).default]
                })
            ], PatientProfileComponent);
            /***/ 
        }),
        /***/ "./src/app/components/register-requests/register-requests.component.css": 
        /*!******************************************************************************!*\
          !*** ./src/app/components/register-requests/register-requests.component.css ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  width: 75%;\r\n  margin-top:50px;\r\n  margin-left:300px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXJlcXVlc3RzL3JlZ2lzdGVyLXJlcXVlc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjs7QUFFbkIiLCJmaWxlIjoicmVnaXN0ZXItcmVxdWVzdHMvcmVnaXN0ZXItcmVxdWVzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbi10b3A6NTBweDtcclxuICBtYXJnaW4tbGVmdDozMDBweDtcclxuXHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/register-requests/register-requests.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/components/register-requests/register-requests.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: RegisterRequestsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRequestsComponent", function () { return RegisterRequestsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/patient.service */ "./src/app/services/patient.service.ts");
            /* harmony import */ var _model_patientStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/patientStatus */ "./src/app/model/patientStatus.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var RegisterRequestsComponent = /** @class */ (function () {
                function RegisterRequestsComponent(patientService, changeDetectorRef, router) {
                    this.patientService = patientService;
                    this.changeDetectorRef = changeDetectorRef;
                    this.router = router;
                    this.displayedColumns = ['email', 'approving'];
                    this.RequestsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
                    this.all();
                }
                RegisterRequestsComponent.prototype.ngOnInit = function () {
                    this.all();
                };
                RegisterRequestsComponent.prototype.all = function () {
                    this.RequestsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.patientService.getAllRequests());
                };
                RegisterRequestsComponent.prototype.onAccept = function (patient) {
                    this.p = this.patientService.getPatient(patient.email);
                    this.p.status = _model_patientStatus__WEBPACK_IMPORTED_MODULE_4__["PatientStatus"].APPROVED;
                    this.editPatient(patient);
                    this.deleteRow(patient);
                };
                RegisterRequestsComponent.prototype.editPatient = function (patient) {
                    var _this = this;
                    this.patientService.editPatient(this.p).subscribe(function (data) {
                        _this.patientService.setPatient(_this.p);
                        _this.deleteRow(patient);
                        _this.router.navigate(['/clinical-centre-admin/requests']);
                    }, function (error) {
                        alert('Error edit patient');
                        console.log(error);
                    });
                };
                RegisterRequestsComponent.prototype.deleteRow = function (d) {
                    var index = this.RequestsDataSource.data.indexOf(d);
                    this.RequestsDataSource.data.splice(index, 1);
                };
                return RegisterRequestsComponent;
            }());
            RegisterRequestsComponent.ctorParameters = function () { return [
                { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            RegisterRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-register-requests',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register-requests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-requests/register-requests.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register-requests.component.css */ "./src/app/components/register-requests/register-requests.component.css")).default]
                })
            ], RegisterRequestsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/registration/registration.component.css": 
        /*!********************************************************************!*\
          !*** ./src/app/components/registration/registration.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.main-content {\r\n  padding: 20px 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoicmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/registration/registration.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/components/registration/registration.component.ts ***!
          \*******************************************************************/
        /*! exports provided: RegistrationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () { return RegistrationComponent; });
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
            var RegistrationComponent = /** @class */ (function () {
                function RegistrationComponent(patientService, formBuilder, router, userService) {
                    this.patientService = patientService;
                    this.formBuilder = formBuilder;
                    this.router = router;
                    this.userService = userService;
                    this.submitted = false;
                }
                RegistrationComponent.prototype.ngOnInit = function () {
                    this.registerForm = this.formBuilder.group({
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
                        password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8),
                            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                        surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                        address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                        city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                        country: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                        number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(9)]),
                        insuranceID: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(13)]),
                    });
                };
                Object.defineProperty(RegistrationComponent.prototype, "f", {
                    get: function () {
                        return this.registerForm.controls;
                    },
                    enumerable: true,
                    configurable: true
                });
                RegistrationComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                    // Stop here if form is invalid
                    if (this.registerForm.invalid) {
                        return;
                    }
                    this.patient = new _model_patient__WEBPACK_IMPORTED_MODULE_2__["Patient"](this.f.email.value, this.f.password.value, this.f.name.value, this.f.surname.value, this.f.number.value, this.f.address.value, this.f.city.value, this.f.country.value, this.f.insuranceID.value, _model_patientStatus__WEBPACK_IMPORTED_MODULE_6__["PatientStatus"].AWAITING_APPROVAL);
                    this.user = new _model_user__WEBPACK_IMPORTED_MODULE_7__["User"](this.f.email.value, this.f.password.value, _model_role__WEBPACK_IMPORTED_MODULE_8__["Role"].PATIENT);
                    this.createPatient();
                };
                RegistrationComponent.prototype.createPatient = function () {
                    var _this = this;
                    this.patientService.newPatient(this.patient).subscribe(function (data) {
                        _this.userService.addUser(_this.user);
                        _this.patientService.addPatient(_this.patient);
                        _this.router.navigate(['/login']);
                        alert('Successful register');
                    }, function (error) {
                        alert('Error registration');
                        console.log(error);
                    });
                };
                return RegistrationComponent;
            }());
            RegistrationComponent.ctorParameters = function () { return [
                { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_9__["UserServiceService"] }
            ]; };
            RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-registration',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registration/registration.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.component.css */ "./src/app/components/registration/registration.component.css")).default]
                })
            ], RegistrationComponent);
            /***/ 
        }),
        /***/ "./src/app/material-module.ts": 
        /*!************************************!*\
          !*** ./src/app/material-module.ts ***!
          \************************************/
        /*! exports provided: DemoMaterialModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function () { return DemoMaterialModule; });
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
            var DemoMaterialModule = /** @class */ (function () {
                function DemoMaterialModule() {
                }
                return DemoMaterialModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/model/ClinicalCentreAdministrator.ts": 
        /*!******************************************************!*\
          !*** ./src/app/model/ClinicalCentreAdministrator.ts ***!
          \******************************************************/
        /*! exports provided: ClinicalCentreAdministrator */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalCentreAdministrator", function () { return ClinicalCentreAdministrator; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var ClinicalCentreAdministrator = /** @class */ (function () {
                function ClinicalCentreAdministrator(email, password, name, surname, number1) {
                    this.email = email;
                    this.password = password;
                    this.name = name;
                    this.surname = surname;
                    this.number = number1;
                }
                return ClinicalCentreAdministrator;
            }());
            /***/ 
        }),
        /***/ "./src/app/model/adminClinic.ts": 
        /*!**************************************!*\
          !*** ./src/app/model/adminClinic.ts ***!
          \**************************************/
        /*! exports provided: AdminClinic */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminClinic", function () { return AdminClinic; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var AdminClinic = /** @class */ (function () {
                function AdminClinic(email, password, name, surname, number1, status) {
                    this.email = email;
                    this.password = password;
                    this.name = name;
                    this.surname = surname;
                    this.number = number1;
                    this.status = status;
                }
                return AdminClinic;
            }());
            /***/ 
        }),
        /***/ "./src/app/model/adminClinicStatus.ts": 
        /*!********************************************!*\
          !*** ./src/app/model/adminClinicStatus.ts ***!
          \********************************************/
        /*! exports provided: AdminClinicStatus */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminClinicStatus", function () { return AdminClinicStatus; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var AdminClinicStatus;
            (function (AdminClinicStatus) {
                AdminClinicStatus[AdminClinicStatus["ACTIVE"] = 0] = "ACTIVE";
                AdminClinicStatus[AdminClinicStatus["DELETED"] = 1] = "DELETED";
            })(AdminClinicStatus || (AdminClinicStatus = {}));
            /***/ 
        }),
        /***/ "./src/app/model/clinic.ts": 
        /*!*********************************!*\
          !*** ./src/app/model/clinic.ts ***!
          \*********************************/
        /*! exports provided: Clinic */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clinic", function () { return Clinic; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Clinic = /** @class */ (function () {
                function Clinic(name, address, description, id) {
                    this.name = name;
                    this.address = address;
                    this.description = description;
                    this.id = id;
                }
                return Clinic;
            }());
            /***/ 
        }),
        /***/ "./src/app/model/doctor.ts": 
        /*!*********************************!*\
          !*** ./src/app/model/doctor.ts ***!
          \*********************************/
        /*! exports provided: Doctor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doctor", function () { return Doctor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Doctor = /** @class */ (function () {
                function Doctor(email, password, name, surname, number1, workHoursFrom, workHoursTo, clinic) {
                    this.email = email;
                    this.password = password;
                    this.name = name;
                    this.surname = surname;
                    this.phone = number1;
                    this.workHoursFrom = workHoursFrom;
                    this.workHoursTo = workHoursTo;
                    this.clinic = clinic;
                }
                return Doctor;
            }());
            /***/ 
        }),
        /***/ "./src/app/model/examination.ts": 
        /*!**************************************!*\
          !*** ./src/app/model/examination.ts ***!
          \**************************************/
        /*! exports provided: Examination */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Examination", function () { return Examination; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Examination = /** @class */ (function () {
                function Examination(kind, status, type, discount, doctorRating, clinicRating, nurse, clinic, patient, doctors, id) {
                    this.doctors = new Array();
                    this.kind = kind;
                    this.status = status;
                    this.type = type;
                    this.discount = discount;
                    this.doctorRating = doctorRating;
                    this.clinicRating = clinicRating;
                    this.nurse = nurse;
                    this.clinic = clinic;
                    this.patient = patient;
                    this.doctors = doctors;
                    this.id = id;
                }
                return Examination;
            }());
            /***/ 
        }),
        /***/ "./src/app/model/examinationKind.ts": 
        /*!******************************************!*\
          !*** ./src/app/model/examinationKind.ts ***!
          \******************************************/
        /*! exports provided: ExaminationKind */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationKind", function () { return ExaminationKind; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var ExaminationKind;
            (function (ExaminationKind) {
                ExaminationKind[ExaminationKind["EXAMINATION"] = 0] = "EXAMINATION";
                ExaminationKind[ExaminationKind["OPERATION"] = 1] = "OPERATION";
            })(ExaminationKind || (ExaminationKind = {}));
            /***/ 
        }),
        /***/ "./src/app/model/examinationStatus.ts": 
        /*!********************************************!*\
          !*** ./src/app/model/examinationStatus.ts ***!
          \********************************************/
        /*! exports provided: ExaminationStatus */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationStatus", function () { return ExaminationStatus; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var ExaminationStatus;
            (function (ExaminationStatus) {
                ExaminationStatus[ExaminationStatus["APPROVED"] = 0] = "APPROVED";
                ExaminationStatus[ExaminationStatus["AWAITING"] = 1] = "AWAITING";
                ExaminationStatus[ExaminationStatus["PREDEF_BOOKED"] = 2] = "PREDEF_BOOKED";
                ExaminationStatus[ExaminationStatus["PREDEF_AVAILABLE"] = 3] = "PREDEF_AVAILABLE";
            })(ExaminationStatus || (ExaminationStatus = {}));
            /***/ 
        }),
        /***/ "./src/app/model/examinationType.ts": 
        /*!******************************************!*\
          !*** ./src/app/model/examinationType.ts ***!
          \******************************************/
        /*! exports provided: ExaminationType */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationType", function () { return ExaminationType; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var ExaminationType = /** @class */ (function () {
                function ExaminationType(label, price) {
                    this.label = label;
                    this.price = price;
                }
                return ExaminationType;
            }());
            /***/ 
        }),
        /***/ "./src/app/model/medicalRecord.ts": 
        /*!****************************************!*\
          !*** ./src/app/model/medicalRecord.ts ***!
          \****************************************/
        /*! exports provided: MedicalRecord */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalRecord", function () { return MedicalRecord; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var MedicalRecord = /** @class */ (function () {
                function MedicalRecord(id, height, weight, bloodType, allergies, patient, reports) {
                    this.reports = new Array();
                    this.id = id;
                    this.height = height;
                    this.weight = weight;
                    this.bloodType = bloodType;
                    this.allergies = allergies;
                    this.patient = patient;
                    this.reports = reports;
                }
                return MedicalRecord;
            }());
            /***/ 
        }),
        /***/ "./src/app/model/nurse.ts": 
        /*!********************************!*\
          !*** ./src/app/model/nurse.ts ***!
          \********************************/
        /*! exports provided: Nurse */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nurse", function () { return Nurse; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Nurse = /** @class */ (function () {
                function Nurse(email, password, name, surname, phone, worhHoursTo, worhHoursFrom) {
                    this.email = email;
                    this.password = password;
                    this.name = name;
                    this.surname = surname;
                    this.phone = phone;
                    this.workHoursFrom = worhHoursFrom;
                    this.workHoursTo = worhHoursTo;
                }
                return Nurse;
            }());
            /***/ 
        }),
        /***/ "./src/app/model/patient.ts": 
        /*!**********************************!*\
          !*** ./src/app/model/patient.ts ***!
          \**********************************/
        /*! exports provided: Patient */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patient", function () { return Patient; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Patient = /** @class */ (function () {
                function Patient(email, password, name, surname, number1, address, city, country, insuranceId, status) {
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
                return Patient;
            }());
            /***/ 
        }),
        /***/ "./src/app/model/patientStatus.ts": 
        /*!****************************************!*\
          !*** ./src/app/model/patientStatus.ts ***!
          \****************************************/
        /*! exports provided: PatientStatus */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientStatus", function () { return PatientStatus; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var PatientStatus;
            (function (PatientStatus) {
                PatientStatus[PatientStatus["AWAITING_APPROVAL"] = 0] = "AWAITING_APPROVAL";
                PatientStatus[PatientStatus["APPROVED"] = 1] = "APPROVED";
            })(PatientStatus || (PatientStatus = {}));
            /***/ 
        }),
        /***/ "./src/app/model/role.ts": 
        /*!*******************************!*\
          !*** ./src/app/model/role.ts ***!
          \*******************************/
        /*! exports provided: Role */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function () { return Role; });
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
            /***/ 
        }),
        /***/ "./src/app/model/user.ts": 
        /*!*******************************!*\
          !*** ./src/app/model/user.ts ***!
          \*******************************/
        /*! exports provided: User */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function () { return User; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var User = /** @class */ (function () {
                function User(email, password, role) {
                    this.email = email;
                    this.password = password;
                    this.role = role;
                }
                User.prototype.setAll = function (email, password, role) {
                    this.email = email;
                    this.password = password;
                    this.role = role;
                };
                return User;
            }());
            /***/ 
        }),
        /***/ "./src/app/services/admin-clinic.service.ts": 
        /*!**************************************************!*\
          !*** ./src/app/services/admin-clinic.service.ts ***!
          \**************************************************/
        /*! exports provided: AdminClinicService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminClinicService", function () { return AdminClinicService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _model_adminClinic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/adminClinic */ "./src/app/model/adminClinic.ts");
            /* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-service.service */ "./src/app/services/user-service.service.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _model_adminClinicStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/adminClinicStatus */ "./src/app/model/adminClinicStatus.ts");
            var AdminClinicService = /** @class */ (function () {
                function AdminClinicService(http, userService) {
                    this.http = http;
                    this.userService = userService;
                    this.urlAdminClinic = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].adminClinic;
                    this.listAdminClinic = new Array();
                    this.getAllClinicAdmins();
                }
                AdminClinicService.prototype.loginAdminClinic = function (adminClinic) {
                    this.userService.setToken(adminClinic);
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/login', adminClinic, { responseType: 'text' });
                };
                AdminClinicService.prototype.editAdminClinic = function (adminClinic) {
                    return this.http.post(this.urlAdminClinic + '/edit', adminClinic, { responseType: 'text' });
                };
                AdminClinicService.prototype.getAdminClinic = function (email) {
                    if (this.listAdminClinic.length === 0) {
                        return null;
                    }
                    for (var _i = 0, _a = this.listAdminClinic; _i < _a.length; _i++) {
                        var u = _a[_i];
                        if (u.email === email) {
                            return u;
                        }
                    }
                    return null;
                };
                AdminClinicService.prototype.setAdminClinic = function (ac) {
                    for (var _i = 0, _a = this.listAdminClinic; _i < _a.length; _i++) {
                        var ac1 = _a[_i];
                        if (ac1.email === ac.email) {
                            ac1.password = ac.password;
                            ac1.name = ac.name;
                            ac1.surname = ac.surname;
                            ac1.number = ac.number;
                        }
                    }
                };
                AdminClinicService.prototype.addClinicAdmin = function (a) {
                    if (this.getAdminClinic(a.email) === null) {
                        this.listAdminClinic.push(a);
                    }
                };
                AdminClinicService.prototype.whichStatus = function (status) {
                    if (status === 'ACTIVE') {
                        return _model_adminClinicStatus__WEBPACK_IMPORTED_MODULE_6__["AdminClinicStatus"].ACTIVE;
                    }
                    else {
                        return _model_adminClinicStatus__WEBPACK_IMPORTED_MODULE_6__["AdminClinicStatus"].DELETED;
                    }
                };
                AdminClinicService.prototype.getAllClinicAdmins = function () {
                    var _this = this;
                    this.http.get(this.urlAdminClinic + '/all').subscribe(function (data) {
                        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                            var c = data_1[_i];
                            _this.adminClinic = new _model_adminClinic__WEBPACK_IMPORTED_MODULE_3__["AdminClinic"](c.email, c.password, c.name, c.surname, c.number, _this.whichStatus(c.status.toString()));
                            _this.addClinicAdmin(_this.adminClinic);
                        }
                    }, function (error) {
                        console.log(error);
                    });
                    return this.listAdminClinic;
                };
                AdminClinicService.prototype.newAdminClinic = function (adminClinic) {
                    return this.http.post(this.urlAdminClinic + '/clinical-centre-admin/addAdmins', adminClinic);
                };
                AdminClinicService.prototype.addAdminClinic = function (ac) {
                    if (this.getAdminClinic(ac.email) === null) {
                        this.listAdminClinic.push(ac);
                    }
                };
                return AdminClinicService;
            }());
            AdminClinicService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
                { type: _user_service_service__WEBPACK_IMPORTED_MODULE_4__["UserServiceService"] }
            ]; };
            AdminClinicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AdminClinicService);
            /***/ 
        }),
        /***/ "./src/app/services/clinic.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/clinic.service.ts ***!
          \********************************************/
        /*! exports provided: ClinicService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicService", function () { return ClinicService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _model_clinic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/clinic */ "./src/app/model/clinic.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var ClinicService = /** @class */ (function () {
                function ClinicService(http) {
                    this.http = http;
                    this.urlClinic = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].clinic;
                    this.listClinics = new Array();
                    this.getAllClinics();
                }
                ClinicService.prototype.addClinic = function (c) {
                    if (this.getClinic(c.name) === null) {
                        this.listClinics.push(c);
                    }
                };
                ClinicService.prototype.getClinic = function (name) {
                    if (this.listClinics.length === 0) {
                        return null;
                    }
                    for (var _i = 0, _a = this.listClinics; _i < _a.length; _i++) {
                        var u = _a[_i];
                        if (u.name === name) {
                            return u;
                        }
                    }
                    return null;
                };
                ClinicService.prototype.getClinicByName = function (name) {
                    return this.http.get(this.urlClinic + '/' + name);
                };
                ClinicService.prototype.getAllClinics = function () {
                    var _this = this;
                    this.http.get(this.urlClinic + '/all').subscribe(function (data) {
                        for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                            var c = data_2[_i];
                            _this.clinic = new _model_clinic__WEBPACK_IMPORTED_MODULE_3__["Clinic"](c.name, c.address, c.description, c.id);
                            _this.addClinic(_this.clinic);
                        }
                    }, function (error) {
                        console.log(error);
                    });
                    console.log(this.listClinics);
                    return this.listClinics;
                };
                ClinicService.prototype.newClinic = function (clinic) {
                    return this.http.post(this.urlClinic + '/clinical-centre-admin/addClinic', clinic);
                };
                return ClinicService;
            }());
            ClinicService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
            ]; };
            ClinicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ClinicService);
            /***/ 
        }),
        /***/ "./src/app/services/clinical-centre-administrator.service.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/services/clinical-centre-administrator.service.ts ***!
          \*******************************************************************/
        /*! exports provided: ClinicalCentreAdministratorService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalCentreAdministratorService", function () { return ClinicalCentreAdministratorService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _model_ClinicalCentreAdministrator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/ClinicalCentreAdministrator */ "./src/app/model/ClinicalCentreAdministrator.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-service.service */ "./src/app/services/user-service.service.ts");
            /* harmony import */ var _model_patient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/patient */ "./src/app/model/patient.ts");
            /* harmony import */ var _model_patientStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/patientStatus */ "./src/app/model/patientStatus.ts");
            /* harmony import */ var _patient_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patient.service */ "./src/app/services/patient.service.ts");
            var ClinicalCentreAdministratorService = /** @class */ (function () {
                function ClinicalCentreAdministratorService(http, userService, patientService) {
                    this.http = http;
                    this.userService = userService;
                    this.patientService = patientService;
                    this.urlAdmin = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ClinicalCentreAdministrator;
                    this.listAdmins = new Array();
                    this.clinicalCentreAdministrator = new _model_ClinicalCentreAdministrator__WEBPACK_IMPORTED_MODULE_3__["ClinicalCentreAdministrator"]('zejak@email.com', 'Zejake123', 'Nikola', 'Zejak', '789456321');
                    this.listAdmins.push(this.clinicalCentreAdministrator);
                }
                ClinicalCentreAdministratorService.prototype.loginAdmin = function (clinicalCentreAdministrator) {
                    this.userService.setToken(clinicalCentreAdministrator);
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/login', clinicalCentreAdministrator, { responseType: 'text' });
                };
                ClinicalCentreAdministratorService.prototype.editAdmin = function (clinicalCentreAdministrator) {
                    return this.http.post(this.urlAdmin + '/edit', clinicalCentreAdministrator, { responseType: 'text' });
                };
                ClinicalCentreAdministratorService.prototype.getAdmin = function (email) {
                    if (this.listAdmins.length === 0) {
                        return null;
                    }
                    for (var _i = 0, _a = this.listAdmins; _i < _a.length; _i++) {
                        var u = _a[_i];
                        if (u.email === email) {
                            return u;
                        }
                    }
                    return null;
                };
                ClinicalCentreAdministratorService.prototype.setAdmin = function (d) {
                    for (var _i = 0, _a = this.listAdmins; _i < _a.length; _i++) {
                        var d1 = _a[_i];
                        if (d1.email === d.email) {
                            d1.password = d.password;
                            d1.name = d.name;
                            d1.surname = d.surname;
                            d1.number = d.number;
                        }
                    }
                };
                ClinicalCentreAdministratorService.prototype.getAllRequests = function () {
                    var _this = this;
                    this.http.get(this.urlAdmin + '/requests').subscribe(function (data) {
                        _this.tmp = new Array();
                        for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                            var c = data_3[_i];
                            if (_this.patientService.whichStatus(c.status.toString()) === _model_patientStatus__WEBPACK_IMPORTED_MODULE_7__["PatientStatus"].AWAITING_APPROVAL) {
                                _this.patient = new _model_patient__WEBPACK_IMPORTED_MODULE_6__["Patient"](c.email, c.password, c.name, c.surname, c.number, c.address, c.city, c.country, c.insuranceID, _this.patientService.whichStatus(c.status.toString()));
                                _this.tmp.push(_this.patient);
                            }
                        }
                    }, function (error) {
                        console.log(error);
                    });
                    return this.tmp;
                };
                return ClinicalCentreAdministratorService;
            }());
            ClinicalCentreAdministratorService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
                { type: _user_service_service__WEBPACK_IMPORTED_MODULE_5__["UserServiceService"] },
                { type: _patient_service__WEBPACK_IMPORTED_MODULE_8__["PatientService"] }
            ]; };
            ClinicalCentreAdministratorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ClinicalCentreAdministratorService);
            /***/ 
        }),
        /***/ "./src/app/services/doctor.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/doctor.service.ts ***!
          \********************************************/
        /*! exports provided: DoctorService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorService", function () { return DoctorService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _model_doctor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/doctor */ "./src/app/model/doctor.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-service.service */ "./src/app/services/user-service.service.ts");
            var DoctorService = /** @class */ (function () {
                function DoctorService(http, userService) {
                    this.http = http;
                    this.userService = userService;
                    this.urlDoctor = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].doctor;
                    this.listDoctors = new Array();
                    this.getAllDoctors();
                }
                DoctorService.prototype.loginDoctor = function (doctor) {
                    this.userService.setToken(doctor);
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/login', doctor, { responseType: 'text' });
                };
                DoctorService.prototype.editDoctor = function (doctor) {
                    return this.http.post(this.urlDoctor + '/edit', doctor, { responseType: 'text' });
                };
                DoctorService.prototype.getDoctor = function (email) {
                    if (this.listDoctors.length === 0) {
                        return null;
                    }
                    for (var _i = 0, _a = this.listDoctors; _i < _a.length; _i++) {
                        var u = _a[_i];
                        if (u.email === email) {
                            return u;
                        }
                    }
                    return null;
                };
                DoctorService.prototype.addDoctor = function (d) {
                    if (this.getDoctor(d.email) === null) {
                        this.listDoctors.push(d);
                    }
                };
                DoctorService.prototype.setDoctor = function (d) {
                    for (var _i = 0, _a = this.listDoctors; _i < _a.length; _i++) {
                        var d1 = _a[_i];
                        if (d1.email === d.email) {
                            d1.password = d.password;
                            d1.name = d.name;
                            d1.surname = d.surname;
                            d1.phone = d.phone;
                            d1.workHoursFrom = d.workHoursFrom;
                            d1.workHoursTo = d.workHoursTo;
                        }
                    }
                };
                DoctorService.prototype.getAllDoctors = function () {
                    var _this = this;
                    this.http.get(this.urlDoctor + '/all').subscribe(function (data) {
                        for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                            var c = data_4[_i];
                            _this.doctor = new _model_doctor__WEBPACK_IMPORTED_MODULE_3__["Doctor"](c.email, c.password, c.name, c.surname, c.phone, c.workHoursFrom, c.workHoursTo, c.clinic);
                            _this.addDoctor(_this.doctor);
                        }
                    }, function (error) {
                        console.log(error);
                    });
                    return this.listDoctors;
                };
                return DoctorService;
            }());
            DoctorService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
                { type: _user_service_service__WEBPACK_IMPORTED_MODULE_5__["UserServiceService"] }
            ]; };
            DoctorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DoctorService);
            /***/ 
        }),
        /***/ "./src/app/services/examination-type.service.ts": 
        /*!******************************************************!*\
          !*** ./src/app/services/examination-type.service.ts ***!
          \******************************************************/
        /*! exports provided: ExaminationsTypeService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationsTypeService", function () { return ExaminationsTypeService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _model_examinationType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/examinationType */ "./src/app/model/examinationType.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            var ExaminationsTypeService = /** @class */ (function () {
                function ExaminationsTypeService(http) {
                    this.http = http;
                    this.urlExaminationType = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].examinationType;
                    this.examinationTypes = new Array();
                }
                ExaminationsTypeService.prototype.getAllTypes = function () {
                    var _this = this;
                    this.http.get(this.urlExaminationType + '/all').subscribe(function (data) {
                        for (var _i = 0, data_5 = data; _i < data_5.length; _i++) {
                            var c = data_5[_i];
                            _this.type = new _model_examinationType__WEBPACK_IMPORTED_MODULE_2__["ExaminationType"](c.label, c.price);
                            _this.addType(_this.type);
                        }
                    }, function (error) {
                        console.log(error);
                    });
                    console.log(this.type);
                    return this.examinationTypes;
                };
                ExaminationsTypeService.prototype.addType = function (t) {
                    if (this.getType(t.label) === null) {
                        this.examinationTypes.push(t);
                    }
                };
                ExaminationsTypeService.prototype.getType = function (name) {
                    if (this.examinationTypes.length === 0) {
                        return null;
                    }
                    for (var _i = 0, _a = this.examinationTypes; _i < _a.length; _i++) {
                        var u = _a[_i];
                        if (u.label === name) {
                            return u;
                        }
                    }
                    return null;
                };
                return ExaminationsTypeService;
            }());
            ExaminationsTypeService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            ExaminationsTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ExaminationsTypeService);
            /***/ 
        }),
        /***/ "./src/app/services/examination.service.ts": 
        /*!*************************************************!*\
          !*** ./src/app/services/examination.service.ts ***!
          \*************************************************/
        /*! exports provided: ExaminationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationService", function () { return ExaminationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _model_examination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/examination */ "./src/app/model/examination.ts");
            /* harmony import */ var _model_examinationKind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/examinationKind */ "./src/app/model/examinationKind.ts");
            /* harmony import */ var _model_examinationStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/examinationStatus */ "./src/app/model/examinationStatus.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var ExaminationService = /** @class */ (function () {
                function ExaminationService(http) {
                    this.http = http;
                    this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].examination;
                    this.listExaminations = new Array();
                    this.getAllExaminations();
                }
                ExaminationService.prototype.whichKindExamination = function (kind) {
                    if (kind === 'EXAMINATION') {
                        return _model_examinationKind__WEBPACK_IMPORTED_MODULE_4__["ExaminationKind"].EXAMINATION;
                    }
                    else {
                        return _model_examinationKind__WEBPACK_IMPORTED_MODULE_4__["ExaminationKind"].OPERATION;
                    }
                };
                ExaminationService.prototype.whichStatusExamination = function (status) {
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
                };
                ExaminationService.prototype.getAllExaminations = function () {
                    var _this = this;
                    this.http.get(this.url + '/all').subscribe(function (data) {
                        _this.listExaminations = new Array();
                        for (var _i = 0, data_6 = data; _i < data_6.length; _i++) {
                            var c = data_6[_i];
                            _this.examination = new _model_examination__WEBPACK_IMPORTED_MODULE_3__["Examination"](_this.whichKindExamination(c.kind.toString()), _this.whichStatusExamination(c.status.toString()), c.type, c.discount, c.doctorRating, c.clinicRating, c.nurse, c.clinic, c.patient, c.doctors, c.id);
                            _this.listExaminations.push(_this.examination);
                            console.log(_this.examination);
                        }
                    }, function (error) {
                        console.log(error);
                    });
                    console.log(this.listExaminations);
                    return this.listExaminations;
                };
                ExaminationService.prototype.addExamination = function (e) {
                    if (this.getExamination(e.id) === null) {
                        this.listExaminations.push(e);
                    }
                };
                ExaminationService.prototype.getExamination = function (id) {
                    if (this.listExaminations.length === 0) {
                        return null;
                    }
                    for (var _i = 0, _a = this.listExaminations; _i < _a.length; _i++) {
                        var e = _a[_i];
                        if (e.id === id) {
                            return e;
                        }
                    }
                    return null;
                };
                return ExaminationService;
            }());
            ExaminationService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
            ]; };
            ExaminationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ExaminationService);
            /***/ 
        }),
        /***/ "./src/app/services/medical-record.service.ts": 
        /*!****************************************************!*\
          !*** ./src/app/services/medical-record.service.ts ***!
          \****************************************************/
        /*! exports provided: MedicalRecordService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalRecordService", function () { return MedicalRecordService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _model_medicalRecord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/medicalRecord */ "./src/app/model/medicalRecord.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var MedicalRecordService = /** @class */ (function () {
                function MedicalRecordService(http) {
                    this.http = http;
                    this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].medicalRecord;
                    this.listMedicalRecord = new Array();
                    this.getAllMedicalRecords();
                }
                MedicalRecordService.prototype.addMedicalRecord = function (mr) {
                    if (this.getMedicalRecord(mr.id) === null) {
                        this.listMedicalRecord.push(mr);
                    }
                };
                MedicalRecordService.prototype.getAllMedicalRecords = function () {
                    var _this = this;
                    this.http.get(this.url + '/all').subscribe(function (data) {
                        _this.listMedicalRecord = new Array();
                        for (var _i = 0, data_7 = data; _i < data_7.length; _i++) {
                            var c = data_7[_i];
                            // Ostalo je da se doda examinaton_report u konstruktoru
                            _this.medicalRecord = new _model_medicalRecord__WEBPACK_IMPORTED_MODULE_3__["MedicalRecord"](c.id, c.height, c.weight, c.bloodType, c.allergies, c.patient);
                            _this.listMedicalRecord.push(_this.medicalRecord);
                            console.log(_this.medicalRecord);
                        }
                    }, function (error) {
                        console.log(error);
                    });
                    console.log(this.listMedicalRecord);
                    return this.listMedicalRecord;
                };
                MedicalRecordService.prototype.getMedicalRecord = function (id) {
                    if (this.listMedicalRecord.length === 0) {
                        return null;
                    }
                    for (var _i = 0, _a = this.listMedicalRecord; _i < _a.length; _i++) {
                        var e = _a[_i];
                        if (e.id === id) {
                            return e;
                        }
                    }
                };
                return MedicalRecordService;
            }());
            MedicalRecordService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
            ]; };
            MedicalRecordService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], MedicalRecordService);
            /***/ 
        }),
        /***/ "./src/app/services/nurse-service.service.ts": 
        /*!***************************************************!*\
          !*** ./src/app/services/nurse-service.service.ts ***!
          \***************************************************/
        /*! exports provided: NurseServiceService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NurseServiceService", function () { return NurseServiceService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-service.service */ "./src/app/services/user-service.service.ts");
            /* harmony import */ var _model_nurse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/nurse */ "./src/app/model/nurse.ts");
            var NurseServiceService = /** @class */ (function () {
                function NurseServiceService(http, userService) {
                    this.http = http;
                    this.userService = userService;
                    this.urlNurse = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].nurse;
                    this.listNurses = new Array();
                    this.getAllNurses();
                }
                NurseServiceService.prototype.loginNurse = function (nurse) {
                    this.userService.setToken(nurse);
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/login', nurse, { responseType: 'text' });
                };
                NurseServiceService.prototype.editNurse = function (nurse) {
                    return this.http.post(this.urlNurse + '/edit', nurse, { responseType: 'text' });
                };
                NurseServiceService.prototype.getNurse = function (email) {
                    if (this.listNurses.length === 0) {
                        return null;
                    }
                    for (var _i = 0, _a = this.listNurses; _i < _a.length; _i++) {
                        var u = _a[_i];
                        if (u.email === email) {
                            return u;
                        }
                    }
                    return null;
                };
                NurseServiceService.prototype.setNurse = function (p) {
                    for (var _i = 0, _a = this.listNurses; _i < _a.length; _i++) {
                        var p1 = _a[_i];
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
                };
                NurseServiceService.prototype.addNurse = function (n) {
                    if (this.getNurse(n.email) === null) {
                        this.listNurses.push(n);
                    }
                };
                NurseServiceService.prototype.getAllNurses = function () {
                    var _this = this;
                    this.http.get(this.urlNurse + '/all').subscribe(function (data) {
                        for (var _i = 0, data_8 = data; _i < data_8.length; _i++) {
                            var c = data_8[_i];
                            _this.nurse = new _model_nurse__WEBPACK_IMPORTED_MODULE_5__["Nurse"](c.email, c.password, c.name, c.surname, c.phone, c.workHoursTo, c.workHoursFrom);
                            _this.addNurse(_this.nurse);
                        }
                    }, function (error) {
                        console.log(error);
                    });
                    return this.listNurses;
                };
                return NurseServiceService;
            }());
            NurseServiceService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
                { type: _user_service_service__WEBPACK_IMPORTED_MODULE_4__["UserServiceService"] }
            ]; };
            NurseServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], NurseServiceService);
            /***/ 
        }),
        /***/ "./src/app/services/patient.service.ts": 
        /*!*********************************************!*\
          !*** ./src/app/services/patient.service.ts ***!
          \*********************************************/
        /*! exports provided: PatientService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientService", function () { return PatientService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _model_patient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/patient */ "./src/app/model/patient.ts");
            /* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-service.service */ "./src/app/services/user-service.service.ts");
            /* harmony import */ var _model_patientStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/patientStatus */ "./src/app/model/patientStatus.ts");
            var PatientService = /** @class */ (function () {
                function PatientService(http, userService) {
                    this.http = http;
                    this.userService = userService;
                    this.urlPatient = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].patient;
                    this.listPatients = new Array();
                    this.getAllPatients();
                    this.getAllRequests();
                }
                PatientService.prototype.newPatient = function (patient) {
                    return this.http.post(this.urlPatient + '/register', patient);
                };
                PatientService.prototype.loginPatient = function (patient) {
                    this.userService.setToken(patient);
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/login', patient, { responseType: 'text' });
                };
                PatientService.prototype.editPatient = function (patient) {
                    return this.http.post(this.urlPatient + '/edit', patient, { responseType: 'text' });
                };
                PatientService.prototype.addPatient = function (p) {
                    if (this.getPatient(p.email) === null) {
                        this.listPatients.push(p);
                    }
                };
                PatientService.prototype.getPatient = function (email) {
                    if (this.listPatients.length === 0) {
                        return null;
                    }
                    for (var _i = 0, _a = this.listPatients; _i < _a.length; _i++) {
                        var u = _a[_i];
                        if (u.email === email) {
                            return u;
                        }
                    }
                    return null;
                };
                PatientService.prototype.setPatient = function (p) {
                    for (var _i = 0, _a = this.listPatients; _i < _a.length; _i++) {
                        var p1 = _a[_i];
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
                };
                PatientService.prototype.whichStatus = function (status) {
                    if (status === 'AWAITING_APPROVAL') {
                        return _model_patientStatus__WEBPACK_IMPORTED_MODULE_6__["PatientStatus"].AWAITING_APPROVAL;
                    }
                    else {
                        return _model_patientStatus__WEBPACK_IMPORTED_MODULE_6__["PatientStatus"].APPROVED;
                    }
                };
                PatientService.prototype.getAllPatients = function () {
                    var _this = this;
                    this.http.get(this.urlPatient + '/all').subscribe(function (data) {
                        for (var _i = 0, data_9 = data; _i < data_9.length; _i++) {
                            var c = data_9[_i];
                            _this.patient = new _model_patient__WEBPACK_IMPORTED_MODULE_4__["Patient"](c.email, c.password, c.name, c.surname, c.number, c.address, c.city, c.country, c.insuranceID, _this.whichStatus(c.status.toString()));
                            _this.addPatient(_this.patient);
                        }
                    }, function (error) {
                        console.log(error);
                    });
                    return this.listPatients;
                };
                PatientService.prototype.getAllRequests = function () {
                    var _this = this;
                    this.http.get(this.urlPatient + '/requests').subscribe(function (data) {
                        _this.tmp = new Array();
                        for (var _i = 0, data_10 = data; _i < data_10.length; _i++) {
                            var c = data_10[_i];
                            _this.patient = new _model_patient__WEBPACK_IMPORTED_MODULE_4__["Patient"](c.email, c.password, c.name, c.surname, c.number, c.address, c.city, c.country, c.insuranceID, _model_patientStatus__WEBPACK_IMPORTED_MODULE_6__["PatientStatus"].AWAITING_APPROVAL);
                            _this.tmp.push(_this.patient);
                            console.log(_this.patient);
                        }
                    }, function (error) {
                        console.log(error);
                    });
                    console.log(this.tmp);
                    return this.tmp;
                };
                return PatientService;
            }());
            PatientService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _user_service_service__WEBPACK_IMPORTED_MODULE_5__["UserServiceService"] }
            ]; };
            PatientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], PatientService);
            /***/ 
        }),
        /***/ "./src/app/services/user-service.service.ts": 
        /*!**************************************************!*\
          !*** ./src/app/services/user-service.service.ts ***!
          \**************************************************/
        /*! exports provided: TOKEN, UserServiceService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN", function () { return TOKEN; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceService", function () { return UserServiceService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/user */ "./src/app/model/user.ts");
            /* harmony import */ var _model_role__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/role */ "./src/app/model/role.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            var TOKEN = 'LoggedInUser';
            var UserServiceService = /** @class */ (function () {
                function UserServiceService(router, http) {
                    this.router = router;
                    this.http = http;
                    this.list = new Array();
                    this.urlUser = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].user;
                    this.user = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"]('', '', _model_role__WEBPACK_IMPORTED_MODULE_3__["Role"].NONE);
                    this.getAllUsers();
                    localStorage.setItem(TOKEN, JSON.stringify(this.user));
                }
                UserServiceService.prototype.addUser = function (u) {
                    if (this.getUser(u.email) === null) {
                        this.list.push(u);
                    }
                };
                UserServiceService.prototype.getUser = function (email) {
                    if (this.list.length === 0) {
                        return null;
                    }
                    for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
                        var u = _a[_i];
                        if (u.email === email) {
                            return u;
                        }
                    }
                    return null;
                };
                UserServiceService.prototype.setUser = function (u) {
                    for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
                        var p1 = _a[_i];
                        if (p1.email === u.email) {
                            p1.password = u.password;
                            return;
                        }
                    }
                };
                UserServiceService.prototype.setToken = function (user) {
                    localStorage.setItem(TOKEN, JSON.stringify(user));
                    this.user = user;
                };
                UserServiceService.prototype.isLoggedIn = function () {
                    if (localStorage.getItem(TOKEN) !== null) {
                        return localStorage.getItem(TOKEN);
                    }
                    else {
                        return null;
                    }
                };
                UserServiceService.prototype.logOut = function () {
                    this.router.navigate(['']);
                    this.user = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"]('', '', _model_role__WEBPACK_IMPORTED_MODULE_3__["Role"].NONE);
                    localStorage.removeItem(TOKEN);
                    localStorage.setItem(TOKEN, JSON.stringify(this.user));
                };
                UserServiceService.prototype.isPatient = function () {
                    if (this.isLoggedIn()) {
                        return this.user.role === _model_role__WEBPACK_IMPORTED_MODULE_3__["Role"].PATIENT;
                    }
                };
                UserServiceService.prototype.isDoctor = function () {
                    if (this.isLoggedIn()) {
                        return this.user.role === _model_role__WEBPACK_IMPORTED_MODULE_3__["Role"].DOCTOR;
                    }
                };
                UserServiceService.prototype.isNurse = function () {
                    if (this.isLoggedIn()) {
                        return this.user.role === _model_role__WEBPACK_IMPORTED_MODULE_3__["Role"].NURSE;
                    }
                };
                UserServiceService.prototype.isClinicalAdmin = function () {
                    if (this.isLoggedIn()) {
                        return this.user.role === _model_role__WEBPACK_IMPORTED_MODULE_3__["Role"].CLINIC_ADMINISTRATOR;
                    }
                };
                UserServiceService.prototype.isClinicalCentreAdmin = function () {
                    if (this.isLoggedIn()) {
                        return this.user.role === _model_role__WEBPACK_IMPORTED_MODULE_3__["Role"].CLINICAL_CENTRE_ADMINISTRATOR;
                    }
                };
                UserServiceService.prototype.isNone = function () {
                    if (this.isLoggedIn()) {
                        return this.user.role === _model_role__WEBPACK_IMPORTED_MODULE_3__["Role"].NONE;
                    }
                };
                UserServiceService.prototype.whichRole = function (role) {
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
                };
                UserServiceService.prototype.getAllUsers = function () {
                    var _this = this;
                    this.http.get(this.urlUser + '/all').subscribe(function (data) {
                        for (var _i = 0, data_11 = data; _i < data_11.length; _i++) {
                            var c = data_11[_i];
                            _this.u = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"](c.email, c.password, _this.whichRole(c.role.toString()));
                            _this.addUser(_this.u);
                        }
                    }, function (error) {
                        console.log(error);
                    });
                    console.log(this.list);
                    return this.list;
                };
                return UserServiceService;
            }());
            UserServiceService.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
            ]; };
            UserServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserServiceService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
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
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! G:\PSW-ISA\TIM5_PSW_2019-20\frontend\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map