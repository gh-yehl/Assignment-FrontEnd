import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FileUploadModule } from 'ng2-file-upload';
import { AppComponent } from './app.component';
import { GuestmenuComponent } from './guestmenu/guestmenu.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { MentormenuComponent } from './mentormenu/mentormenu.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { HeadermenuComponent } from './headermenu/headermenu.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { CompanyComponent } from './company/company.component';
import { IpoadminComponent } from './ipoadmin/ipoadmin.component';
import { IpouserComponent } from './ipouser/ipouser.component';
import { ImportdataComponent } from './importdata/importdata.component';
import { ComparesectorComponent } from './comparesector/comparesector.component';
import { ComparecompanyComponent } from './comparecompany/comparecompany.component';
import { OtherComponent } from './other/other.component';
import { ProfileComponent } from './profile/profile.component';
import {HttpReqInterceptor} from './interceptors/httpReqInterceptor';
import {HttpRespInterceptor} from './interceptors/httpRespInterceptor';

//fusion chart starts
import { FusionChartsModule } from "angular-fusioncharts";
import * as FusionCharts from "fusioncharts";
import * as Charts from "fusioncharts/fusioncharts.charts";
import * as Powercharts from 'fusioncharts/fusioncharts.powercharts'; 
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
FusionChartsModule.fcRoot(FusionCharts, Charts, Powercharts, FusionTheme); 
//fusion chart ends

@NgModule({
  declarations: [
    AppComponent,
    GuestmenuComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    UsermenuComponent,
    MentormenuComponent,
    AdminmenuComponent,
    PageNotFoundComponent,
    MainmenuComponent,
    HeadermenuComponent,

    
    ImportdataComponent,
    CompanyComponent,
    ExchangeComponent,
    IpoadminComponent,
    
    IpouserComponent,
    ComparecompanyComponent,
    ComparesectorComponent,
    OtherComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FileUploadModule,
    FusionChartsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpReqInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpRespInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
