import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/services/storage/storage.service';
import { TodoList } from '../models/todo-item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoStorageService extends StorageService<TodoList> {

  constructor() {
    super();
  }
}
