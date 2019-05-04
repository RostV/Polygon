import { Component, OnInit } from '@angular/core';
import { ProjectVM } from '../../view-models/project.view-model';
import { projects } from 'src/app/models/project.model';

@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  
  projects: ProjectVM[] = projects.map(pr => new ProjectVM(pr));

  constructor() { 
  }

  ngOnInit() {
  }

  selectProject(pr: ProjectVM) {
    this.projects.forEach(project => {
      project.selected = project === pr;
    });
  }
}
