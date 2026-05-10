import { Component, signal } from '@angular/core';
import { inject } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-list',
  templateUrl: './list.html',
})
export class ListComponent {
  private studentService = inject(StudentService);
  students = signal<Array<Student>>([]);

  constructor() {
    this.studentService
      .getStudents()
      .subscribe((data) => this.students.set(data));
  }
}
