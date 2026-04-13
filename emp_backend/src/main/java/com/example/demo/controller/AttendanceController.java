package com.example.demo.controller;

import com.example.demo.model.Attendance;
import com.example.demo.repository.AttendanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/attendance")
public class AttendanceController {

    @Autowired
    private AttendanceRepository attendanceRepository;

    // 👨‍💼 Admin → Add attendance
    @PostMapping
    public Attendance addAttendance(@RequestBody Attendance attendance) {
        return attendanceRepository.save(attendance);
    }

    // 👨‍💻 Employee → View own attendance
    @GetMapping("/employee/{id}")
    public List<Attendance> getAttendance(@PathVariable Long id) {
        return attendanceRepository.findByEmployeeId(id);
    }
}