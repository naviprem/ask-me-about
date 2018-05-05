import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-pre-login-menu',
  templateUrl: './pre-login-menu.component.html',
  styleUrls: ['./pre-login-menu.component.css']
})
export class PreLoginMenuComponent implements OnInit {

  constructor(private appService: AppService) {

  }

    ngOnInit() {
    }

    openMenu() {
      console.log("Pre login menu opened");
        this.appService.preLoginMenuState = "open";
    }

    closeMenu() {
        console.log("Pre login menu closed");
        this.appService.preLoginMenuState = "closed";
    }

    onClickAboutUs() {
        console.log("Pre login menu - About Us");
    }

    onClickBackground() {
        console.log("Pre login menu - Background");
    }

    onClickContactUs() {
        console.log("Pre login menu - Contact Us");
    }



}
