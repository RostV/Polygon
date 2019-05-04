import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTodoComponent } from './components/main-todo/main-todo.component';
import { TodoRoutingModule } from './todo-routing.module';

@NgModule({
  declarations: [
    MainTodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
