import { Component, OnInit } from '@angular/core';
import {IpouserService} from './ipouser.service';
import {IPODetails} from './ipodetails';
import {Company} from '../company/company';

declare var $: any;

@Component({
  selector: 'app-ipouser',
  templateUrl: './ipouser.component.html',
  styleUrls: ['./ipouser.component.css']
})
export class IpouserComponent implements OnInit {

  public addStatus: string;
  public editStatus: string;
  public deleteStatus: string;
  
  public ipoDetailsModel = new IPODetails('','','','','','','');
  public companyModel = new Company('','','','','','','','','','');

  constructor(
    public ipouserService: IpouserService,
  ) { }


  ngOnInit() {
    this.ipouserService.loadIPODetails();
  }


  searchIPOs() {
    let searchCompanyName = $('#searchCompanyName').val();
    this.ipouserService.searchIOPs(searchCompanyName).subscribe(data => {
      //update IPODetails list
      this.ipouserService.ipoDetailsList = data;
    },
    error => {
      console.log(error);
    })
  }

  displayCompany(item: any) {
    this.ipouserService.displayCompany(item.companyName).subscribe(data => {
      console.log(data);
      this.companyModel = data;
    },
    error => {
      console.log(error);
    })
  }


}
