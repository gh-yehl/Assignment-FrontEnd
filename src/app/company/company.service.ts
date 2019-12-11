import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { FSConfigurations } from "../../global-config";



@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  
  
  public companyList: any[];

  readonly listCompanyURL = FSConfigurations.serverURL + "/company/getAllCompanies";
  readonly addCompanyURL = FSConfigurations.serverURL + "/company/addCompany";
  readonly editCompanyURL = FSConfigurations.serverURL + "/company/editCompany";
  readonly removeCompanyURL = FSConfigurations.serverURL + "/company/deleteCompany";
  
  // readonly listCompanyURL_Test = "http://localhost:9003/getAllCompanies";
  // readonly addCompanyURL_Test = "http://localhost:9003/addCompany";
  // readonly editCompanyURL_Test = "http://localhost:9003/editCompany";
  // readonly removeCompanyURL_Test = "http://localhost:9003/deleteCompany";

  constructor(private _http: HttpClient) { }

  public addCompany(company: any) {
    return this._http.post<any>(this.addCompanyURL, company);
  }

  public editCompany(company: any) {
    return this._http.post<any>(this.editCompanyURL, company);
  }

  public removeCompany(companyId: string) {
    const params = new HttpParams().set("companyId", companyId);
    return this._http.get<any[]>(this.removeCompanyURL, {params});
  }


  public loadCompany() {
    console.log("load stock exchange list =======> " +this.companyList);
    if(this.companyList == undefined) {
      this.getCompany();
    }
  }

  public getCompany() {
    //this._http.get<any[]>(this.listCompanyURL).subscribe(data => {
      this._http.get<any[]>(this.listCompanyURL).subscribe(data => {
      console.log("get company list ========>"+data);
      this.companyList = data;
      }
    );
  }

  public updateCompanyList() {
    this.getCompany();
  }
}
