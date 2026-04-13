import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  attendanceList: any[] = [];

  constructor(private empService: EmployeeService) {}

ngOnInit(): void {

  const storedId = localStorage.getItem('employeeId');
  console.log("Stored ID:", storedId);

  if (!storedId) {
    alert("Employee ID not found. Please login again.");
    return;
  }

  const id = parseInt(storedId, 10);

  this.empService.getAttendanceByEmployeeId(id).subscribe({
    next: (data: any) => {
      console.log("Attendance:", data);
      this.attendanceList = data;
    },
    error: (err) => {
      console.error(err);
      alert("Failed to load attendance");
    }
  });
}
}