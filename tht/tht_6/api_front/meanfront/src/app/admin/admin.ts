import { Component, OnInit, signal, inject } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  templateUrl: './admin.html',
})
export class AdminComponent implements OnInit {
  private studentService = inject(StudentService);
  students = signal<Array<Student>>([]);
  addnew = signal(true);
  saveedited = signal(false);
  opnro = '';
  nimi = '';
  email = '';
  opisteet = '';
  id = '';

  constructor() {}

  getStudents() {
    this.studentService
      .getStudents()
      .subscribe((data) => this.students.set(data));
  }
  onSubmit(formData: any) {
    console.log(formData);

    if (
      formData.opnro === '' ||
      formData.nimi === '' ||
      formData.email === '' ||
      formData.opisteet === ''
    ) {
      alert('Täytä kaikki kentät!');
      return;
    }
    if (this.addnew() === true) {
      this.studentService
        .addStudent({
          studentcode: formData.opnro,
          name: formData.nimi,
          email: formData.email,
          studypoints: formData.opisteet,
          grades: [
            {
              coursecode: 'HTS10900',
              grade: 0,
            },
          ],
        })
        .subscribe((data) => this.students.update(students => [...students, data]));
    }
    if (this.saveedited() === true) {
      this.studentService
        .updateStudent({
          _id: formData.id,
          studentcode: formData.opnro,
          name: formData.nimi,
          email: formData.email,
          studypoints: formData.opisteet,
        })
        .subscribe(() => this.getStudents());
      this.addnew.set(true);
      this.saveedited.set(false);
      this.opnro = '';
      this.nimi = '';
      this.email = '';
      this.opisteet = '';
      this.id = '';
    }
  }
  remove(s: Student) {
    console.log('Poistetaan: ' + s._id);
    this.studentService.delStudent(s._id).subscribe(() => this.getStudents());
  }
  update(s: Student) {
    this.opnro = s.studentcode;
    this.nimi = s.name;
    this.email = s.email;
    this.opisteet = String(s.studypoints);
    this.id = s._id;

    this.addnew.set(false);
    this.saveedited.set(true);
  }

  ngOnInit() {
    this.getStudents();
  }
}
