import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProjectVM } from '../../view-models/project.view-model';
import { projects, } from 'src/app/modules/main/models/project.model';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  
  @Output() selectedChange = new EventEmitter<ProjectVM>();

  projects: ProjectVM[] = projects.map(pr => new ProjectVM(pr)); 

  constructor(router: Router) {
    router.events.subscribe( event => {
      if (event instanceof NavigationEnd) {
        this.selectProject(this.projects.find(x => `/${x.route}` === event.url));
      }
    });
  }

  ngOnInit() {
  }

  selectProject(pr: ProjectVM) {
    this.selectedChange.emit(pr);
    this.projects.forEach(project => {
      project.selected = project === pr;
    });
  }
}
