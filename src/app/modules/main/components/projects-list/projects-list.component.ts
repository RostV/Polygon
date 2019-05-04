import { Component, OnInit } from '@angular/core';
import { ProjectVM } from '../../view-models/project.view-model';
import { projects, ProjectRoute } from 'src/app/models/project.model';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  
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
    this.projects.forEach(project => {
      project.selected = project === pr;
    });
  }
}
