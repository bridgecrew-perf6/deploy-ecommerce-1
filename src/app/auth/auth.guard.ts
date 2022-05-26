import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log("pipe=",this.authService.isLoggedIn.pipe(take(1),map((isLoggedIn: boolean) => {})));
    return this.authService.isLoggedIn.pipe(
      take(1),
      map((isLoggedIn: boolean) => {
        console.log("second pipe",isLoggedIn);
      if (!isLoggedIn) {
          this.router.navigate(['/login']);
        console.log("third pipe",isLoggedIn);
          return false;
        }
        return true;
      })
    );
   
  }
  //signup
  /*canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isLoggedIn.pipe(
     take(1),
     map((isLoggedIn: boolean) => {
     if (!isLoggedIn) {
        this.router.navigate(['/signup']);
        return false;
      }     return true;
     })
    );
  } */
 
}