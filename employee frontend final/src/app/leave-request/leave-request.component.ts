import { Component, OnInit } from '@angular/core';
import { LeaveRequestService } from '../leave-request.service';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent implements OnInit {

  leaves: any[] = [];
  leave: any = {};

  constructor(private service: LeaveRequestService) {}

  ngOnInit() {
    this.loadLeaves();
  }

  loadLeaves() {
    const role = sessionStorage.getItem("role");
    const email = sessionStorage.getItem("userEmail");

    if (role === 'admin') {
      this.service.getAllLeaves().subscribe((data: any) => {
        this.leaves = data;
      });
    } else {
      this.service.getLeavesByEmployee(email!).subscribe((data: any) => {
        this.leaves = data;
      });
    }
  }

submitLeave() {

  const email = sessionStorage.getItem("userEmail");

  const payload = {
    leaveType: this.leave.leaveType,
    fromDate: this.leave.fromDate,
    toDate: this.leave.toDate,
    reason: this.leave.reason,
    employeeEmail: email
  };

  console.log("FINAL PAYLOAD:", payload); // 🔥 MUST SHOW VALUES

  this.service.createLeave(payload).subscribe(() => {
    alert("Leave submitted");

    this.leave = {};  // reset

    this.loadLeaves();
  });
}

  getRole(): string {
    return sessionStorage.getItem("role") || '';
  }
}