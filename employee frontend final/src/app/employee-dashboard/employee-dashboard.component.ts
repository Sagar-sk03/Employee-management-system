import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent {

  constructor(private router: Router) {}

  goToLeave() {
    this.router.navigate(['/leave-request']);
  }

  goToRequests() {
    this.router.navigate(['/show-details']); // change if needed
  }

  goToHolidays() {
    this.router.navigate(['/holidays']); // or approved page
  }
}