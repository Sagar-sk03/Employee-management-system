import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLeaveComponent } from './admin-leave/admin-leave.component';
import { AdminAttendanceComponent } from './admin-attendance/admin-attendance.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AuthGuard } from './auth.guard';
import { HolidaysComponent } from './holidays/holidays.component';

const routes: Routes = [

  // ✅ HOME PAGE (FIRST SCREEN)
  { path: '', component: HomeComponent },

  // ✅ SEPARATE LOGIN PAGES
  { path: 'employee-login', component: EmployeeDashboardComponent }, // or your employee login component
  { path: 'admin-login', component: AdminLoginComponent },
   { path: 'admin-attendance', component: AdminAttendanceComponent },
  { path: 'attendance', component: AttendanceComponent },


  // 👑 ADMIN ROUTES
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'show-all-employees', component: EmployeeListComponent, canActivate: [AuthGuard] },
  { path: 'add-employee', component: AddEmployeeComponent, canActivate: [AuthGuard] },
  { path: 'update-by-id/:id', component: UpdateEmployeeComponent, canActivate: [AuthGuard] },
  { path: 'details-of-employee/:id', component: ShowDetailsComponent, canActivate: [AuthGuard] },
  { path: 'admin-leave', component: AdminLeaveComponent, canActivate: [AuthGuard] },

  // 👤 EMPLOYEE ROUTES

  { path: 'employee-dashboard', component: EmployeeDashboardComponent, canActivate: [AuthGuard] },
  { path: 'leave-request', component: LeaveRequestComponent, canActivate: [AuthGuard] },
{ path: 'employee-list', component: EmployeeListComponent,  },
{ path: 'holidays', component: HolidaysComponent },

  // ❌ REMOVE old login redirect
  { path: '**', redirectTo: '' }

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
