import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectRoute } from '../models/project.model';
import { DescriptionComponent } from './main/components/description/description.component';

const routes: Routes = [{
  path: ProjectRoute.home, component: DescriptionComponent
}, {
  path: ProjectRoute.todo, loadChildren: "./todo/todo.module#TodoModule"
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
