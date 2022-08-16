import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthentificationService} from "../services/authentification.service";
/*
@Injectable()

class JwtInterceptor  implements HttpInterceptor {
 constructor(private authenticationService:AuthentificationService)
 { }

intercept(req: HttpRequest<any>, next: HttpHandler): Observable< HttpEvent<any> > {
 // add authorization header with jwt token if available
 let currentUser = this.authenticationService.currentUserValue;
 if (currentUser && currentUser.token) {
  let request = request.clone({
     setHeaders: {
       Authorization: `Bearer ${currentUser.token}`
     }});
 }
   return next.handle(request);
   }

  }
*/
