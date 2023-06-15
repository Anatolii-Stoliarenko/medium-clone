import { Injectable } from '@angular/core';

@Injectable()
export class PersistanceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error retrive data from localStorage', e);
      return null; //'return null' allows to continue working
    }
  }
}

// localStorage provides a simple interface to store and retrieve
// data using the setItem(), getItem(), and removeItem() methods.
