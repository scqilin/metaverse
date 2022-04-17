import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class YearsService {
  uuidcode = Math.random().toString(36).substr(2,6).toLocaleUpperCase();
  private runOverSub = new Subject();
  runOver$ = this.runOverSub.asObservable();

  runOver(obj: any) {
    this.runOverSub.next(obj);
  }

  private clickStartSub = new Subject();
  clickStart$ = this.clickStartSub.asObservable();
  clickStart(obj: any) {
    this.clickStartSub.next(obj);
  }

  getCode() {
    return this.uuidcode;
  }
}
