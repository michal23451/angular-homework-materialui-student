import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


export type Student = {
  id: number|null,
  birthDate: string,
  indexNumber: string,
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

  public refreshStudentsList(): void {
    this.loadingList = true;

    this.http.get('http://localhost:8080/api/student/')
      .subscribe((data) => { // promise
        this.loadingList = false
        console.log(data)

        let receivedStudentList = data as Student[];
        this.studentList = receivedStudentList;
      })
  }

  public getDefautStudentModel(): Student {
    return {
      id: null,
      birthDate: '2020-01-01' ,
      indexNumber: '0',
      name: '',
      surname: ''
    }
  }

  public sendStudentToBackend(student: Student): Observable<Object>{
    return this.http.post('http://localhost:8080/api/student', student);
  }

  public deleteFromBackend(studentId: number): Observable<Object>{
    return this.http.delete('http://localhost:8080/api/student/' + studentId);
  }

}
