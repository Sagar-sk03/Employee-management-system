import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees: Employee[];
  EnteredID!: number;

  // ✅ ADD THIS
  role: string | null = '';

  constructor(private employeeService: EmployeeService, private router: Router) {
    this.employees = [];
  }

  ngOnInit(): void {

    // ✅ ADD THIS LINE
    this.role = sessionStorage.getItem('role');

    this.getEmployees();
  }

  goToEmployee() {
    console.log(this.EnteredID);
    this.router.navigate(['details-of-employee', this.EnteredID]);
  }

  getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  updateEmployee(id: number) {
    this.router.navigate(['updating-by-id', id]);
  }

  deleteEmployee(id: number) {
    if (confirm("Are you sure to delete Employee ID: " + id)) {
      this.employeeService.deleteEmployee(id).subscribe(data => {
        console.log(data);
        this.getEmployees();
      });
    }
  }

  detailsOfEmployee(id: number) {
    this.router.navigate(['details-of-employee', id]);
  }
}