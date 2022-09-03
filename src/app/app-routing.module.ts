import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentsHomeComponent } from './students-home/students-home.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsFormComponent } from './students-form/students-form.component';

const routes: Routes = [
  {path:"", redirectTo: "home", pathMatch: "full"},
  {path:"home", component: StudentsHomeComponent},
  {path:"students", component: StudentsListComponent},
  {path:"add-student-form", component: StudentsFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
