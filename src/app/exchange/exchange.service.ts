import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { FSConfigurations } from "../../global-config";

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  
  public stockExchangeList: any[];

  readonly listStockURL = FSConfigurations.serverURL + "/stock/getAllStockExchange";
  readonly addStockURL = FSConfigurations.serverURL + "/stock/addStockExchange";
  readonly editStockURL = FSConfigurations.serverURL + "/stock/editStockExchange";
  readonly removeStockURL = FSConfigurations.serverURL + "/stock/deleteStockExchange";
  
  // readonly listStockURL_Test = "http://localhost:9001/getAllStockExchange";
  // readonly addStockURL_Test = "http://localhost:9001/addStockExchange";
  // readonly removeStockURL_Test = "http://localhost:9001/deleteStockExchange";
  // readonly editStockURL_Test = "http://localhost:9001/editStockExchange";

  constructor(private _http: HttpClient) { }

  public addStock(stockExchange: any) {
    return this._http.post<any>(this.addStockURL, stockExchange);
  }

  public editStock(stockExchange: any) {
    return this._http.post<any>(this.editStockURL, stockExchange);
  }

  public removeStock(stockExchangeId: string) {
    const params = new HttpParams().set("stockExchangeId", stockExchangeId);
    return this._http.get<any[]>(this.removeStockURL, {params});
  }


  public loadstockExchange() {
    console.log("load stock exchange list =======> " +this.stockExchangeList);
    if(this.stockExchangeList == undefined) {
      this.getStockExchange();
    }
  }

  public getStockExchange() {
    //this._http.get<any[]>(this.listStockURL).subscribe(data => {
      this._http.get<any[]>(this.listStockURL).subscribe(data => {
      console.log("get stock exchange list ========>"+data);
      this.stockExchangeList = data;
      }
    );
  }

  public updateStockList() {
    this.getStockExchange();
  }

}
