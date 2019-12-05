
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import {UserServiceService} from './services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private userService: UserServiceService) { }


  public isLoggedIn() {
    return this.userService.isLoggedIn();
  }

  public isNone() {
    return this.userService.isNone();
  }
    
  public isClinicalCentreAdmin() {
    return this.userService.isClinicalCentreAdmin();
  }

  public isClinicAdmin() {
    return this.userService.isClinicalAdmin();
  }

  public isPatient() {
    return this.userService.isPatient();
  }

  public isDoctor() {
    return this.userService.isDoctor();
  }

  public isNurse() {
    return this.userService.isNurse();
  }

  public onLogout() {
    this.userService.logOut();
  }

}
