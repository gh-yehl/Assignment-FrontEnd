import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { FSConfigurations } from "../../global-config";

@Injectable({
  providedIn: 'root'
})
export class AdminmenuService {

  readonly userListURL =  FSConfigurations.serverURL + "findUsers";
  readonly changeUserStatusURL = FSConfigurations.serverURL + "changeUserStatus";
  readonly editTechnologyURL = FSConfigurations.serverURL + "editTechnology";
  readonly addTechnologyURL = FSConfigurations.serverURL + "addTechnology";
  readonly removeTechnologyURL = FSConfigurations.serverURL + "deleteTechnology";
  
  constructor(private _http: HttpClient) { }


  public findUsers(userName: string) {
    const params = new HttpParams().set("userName", userName);
    return this._http.get<any[]>(this.userListURL, {params});
  }

  public changeUserStatus(user: any) {
    return this._http.post<any>(this.changeUserStatusURL, user);
  }

  public editTechnology(technology: any) {
    return this._http.post<any>(this.editTechnologyURL, technology);
  }

  public addTechnology(technology: any) {
    return this._http.post<any>(this.addTechnologyURL, technology);
  }

  public removeTechnology(technologyId: string) {
    const params = new HttpParams().set("technologyId", technologyId);
    return this._http.get<any[]>(this.removeTechnologyURL, {params});
  }

}
