// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {ClinicalCentreAdministrator} from '../app/model/ClinicalCentreAdministrator';

export const environment = {
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

