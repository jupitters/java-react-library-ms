package com.jupitters.library_ms.controller;

import com.jupitters.library_ms.exception.ResourceNotFoundException;
import com.jupitters.library_ms.model.Book;
import com.jupitters.library_ms.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class BookController {
    private final BookRepository bookRepository;

    @GetMapping("/books")
    public List<Book> getAllBooks(){
        return bookRepository.findAll();
    }

    @PostMapping("/books")
    public Book saveBook(@RequestBody Book book){
        return bookRepository.save(book);
    }

    @GetMapping("/books/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id){
        Book book = bookRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Book Not Found"));
        return ResponseEntity.ok(book);
    }

    @PutMapping("/books/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable Long id, @RequestBody Book bookDetails){
        Book book = bookRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Book Not Found"));
        book.setName(bookDetails.getName());
        book.setAuthor(bookDetails.getAuthor());

        Book updatedBook = bookRepository.save(book);
        return ResponseEntity.ok(updatedBook);
    }
    
    @DeleteMapping("/books/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteBook(@PathVariable Long id){
        Book book = bookRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Book Not Found"));
        bookRepository.delete(book);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
