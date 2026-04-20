/* eslint-disable new-cap */
/*
 * Testataan että mongodb:n perustoiminnot toimivat
 */
import '../dbconnect.js';
import { expect } from 'chai';
import Student from '../models/Student.js'; // Student model
import NewTestStudentObject from '../NewTestStudentObject.js';

// NewTestStudentObject on skeeman mukainen olio josta tehdään Student-tyyppinen
const NewTestStudent = Student(NewTestStudentObject);

describe('Testing mongodb', () => {
  it('should save data to test database', (done) => {
    Student.create(NewTestStudent).then((doc) => {
      console.log('Document inserted successfully:' + doc);
      done();
    });
  });

  it('should retrieve correct data from test database', (done) => {
    Student.find({
      name: 'Testi Opiskelija',
    }).then((student) => {
      if (student.length === 0) {
        throw new Error('Student with given name value not found!');
      }
      expect(student[0]).to.have.property('_id'); // mongo on luonut dokumentille _id-kentän
      expect(student[0].grades[0]).to.have.property('coursecode'); // alidokumentin eka kenttä olemassa
      done();
    });
  });
});
