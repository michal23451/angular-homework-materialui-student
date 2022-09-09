import { Component, OnInit } from '@angular/core';

import { StudentsService } from '../students-service/students-service';

import { MatSnackBar } from '@angular/material/snack-bar';



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


  constructor(private snackBar: MatSnackBar, protected studentService: StudentsService) { }

  // Component Lifecycle
  ngOnInit(): void {
        // Po załadowaniu komponentu pobieramy ponownie elementy z backendu (refresh)
        this.studentService.refreshStudentsList()
  }

  deleteStudent(id: number): void {
    this.studentService.deleteFromBackend(id)
      .subscribe({
        next: (_) => {
          this.snackBar.open('Student został usunięty z listy', 'Zamknij' /*undefined*/, {
            verticalPosition: 'bottom',
            horizontalPosition: 'center',
            duration: 5000
          })
          this.studentService.refreshStudentsList()
        },
        error: (error) => {
          console.log(error)
          this.studentService.refreshStudentsList()
        }
      })
  }

}
