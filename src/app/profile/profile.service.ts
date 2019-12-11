import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Profile } from './profile';
import { FSConfigurations } from "../../global-config";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  
  public updateProfileMessage: string;

  readonly updadeProfileURL = FSConfigurations.serverURL + "/security/updateProfile";

  constructor(private _http: HttpClient) { }

  public updadeProfile(profileForm: Profile) {
    return this._http.post<any>(this.updadeProfileURL, profileForm);
  }


}
