import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Student, StudentsService } from '../students-service/students-service';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent implements OnInit {
  @ViewChild('ref') child: ElementRef|any;

  student: Student;
  sendingStudent: boolean = false;

  notification: string|null = null;

  constructor(private studentsService: StudentsService) {
    this.student = studentsService.getDefautStudentModel();
  }

  ngOnInit(): void {
  }

  sendStudent(): void {
    this.sendingStudent = true;

    this.studentsService.sendStudentToBackend(this.student)
    .subscribe({
      next: (data) => {
        this.sendingStudent = false;
        console.log(data)
      },
      error: (error) => {
        this.sendingStudent = false;
        this.notification = error.message;
      }
    })
  }

  clearForm(): void {
    this.student = this.studentsService.getDefautStudentModel();
  }

}
