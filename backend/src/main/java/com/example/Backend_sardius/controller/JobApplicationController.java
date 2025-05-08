package com.example.Backend_sardius.controller;

import com.example.Backend_sardius.model.JobApplicationModel;
import com.example.Backend_sardius.repository.JobApplicationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/job-application")
@CrossOrigin(origins = "http://localhost:5173") // for React
public class JobApplicationController {

    @Autowired
    private JobApplicationRepository repository;

    private static final String RESUME_UPLOAD_DIR = "uploads/resumes/";

    static {
        File directory = new File(RESUME_UPLOAD_DIR);
        if (!directory.exists()) {
            directory.mkdirs();
        }
    }

    // Endpoint to submit application
    @PostMapping
    public ResponseEntity<String> submitApplication(@RequestParam Map<String, String> params,
                                                    @RequestParam("resume") MultipartFile resumeFile) {
        if (params.get("fullName") == null || params.get("email") == null || resumeFile.isEmpty()) {
            return ResponseEntity.badRequest().body("❌ Missing required fields.");
        }

        try {
            // Validate file type
            String originalFilename = resumeFile.getOriginalFilename();
            if (originalFilename != null && !originalFilename.matches(".*\\.(pdf|docx|txt)$")) {
                return ResponseEntity.badRequest().body("❌ Only PDF, DOCX, or TXT files are allowed.");
            }

            // Save resume file to disk
            String resumeFilename = System.currentTimeMillis() + "_" + originalFilename;
            Path resumePath = Paths.get(RESUME_UPLOAD_DIR + resumeFilename).normalize();
            Files.write(resumePath, resumeFile.getBytes());

            // Save job application details
            JobApplicationModel job = new JobApplicationModel();
            job.setFullName(params.get("fullName"));
            job.setEmail(params.get("email"));
            job.setPhone(params.get("phone"));
            job.setAddress(params.get("address"));
            job.setPosition(params.get("position"));
            job.setSkills(params.get("skills"));
            job.setYearsOfExperience(params.get("yearsOfExperience"));
            job.setCurrentCTC(params.get("currentCTC"));
            job.setExpectedCTC(params.get("expectedCTC"));
            job.setRecentEducation(params.get("recentEducation"));
            job.setCollegeName(params.get("collegeName"));
            job.setIdNumber(params.get("idNumber"));
            job.setPercentage(params.get("percentage"));
            job.setGithub(params.get("github"));
            job.setLinkedin(params.get("linkedin"));
            job.setCoverLetter(params.get("coverLetter"));
            job.setResume(resumeFilename);

            // Save the job application to the repository
            JobApplicationModel savedJob = repository.save(job);
            return ResponseEntity.ok("Application submitted with ID: " + savedJob.getId());
        } catch (IOException e) {
            return ResponseEntity.status(500).body("❌ Error uploading file: " + e.getMessage());
        }
    }

    // Endpoint to get all job applications
    @GetMapping
    public List<JobApplicationModel> getAllApplications() {
        return repository.findAll();
    }

    // Endpoint to download resume
    @GetMapping("/resume/{filename}")
    public ResponseEntity<byte[]> downloadResume(@PathVariable String filename) {
        try {
            Path filePath = Paths.get(RESUME_UPLOAD_DIR + filename);
            if (!Files.exists(filePath)) {
                return ResponseEntity.notFound().build();
            }

            byte[] fileData = Files.readAllBytes(filePath);

            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + filename)
                    .contentType(MediaType.APPLICATION_OCTET_STREAM)
                    .body(fileData);

        } catch (IOException e) {
            // Return an empty body with an error status
            return ResponseEntity.status(500).body(new byte[0]);  // empty byte array as body
        }
    }


    }



