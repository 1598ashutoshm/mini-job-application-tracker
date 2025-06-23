export interface Job {
  id: number;
  position: string;
  company: string;
  status: 'Applied' | 'Interview' | 'Rejected' | 'Offered' | 'On Hold';
  appliedDate: string;
}