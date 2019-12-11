import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { FSConfigurations } from "../../global-config";


@Injectable({
  providedIn: 'root'
})
export class IpoadminService {
  
  
  public ipoDetailsList: any[];

  readonly listIPODetailsURL = FSConfigurations.serverURL + "/company/getAllIPODetails";
  readonly addIPODetailsURL = FSConfigurations.serverURL + "/company/addIPODetails";
  readonly editIPODetailsURL = FSConfigurations.serverURL + "/company/editIPODetails";
  readonly removeIPODetailsURL = FSConfigurations.serverURL + "/company/deleteIPODetails";
  
  // readonly listIPODetailsURL_Test = "http://localhost:9003/getAllIPODetails";
  // readonly addIPODetailsURL_Test = "http://localhost:9003/addIPODetails";
  // readonly editIPODetailsURL_Test = "http://localhost:9003/editIPODetails";
  // readonly removeIPODetailsURL_Test = "http://localhost:9003/deleteIPODetails";

  constructor(private _http: HttpClient) { }

  public addIPODetails(ipodetails: any) {
    return this._http.post<any>(this.addIPODetailsURL, ipodetails);
  }

  public editIPODetails(ipodetails: any) {
    return this._http.post<any>(this.editIPODetailsURL, ipodetails);
  }

  public removeIPODetails(ipoDetailsId: string) {
    const params = new HttpParams().set("ipoDetailsId", ipoDetailsId);
    return this._http.get<any[]>(this.removeIPODetailsURL, {params});
  }


  public loadIPODetails() {
    console.log("load stock exchange list =======> " +this.ipoDetailsList);
    if(this.ipoDetailsList == undefined) {
      this.getIPODetails();
    }
  }

  public getIPODetails() {
    //this._http.get<any[]>(this.listIPODetailsURL).subscribe(data => {
      this._http.get<any[]>(this.listIPODetailsURL).subscribe(data => {
      console.log("get IPODetails list ========>"+data);
      this.ipoDetailsList = data;
      }
    );
  }

  public updateIPODetailsList() {
    this.getIPODetails();
  }

}
