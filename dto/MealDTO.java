package com.demo.dto;

import java.io.Serializable;
import java.util.Date;

import com.demo.entity.Food;

public class MealDTO implements Serializable {
	private int mealId;
	private String name;
	private String date;
	private String time;
	private double quantity;
	private Food food;
	private Date createdAt;
	private Date updateAt;

	public int getMealId() {
		return mealId;
	}

	public void setMealId(int mealId) {
		this.mealId = mealId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public double getQuantity() {
		return quantity;
	}

	public void setQuantity(double quantity) {
		this.quantity = quantity;
	}

	public Food getFood() {
		return food;
	}

	public void setFood(Food food) {
		this.food = food;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdateAt() {
		return updateAt;
	}

	public void setUpdateAt(Date updateAt) {
		this.updateAt = updateAt;
	}

	@Override
	public String toString() {
		return "MealDTO [mealId=" + mealId + ", name=" + name + ", date=" + date + ", time=" + time + ", quantity="
				+ quantity + ", createdAt=" + createdAt + ", updateAt=" + updateAt + "]";
	}

}
