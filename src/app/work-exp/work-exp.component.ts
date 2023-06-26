import { Component } from '@angular/core';

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.css']
})
export class WorkExpComponent {
  experience_list: experience[] = [
    {
      company_name: 'OISE',
      title: 'Data Analyst ',
      technologies: 'Nvivo, Python, Nemo, Sklearn', 
      description: [
        'Conducted rigorous data collection and analysis of video and audio data', 
'A part of the analysis process from the start of the process and will follow through till the end',
'Took an innovative approach and used machine learning techniques of sklearn and nemo python libraries to convert audio files into transcripts making the process 10 times faster',
'For further Used speaker diarization techniques to tell different speakers apart with upwards of 80 percent accuracy and in turn, saved over 130 hours of company time within my first month of starting my job' ,
'Thematized the data categories making it easier to search and use patterns ' 
,
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}

}
interface experience {
  company_name: string;
  title: string;
  technologies: string;
  description: string[];
}