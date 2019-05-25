import { Project, ProjectRoute } from 'src/app/modules/main/models/project.model';

export class ProjectVM implements Project {
  name: string;
  route: ProjectRoute;
  selected: boolean = false;

  constructor(pr: Project) {
    this.name = pr.name;
    this.route = pr.route;
  }
}