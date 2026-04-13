import { Component, OnInit } from '@angular/core';
import { LeaveRequestService } from '../leave-request.service';

@Component({
  selector: 'app-admin-leave',
  templateUrl: './admin-leave.component.html',
  styleUrls: ['./admin-leave.component.css']
})
export class AdminLeaveComponent implements OnInit {

  leaves: any[] = [];

  // ✅ FIX HERE
  constructor(private service: LeaveRequestService) {}

  ngOnInit() {
    this.loadLeaves();
  }

 loadLeaves() {
  this.service.getAllLeaves().subscribe((data: any) => {
    console.log("API DATA:", data);   // ✅ ADD THIS LINE
    this.leaves = data;
  });
}

  approve(id: number) {
    this.service.approveLeave(id).subscribe(() => {
      this.loadLeaves();
    });
  }

  reject(id: number) {
    this.service.rejectLeave(id).subscribe(() => {
      this.loadLeaves();
    });
  }
}
