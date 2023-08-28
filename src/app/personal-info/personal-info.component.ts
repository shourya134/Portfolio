import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Shourya Sharma'],
    ['Education', 'HBSc. (2022)'],
    ['Interests', 'Basketball, Anime, Running'],
  ];

  aboutMe: string[] = [
    'Hey, I am a Computer and data scientist',
    'I am adept at analyzing, manipulating, and regressing complicated data sets and drawing robust conclusions.',
    'Also, have experience making algorithms that identify trends in data by learning from training data sets.',
    'Get in touch if youre intrested in developing physics based engines that mimic real life'
  ];

  constructor() {}

  ngOnInit(): void {}

}
