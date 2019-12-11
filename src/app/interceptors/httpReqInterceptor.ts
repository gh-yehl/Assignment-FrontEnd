import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedService } from '../utils/shared.service';

@Injectable()
export class HttpReqInterceptor implements HttpInterceptor {

  constructor(
      private sharedService: SharedService,
      ) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = sessionStorage.getItem("access_token");


    console.log(accessToken);
    if (accessToken) {
      request = request.clone({
        //headers: request.headers.set("myToken", accessToken)
        
        setHeaders: { 'JWTToken': accessToken}
      });
    }

    return next.handle(request);

  }
}