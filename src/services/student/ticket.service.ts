import { Injectable } from '@angular/core';
import {Student} from '../../models/student';
import {STUDENTS_MOCK} from '../../mocks/students.mock';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = STUDENTS_MOCK;
  constructor() { }
  getStudentById(id: number): Student {
    // tslint:disable-next-line:triple-equals
    return this.students.find(student => student.id == id);
  }

}
