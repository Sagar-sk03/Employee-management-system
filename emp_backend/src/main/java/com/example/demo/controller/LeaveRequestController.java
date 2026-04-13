package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.LeaveRequest;
import com.example.demo.repository.LeaveRequestRepository;

import java.util.List;

@RestController
@RequestMapping("/api/v1/leave")
@CrossOrigin(origins = "http://localhost:4200")
public class LeaveRequestController {

    @Autowired
    private LeaveRequestRepository repo;

    // 👤 Create leave
    @PostMapping
    public LeaveRequest createLeave(@RequestBody LeaveRequest leave) {
        leave.setStatus("PENDING");
        return repo.save(leave);
    }

    // 👑 Admin - all leaves
    @GetMapping
    public List<LeaveRequest> getAllLeaves() {
        return repo.findAll();
    }

    // 👤 Employee - own leaves
    @GetMapping("/employee/{email}")
    public List<LeaveRequest> getByEmail(@PathVariable String email) {
        return repo.findByEmployeeEmail(email);
    }

    // 👑 Approve
    @PutMapping("/approve/{id}")
    public LeaveRequest approve(@PathVariable Long id) {
        LeaveRequest leave = repo.findById(id).get();
        leave.setStatus("APPROVED");
        return repo.save(leave);
    }

    // 👑 Reject
    @PutMapping("/reject/{id}")
    public LeaveRequest reject(@PathVariable Long id) {
        LeaveRequest leave = repo.findById(id).get();
        leave.setStatus("REJECTED");
        return repo.save(leave);
    }
}