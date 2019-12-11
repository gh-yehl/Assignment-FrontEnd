import { Injectable, wtfStartTimeRange } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { FSConfigurations } from "../global-config";

@Injectable({
  providedIn: 'root'
})
export class AppComponentService {

  public searchResult: any[];
  

  readonly url = FSConfigurations.serverURL + "listTechnologies";

  constructor(private _http: HttpClient) { }

  public getTechnologyList() {
    return this._http.get<any[]>(this.url);
  }

}
