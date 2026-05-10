// Student-tietotyyppi

export interface Student {
  _id: string; // mongon lisäämä _id
  studentcode: string;
  name: string;
  email: string;
  studypoints: number;
  grades: Array<{}>;
}
