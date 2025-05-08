package com.example.Backend_sardius.controller;

import com.example.Backend_sardius.model.ContactMessageModel;
import com.example.Backend_sardius.repository.ContactMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class ContactMessageController {

    @Autowired
    private ContactMessageRepository repository;

    @Autowired
    private JavaMailSender emailSender;

    @Value("${spring.mail.to}")
    private String recipientEmail;

    @PostMapping("/contact")
    public ResponseEntity<String> receiveContact(@RequestBody ContactMessageModel message) {
        try {
            // Validate message fields
            if (message.getName() == null || message.getEmail() == null || message.getMessage() == null) {
                return ResponseEntity.badRequest().body("❌ Missing required fields.");
            }

            // Save message to the database
            repository.save(message);

            // Send email notification
            sendEmail(message);
            return ResponseEntity.ok("Message received and email sent successfully");
        } catch (MessagingException e) {
            return ResponseEntity.status(500).body("Error sending email: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error processing the request: " + e.getMessage());
        }
    }

    // 🆕 NEW API to FETCH all contacts
    @GetMapping("/contact")
    public List<ContactMessageModel> getAllMessages() {
        return repository.findAll();
    }

    private void sendEmail(ContactMessageModel message) throws MessagingException {
        MimeMessage mimeMessage = emailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

        // Set email properties
        helper.setTo(recipientEmail);
        helper.setSubject("New Contact Message from " + message.getName());
        helper.setText("<h2>You have received a new contact message:</h2>" +
                       "<p><strong>Name:</strong> " + message.getName() + "</p>" +
                       "<p><strong>Email:</strong> " + message.getEmail() + "</p>" +
                       "<p><strong>Phone:</strong> " + message.getPhone() + "</p>" +
                       "<p><strong>Message:</strong><br>" + message.getMessage() + "</p>", true);

        // Optionally set "Reply-To" header
        helper.setReplyTo(message.getEmail());

        // Send the email
        emailSender.send(mimeMessage);
    }
}


