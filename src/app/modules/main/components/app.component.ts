import { Component } from '@angular/core';
import { ProjectVM } from '../view-models/project.view-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "";
  showModules = false;

  showHideCLick($event: any) {
    this.showModules = !this.showModules;
  }

  onProjectChange($event: ProjectVM) {
    this.title = $event.name;
  }
}
