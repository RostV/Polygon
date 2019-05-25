export interface TodoItem {
  title: string;
  done: boolean;
}

export interface TodoList {
  date: Date;
  todos: TodoItem[];
}