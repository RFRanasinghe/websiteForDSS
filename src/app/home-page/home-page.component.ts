import { Component } from '@angular/core';

declare var DesktopApplicationPg: () => any;
declare var MobileApplicationPg: () => any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  CallDesktopApplicationPg() {     //desktop button click calling function
    DesktopApplicationPg();
  }

  CallMobileApplicationPg() {      //mobile button click calling function
    MobileApplicationPg();
  }
}
