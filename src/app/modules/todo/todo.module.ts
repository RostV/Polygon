import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTodoComponent } from './components/main-todo/main-todo.component';
import { TodoRoutingModule } from './todo-routing.module';
import { MatTabsModule } from "@angular/material/tabs";
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [
    MainTodoComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
