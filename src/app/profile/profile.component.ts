import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Profile} from './profile';
import {SharedService} from '../utils/shared.service';
import {ProfileService} from './profile.service';
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileModle = new Profile ('','', '','','','');

  constructor(
    private router: Router,
    public sharedService: SharedService,
    public profileService: ProfileService,
  ) { }

  ngOnInit() {
    this.profileService.updateProfileMessage = null;
    this.loadUserInfo();
  }

  loadUserInfo() {
    this.profileModle.id = this.sharedService.userId;
    this.profileModle.userName = this.sharedService.userName;
    this.profileModle.email = this.sharedService.email;
    this.profileModle.password = this.sharedService.password;
    this.profileModle.userType = this.sharedService.userType;
    this.profileModle.mobileNumber = this.sharedService.mobileNumber;
  }

    //form submit
    submitted = false;
    onSubmit() {
      
      console.log("updadeProfile =======================>" + this.profileModle);

      this.submitted = true; 
      this.profileService.updadeProfile(this.profileModle).subscribe(data => {
          //this.sharedService.userId = data.id;
          this.profileService.updateProfileMessage = "Your Profile Is Update Successful";
        },
        error => {
          this.profileService.updateProfileMessage = "Update Failed, Please contact the application admin";
        }
      );
      //this.router.navigateByUrl('/login');
      return;
    }
}
