import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { PagenotfounedComponent } from './pagenotfouned/pagenotfouned.component';

// in which we configure the route path 
const routes: Routes = [

  //{path: '**', component: PagenotfounedComponent},//alway run this route bcs no earlier route to be match no matter even redirect route
  {path: 'ali', redirectTo: 'studentDetails', pathMatch: 'full'}, //this is for the redirect (in this case prefix will be ali)
  {path: 'student', component: StudentComponent},
  {path: 'studentDetails', component: StudentdetailsComponent},
  {path: '', redirectTo: 'studentDetails', pathMatch: 'full'}, //this is for the redirect (in this case prefix will be ali)
  {path: '**', component: PagenotfounedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
