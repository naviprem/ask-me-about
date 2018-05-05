import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {
    this.preLoginMenuState = "closed";
  }
}
