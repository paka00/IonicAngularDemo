import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProjectsPage } from '../projects/projects';
import { ResumePage } from '../resume/resume';
import { HomePage } from '../home/home';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProjectsPage;
  tab3Root = ResumePage;

  constructor() {
  }


}
