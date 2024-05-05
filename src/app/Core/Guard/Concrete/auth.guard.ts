import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { TokenStorageService } from '../../Interceptor/TokenStorageService';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {//CanActivate, CanActivateChild, CanLoad {

  constructor(private _router : Router, private token: TokenStorageService) {  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any { //boolean
      const token = this.token.getToken();
      if (token != null) {
        return true;
      }else{
        this.token.signOut();
        this._router.navigate(['/login']);

      }


  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
