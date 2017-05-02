import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthGuardServiceService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean
    | Observable<boolean>
    | Promise<boolean> {
    return this.getUser();
  }

  getUser() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    this.router.navigateByUrl('login');
    return false;
  }
}

