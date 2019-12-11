import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {SharedService} from './utils/shared.service';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private technologyId: string;
  private startTime: string;
  private endTime: string;
  private searchResult: any[];
  private technologyList: any[];
  constructor(
    private router: Router,
    public sharedService: SharedService

  ) { }

  ngOnInit() {
    this.sharedService.initRole();


    this.startTime = "00:00";
    this.endTime = "23:59";
    //initiate bootstrap4-datetimepicker module
    $(function () {
      $('.datetimepicker-input').datetimepicker({
        //format: 'LT'
        format: 'HH:mm'
      });
    });
  }

}
