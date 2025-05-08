package com.example.Backend_sardius.repository;

import com.example.Backend_sardius.model.JobApplicationModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobApplicationRepository extends JpaRepository<JobApplicationModel, Long> {
}
