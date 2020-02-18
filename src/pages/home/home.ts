import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imageLink;
  public showButton = true;

  constructor(public navCtrl: NavController) {

  }

}
