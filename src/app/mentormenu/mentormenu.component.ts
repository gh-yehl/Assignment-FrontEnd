import { Component, OnInit } from '@angular/core';
import {MentormenuService} from "./mentormenu.service"
import {SharedService} from '../utils/shared.service';

declare var $: any;

@Component({
  selector: 'app-mentormenu',
  templateUrl: './mentormenu.component.html',
  styleUrls: ['./mentormenu.component.css']
})
export class MentormenuComponent implements OnInit {

  mentorCurrentTrainingList: any[];
  mentorCompletedTrainingList: any[];

  constructor(
    private sharedService: SharedService,
    private mentormenuService: MentormenuService
  ) { }

  ngOnInit() {
  }


  displayCurrentTrainings() {
    this.mentormenuService.getCurrentTraingList(this.sharedService.userId).subscribe(data => {
      this.mentorCurrentTrainingList = data;
      console.log(data);
    });

  }

  displayCompletedTrainings() {
    this.mentormenuService.getCompletedTraingList(this.sharedService.userId).subscribe(data => {
      this.mentorCompletedTrainingList = data;
      console.log(data);
    });
  }


}
