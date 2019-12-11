import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestmenuComponent } from './guestmenu/guestmenu.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { MentormenuComponent } from './mentormenu/mentormenu.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


import { ImportdataComponent } from './importdata/importdata.component';
import { CompanyComponent } from './company/company.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { IpoadminComponent } from './ipoadmin/ipoadmin.component';

import { IpouserComponent } from './ipouser/ipouser.component';
import { ComparecompanyComponent } from './comparecompany/comparecompany.component';
import { ComparesectorComponent } from './comparesector/comparesector.component';
import { OtherComponent } from './other/other.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  {path:'welcome', component:GuestmenuComponent},
  {path:'logout', component:LogoutComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'usermenu', component:UsermenuComponent},
  {path:'mentormenu', component:MentormenuComponent},
  {path:'adminmenu', component:AdminmenuComponent},


  {path:'profile', component:ProfileComponent},
  {path:'importData', component:ImportdataComponent},
  {path:'manageCompany', component:CompanyComponent},
  {path:'manageExchange', component:ExchangeComponent},
  {path:'manageIPO', component:IpoadminComponent},

  {path:'displayIPO', component:IpouserComponent},
  {path:'compareCompany', component:ComparecompanyComponent},
  {path:'compareSector', component:ComparesectorComponent},
  {path:'other', component:OtherComponent},

  

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
