import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';

const routes: Routes = [
  {path:"", redirectTo: "home", pathMatch: "full"},
  {path:"home", component: StudentHomeComponent},
  {path:"students", component: StudentListComponent},
  {path:"add-student-form", component: StudentFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
