import { Component, OnInit } from '@angular/core';
import { MyserviceonapplevelService } from '../myserviceonapplevel.service';
import {FormArray ,NgForm, FormControl, FormGroup, FormBuilder, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {

  // in constuctor we inject the service without register on the provider bcs we already did it in app module for every components
  constructor(private instanseOfMyserOnAppLeve : MyserviceonapplevelService, private FB: FormBuilder) {

    // make the model and link it to the html form by using 'signUpForm' instance of formgroup
    this.signUpForm = FB.group({
      
      fname: new FormControl('alis'),
      lname: new FormControl(),
      ename: new FormControl()

    });

    // make the model and link it to the html form by using 'signUpForm' instance of formgroup
    // with validation
    this.signUpForm3 = FB.group({
      
      fname: [, Validators.required],
      lname: [],
      // In angular Reactive form validation done by using in-built validators which could given in array in 2nd postion, when multiple validators used.
      ename: [, [Validators.required, Validators.maxLength(10)] ]

    });

    // console.log(this.signUpForm3.value)

   }


   ngOnInit() {

    // // to check the value change of individual form control
    // this.signUpForm3.get('fname').valueChanges.subscribe( (getChangeValue)=>{
    //   console.log(getChangeValue);
    // })

    // to check the value change of each(all) form control
    // this.signUpForm3.valueChanges.subscribe( (getValus)=>{
    //   console.log(getValus.fname);
    //   console.log(getValus.lname);
    //   console.log(getValus.ename);
    // })


    // // to check the validation status of individual form control
    // this.signUpForm3.get('ename').statusChanges.subscribe( (status)=>{
    //   console.log(status);
    // })

    // // to check the validation status of each form control
    // this.signUpForm3.statusChanges.subscribe( (status)=>{
    //   console.log(status);
    // })

    // Tracks the value and validity state of an array of FormControl, FormGroup or FormArray instances.
    const formArr =new FormArray([

      new FormControl('ali1', [Validators.required, Validators.minLength(6)] ),
      new FormControl('ali2'),
      new FormControl()
    ])

    // make some experiment
    console.log('ali');
    console.log(this.signUpForm3)
    console.log(formArr);
    console.log(formArr.value);
    console.log(formArr.status);
    console.log(formArr.valid)
    formArr.setValue(['hu', 'hi', 'uap']);
    console.log(formArr.value);
    formArr.patchValue(['hu', null, 'uap']);
    console.log(formArr.value);


    this.signUpForm4= new FormGroup({

      contactNumber: new FormArray([
        
        new FormControl(),
        new FormControl()
      ])

    })

    console.log(this.signUpForm4)

  }

  
  subs1(Forn: NgForm) {
    // alert()
    console.log(Forn);
    console.log(Forn.value);
    // console.log(refH);
  }

  subs4(form: NgForm){
    console.log(form);
  }

  serPresetSetValue4(){
    this.signUpForm4.get('contactNumber').setValue(['ali', 'husain','kdsjf'])
  }

  serPresetSetPatch4(){

    this.signUpForm4.get('contactNumber').patchValue(['ali', 'husain','kdsjf'])
  }

  addControls4(){

    (<FormArray>this.signUpForm4.get('contactNumber')).push(new FormControl());
  }

  nameSub3: any;
  lnameSub3: any;
  subs3(Forn: NgForm) {
    // alert()
    console.log(Forn);
    console.log(this.signUpForm3);
    console.log(Forn.value);
    console.log(this.signUpForm3.value);
    this.nameSub3 = this.signUpForm3.get('fname').value;
    // console.log(Forn.get()); //this is not a function i dont understand it still
    console.log(this.nameSub3);
    
    // console.log(refH);
  }
  
  // to reset the form
  resetForm3(){
    this.signUpForm3.reset();
  }

  // to reset the form
  resetFormGiveVal3(){
    this.signUpForm3.reset({
      fname: 'ali',
      lname: 'not'
    });
  }

  // to fill the form with the help of setValue in whic we must supply the all form contrl value
  fillDataInForm3(){

    this.signUpForm3.setValue({
      fname: 'fill fname',
      lname: 'fill lname',
      ename: 'fill ename'
    })  

  }

  // to fill the form with the help of patchValue in whic we dont need to supply the all form data
  fillDataInFormPatch3(){

    this.signUpForm3.patchValue({
      fname: 'fill fname',
      lname: 'fill lname',
      // ename: 'fill ename'
    })  

  }

 


  arrOfService: any[];
  
  serviceOnAppLevel(){

    this.arrOfService =this.instanseOfMyserOnAppLeve.studentsWithTrackBy;
  }

  signUpForm: FormGroup;
  signUpForm3: FormGroup;
  signUpForm4: FormGroup;

  subs2(FM: any){
    console.log(FM);
    
  }
  

}
