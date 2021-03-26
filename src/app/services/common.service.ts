import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  isBusy = false;
  constructor() { }

  setIsBusy(){
    this.isBusy = !this.isBusy;
  }
}
