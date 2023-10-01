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
        'Investigating the cognitive effects of using virtual reality devices in educational institutions focusing on information processing and communication.', 
'Led query-based data collection, thematization and analysis of video and audio interview data.',
'Designed an ML model in independently by utilizing Python Libraries such as Nemo, Google text to speech & Sklearn. The model transcribes and diarizes audio files efficiently and accurately saving the project time and money (130 hours of work). The code can also be adapted for future projects',
'Analyzed biometric data from virtual reality participants, using time series analysis to determine participants with least bias thus ensuring the data collected is reliable and objective.' ,
'Designed an animation system in Unity and C# that will be the basis for creating a dynamic and immersive virtual world that will aid users to retain the concept their experience more effectively.' 
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