import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { FSConfigurations } from "../../global-config";


@Injectable({
  providedIn: 'root'
})
export class CompareService {

  public companyList: any[];
  public exchangeList: any[];
  public sectorList: any[];
   

  readonly compCompanyURL = FSConfigurations.serverURL + "/company/compareCompany";



  constructor(private _http: HttpClient) { }

  public compCompany(compareForm: any) {
    return this._http.post<any>(this.compCompanyURL, compareForm);
  }

}
