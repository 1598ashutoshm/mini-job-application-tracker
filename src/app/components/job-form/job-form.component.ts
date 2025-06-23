import { Component } from '@angular/core';
import { Job } from '../../models/job';
import { JobService } from '../../services/job.service'
@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent {

  statusOptions = ['Applied', 'Interview', 'Rejected', 'Offered', 'On Hold'];
  job: Job = {
    id: 0,
    position: '',
    company: '',
    status: 'Applied',
    appliedDate: ''
  };

  constructor(private jobService: JobService) {}

  submitForm() {
   this.jobService.addJob({ ...this.job });
   this.resetForm();
  }

  resetForm() {
    this.job = {
      id: 0,
      company: '',
      position: '',
      status: 'Applied',
      appliedDate: ''
    }
  }
}