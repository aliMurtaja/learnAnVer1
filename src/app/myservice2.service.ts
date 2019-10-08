import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Myservice2Service {

  constructor() { }

  aDammyFunction(){
    return 'this is from the service (in component level)';
  }

}
