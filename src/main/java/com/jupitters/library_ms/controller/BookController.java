package com.jupitters.library_ms.controller;

import com.jupitters.library_ms.model.Book;
import com.jupitters.library_ms.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    public Book getBookById(@PathVariable Long id){
        return bookRepository.findById(id).get();
    }
}
