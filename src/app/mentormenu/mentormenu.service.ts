import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { FSConfigurations } from "../../global-config";

@Injectable({
  providedIn: 'root'
})
export class MentormenuService {

  readonly currentTrainingURL = FSConfigurations.serverURL + "mentorCurrentTraining";
  readonly completedTrainingURL = FSConfigurations.serverURL + "mentorCompletedTraining";


  constructor(private _http: HttpClient) { }

  public getCurrentTraingList(userId: string) {
    const params = new HttpParams().set("userId",userId);
    return this._http.get<any[]>(this.currentTrainingURL, {params});
  }

  public getCompletedTraingList(userId: string) {
    const params = new HttpParams().set("userId",userId);
    return this._http.get<any[]>(this.completedTrainingURL, {params});
  }
}
