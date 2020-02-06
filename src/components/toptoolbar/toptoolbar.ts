import { ProjectsPage } from './../../pages/projects/projects';
import { ResumePage } from './../../pages/resume/resume';
import { HomePage } from './../../pages/home/home';
import { Component } from '@angular/core';

/**
 * Generated class for the ToptoolbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'toptoolbar',
  templateUrl: 'toptoolbar.html'
})
export class ToptoolbarComponent {

  text: string;
  tab1Root = HomePage;
  tab2Root = ResumePage;
  tab3Root = ProjectsPage;

  constructor() {
    console.log('Hello ToptoolbarComponent Component');
    this.text = 'Hello World';
  }

}
