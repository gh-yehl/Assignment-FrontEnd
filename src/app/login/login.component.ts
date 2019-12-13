import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Login} from './login'
import {SharedService} from '../utils/shared.service';
import {LoginService} from './login.service';

declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel = new Login('','');

  constructor(
    public router: Router,
    public  sharedService: SharedService,
    public loginService: LoginService
  ) { }

  ngOnInit() {
    this.sharedService.loginPageMessage = "";
  }



  submitted = false;
  onSubmit() {
    //reset login page message
    this.sharedService.loginPageMessage = "";

    this.submitted = true;
    
    this.loginService.login(this.loginModel).subscribe(data => {
      this.redirect(data);
    });
  }

  //direct to different page according to user type(role)
  redirect(data: any) {
    if(data == null || data.id == 0) {
      this.sharedService.loginPageMessage = "Your email or password is wrong!";
      return;
    }


    this.sharedService.setToken(data.token);


    this.loadProfile(data);
    //route to welcome Page
    this.router.navigateByUrl('/welcome');
  }


  loadProfile(data: any) {
    this.sharedService.cleanProfile();
    //load register information
    this.sharedService.userId = data.id;
    this.sharedService.userType = data.userType;
    this.sharedService.userName = data.userName;
    this.sharedService.password = data.password;
    this.sharedService.email = data.email;
    this.sharedService.mobileNumber = data.mobileNumber;

    if(this.sharedService.userType == "user") {
      this.sharedService.isUser = true;
    } else if(this.sharedService.userType == "admin") {
      this.sharedService.isAdmin = true;
    }
    else{
      this.sharedService.isGuest = true;
    }

  }

}
