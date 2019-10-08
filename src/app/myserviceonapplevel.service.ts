import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceonapplevelService {

  constructor() { }
  
  studentsWithTrackBy = [
    {id: 1, name: 'ali1', address: 'add1'},
    {id: 2, name: 'ali2', address: 'add12'},
    {id: 3, name: 'ali3', address: 'add3'},
    {id: 4, name: 'ali4', address: 'add4'},
    {id: 5, name: 'ali5', address: 'add5'},
    {id: 6, name: 'ali6', address: 'add6'}
  ];
}
