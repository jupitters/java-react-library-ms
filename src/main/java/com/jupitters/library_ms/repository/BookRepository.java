package com.jupitters.library_ms.repository;

import com.jupitters.library_ms.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
