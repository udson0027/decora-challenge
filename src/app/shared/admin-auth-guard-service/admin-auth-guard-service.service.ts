import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AdminAuthGuardServiceService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean>
    | Promise<boolean>
    | boolean {
    return this.getAdmin();
  }

  getAdmin() {
    const admin = JSON.parse(localStorage.getItem('currentUser')).admin;
    if (admin) {
      return true;
    }
    this.router.navigateByUrl('/');
    return false;
  }

}
