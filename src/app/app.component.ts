import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RostV Polygon';
  showModules = false;

  showHideCLick($event: any) {
    this.showModules = !this.showModules;
  }
}
