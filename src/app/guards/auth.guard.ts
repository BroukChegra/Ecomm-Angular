import { AccountService } from './../services/account.service';
import { TokenService } from './../services/token.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private tokenService:TokenService, 
    private accountService:AccountService,private router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {

    if(!this.tokenService.loggedIn()){
      this.tokenService.remove();
      this.accountService.changeStatus(false);
      this.router.navigateByUrl("/login");
      return false;
    }
    return true;
  }
  
}