import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class LocalStorageService {
  constructor() {}

  setItem(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getItem(key: string) {
    var value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
