package com.example.demo.adminController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.example.demo.adminModel.adminModel;
import com.example.demo.adminRepository.adminRepository;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin
public class adminController {

    @Autowired
    private adminRepository repo;

    // ✅ GET ALL ADMINS
    @GetMapping("/admin")
    public List<adminModel> getAllAdmins() {
        return repo.findAll();
    }

    // 🔥 ADD THIS (IMPORTANT)
    @PostMapping("/admin-login")
    public ResponseEntity<?> login(@RequestBody adminModel admin) {

        adminModel user = repo.findByAdminNameAndAdminPassword(
                admin.getAdminName(),
                admin.getAdminPassword()
        );

        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid Admin Login");
        }
    }
}