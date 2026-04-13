import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,   // ✅ ADD THIS
  imports: [NgbCarouselModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

  goToEmployeeLogin() {
    this.router.navigate(['/employee-login']); // ✅ FIXED
  }

  goToAdminLogin() {
    this.router.navigate(['/admin-login']);
  }
}