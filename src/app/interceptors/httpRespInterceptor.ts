import { Injectable } from '@angular/core';
import {  HttpEvent, HttpRequest, HttpResponse, HttpErrorResponse, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { SharedService } from '../utils/shared.service';

@Injectable()
export class HttpRespInterceptor implements HttpInterceptor {

  constructor(private router: Router, private sharedService: SharedService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .pipe(catchError((err: HttpErrorResponse) => this.handleData(err)));
  }

  private handleData(
    event: HttpResponse<any> | HttpErrorResponse
  ): Observable<any> {
    switch (event.status) {
      case 401:
        console.log("Case 401 =====================================> Un-authorized");
        this.sharedService.clearEntitlement();
        this.sharedService.loginPageMessage = "You have authorization issue, may need log in!";
        this.router.navigate(['login']);
        return of(event);
        break;
      case 403:
        console.log("Case 403 =====================================> Resource forbidden");
        this.sharedService.clearEntitlement();
        this.router.navigate(['error']);
        return of(event);
        break;
      case 404:
        console.log("Case 404 =====================================> Page Not Found");
        this.sharedService.clearEntitlement();
        this.router.navigate(['error']);
        return of(event);
        break;
      case 500:
        //this.router.navigate(['500']);
        console.log("response interceptor ========>500");
        return of(event);
        break;
      default:
        console.log('other event status ========>', event.status);
    }
    return throwError(event);
  }
}