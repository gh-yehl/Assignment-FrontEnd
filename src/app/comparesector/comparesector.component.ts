import { Component, OnInit } from '@angular/core';
import {Sector} from './sector'
import {SectorService} from './sector.service'

declare var $: any;

@Component({
  selector: 'app-comparesector',
  templateUrl: './comparesector.component.html',
  styleUrls: ['./comparesector.component.css']
})
export class ComparesectorComponent implements OnInit {

    
  chartTypeList: string[] = ["barChart","lineChart"];
  sectorModel = new Sector('','','','','');

  dataSource: Object; 
  constructor(
      private sectorService: SectorService
  ) {

   this.dataSource = {};

  

  // {

  //     "chart": { "caption": "Company Comparison", "xAxisName": "Time Range", "yAxisName": "Price Per Share", "theme": "fusion"}, "categories": [{  "category": [ {"label": "2019-06-08 10:35"},{"label": "2019-06-08 10:40"},{"label": "2019-06-08 10:43"},]  }],"dataset": [  {  "seriesname": " IBN", "data": [ { "value": "361.31" }, { "value": "358.12" }, { "value": "349.56" },  ] } ]

  // }


} // end of constructor

  ngOnInit() {
    this.sectorModel.fromTime = '';
    this.sectorModel.toTime = '';

    //initiate bootstrap4-datetimepicker module
    $(function () {
      $('.datetimepicker-compare').datetimepicker({
        //format: 'LT'
        format: 'YYYY-MM-DD HH:mm'
      });
    });
  }


  submitted = false;
  onSubmit() {
    this.submitted = true; 
    this.sectorModel.chartType = $('#chartTypes option:selected').val();
    this.sectorModel.fromTime = $('#fromTime').val();
    this.sectorModel.toTime = $('#toTime').val();

    console.log("firstSector======>"+ this.sectorModel.firstSector) ;
    console.log("secondSector======>"+ this.sectorModel.secondSector) ;
    console.log("this.sectorModel.from time ===============>" + this.sectorModel.fromTime);
    console.log("this.sectorModel.toTime time ===============>" + this.sectorModel.toTime);
    console.log("this.sectorModel.chartType ===============>" + this.sectorModel.chartType);

    //this.dataSource = {"chart": { "caption": "Sector Comparison", "xAxisName": "Time Range", "yAxisName": "Price Per Share", "theme": "fusion"}, "categories": [{  "category": [ {"label": "2019-06-07 10:30"},{"label": "2019-06-08 10:35"},{"label": "2019-06-08 10:40"},{"label": "2019-06-08 10:45"},{"label": "2019-06-08 10:50"},{"label": "2019-06-08 10:55"},{"label": "2019-06-08 11:00"},{"label": "2019-06-08 11:05"},{"label": "2019-06-10 11:10"},]  }],"dataset": [  {  "seriesname": " IBN", "data": [ { "value": "356.23" }, { "value": "361.31" }, { "value": "358.12" }, { "value": "357.09" }, { "value": "353.62" }, { "value": "349.56" }, { "value": "351.43" }, { "value": "350.12" }, { "value": "348.91" },  ] } ]};
    this.sectorService.compSector(this.sectorModel).subscribe(data => {
        

        console.log(data.dataSource.chart);
        this.dataSource = data.dataSource;
        $("#dragView").show();
      },
      error => {
          console.log(error);
      }
    );
    return ;
  }




}
