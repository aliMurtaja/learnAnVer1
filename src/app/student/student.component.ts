import { Component, OnInit } from '@angular/core';
import { Myservice2Service } from '../myservice2.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [Myservice2Service]
})
export class StudentComponent {

  constructor(private myservice2: Myservice2Service) { }

  ngOnInit() {
  }

  variable1: string = null;
  
  useSevice(){
    this.variable1 = this.myservice2.aDammyFunction();
  }

}
