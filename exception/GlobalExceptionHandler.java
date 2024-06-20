package com.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

//	@ExceptionHandler(ResourceNotFoundException.class)
//	public ResponseEntity<ApiResponse> resourceNotFoundException(ResourceNotFoundException ex){
//		String message = ex.getMessage();
//		//ApiResponse apiResponse = new ApiResponse();
//		return new ResponseEntity<ApiResponse>(apiResponse, HttpStatus.NOT_FOUND);
//	}

	@ExceptionHandler(value = { ResourceNotFoundException.class })
	public ResponseEntity<Object> handleResourceNotFoundException(ResourceNotFoundException e) {
		ApiResponse apiResponse = new ApiResponse(e.getMessage(),
//				e.getCause(), 
				HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(apiResponse, HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(value = { BadRequestException.class })
	public ResponseEntity<Object> handleBadRequestException(BadRequestException e) {
		ApiResponse apiResponse = new ApiResponse(e.getMessage(),
//				e.getCause(), 
				HttpStatus.BAD_REQUEST);
		return new ResponseEntity<>(apiResponse, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(value = { InternetServerException.class })
	public ResponseEntity<Object> handleInternetServerException(InternetServerException ex) {
		ApiResponse apiResponse = new ApiResponse(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		return new ResponseEntity<>(apiResponse, HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
