import { Component, OnInit, Input } from '@angular/core';
import { TodoHelperService } from '../../services/todo-helper.service';
import { TodoList } from '../../models/todo-item.model';
import { Day } from '../../models/days.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  private todoList: TodoList;
  @Input() day: Day;

  constructor(private todoHelper: TodoHelperService) { 
    this.todoList = todoHelper.getTodos(this.day);
  }

  ngOnInit() {
  }


  /**
   * Создание новой задачи
   * @param taskName input
   */
  newTask(taskNameInput: any) {
    this.todoList.todos.push({
      done: false,
      title: taskNameInput.value
    })
    taskNameInput.value = "";
  }

}
