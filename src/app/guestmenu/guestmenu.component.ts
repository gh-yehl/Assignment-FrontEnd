import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from '../utils/shared.service';

@Component({
  selector: 'app-guestmenu',
  templateUrl: './guestmenu.component.html',
  styleUrls: ['./guestmenu.component.css']
})
export class GuestmenuComponent implements OnInit {

  constructor(public sharedService: SharedService) {}

  ngOnInit() {
  }



}
