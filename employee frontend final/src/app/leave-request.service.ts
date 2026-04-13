import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {

  private baseURL = "http://localhost:8080/api/v1/leave";

  constructor(private http: HttpClient) {}
  getLeavesByEmployee(email: string) {
  return this.http.get(`http://localhost:8080/api/v1/leave/employee/${email}`);
}

  getAllLeaves() {
    return this.http.get(this.baseURL);
  }

  approveLeave(id: number) {
    return this.http.put(`${this.baseURL}/approve/${id}`, {});
  }

  rejectLeave(id: number) {
    return this.http.put(`${this.baseURL}/reject/${id}`, {});
  }

  createLeave(data: any) {
    return this.http.post(this.baseURL, data);
  }
}