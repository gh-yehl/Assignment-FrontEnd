import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { FSConfigurations } from "../../global-config";


@Injectable({
  providedIn: 'root'
})
export class SectorService {

  public sectorList: any[];
   
  readonly compSectorURL = FSConfigurations.serverURL + "/sector/compareSector";

  constructor(private _http: HttpClient) { }


  public compSector(sectorForm: any) {
    return this._http.post<any>(this.compSectorURL, sectorForm);
  }

}
