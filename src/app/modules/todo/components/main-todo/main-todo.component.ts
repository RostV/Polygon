import { Component, OnInit } from '@angular/core';
import { TodoHelperService } from '../../services/todo-helper.service';

@Component({
  selector: 'app-main-todo',
  templateUrl: './main-todo.component.html',
  styleUrls: ['./main-todo.component.scss']
})
export class MainTodoComponent implements OnInit {

  private days: string[];

  constructor(private todoHelper: TodoHelperService) { 
    this.days = todoHelper.days;
  }

  ngOnInit() {
  }

}
