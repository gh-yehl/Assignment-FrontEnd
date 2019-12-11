import { Injectable } from '@angular/core';
import { FSConfigurations } from "../../global-config";
import { FileUploader } from 'ng2-file-upload';

@Injectable({
  providedIn: 'root'
})
export class ImportdataService {

  constructor() { }

  
  readonly uploadExcelURL = FSConfigurations.serverURL + "/import/uploadExcel";
  
  //readonly uploadExcelURL_Test = "http://localhost:9004/uploadExcel";

  
  getUploader(): FileUploader {
    const uploader = new FileUploader({
      url: this.uploadExcelURL,
      method: 'POST',
      itemAlias: 'excelFile',
      authToken: sessionStorage.getItem('access_token'),
      authTokenHeader: 'JWTToken',
    });

    return uploader;
  }
  
}
