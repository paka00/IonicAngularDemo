import { JOBS } from './../../jobs';
import { JobExperience } from './../../jobExperience';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.getJobs();
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
    let newJob = new JobExperience();
    newJob.employer = this.employer;
    newJob.startDate = this.startDate;
    newJob.endDate = this.endDate;
    newJob.jobName = this.jobName;
    newJob.jobDescription = this.jobDescription;
    JOBS.push(newJob);
    this.showForm = false;
  }

  getJobs() {
    this.jobs = JOBS;
  }

}
