package com.demo.exception;


public class ResourceNotFoundException extends RuntimeException {

	public ResourceNotFoundException(String message, Throwable cause) {
		super(message, cause);
		// TODO Auto-generated constructor stub
	}

	public ResourceNotFoundException( String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}
	 public ResourceNotFoundException(Integer id){
	        super("Could not found the food with id "+ id);
	    }
	
	

}
