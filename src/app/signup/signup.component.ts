import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Signup} from './signup';
import {SharedService} from '../utils/shared.service';
import {SignupService} from './signup.service';

declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupModle = new Signup ('','', '','');


  constructor(
    private router: Router,
    public sharedService: SharedService,
    public signupService: SignupService
  ) { }

  ngOnInit() {

    //this.signupModle.signup_startTime = "00:00";

    //initiate bootstrap4-datetimepicker module
    $(function () {
      $('.datetimepicker-signup').datetimepicker({
        //format: 'LT'
        format: 'HH:mm'
      });
    });


  }



  //form submit
  submitted = false;
  onSubmit() {

    this.sharedService.userType = "0";
    console.log("this.sharedService.userType======>"+this.sharedService.userType);
    this.submitted = true; 
    this.signupService.signup(this.signupModle).subscribe(data => {
        //this.sharedService.userId = data.id;
        this.sharedService.loginPageMessage = "SignUp Successful, Please check your email to activate your Account";
      },
      error => {
        this.sharedService.loginPageMessage = "SignUp Failed, Please contact the application admin";
      }
    );
    this.router.navigateByUrl('/login');
  }

  
// TODO: Remove this when we're done
//  get diagnostic() { return JSON.stringify(this.signupModle); }
//  put {{diagnostic}}  in the template file to display value being changed 
}
