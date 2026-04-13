import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
   styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {

  email: string = '';
  password: string = '';

   constructor(private service: EmployeeService, private router: Router) {}


login() {
  const data = {
    email: this.email,
    password: this.password
  };

  this.service.login(data).subscribe({
    next: (res: any) => {

      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("role", "employee");

      localStorage.setItem("employeeId", res.id);
      localStorage.setItem("user", JSON.stringify(res));
       localStorage.setItem('isLoggedIn', 'true');

      alert("Login Successful");
      this.router.navigate(['/employee-dashboard']);
    },
    error: () => {
      alert("Invalid Email or Password");
    }
  });
}
}