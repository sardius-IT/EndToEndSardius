package com.example.Backend_sardius.repository;

import com.example.Backend_sardius.model.ContactMessageModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactMessageRepository extends JpaRepository<ContactMessageModel, Long> {
    // No additional code needed — all CRUD operations are built-in!
}
