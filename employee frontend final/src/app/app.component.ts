import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public router: Router) {}

  // ✅ Check if user is logged in
  isLoggedIn(): boolean {
    return sessionStorage.getItem("isLoggedIn") === "true";
  }

  // ✅ Get user role (admin / employee)
  getRole(): string {
    return sessionStorage.getItem("role") || '';
  }

  // ✅ Logout function
  logout() {
    sessionStorage.clear(); // remove login data

    // redirect to login page
    this.router.navigate(['/login']);
  }
}