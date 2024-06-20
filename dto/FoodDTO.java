package com.demo.dto;

import java.io.Serializable;
import java.util.Date;



public class FoodDTO implements Serializable {
	private int foodId;
	private String name;
	private String size;
	private double calories;
	private double carbs;
	private double proteins;
	private double fat;
	private Date createdAt;
	private Date updatedAt;

	public int getFoodId() {
		return foodId;
	}

	public void setFoodId(int foodId) {
		this.foodId = foodId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public double getCalories() {
		return calories;
	}

	public void setCalories(double calories) {
		this.calories = calories;
	}

	public double getCarbs() {
		return carbs;
	}

	public void setCarbs(double carbs) {
		this.carbs = carbs;
	}

	public double getProteins() {
		return proteins;
	}

	public void setProteins(double proteins) {
		this.proteins = proteins;
	}

	public double getFat() {
		return fat;
	}

	public void setFat(double fat) {
		this.fat = fat;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	@Override
	public String toString() {
		return "FoodDTO [foodId=" + foodId + ", name=" + name + ", size=" + size + ", calories=" + calories + ", carbs="
				+ carbs + ", proteins=" + proteins + ", fat=" + fat + ", createdAt=" + createdAt + ", updatedAt="
				+ updatedAt + "]";
	}

}