package com.demo.bo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.demo.dao.IFoodRepository;
import com.demo.dao.IMealRepository;
import com.demo.entity.Food;
import com.demo.entity.Meal;

@Component
public class FoodDetailsBO {

	@Autowired
	IFoodRepository foodRepository;

	public Food addFood(Food food) {
		return foodRepository.save(food);
	}

	public Food updateFood(Food food) {
		return foodRepository.save(food);
	}

	public Food fetchByFood(Integer id) {
		Optional<Food> optional = foodRepository.findById(id);
		return optional.get();

	}

	public List<Food> fetchAllFood() {
		return foodRepository.findAll();
	}

//	public List<Food> findFoodById(int foodId1) {
//		return foodRepository.fetchFoodById(foodId1);
//	}
//
//	public List<Food> findByFoodName(String name) {
//		return foodRepository.findByFoodName(name);
//	}

	@Autowired
	IMealRepository mealRepository;

	public Meal addMeal(Meal meal) {
		return mealRepository.save(meal);
	}

	public Meal updateMeal(Meal meal) {
		return mealRepository.save(meal);
	}

	public Meal fetchByMeal(int id) {
		Optional<Meal> optional = mealRepository.findById(id);
		return optional.get();
	}

	public List<Meal> fetchAllMeal() {
		return mealRepository.findAll();
	}

}
