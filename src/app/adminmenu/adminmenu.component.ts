import { Component, OnInit } from '@angular/core';
import {AdminmenuService} from './adminmenu.service';
import {SharedService} from '../utils/shared.service';
import {Technology} from './technology';

declare var $: any;

@Component({
  selector: 'app-adminmenu',
  templateUrl: './adminmenu.component.html',
  styleUrls: ['./adminmenu.component.css']
})
export class AdminmenuComponent implements OnInit {

  private technologyModel = new Technology('','','','');
  private userList: any[];
  private addTechStatus: string;
  private editTechStatus: string;
  private deleteTechStatus: string;


  constructor(
    private sharedService: SharedService,
    private adminmenuService: AdminmenuService,
  ) { }

  ngOnInit() {

    this.sharedService.loadTechnologies();
  }


  findUsers() {
    let userName: string = $('#userName').val();
    this.adminmenuService.findUsers(userName).subscribe(data => {
      this.userList = data;
      console.log(data);
    },
    error => {
      console.log(error);
    });
  }

  changeUserStatus(user: any){
    this.adminmenuService.changeUserStatus(user).subscribe(data => {
      if(user.active == "1") {
        user.active = "0";
        user.status = "In-active";
      }else {
        user.status = "1";
        user.status = "Active";
      }
    },
    error => {
      console.log(error);
    });

  }


  techNameChange(tech: any, techName: string) {
    tech.technologyName = techName;
  }
  hoursChange(tech: any, hours: string) {
    tech.totalHours = hours;
  }
  feeChange(tech: any, fee: string) {
    tech.fee=fee;
  }

  editTech(tech: any) {
    this.adminmenuService.editTechnology(tech).subscribe(data => {
      console.log(data);
    },
    error => {
      console.log(error);
    });
  }


  removeTech(tech: any) {
      this.adminmenuService.removeTechnology(tech.id).subscribe(data => {
      this.deleteTechStatus = "Delete Technology - Successfully";
      this.sharedService.updateTechnologies();
    },
    error => {
      this.deleteTechStatus = "Delete Technology - Failed";
      console.log(error);
    });
  }

  openTechWindow() {
    //reset message hearder
    this.addTechStatus = "";
    //reset button to be able
    $('#addNewTech').removeAttr("disabled");

    //reset form value
    $('#technologyName').val("");
    $('#totalHours').val("");
    $('#fee').val("");
  }

  addTechnology() {
    this.technologyModel.technologyName = $('#technologyName').val();
    this.technologyModel.totalHours = $('#totalHours').val();
    this.technologyModel.fee = $('#fee').val();
    console.log(this.technologyModel);
    this.adminmenuService.addTechnology(this.technologyModel).subscribe(data => {
      this.addTechStatus = " - Successfully";

      $('#addNewTech').attr("disabled", true);

      //update technology list in Navbar
      this.sharedService.updateTechnologies();
    },
    error => {
      this.addTechStatus = " - Failed";
      
      console.log(error);
    })
  }
}
