import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {

  const email = this.email.trim();
  const password = this.password.trim();

  // 👑 ADMIN LOGIN
  if (email === 'admin@gmail.com' && password === '1234') {

    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("role", "admin");

    this.router.navigate(['/admin-dashboard']); // ✅ FIXED

  }

  // 👤 EMPLOYEE LOGIN
  else if (email === 'emp@gmail.com' && password === '1234') {

    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("role", "employee");
    sessionStorage.setItem("userEmail", email);

    this.router.navigate(['/employee-dashboard']);

  }

  // ❌ INVALID LOGIN
  else {
    alert("Invalid login ❌");
  }
}
}