import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-admin-attendance',
  templateUrl: './admin-attendance.component.html'
})
export class AdminAttendanceComponent {

  empId = '';
  date = '';
  status = 'Present';

  constructor(private empService: EmployeeService) {}

  markAttendance() {
    const data = {
      empId: this.empId,
      date: this.date,
      status: this.status
    };

    this.empService.addAttendance(data).subscribe(() => {
      alert("Attendance marked");
    });
  }
}