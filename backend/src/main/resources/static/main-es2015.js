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
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n               [mode]=\"(isHandset$ | async) ? 'over' : 'side'\" [opened]=\"(isHandset$ | async) === true\">\r\n\r\n    <mat-toolbar>Menu</mat-toolbar>\r\n    <mat-nav-list *ngIf = \"isNone()\">\r\n      <a mat-list-item routerLink=\"/login\">Login</a>\r\n      <a mat-list-item routerLink=\"/patient/register\">Register</a>\r\n    </mat-nav-list>\r\n\r\n    <mat-nav-list *ngIf=\"isPatient()\">\r\n      <a mat-list-item routerLink=\"/patient/profile\">Profile</a>\r\n      <a mat-list-item routerLink=\"/patient/medicalRecord\">Medical record</a>\r\n      <a mat-list-item routerLink=\"/patient/medicalHistory\">Medical history</a>\r\n      <a mat-list-item routerLink=\"/patient/clinics\">Clinics</a>\r\n      <a mat-list-item (click)=\"onLogout()\">Logout</a>\r\n    </mat-nav-list>\r\n\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar>\r\n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n      <span>Clinical Centre</span>\r\n    </mat-toolbar>\r\n    <!-- Add Content Here -->\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinics-list/clinics-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinics-list/clinics-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-table class=\"lessons-table mat-elevation-z8\" [dataSource]=\"clinicsData\">\r\n\r\n  <ng-container matColumnDef=\"Name\">\r\n    <div *matHeaderCellDef>#</div>\r\n    <div *matCellDef=\"let lesson\">{{lesson.seqNo}}</div>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\" class=\"text-in-table\">\r\n      {{element.name}}\r\n    </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"address\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Address </th>\r\n    <td mat-cell *matCellDef=\"let element\" class=\"text-in-table\"> {{element.address}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"description\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\r\n    <td mat-cell *matCellDef=\"let element\" class=\"text-in-table\"> {{element.address}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"Columns sticky: true\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: Columns;\"></tr>\r\n\r\n</mat-table>\r\n");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-profile/patient-profile.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-profile/patient-profile.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 offset-md-2\">\r\n        <mat-card>\r\n          <h3>Profile</h3>\r\n          <hr>\r\n          <form [formGroup]=\"patientProfileForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n            <div class=\"form-group\">\r\n              <mat-label for=\"email\">Email</mat-label>\r\n              <input type=\"email\" readonly=\"readonly\" id=\"email\" formControlName=\"email\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && patientProfileForm.get('email').errors }\">\r\n\r\n              <div *ngIf=\"submitted && patientProfileForm.get('email').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"patientProfileForm.get('email').errors['required']\">Email is required</div>\r\n                <div *ngIf=\"patientProfileForm.get('email').errors['email']\">Email must be a valid email address</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">Password</label>\r\n              <input type=\"text\" id=\"password\" formControlName=\"password\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && patientProfileForm.get('password').errors }\">\r\n              <div *ngIf=\"submitted && patientProfileForm.get('password').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"patientProfileForm.get('password').errors['required']\">Password is required</div>\r\n                <div *ngIf=\"patientProfileForm.get('password').errors['minlength']\">Password must be at least 8 characters\r\n                  long</div>\r\n                <div *ngIf=\"patientProfileForm.get('password').errors['pattern']\">Password must contain at least 1 lowercase,\r\n                  1 uppercase letter\r\n                  and 1 number</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">First Name</label>\r\n              <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && patientProfileForm.get('name').errors }\" />\r\n              <div *ngIf=\"submitted && patientProfileForm.get('name').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\" patientProfileForm.get('name').errors['required']\">First Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"surname\">Last Name</label>\r\n              <input type=\"text\" id=\"surname\" formControlName=\"surname\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && patientProfileForm.get('surname').errors }\" />\r\n              <div *ngIf=\"submitted && patientProfileForm.get('surname').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"patientProfileForm.get('surname').errors['required']\">Last Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"address\">Address</label>\r\n              <input type=\"text\" id=\"address\" formControlName=\"address\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && patientProfileForm.get('address').errors }\" />\r\n              <div *ngIf=\"submitted && patientProfileForm.get('address').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"patientProfileForm.get('address').errors['required']\">Address is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"city\">City</label>\r\n              <input type=\"text\" id=\"city\" formControlName=\"city\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && patientProfileForm.get('city').errors }\" />\r\n              <div *ngIf=\"submitted && patientProfileForm.get('city').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"patientProfileForm.get('city').errors['required']\">City is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"country\">Country</label>\r\n              <input type=\"text\" id=\"country\" formControlName=\"country\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && patientProfileForm.get('country').errors }\" />\r\n              <div *ngIf=\"submitted && patientProfileForm.get('country').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"patientProfileForm.get('country').errors['required']\">Country is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div>\r\n              <input time\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"number\">Phone Number</label>\r\n              <input type=\"number\" id=\"number\" formControlName=\"number\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && patientProfileForm.get('number').errors }\" />\r\n              <div *ngIf=\"submitted && patientProfileForm.get('number').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"patientProfileForm.get('number').errors['required']\">Phone Number is required</div>\r\n                <div *ngIf=\"patientProfileForm.get('number').errors['minlength']\">A phone number must have at least 9\r\n                  digits\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"insuranceID\">Health Insurance ID</label>\r\n              <input type=\"text\" readonly=\"readonly\" id=\"insuranceID\" formControlName=\"insuranceID\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted &&  patientProfileForm.get('insuranceID').errors }\" />\r\n              <div *ngIf=\"submitted && patientProfileForm.get('insuranceID').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"patientProfileForm.get('insuranceID').errors['required']\">Health Insurance ID is required\r\n                </div>\r\n                <div\r\n                  *ngIf=\"patientProfileForm.get('insuranceID').errors['minlength'] ||patientProfileForm.get('insuranceID').errors['maxlength']\">\r\n                  Health\r\n                  Insurance ID must contain exactly 13 characters</div>\r\n              </div>\r\n            </div>\r\n\r\n            <button mat-raised-button color=\"primary\" class=\"pull-right\">Save</button>\r\n\r\n          </form>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registration/registration.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/registration/registration.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 offset-md-2\">\n        <mat-card>\n          <h3>Patient Registration</h3>\n          <hr>\n          <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n\n            <div class=\"form-group\">\n              <label for=\"email\">Email</label>\n              <input type=\"email\" id=\"email\" formControlName=\"email\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('email').errors }\">\n\n              <div *ngIf=\"submitted && registerForm.get('email').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"registerForm.get('email').errors['required']\">Email is required</div>\n                <div *ngIf=\"registerForm.get('email').errors['email']\">Email must be a valid email address</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('password').errors }\">\n              <div *ngIf=\"submitted && registerForm.get('password').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"registerForm.get('password').errors['required']\">Password is required</div>\n                <div *ngIf=\"registerForm.get('password').errors['minlength']\">Password must be at least 8 characters\n                  long</div>\n                <div *ngIf=\"registerForm.get('password').errors['pattern']\">Password must contain at least 1 lowercase,\n                  1 uppercase letter\n                  and 1 number</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"name\">First Name</label>\n              <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('name').errors }\" />\n              <div *ngIf=\"submitted && registerForm.get('name').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\" registerForm.get('name').errors['required']\">First Name is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"surname\">Last Name</label>\n              <input type=\"text\" id=\"surname\" formControlName=\"surname\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('surname').errors }\" />\n              <div *ngIf=\"submitted && registerForm.get('surname').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"registerForm.get('surname').errors['required']\">Last Name is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"address\">Address</label>\n              <input type=\"text\" id=\"address\" formControlName=\"address\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('address').errors }\" />\n              <div *ngIf=\"submitted && registerForm.get('address').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"registerForm.get('address').errors['required']\">Address is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"city\">City</label>\n              <input type=\"text\" id=\"city\" formControlName=\"city\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('city').errors }\" />\n              <div *ngIf=\"submitted && registerForm.get('city').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"registerForm.get('city').errors['required']\">City is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"country\">Country</label>\n              <input type=\"text\" id=\"country\" formControlName=\"country\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('country').errors }\" />\n              <div *ngIf=\"submitted && registerForm.get('country').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"registerForm.get('country').errors['required']\">Country is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"number\">Phone Number</label>\n              <input type=\"number\" id=\"number\" formControlName=\"number\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('number').errors }\" />\n              <div *ngIf=\"submitted && registerForm.get('number').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"registerForm.get('number').errors['required']\">Phone Number is required</div>\n                <div *ngIf=\"registerForm.get('number').errors['minlength']\">A phone number must have at least 9\n                  digits\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"insuranceID\">Health Insurance ID</label>\n              <input type=\"text\" id=\"insuranceID\" formControlName=\"insuranceID\" class=\"form-control\"\n                     [ngClass]=\"{ 'is-invalid': submitted &&  registerForm.get('insuranceID').errors }\" />\n              <div *ngIf=\"submitted && registerForm.get('insuranceID').errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"registerForm.get('insuranceID').errors['required']\">Health Insurance ID is required\n                </div>\n                <div\n                  *ngIf=\"registerForm.get('insuranceID').errors['minlength'] ||registerForm.get('insuranceID').errors['maxlength']\">\n                  Health\n                  Insurance ID must contain exactly 13 characters</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <a routerLink=\"/patient/login\">Already have an account? Login here.</a>\n            </div>\n\n            <button mat-raised-button color=\"primary\" class=\"pull-right\">Register</button>\n\n          </form>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</div>\n");

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
/* harmony import */ var _components_clinics_list_clinics_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/clinics-list/clinics-list.component */ "./src/app/components/clinics-list/clinics-list.component.ts");
/* harmony import */ var _components_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/patient-profile/patient-profile.component */ "./src/app/components/patient-profile/patient-profile.component.ts");








const routes = [
    {
        path: '',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
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
        path: 'patient/clinics',
        component: _components_clinics_list_clinics_list_component__WEBPACK_IMPORTED_MODULE_6__["ClinicsListComponent"],
    },
    {
        path: 'patient/profile',
        component: _components_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_7__["PatientProfileComponent"],
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
/* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\r\n  height: 100%;\r\n}\r\n\r\n.sidenav {\r\n  width: 200px;\r\n}\r\n\r\n.mat-nav-list{\r\n  background-color: seashell;\r\n}\r\n\r\n.mat-toolbar.mat-primary {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4ubWF0LW5hdi1saXN0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHNlYXNoZWxsO1xyXG59XHJcbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuIl19 */");

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
/* harmony import */ var _components_clinics_list_clinics_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/clinics-list/clinics-list.component */ "./src/app/components/clinics-list/clinics-list.component.ts");
/* harmony import */ var _components_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/patient-profile/patient-profile.component */ "./src/app/components/patient-profile/patient-profile.component.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_13__["RegistrationComponent"],
            _components_home_page_patient_home_page_patient_component__WEBPACK_IMPORTED_MODULE_14__["HomePagePatientComponent"],
            _components_clinics_list_clinics_list_component__WEBPACK_IMPORTED_MODULE_15__["ClinicsListComponent"],
            _components_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_16__["PatientProfileComponent"],
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
        entryComponents: [],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/clinics-list/clinics-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/clinics-list/clinics-list.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpbmljcy1saXN0L2NsaW5pY3MtbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/clinics-list/clinics-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/clinics-list/clinics-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ClinicsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicsListComponent", function() { return ClinicsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClinicsListComponent = class ClinicsListComponent {
    constructor() {
        this.Columns = ['name', 'address'];
    }
    ngOnInit() {
    }
};
ClinicsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clinics-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clinics-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinics-list/clinics-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clinics-list.component.css */ "./src/app/components/clinics-list/clinics-list.component.css")).default]
    })
], ClinicsListComponent);



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


let HomePagePatientComponent = class HomePagePatientComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomePagePatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page-patient',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page-patient.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page-patient/home-page-patient.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page-patient.component.css */ "./src/app/components/home-page-patient/home-page-patient.component.css")).default]
    })
], HomePagePatientComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.main-content {\r\n  margin: 20px 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IHtcclxuICBtYXJnaW46IDIwcHggMDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: Patient, LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patient", function() { return Patient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _model_role__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/role */ "./src/app/model/role.ts");
/* harmony import */ var _services_doctor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/doctor.service */ "./src/app/services/doctor.service.ts");








class Patient {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}
let LoginComponent = class LoginComponent {
    constructor(patientService, formBuilder, router, userService, doctorService) {
        this.patientService = patientService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.doctorService = doctorService;
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
        this.patient = new Patient(this.f.email.value, this.f.password.value);
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value));
        this.user = this.userService.getUser(this.f.email.value);
        this.attemptPatientLogin();
    }
    attemptPatientLogin() {
        if (this.user.role === _model_role__WEBPACK_IMPORTED_MODULE_6__["Role"].PATIENT) {
            console.log(this.user);
            this.patientService.loginPatient(this.user).subscribe(data => {
                console.log(data);
                if (data !== null) {
                    console.log('Successful logged in');
                    this.router.navigate(['/patient/home']);
                }
                else {
                    console.log('Login error');
                }
            }, error => {
                console.log(error);
            });
        }
        else if (this.user.role === _model_role__WEBPACK_IMPORTED_MODULE_6__["Role"].DOCTOR) {
            console.log(this.user);
            this.doctorService.loginDoctor(this.user).subscribe(data => {
                console.log(data);
                if (data !== null) {
                    console.log('Successful logged in');
                    this.router.navigate(['/doctor/home']);
                }
                else {
                    console.log('Login error');
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
    { type: _services_doctor_service__WEBPACK_IMPORTED_MODULE_7__["DoctorService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    })
], LoginComponent);



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
        this.patient = new _model_patient__WEBPACK_IMPORTED_MODULE_2__["Patient"](this.f.email.value, this.f.password.value, this.f.name.value, this.f.surname.value, this.f.number.value, this.f.address.value, this.f.city.value, this.f.country.value, this.f.insuranceID.value, _model_patientStatus__WEBPACK_IMPORTED_MODULE_6__["PatientStatus"].AWAITING_APPROVAL);
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_7__["User"](this.f.emal.value, this.f.password.value, _model_role__WEBPACK_IMPORTED_MODULE_8__["Role"].PATIENT);
        this.createPatient();
    }
    createPatient() {
        this.patientService.newPatient(this.patient).subscribe(data => {
            this.userService.addUser(this.user);
            this.patientService.addPatient(this.patient);
            this.router.navigate(['/login']);
        }, error => {
            alert('Error registration patient');
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
    PatientStatus[PatientStatus["AWAITING_APPROVAL"] = 0] = "AWAITING_APPROVAL";
    PatientStatus[PatientStatus["APPROVED"] = 1] = "APPROVED";
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-service.service */ "./src/app/services/user-service.service.ts");





let DoctorService = class DoctorService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
        this.urlDoctor = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].doctor;
        this.listDoctors = new Array();
    }
    loginDoctor(doctor) {
        this.userService.setToken(doctor);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/login', doctor, { responseType: 'text' });
    }
};
DoctorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _user_service_service__WEBPACK_IMPORTED_MODULE_4__["UserServiceService"] }
];
DoctorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DoctorService);



/***/ }),

/***/ "./src/app/services/patient.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/patient.service.ts ***!
  \*********************************************/
/*! exports provided: API_URL, PatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return PatientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _model_patient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/patient */ "./src/app/model/patient.ts");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _model_patientStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/patientStatus */ "./src/app/model/patientStatus.ts");







const API_URL = 'http://localhost:8080';
let PatientService = class PatientService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
        this.urlPatient = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].patient;
        this.listPatients = new Array();
        this.patient = new _model_patient__WEBPACK_IMPORTED_MODULE_4__["Patient"]('patient@email.com', 'Patient123', 'Patient', 'Patientic', '147258321', 'Adresa', 'Grad', 'Drzava', '1111111111111', _model_patientStatus__WEBPACK_IMPORTED_MODULE_6__["PatientStatus"].AWAITING_APPROVAL);
        this.listPatients.push(this.patient);
    }
    newPatient(patient) {
        return this.http.post(this.urlPatient + '/register', patient);
    }
    loginPatient(patient) {
        this.userService.setToken(patient);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/login', patient, { responseType: 'text' });
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






const TOKEN = 'LoggedInUser';
let UserServiceService = class UserServiceService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.list = new Array();
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"]('', '', _model_role__WEBPACK_IMPORTED_MODULE_3__["Role"].NONE);
        this.doctor = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"]('doctor@email.com', 'Doctor123', _model_role__WEBPACK_IMPORTED_MODULE_3__["Role"].DOCTOR);
        this.patient = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"]('patient@email.com', 'Patient123', _model_role__WEBPACK_IMPORTED_MODULE_3__["Role"].PATIENT);
        this.list.push(this.doctor);
        this.list.push(this.patient);
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
    clinicalCentreAdmin: '/clinical-centre-admin',
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