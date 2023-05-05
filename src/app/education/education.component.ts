import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute: "University of Toronto",
      course: 'Hbsc in Physics, mathematics and computer science',
      duration: '2017-2022',
      score: ''
      ,
    },
   
    {
      institute: 'Jayshree Perialwal International School',
      course: 'The International Baccalaureate Diploma Programme',
      duration: '2015-2017',
      score: '39/45',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

}
interface Education {
  institute: string;
  course: string;
  duration: string;
  score: string;
}
