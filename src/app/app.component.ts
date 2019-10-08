// note that if we use the decorator, you must have to write the things right below of the decorator on which you apply the decorators

import { Component, HostListener, Inject } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { Router } from '@angular/router';


//@Component-->this is class level decorator that supply the metadata to the angular
@Component({
  // this is instance of the component
  selector: 'app-root',
  //* we also write the inline html and css
  // template: '<h1>alis</h1>',
  // styles: ['h1{color: red}']

  // for white space in our this component
  // preserveWhitespaces: true,  by defaut -> false
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// AppComponent--> this is our component which has the tamplateUrl, stylesUrl, selector and other things becouse we use the decorator right above the this class and this three things comes from the @component decorator 
// component =this is famouse type of Directives with template, style and logic which has the their own tamplate in which we can add and remove the elements
export class AppComponent {
  title = 'learnangular';


  constructor(@Inject(MyserviceService)ali, private router: Router ){
    console.log(ali);
    console.log('thsi is from app component');
  }

  //* thsi is method type decorator
  // if u click the event on thee elemtn their fun will be invoked first, after @HostListener
  // @HostListener('click')
  // onmoclidk(){
  //   alert()
  // }

  btnclick(){
    alert('component directive');
  }

  //* this is for the structure directive  | bydefault -> false
  // checkTrueAndFalse = false
  // checkTrueAndFalse = true

  //* *if *else *then directive
  ifelseVariable = true
  
  giveTrueValue(){
    this.ifelseVariable = true
  }

  giveFalseValue(){
    this.ifelseVariable = false
  }

  //* for select elements
  targetvalue: string= null;
  getTheValueOfSelectElement(e){
    // alert()
    console.log(e)
    this.targetvalue = e.target.value

  }

  //* for for-loop
  students = [
    {name: 'ali1'},
    {name: 'ali2'},
    {name: 'ali3'},
    {name: 'ali4'},
    {name: 'ali5'},
    {name: 'ali6'}
  ] 

  //* for for-loop with trackBy
  studentsWithTrackBy = [
    {id: 1, name: 'ali1', address: 'add1'},
    {id: 2, name: 'ali2', address: 'add12'},
    {id: 3, name: 'ali3', address: 'add3'},
    {id: 4, name: 'ali4', address: 'add4'},
    {id: 5, name: 'ali5', address: 'add5'},
    {id: 6, name: 'ali6', address: 'add6'}
  ];

  addOnatherDataWithExistsData(){

    this.studentsWithTrackBy = [
      {id: 1, name: 'ali1', address: 'add1'},
      {id: 2, name: 'ali2', address: 'add12'},
      {id: 3, name: 'ali3', address: 'add3'},
      {id: 4, name: 'ali4', address: 'add4'},
      {id: 5, name: 'ali5', address: 'add5'},
      {id: 6, name: 'ali6', address: 'add6'},
      {id: 7, name: 'ali7', address: 'add7'}
    ];

  }

  studentsWithTrackByForRecognize(index, item){
    return item.id;
  }




//* for group the data in for-loop 
  studentsWithGroup = [
    {id: 1, name: 'ali1', address: 'add1', state: [{name: 'one'}, {name: 'two'}, {name: 'three'}]},
    {id: 2, name: 'ali2', address: 'add12', state: [{name: 'one4'}, {name: 'two5'}, {name: 'three6'}]},
    {id: 3, name: 'ali3', address: 'add3', state: [{name: 'one7'},{ name: 'two8'}, {name: 'three9'}]},
    {id: 4, name: 'ali4', address: 'add4', state: [{name: 'one10'},{ name: 'two11'},{ name: 'three12'}]},
    {id: 5, name: 'ali5', address: 'add5', state: [{name: 'one13'},{name: 'two14'}, {name: 'three15'}]},
    {id: 6, name: 'ali6', address: 'add6', state: [{name: 'one16'},{ name: 'two17'},{ name: 'three18'}]},
    {id: 7, name: 'ali7', address: 'add7', state: [{name: 'one19'}, {name: 'two20'}, {name: 'three21'}]}
  ];

 
//* for ngStyle directive
    // ngStyleDirective:any[]=[] ;

    ngStyleDirective =[
      {country: 'ind',name: 'ali'},
      {country: 'uk',name: 'ali2'},
      {country: 'aus',name: 'ali3'},
      {country: 'us',name: 'ali4'},
      {country: 'landone',name: 'ali5'},
    ];

    giveColorAccordingToCountry(getContry){
      switch(getContry){
        case 'ind':
          return 'green'
        case 'uk':
          return 'blue'
        case 'aus':
          return 'red'
        case 'us':
          return 'pink'
        case 'landone':
          return 'orange'

      }
    }

//* for ngClass as a methode
  getAColor(getClass){
  
    if(getClass == 'getOne'){
      return {
        'one': true,
        'two': true
      }
    }else{
      return {
        'three': true,
        'four': true
      }
    }
  }

  // Binding(interpolation(one way))
  firstName:string = "ali";
  lastName:string = "husain";

  a:number = 10;
  b:number = 20;

  // Binding(properties(one way))
  firstNamePro:string = "ali";
  lastNamePro:string = "husain";

  // Binding(attribute(one way))
  aAtt:number = 2;
  bAtt:number = 1;

  // Binding(Event(one way))
  onClick1(){
    console.log("this is event");
  }
  onClick2(getTheValue){
    console.log("this is event:"+ getTheValue);
  }

  // Binding(Two(two way))
  towway:string = "this is it"; //without ngModel
  towway1:string = 'with ngModel'; //with ngModel
  
  //Pips
  pips1:any =[
    {name:"ali1", price:20, add: 'add1'},
    {name:"ali2", price:21, add: 'add2'},
    {name:"ali3", price:22, add: 'add3'},
    {name:"ali4", price:23, add: 'add4'}
  ];
  
  // paramitarized pips
  date1 = new Date(2000,6,7);
  salary1:number = 23214;

  // some more pipes(for strings)
  nameStriPip:string = "alis";
  addStriPip:string = 'barnagar';
  workStriPip:string = 'software developer';

  //Make the custome pips 
  pipsCustome:any =[
    {name:"thisMale", price:20, add: 'add1'},
    {name:"thisFemale", price:21, add: 'add2'},
    {name:"thisMale", price:22, add: 'add3'},
    {name:"thisFemale", price:23, add: 'add4'}
  ];

  // componet load on the server side
  // in we can render the component based on our requirement(using the if else conditions)
  onTheServer(){
    this.router.navigate(['/student']);
  }


  
}
