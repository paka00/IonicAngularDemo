import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ImageModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-image-modal',
  templateUrl: 'image-modal.html',
})
export class ImageModalPage {
  imgLink;
  imageTitle;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.imageTitle = navParams.get('imageTitle')
    this.imgLink = navParams.get('imageLink');
    console.log(this.imgLink);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageModalPage');
  }

  closeModal() {
    this.navCtrl.pop();
}

}
