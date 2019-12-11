import { Component, OnInit } from '@angular/core';
import {ExchangeService} from './exchange.service';
import {StockExchange} from './exchange';

declare var $: any;
@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {


  private addStatus: string;
  private editStatus: string;
  private deleteStatus: string;
  
  private stockExchangeModel = new StockExchange('','','','','');

  constructor(
    private exchangeService: ExchangeService,
  ) { }

  ngOnInit() {
    this.exchangeService.loadstockExchange();
  }



  
  stockChange(item: any, stockExchange: string) {
    item.stockExchange = stockExchange;
  }
  briefChange(item: any, brief: string) {
    item.brief = brief;
  }
  addrChange(item: any, contactAddress: string) {
    item.contactAddress = contactAddress;
  }
  remarksChange(item: any, remarks: string) {
    item.remarks = remarks;
  }

  editStockExchange(item: any) {
    this.exchangeService.editStock(item).subscribe(data => {
      console.log(data);
    },
    error => {
      console.log("editStockExchange error ===>"+error);
    });
  }


  removeStock(item: any) {
      this.exchangeService.removeStock(item.id).subscribe(data => {
      this.deleteStatus = "Delete Stock Exchange - Successfully";
      this.exchangeService.updateStockList();
    },
    error => {
      this.deleteStatus = "Delete Stock Exchange - Failed";
      console.log(error);
    });
  }


  openStockWindow() {
    //reset message hearder
    this.addStatus = "";
    //reset button to be able
    $('#addStockExchangeBtn').removeAttr("disabled");

    //reset form value
    $('#stockExchange').val("");
    $('#brief').val("");
    $('#contactAddress').val("");
    $('#remarks').val("");
  }

  addStockExchange() {
    this.stockExchangeModel.stockExchange = $('#stockExchange').val();
    this.stockExchangeModel.brief = $('#brief').val();
    this.stockExchangeModel.contactAddress = $('#contactAddress').val();
    this.stockExchangeModel.remarks = $('#remarks').val();

    console.log(this.stockExchangeModel);

    this.exchangeService.addStock(this.stockExchangeModel).subscribe(data => {
      this.addStatus = " - Successfully";

      $('#addStockExchangeBtn').attr("disabled", true);

      //update stock exchange list
      this.exchangeService.updateStockList();
    },
    error => {
      this.addStatus = " - Failed";
      
      console.log(error);
    })
  }


}
