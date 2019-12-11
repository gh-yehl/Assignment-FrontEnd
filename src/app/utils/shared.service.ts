import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { FSConfigurations } from "../../global-config";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public isAdmin: boolean;
  public isUser: boolean;
  public isGuest: boolean;

  
  public userId: string;
  public userType: string;
  public userName: string;
  public password: string;
  public email: string;
  public mobileNumber: string;


  public loginPageMessage: string;

  public guestSearchResult: any[];
  public technologyList: any[];


  readonly guestSearchUrl = FSConfigurations.serverURL+"guestSearch";
  readonly technologyListURL = FSConfigurations.serverURL+"listTechnologies";

  constructor(private _http: HttpClient) { }


  public getGuestSearchResult(technologyId: string, startTime: string, endTime: string) {
    const params = new HttpParams().set("technologyId",technologyId).set("startTime", startTime).set("endTime", endTime);
    this._http.get<any[]>(this.guestSearchUrl, {params}).subscribe(data => {
      console.log(data);
      this.guestSearchResult = data;
      }
    );
  }

  public loadTechnologies() {
    console.log(this.technologyList);
    if(this.technologyList == undefined) {
      this.getTechnologies();
    }
  }

  public getTechnologies() {
    this._http.get<any[]>(this.technologyListURL).subscribe(data => {
      console.log(data);
      this.technologyList = data;
      }
    );
  }

  public updateTechnologies() {
    this.getTechnologies();
  }


  
  //set token into sessoin storage
  public setToken(token: string) {
    window.sessionStorage.setItem("access_token",token);
  }

  //get token from session storage
  public getToken() {
    return window.sessionStorage.getItem("access_token");
  }

  public clearEntitlement() {
    this.isAdmin = false;
    this.isUser = false;
  }


  initRole() {
    this.isAdmin = false;
    this.isUser = false;
    this.isGuest = true;
  }

  cleanProfile() {
    this.isUser = false;
    this.isAdmin = false;
    this.isGuest = false;

    this.userId = null;
    this.userType = null;
    this.userName = null;
    this.password = null;
    this.email = null;
    this.mobileNumber = null;
  }
}
