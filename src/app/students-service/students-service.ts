import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

export type Student = {
  id: number|null,
  birht_date: Date,
  index_number: string,
  name: string,
  surname: string
}

@Injectable({
  providedIn: 'root'
})

export class StudentsService {
  studentList: Student[] = []
  loadingList: boolean = false

  constructor(private http: HttpClient) {}

  public refreshStudentList(): void {
    this.loadingList = true;

    this.http.get('http://localhost:8080/api/student/')
      .subscribe((data) => { // promise
        this.loadingList = false
        console.log(data)

        let receivedStudentList = data as Student[];
        this.studentList = receivedStudentList;
      })
  }

}
