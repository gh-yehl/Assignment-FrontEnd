import { Component, OnInit } from '@angular/core';
import {SharedService} from '../utils/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private sharedService: SharedService,
  ) { }

  ngOnInit() {
    this.sharedService.cleanProfile();
  }

}
