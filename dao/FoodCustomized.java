package com.demo.dao;

//this is called projection interface
public interface FoodCustomized {
	// JPA creates the set method
	public String getName();

	public String getSize();
	public String getCalories();
	public String getProteins();
	public String getFat();
	

}
