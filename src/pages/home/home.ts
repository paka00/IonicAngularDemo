
import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage{
  displayData: any = { pdfSource: {url: 'assets/pdf/Johanna_Pauna_CV.pdf'}};

    constructor(public navCtrl: NavController,) {
    }

    ionViewDidLoad() {


    }



}
