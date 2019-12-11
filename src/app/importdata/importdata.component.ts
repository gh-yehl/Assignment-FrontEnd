import { Component, OnInit } from '@angular/core';
import {ImportdataService} from './importdata.service';
import {StockPrice} from './stockprice';
import { FileUploader, FileItem } from 'ng2-file-upload';

declare var $: any;

@Component({
  selector: 'app-importdata',
  templateUrl: './importdata.component.html',
  styleUrls: ['./importdata.component.css']
})
export class ImportdataComponent implements OnInit {

  private stockPriceModel = new StockPrice('','','','','','','','');

  
  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  hasAnotherDropZoneOver: boolean;
  response: any;
  consolidateArray: Array<object>;i

  constructor(
    private importdataService: ImportdataService, 
    ) { 
      this.uploader = this.importdataService.getUploader();

      this.uploader.onBeforeUploadItem = (fileItem: FileItem) => {
        fileItem.withCredentials = false;
      };
  
      this.hasBaseDropZoneOver = false;
      this.hasAnotherDropZoneOver = false;
  
      this.uploader.response.subscribe(
        data => {
          console.log(data);
          this.stockPriceModel = JSON.parse(data);
        }
      );
      
  }


  
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  ngOnInit() {
    
  }

}
