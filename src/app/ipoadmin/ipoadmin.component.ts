import { Component, OnInit } from '@angular/core';
import {IpoadminService} from './ipoadmin.service';
import {IPODetails} from './ipodetails';

declare var $: any;

@Component({
  selector: 'app-ipoadmin',
  templateUrl: './ipoadmin.component.html',
  styleUrls: ['./ipoadmin.component.css']
})
export class IpoadminComponent implements OnInit {
  private addStatus: string;
  private editStatus: string;
  private deleteStatus: string;
  
  private ipoDetailsModel = new IPODetails('','','','','','','');

  constructor(
    private ipoadminService: IpoadminService,
  ) { }

  ngOnInit() {
    this.ipoadminService.loadIPODetails();
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
    this.ipoadminService.editIPODetails(item).subscribe(data => {
      console.log(data);
    },
    error => {
      console.log("editIPODetails error ===>"+error);
    });
  }

  removeIPODetails(item: any) {
    this.ipoadminService.removeIPODetails(item.id).subscribe(data => {
    this.deleteStatus = "Delete IPODetails - Successfully";
    this.ipoadminService.updateIPODetailsList();
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

    this.ipoadminService.addIPODetails(this.ipoDetailsModel).subscribe(data => {
      this.addStatus = " - Successfully";

      $('#addIPODetailsBtn').attr("disabled", true);

      //update IPODetails list
      this.ipoadminService.updateIPODetailsList();
    },
    error => {
      this.addStatus = " - Failed";
      
      console.log(error);
    })
  }





}
