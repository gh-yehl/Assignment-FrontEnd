import { Component, OnInit } from '@angular/core';
import {IpouserService} from './ipouser.service';
import {IPODetails} from './ipodetails';

declare var $: any;

@Component({
  selector: 'app-ipouser',
  templateUrl: './ipouser.component.html',
  styleUrls: ['./ipouser.component.css']
})
export class IpouserComponent implements OnInit {

  private addStatus: string;
  private editStatus: string;
  private deleteStatus: string;
  
  private ipoDetailsModel = new IPODetails('','','','','','','');

  constructor(
    private ipouserService: IpouserService,
  ) { }


  ngOnInit() {
    this.ipouserService.loadIPODetails();
  }




  
  companyNameChange(item: any, companyName: string) {
    item.companyName = companyName;
  }
  stockExchangeChange(item: any, stockExchange: string) {
    item.stockExchange = stockExchange;
  }
  pricePerShareChange(item: any, pricePerShare: string) {
    item.pricePerShare = pricePerShare;
  }
  
  numberOfSharesChange(item: any, numberOfShares: string) {
    item.numberOfShares = numberOfShares;
  }
  openTimeChange(item: any, openTime: string) {
    item.openTime = openTime;
  }
  remarksChange(item: any, remarks: string) {
    item.remarks = remarks;
  }


  editIPODetails(item: any) {
    this.ipouserService.editIPODetails(item).subscribe(data => {
      console.log(data);
    },
    error => {
      console.log("editIPODetails error ===>"+error);
    });
  }

  removeIPODetails(item: any) {
    this.ipouserService.removeIPODetails(item.id).subscribe(data => {
    this.deleteStatus = "Delete IPODetails - Successfully";
    this.ipouserService.updateIPODetailsList();
  },
  error => {
    this.deleteStatus = "Delete IPODetails - Failed";
    console.log(error);
  });
  }


  openIPODetailsWindow() {
    //reset message hearder
    this.addStatus = "";
    //reset button to be able
    $('#addIPODetailsBtn').removeAttr("disabled");

    //reset form value
    $('#companyName').val("");
    $('#stockExchange').val("");
    $('#pricePerShare').val("");
    $('#numberOfShares').val("");
    $('#openTime').val("");
    $('#remarks').val("");
  }


  addIPODetails() {
    this.ipoDetailsModel.companyName = $('#companyName').val();
    this.ipoDetailsModel.stockExchange = $('#stockExchange').val();
    this.ipoDetailsModel.pricePerShare = $('#pricePerShare').val();

    this.ipoDetailsModel.numberOfShares = $('#numberOfShares').val();
    this.ipoDetailsModel.openTime = $('#openTime').val();
    this.ipoDetailsModel.remarks = $('#remarks').val();

    console.log(this.ipoDetailsModel);

    this.ipouserService.addIPODetails(this.ipoDetailsModel).subscribe(data => {
      this.addStatus = " - Successfully";

      $('#addIPODetailsBtn').attr("disabled", true);

      //update IPODetails list
      this.ipouserService.updateIPODetailsList();
    },
    error => {
      this.addStatus = " - Failed";
      
      console.log(error);
    })
  }





}
