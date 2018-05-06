import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public preLoginMenuState
  constructor() {
    this.preLoginMenuState = "closed";
  }
}
