import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  

  constructor(private router: Router) {}

canActivate(route: ActivatedRouteSnapshot): boolean {

  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  const role = sessionStorage.getItem("role");

  // ✅ ADD THESE 3 LINES HERE
  console.log("URL:", this.router.url);
  console.log("isLoggedIn:", isLoggedIn);
  console.log("role:", role);

  if (isLoggedIn !== "true") {
    this.router.navigate(['/login']);
    return false;
  }

  const url = this.router.url; // ✅ use URL instead of path

  const adminRoutes = [
    'admin-dashboard',
    'show-all-employees',
    'add-employee',
    'update-by-id',
    'details-of-employee',
    'admin-leave'
  ];

  const employeeRoutes = [
    'employee-dashboard',
    'leave-request',
    'show-details',
    'employee-list'
  ];

  // ❌ Employee trying admin route
  if (role === 'employee' && adminRoutes.some(r => url.includes(r))) {
    this.router.navigate(['/employee-dashboard']);
    return false;
  }

  // ❌ Admin trying employee route
  if (role === 'admin' && employeeRoutes.some(r => url.includes(r))) {
    this.router.navigate(['/admin-dashboard']);
    return false;
  }

  return true;
}
}