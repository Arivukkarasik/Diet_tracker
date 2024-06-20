package com.demo.bo;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.demo.dao.IMealRepository;
import com.demo.entity.Meal;
import com.demo.exception.BadRequestException;
import com.demo.exception.InternetServerException;
import com.demo.exception.ResourceNotFoundException;
import com.example.main.DietTracker1Application;

@Component
public class MealBO {

	@Autowired
	IMealRepository mealRepository;

	Logger logger = LoggerFactory.getLogger(DietTracker1Application.class);

	public Meal addMeal(Meal meal) throws BadRequestException, InternetServerException {
		if (meal.getName().isBlank()) {
			throw new BadRequestException("Meal Name is empty so fill the meal name in proper case..");
		} else if (meal.getName().matches(".*\\d.*")) {
			throw new InternetServerException("Meal name is not string type please check this field.");
		}
		logger.info("Meal Details Added Intialized");
		return mealRepository.save(meal);
	}

	public Meal updateMeal(Meal meal) {
		if (mealRepository.save(meal) == null) {
			logger.error("Error occuring when updating process..");
			throw new InternetServerException("Error when upating meal details in the database..");
		}

		return mealRepository.save(meal);
	}

	public Meal fetchByMeal(int id) throws ResourceNotFoundException {
		Meal meal = mealRepository.findById(id).orElse(null);

		if (meal == null) {
			throw new ResourceNotFoundException(id + " is not found in the meal entity..");
		}

		return meal;
	}

	public List<Meal> findAllMeals() throws ResourceNotFoundException {
		List<Meal> meals = new ArrayList<>();
		meals = mealRepository.findAll();
		if (meals.isEmpty()) {
			logger.error("Meal details are not inside the method...");
			throw new ResourceNotFoundException("Meal details does not exist");
		}
		return meals;
	}
}
