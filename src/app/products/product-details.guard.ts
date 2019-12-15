import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsGuard implements CanActivate {
  constructor(private router  :Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // 1 is here the index product[0]/id[1]
      let id = +next.url[1].path;
      if(isNaN(id)||id<1){
        // Generally we will navigate to a error page.
        alert("Invalid product id ");
        this.router.navigate(['/home']);
        return false;
      };
    return true;
  }
  
}
