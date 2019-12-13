import { Component, OnInit } from '@angular/core';
import {CompanyService} from './company.service';
import {Company} from './company';

declare var $: any;
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  addStatus: string;
  editStatus: string;
  deleteStatus: string;
  
  companyModel = new Company('','','','','','','','','','');

  constructor(
    public companyService: CompanyService,
  ) { }

  ngOnInit() {
    this.companyService.loadCompany();
  }

  
  companyNameChange(item: any, companyName: string) {
    item.companyName = companyName;
  }
  stockCodeChange(item: any, stockCode: string) {
    item.stockCode = stockCode;
  }
  stockExchangeChange(item: any, stockExchange: string) {
    item.stockExchange = stockExchange;
  }
  turnoverChange(item: any, turnover: string) {
    item.turnover = turnover;
  }
  
  ceoChange(item: any, ceo: string) {
    item.ceo = ceo;
  }
  directorsChange(item: any, directors: string) {
    item.directors = directors;
  }
  sectorNameChange(item: any, sectorName: string) {
    item.sectorName = sectorName;
  }
  briefChange(item: any, brief: string) {
    item.brief = brief;
  }
  statusChange(item: any, status: string) {
    item.status = status;
  }


  editCompany(item: any) {
    this.companyService.editCompany(item).subscribe(data => {
      console.log(data);
    },
    error => {
      console.log("editCompany error ===>"+error);
    });
  }

  removeCompany(item: any) {
    this.companyService.removeCompany(item.id).subscribe(data => {
    this.deleteStatus = "Delete Company - Successfully";
    this.companyService.updateCompanyList();
  },
  error => {
    this.deleteStatus = "Delete Company - Failed";
    console.log(error);
  });
  }

  openCompanyWindow() {
    //reset message hearder
    this.addStatus = "";
    //reset button to be able
    $('#addCompanyBtn').removeAttr("disabled");

    //reset form value
    $('#companyName').val("");
    $('#stockCode').val("");
    $('#stockExchange').val("");
    $('#turnover').val("");
    $('#ceo').val("");
    $('#directors').val("");
    $('#sectorName').val("");
    $('#brief').val("");
    $('#status').val("");
  }

  addCompany() {
    this.companyModel.companyName = $('#companyName').val();
    this.companyModel.stockCode = $('#stockCode').val();
    this.companyModel.stockExchange = $('#stockExchange').val();
    this.companyModel.turnover = $('#turnover').val();

    this.companyModel.ceo = $('#ceo').val();
    this.companyModel.directors = $('#directors').val();
    this.companyModel.sectorName = $('#sectorName').val();
    this.companyModel.brief = $('#brief').val();
    this.companyModel.status = "Y";

    console.log(this.companyModel);

    this.companyService.addCompany(this.companyModel).subscribe(data => {
      this.addStatus = " - Successfully";

      $('#addCompanyBtn').attr("disabled", true);

      //update company list
      this.companyService.updateCompanyList();
    },
    error => {
      this.addStatus = " - Failed";
      
      console.log(error);
    })
  }


}
