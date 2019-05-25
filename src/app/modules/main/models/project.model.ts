export interface Project {
  name: string;
  route: ProjectRoute;
}

export enum ProjectRoute {
  todo = "todo",
  home = ""
}

export const projects: Project[] = [{
  name: "RostV Polygon",
  route: ProjectRoute.home
}, {
  name: "Todo list",
  route: ProjectRoute.todo
}];