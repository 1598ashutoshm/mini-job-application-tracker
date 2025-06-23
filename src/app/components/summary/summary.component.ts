import { Component } from '@angular/core';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  stats = {
    total: 0,
    applied: 0,
    interview: 0,
    offered: 0,
    rejected: 0,
    onHold: 0,
  };

  constructor(private jobService: JobService) {
    this.jobService.jobs$.subscribe(jobs => {
      this.stats.total = jobs.length;
      this.stats.applied = jobs.filter(j => j.status === 'Applied').length;
      this.stats.interview = jobs.filter(j => j.status === 'Interview').length;
      this.stats.offered = jobs.filter(j => j.status === 'Offered').length;
      this.stats.rejected = jobs.filter(j => j.status === 'Rejected').length;
      this.stats.onHold = jobs.filter(j => j.status === 'On Hold').length;
    });
  }
}
