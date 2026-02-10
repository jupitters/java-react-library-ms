package com.jupitters.library_ms.exception;

public class ResourceNotFoundException extends RuntimeException{
    ResourceNotFoundException(String message) {
        super(message);
    }
}
