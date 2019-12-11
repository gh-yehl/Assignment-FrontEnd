import { Component, OnInit } from '@angular/core';
import {Compare} from './compare'
import {CompareService} from './compare.service'
import { stringify } from 'querystring';

declare var $: any;

@Component({
  selector: 'app-comparecompany',
  templateUrl: './comparecompany.component.html',
  styleUrls: ['./comparecompany.component.css']
})
export class ComparecompanyComponent implements OnInit {

    
    chartTypeList: string[] = ["barChart","lineChart"];
    compareModel = new Compare('','','','','','','');
    rawdata: string = '';

    dataSource: Object; 
    constructor(
        private compareService: CompareService
    ) {

     this.dataSource = {};

    

    // {

    //     "chart": { "caption": "Company Comparison", "xAxisName": "Time Range", "yAxisName": "Price Per Share", "theme": "fusion"}, "categories": [{  "category": [ {"label": "2019-06-08 10:35"},{"label": "2019-06-08 10:40"},{"label": "2019-06-08 10:43"},]  }],"dataset": [  {  "seriesname": " IBN", "data": [ { "value": "361.31" }, { "value": "358.12" }, { "value": "349.56" },  ] } ]

    // }


  } // end of constructor

  ngOnInit() {
    this.compareModel.fromTime = '';
    this.compareModel.toTime = '';

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
    this.compareModel.chartType = $('#chartTypes option:selected').val();
    this.compareModel.fromTime = $('#fromTime').val();
    this.compareModel.toTime = $('#toTime').val();

    console.log("firstCompany======>"+ this.compareModel.firstCompany) ;
    console.log("secondCompany======>"+ this.compareModel.secondCompany) ;
    console.log("first Exchange======>" + this.compareModel.firstExchange);
    console.log("first secondExchange======>" + this.compareModel.secondExchange);
    console.log("this.compareModel.from time ===============>" + this.compareModel.fromTime);
    console.log("this.compareModel.toTime time ===============>" + this.compareModel.toTime);
    console.log("this.compareModel.chartType ===============>" + this.compareModel.chartType);

    //this.dataSource = {"chart": { "caption": "Company Comparison", "xAxisName": "Time Range", "yAxisName": "Price Per Share", "theme": "fusion"}, "categories": [{  "category": [ {"label": "2019-06-07 10:30"},{"label": "2019-06-08 10:35"},{"label": "2019-06-08 10:40"},{"label": "2019-06-08 10:45"},{"label": "2019-06-08 10:50"},{"label": "2019-06-08 10:55"},{"label": "2019-06-08 11:00"},{"label": "2019-06-08 11:05"},{"label": "2019-06-10 11:10"},]  }],"dataset": [  {  "seriesname": " IBN", "data": [ { "value": "356.23" }, { "value": "361.31" }, { "value": "358.12" }, { "value": "357.09" }, { "value": "353.62" }, { "value": "349.56" }, { "value": "351.43" }, { "value": "350.12" }, { "value": "348.91" },  ] } ]};
    this.compareService.compCompany(this.compareModel).subscribe(data => {
        

        console.log(data.dataSource.chart);
        this.dataSource = data.dataSource;
        console.log("this.dataSource=======================>" + JSON.stringify(data.dataSource));
        $("#dragView").show();
      },
      error => {
          console.log(error);
      }
    );
    return ;
  }

}
