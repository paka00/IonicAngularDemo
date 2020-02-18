import { ImageModalPage } from './../image-modal/image-modal';
import { Project } from './../../project';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';

/**
 * Generated class for the ProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {
  public showForm = false;
  projectName;
  projectClient;
  startDate;
  endDate;
  projectLink;
  projectDescription;
  imageLink;
  projects: Array<Project> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastController: ToastController, private modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
  }

  clickedAdd() {
    this.showForm = true;
    this.projectName = "";
    this.projectClient = "";
    this.startDate = "";
    this.endDate = "";
    this.projectLink = "";
    this.projectDescription = "";
    this.imageLink = "";
  }

  clickedSave() {
    if (this.projectName == "" || this.startDate == "" || this.endDate == "" || this.projectClient == "" || this.projectDescription == "") {
      this.presentToast();
    }
    else {
      let newProject = new Project();
      newProject.name = this.projectName;
      newProject.client = this.projectClient;
      newProject.startDate = this.startDate;
      newProject.endDate = this.endDate;
      newProject.link = this.projectLink;
      newProject.description = this.projectDescription;
      newProject.imageLink = this.imageLink;
      this.projects.push(newProject);
      this.projects.sort((a, b) => Date.parse(b.startDate) - Date.parse(a.startDate));
      this.showForm = false;
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Syötä tiedot tarvittaviin kenttiin.',
      duration: 2000
    });
    toast.present();
  }

  onImgClick(imgLink: string) {
    const myModal = this.modal.create(ImageModalPage, { imageLink: imgLink }, {
      cssClass:"my-modal"
  });
    myModal.present();
  }

}
