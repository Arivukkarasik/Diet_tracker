package com.demo.response;

import java.util.List;

import org.springframework.stereotype.Component;

import com.demo.dao.FoodCustomized;
import com.demo.dto.FoodDTO;
import com.demo.dto.MealDTO;
import com.demo.entity.Food;
import com.demo.entity.Meal;

@Component
public class ResponseObject {

	private String successMessage;
	private String failureMessage;
	private Food food;
	private List<Food> foodList;
	private Meal meal;
	private List<Meal> mealList;
	private FoodDTO foodDto;
	private List<FoodDTO> foodDtoList;
	private MealDTO mealDto;
	private List<MealDTO> mealDtoList;
	private List<FoodCustomized> customizedList;

	public MealDTO getMealDto() {
		return mealDto;
	}

	public void setMealDto(MealDTO mealDto) {
		this.mealDto = mealDto;
	}

	public List<MealDTO> getMealDtoList() {
		return mealDtoList;
	}

	public void setMealDtoList(List<MealDTO> mealDtoList) {
		this.mealDtoList = mealDtoList;
	}

	public List<FoodDTO> getFoodDtoList() {
		return foodDtoList;
	}

	public void setFoodDtoList(List<FoodDTO> foodDtoList) {
		this.foodDtoList = foodDtoList;
	}

	public FoodDTO getFoodDto() {
		return foodDto;
	}

	public void setFoodDto(FoodDTO foodDto) {
		this.foodDto = foodDto;
	}

	public String getSuccessMessage() {
		return successMessage;
	}

	public void setSuccessMessage(String successMessage) {
		this.successMessage = successMessage;
	}

	public String getFailureMessage() {
		return failureMessage;
	}

	public void setFailureMessage(String failureMessage) {
		this.failureMessage = failureMessage;
	}

	public Food getFood() {
		return food;
	}

	public void setFood(Food food) {
		this.food = food;
	}

	public List<Food> getFoodList() {
		return foodList;
	}

	public void setFoodList(List<Food> foodList) {
		this.foodList = foodList;
	}

	public Meal getMeal() {
		return meal;
	}

	public void setMeal(Meal meal) {
		this.meal = meal;
	}

	public List<Meal> getMealList() {
		return mealList;
	}

	public void setMealList(List<Meal> mealList) {
		this.mealList = mealList;
	}

	public List<FoodCustomized> getCustomizedList() {
		return customizedList;
	}

	public void setCustomizedList(List<FoodCustomized> customizedList) {
		this.customizedList = customizedList;
	}

}
