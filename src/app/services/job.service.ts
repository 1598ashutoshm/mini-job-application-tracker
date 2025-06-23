import { Injectable } from '@angular/core';
import { Job } from '../models/job';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private jobs: Job[] = [
    {
      id: 1,
      position: 'Frontend Developer',
      company: 'TechCorp',
      status: 'Applied',
      appliedDate: '2025-06-20'
    },
    {
      id: 2,
      position: 'Backend Developer',
      company: 'DevHouse',
      status: 'Interview',
      appliedDate: '2025-06-18'
    }
  ];

  private jobsSubject = new BehaviorSubject<Job[]>(this.jobs);
  jobs$ = this.jobsSubject.asObservable();

  addJob(job: Job) {
    job.id = Date.now();
    this.jobs.push(job);
    this.jobsSubject.next(this.jobs);
  }

  updateJob(updatedJob: Job) {
    const index = this.jobs.findIndex(j => j.id === updatedJob.id);
    if (index > -1) {
      this.jobs[index] = updatedJob;
      this.jobsSubject.next(this.jobs);
    }
  }

  deleteJob(id: number) {
    this.jobs = this.jobs.filter(j => j.id !== id);
    this.jobsSubject.next(this.jobs);
  }
}
