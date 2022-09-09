import { Component, OnInit } from '@angular/core';

import { StudentsService } from '../students-service/students-service';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  displayedColumns: string[] = [
     'identyfikator',
     'imie',
     'nazwisko',
     'data-urodzenia',
     'numer-indeksu',
    // 'srednia-ocen',
     'przycisk-usun'
  ]


  constructor(protected studentService: StudentsService) { }

  // Component Lifecycle
  ngOnInit(): void {
        // Po załadowaniu komponentu pobieramy ponownie elementy z backendu (refresh)
        this.studentService.refreshStudentsList()
  }

  deleteStudent(id: number): void {
    this.studentService.deleteFromBackend(id)
      .subscribe({
        next: (_) => {
          this.studentService.refreshStudentsList()
        },
        error: (error) => {
          console.log(error)
          this.studentService.refreshStudentsList()
        }
      })
  }

}
