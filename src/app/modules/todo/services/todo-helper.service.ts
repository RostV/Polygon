import { Injectable } from '@angular/core';
import { TodoItem, TodoList } from '../models/todo-item.model';
import { TodoStorageService } from './todo-storage.service';
import { Day } from '../models/days.model';
@Injectable({
  providedIn: 'root'
})
export class TodoHelperService {

  get days(): string[] {
    return ["Вчера","Сегодня","Завтра"]
  }


  private allTodos: {[key: string]: TodoList} = {};

  constructor(private todoStorage: TodoStorageService) { }


  getTodos(day: Day) {
    const dateKey = this.getDate(day);
    if (!this.allTodos[dateKey]) {
      let todos = this.todoStorage.getFromStorage(this.getDate(day));
      if (!todos) {
        todos = {
          date: new Date(dateKey),
          todos: []
        }
      }
      this.allTodos[dateKey] = todos;
    }

    return this.allTodos[dateKey];
  }



  getDate(day: Day): string{
    const todayDate: Date = new Date();
    let date;
    switch (day) {
      case Day.yesterday:
        date = todayDate.getDate();
        todayDate.setDate(--date);
        break;
      case Day.tomorrow:
        date = todayDate.getDate();
        todayDate.setDate(++date);
        break;
      default:
        break;
    }

    return todayDate.toDateString();
  }
}
