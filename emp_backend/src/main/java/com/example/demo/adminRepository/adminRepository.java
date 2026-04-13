package com.example.demo.adminRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.adminModel.adminModel;

public interface adminRepository extends JpaRepository<adminModel, Long> {

    adminModel findByAdminNameAndAdminPassword(String adminName, String adminPassword);
}