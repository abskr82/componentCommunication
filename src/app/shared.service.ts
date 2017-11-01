import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class SharedService {

  private _sharedDataSource = new BehaviorSubject<string>(null);
  sharedData = this._sharedDataSource.asObservable();
  constructor() { }

  changeValue(newVal) {
    this._sharedDataSource.next(newVal);
  }

}
