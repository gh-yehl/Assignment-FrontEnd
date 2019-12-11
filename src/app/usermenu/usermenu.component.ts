import { Component, OnInit } from '@angular/core';
import {SharedService} from '../utils/shared.service';
import {UsermenuService} from './usermenu.service'
import { ProposedTraining } from './usermenu';

declare var $: any;
@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.css']
})
export class UsermenuComponent implements OnInit {

  private currentTrainingList: any[];
  private completedTrainingList: any[];

  proposedTrainingModel = new ProposedTraining('','','','','','','','','','');

  constructor(
    private sharedService: SharedService,
    private usermenuService: UsermenuService,
  ) { }

  ngOnInit() {
  }

  listTrainings(){
    let start_time = $('#startTime').val()+":00";
    let end_Time = $('#endTime').val()+":00";
    let technologyId = $('#technologies option:selected').val();

    this.sharedService.getGuestSearchResult(technologyId, start_time, end_Time);
  }

  currentTrainings() {
    let userId: string = this.sharedService.userId;
    this.usermenuService.getCurrentTrainings(userId).subscribe(data => {
        this.currentTrainingList = data;
    });
  }

  completedTrainings() {
    let userId: string = this.sharedService.userId;
    this.usermenuService.getCompletedTrainings(userId).subscribe(data => {
        this.completedTrainingList = data;
    });
  }

  proposeTraining(trainingInfo: any) {
    this.proposedTrainingModel.userId = this.sharedService.userId;
    this.proposedTrainingModel.mentorId = trainingInfo.mentorId;
    this.proposedTrainingModel.technologyId = trainingInfo.technologyId;
    this.proposedTrainingModel.startTime = trainingInfo.startTime;
    this.proposedTrainingModel.endTime = trainingInfo.endTime;
    this.proposedTrainingModel.mentorName = trainingInfo.mentorName;
    this.proposedTrainingModel.workingYears = trainingInfo.workingYears;
    this.proposedTrainingModel.trainingsDelivered = trainingInfo.trainingsDelivered;
    this.proposedTrainingModel.contactNumber = trainingInfo.user.contactNumber;
    this.proposedTrainingModel.email = trainingInfo.user.email;

    console.log("trainingInfo start===>");
    console.log(this.proposedTrainingModel);
    console.log("trainingInfo end===>");

    this.usermenuService.proposeTraining(this.proposedTrainingModel).subscribe(data => {
      console.log("respose data:");
      console.log(data);
    },
    error => {
      console.log("reponse error:");
      console.log(error);
    });


  }

}
