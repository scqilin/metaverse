import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class YearsService {
  uuidcode = Math.random().toString(36).substr(2,6).toLocaleUpperCase();
  private runOverSource = new Subject();
  runOver$ = this.runOverSource.asObservable();

  runOver(obj: any) {
    this.runOverSource.next(obj);
  }

  getCode() {
    return this.uuidcode;
  }
}
