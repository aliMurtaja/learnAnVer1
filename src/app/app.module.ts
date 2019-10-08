import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CompanyModule } from './company/company.module';
import { MyserviceService } from './myservice.service';
import { StudentComponent } from './student/student.component';
// import { from } from 'rxjs';
import { MypipePipe } from './mypipe.pipe';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { PagenotfounedComponent } from './pagenotfouned/pagenotfouned.component';
import { MyserviceonapplevelService } from './myserviceonapplevel.service';


//@NgModule-->this is class level decorator that supply the metadata to the angular
@NgModule({
  //in this we declare the components, pips and this will run on the compile time thai is y we can see the Err
  declarations: [
    AppComponent,
    EmployeeComponent,
    StudentComponent,
    MypipePipe,
    StudentdetailsComponent,
    PagenotfounedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompanyModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // this will run on the run time
  providers: [MyserviceService, MyserviceonapplevelService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(){
    console.log('thsi is from app module')
  }
 }
