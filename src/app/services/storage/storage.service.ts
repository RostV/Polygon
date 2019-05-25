import { Injectable } from '@angular/core';
import { JSDocCommentStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export abstract class StorageService<T> {

  constructor() { }

  saveInStorage(key: string, value: T) {
    const json = JSON.stringify(value);
    localStorage.setItem(key, json);
  }

  getFromStorage(key: string): T {
    const json = localStorage.getItem(key);
    return JSON.parse(json);
  }

  clearStorage() {
    localStorage.clear();
  }
}
