import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees";
  private attendanceURL = "http://localhost:8080/api/v1/attendance";

  constructor(private httpClient: HttpClient) {}
  adminLogin(data: any) {
  return this.httpClient.post("http://localhost:8080/admin-login", data);
}

  // EMPLOYEE APIs
  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseURL);
  }

  addEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(this.baseURL, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  

  // ATTENDANCE APIs
  addAttendance(data: any): Observable<Object> {
    return this.httpClient.post(this.attendanceURL, data);
  }

  getAttendanceByEmployeeId(id: number): Observable<any> {
    return this.httpClient.get(`${this.attendanceURL}/employee/${id}`);
  }
  login(data: any) {
  return this.httpClient.post("http://localhost:8080/login", data);
}
}