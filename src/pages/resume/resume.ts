import { JobExperience } from './../../jobExperience';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the ResumePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resume',
  templateUrl: 'resume.html',
})
export class ResumePage {
  public showForm = false;
  jobs: Array<JobExperience> = [];
  employer;
  startDate;
  endDate;
  jobName;
  jobDescription;
  totalDurationYears = 0;
  totalDurationMonths = 0;
  durationMonths = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastController: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResumePage');
  }

  clickedAdd() {
    this.showForm = true;
    this.employer = "";
    this.startDate = "";
    this.endDate = "";
    this.jobName = "";
    this.jobDescription = "";
  }

  clickedSave() {
    if (this.employer == "" || this.startDate == "" || this.endDate == "" || this.jobName == "" || this.jobDescription == "") {
      this.presentToast();
    }
    else {
      let newJob = new JobExperience();
      newJob.employer = this.employer;
      newJob.startDate = this.startDate;
      newJob.endDate = this.endDate;
      newJob.jobName = this.jobName;
      newJob.jobDescription = this.jobDescription;
      var start = new Date(Date.parse(this.startDate));
      var end = new Date(Date.parse(this.endDate));
      newJob.duration = this.monthDiff(start, end);
      newJob.durationMonths = newJob.duration % 12;
      newJob.durationYears = (newJob.duration - newJob.durationMonths) / 12;
      this.totalDurationMonths += newJob.duration;
      this.durationMonths = this.totalDurationMonths % 12;
      this.totalDurationYears = (this.totalDurationMonths - this.durationMonths) / 12;
      this.jobs.push(newJob);
      this.jobs.sort((a, b) => Date.parse(b.startDate) - Date.parse(a.startDate));
      this.showForm = false;
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Syötä tiedot kaikkiin kenttiin.',
      duration: 2000
    });
    toast.present();
  }

  monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    console.log(months);
    months -= d1.getMonth() + 1;
    console.log(months);
    months += d2.getMonth() + 1;
    console.log(months);
    if(d1.getDate() > d2.getDate()) {
      months -= 1;
    }
    return months <= 0 ? 0 : months;
}
}
