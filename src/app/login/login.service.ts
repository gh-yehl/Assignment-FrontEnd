import { Injectable } from '@angular/core';
import { Login } from "./login";

import { HttpClient, HttpParams } from "@angular/common/http";
import { FSConfigurations } from "../../global-config";
import {SharedService} from '../utils/shared.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public status: string;
  public technologyList: any[];
                                                     
  readonly loginURL = FSConfigurations.serverURL + "/security/signIn";
  readonly loginURL_test = "http://localhost:8888" + "/signIn";

  constructor(
    private _http: HttpClient,
    private sharedService: SharedService,
    ) { }

  public login(loginForm: Login) {
    return this._http.post<any>(this.loginURL, loginForm);
  }

}
