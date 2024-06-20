package com.demo.exception;

import org.springframework.http.HttpStatus;

public class ApiResponse {

//	private String message;
//	private boolean success;

	private String message;
	private Throwable throwable;
	private HttpStatus httpStatus;

	public ApiResponse(String message, 
//			Throwable throwable, 
			HttpStatus httpStatus) {
		super();
		this.message = message;
//		this.throwable = throwable;
		this.httpStatus = httpStatus;
	}

	public String getMessage() {
		return message;
	}

//	public Throwable getThrowable() {
//		return throwable;
//	}

	public HttpStatus getHttpStatus() {
		return httpStatus;
	}

}
