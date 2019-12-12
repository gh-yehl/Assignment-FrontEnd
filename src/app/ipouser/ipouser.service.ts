import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { FSConfigurations } from "../../global-config";


@Injectable({
  providedIn: 'root'
})
export class IpouserService {

  
  public ipoDetailsList: any[];

  readonly searchIPOsURL = FSConfigurations.serverURL + "/company/getIPOsByCompanyName";
  readonly displayCompanyURL = FSConfigurations.serverURL + "/company/getCompanyByName";

  readonly listIPODetailsURL = FSConfigurations.serverURL + "/company/getAllIPODetails";
  readonly addIPODetailsURL = FSConfigurations.serverURL + "/company/addIPODetails";
  readonly editIPODetailsURL = FSConfigurations.serverURL + "/company/editIPODetails";
  readonly removeIPODetailsURL = FSConfigurations.serverURL + "/company/deleteIPODetails";

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

  public searchIOPs(companyName: string) {
    const params = new HttpParams().set("companyName", companyName);
    return this._http.get<any[]>(this.searchIPOsURL, {params});
  }

  public displayCompany(companyName: string) {
    const params = new HttpParams().set("companyName", companyName);
    return this._http.get<any>(this.displayCompanyURL, {params});
  }
}
