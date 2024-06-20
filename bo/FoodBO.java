package com.demo.bo;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.demo.dao.FoodCustomized;
import com.demo.dao.FoodMealCustomized;
import com.demo.dao.IFoodRepository;
import com.demo.entity.Food;
import com.demo.exception.BadRequestException;
import com.demo.exception.InternetServerException;
import com.demo.exception.ResourceNotFoundException;

@Component
public class FoodBO {

	@Autowired
	IFoodRepository foodRepository;

	private static final Logger logger = Logger.getLogger(FoodBO.class);

	public Food addFood(Food food) throws InternetServerException, BadRequestException, ResourceNotFoundException {
		if (food.getFat() >= 9.9) {

			throw new InternetServerException("Food fat is too heavy so it is not healthy food.");
		} else if (food.getName().isBlank()) {
			throw new BadRequestException("Food name cannot be empty.");
		} else if (food.getName().matches(".*\\d.*")) {
			throw new ResourceNotFoundException("Food name is not string type please check this field.");
		}

		logger.info("Food details added successfully...");
		return foodRepository.save(food);

	}

	public Food updateFood(Food food) throws InternetServerException {
		if (foodRepository.save(food) == null) {
			throw new InternetServerException("Error when updating food entity!!!");
		}
		return foodRepository.save(food);
	}

	public Food findByFood(int foodId) throws ResourceNotFoundException {
		Food food = foodRepository.findById(foodId).orElse(null);
		if (food == null) {
			throw new ResourceNotFoundException(foodId + " is not found in the food entity..");
		}
		return food;
	}

	public List<Food> findAllFoods() throws ResourceNotFoundException {
		List<Food> foods = new ArrayList<>();
		foods = foodRepository.findAll();
		if (foods.isEmpty()) {
			throw new ResourceNotFoundException("No Food details exist in the database...");
		}
		return foods;
	}

	// Custom Query..
	public List<Food> findFoodByIdGreater(int id) throws ResourceNotFoundException {
		if (foodRepository.fetchFoodByIdGreater(id).isEmpty()) {
			throw new ResourceNotFoundException("Entity does not exist " + id + " greater than values");
		}
		return foodRepository.fetchFoodByIdGreater(id);
	}

	public List<Food> findByFoodName(String name) throws ResourceNotFoundException {
		if (foodRepository.findByFoodName(name).isEmpty()) {
			throw new ResourceNotFoundException("Food details does not exist name:" + name + " in the entity");
		}
		return foodRepository.findByFoodName(name);
	}

	public List<FoodCustomized> findByFoodNameCutomized(String name) {
		if (foodRepository.findByFoodNameCustomized(name).isEmpty()) {
			logger.error("Food name is doesn't exist in food details entity..");
			throw new ResourceNotFoundException("Food name is doesn't exist in entity...");
		}
		logger.info("Food details fetched by food name");
		return foodRepository.findByFoodNameCustomized(name);
	}

	public List<Food> findAllOrderByName() throws ResourceNotFoundException {
		if (foodRepository.findAllOrderByNameDescending().isEmpty()) {
			throw new ResourceNotFoundException("Descending order not worked for fetching name by order..");
		}
		return foodRepository.findAllOrderByNameDescending();
	}

	// INNER JOIN
	public List<Food> findFoodWithMeals() throws ResourceNotFoundException {
		if (foodRepository.findFoodWithMeals().isEmpty()) {
			throw new ResourceNotFoundException("Does Not Fetched Food With Meals Using INNER JOIN");
		}
		logger.info("Food entity perform INNER JOIN to Meal entity...");
		return foodRepository.findFoodWithMeals();
	}

	public List<Food> findFoodWithMealsLeft() throws ResourceNotFoundException {
		if (foodRepository.findFoodWithMealsLeft().isEmpty()) {
			throw new ResourceNotFoundException("Food entity does not perform LEFT OUTER JOIN to Meal entity.");
		}
		return foodRepository.findFoodWithMealsLeft();
	}

	public List<Food> findFoodWithMealsRight() throws ResourceNotFoundException {
		if (foodRepository.findFoodWithMealsRight().isEmpty()) {
			throw new ResourceNotFoundException("Food entity does not perform RIGHT OUTER JOIN to Meal entity.");
		}
		return foodRepository.findFoodWithMealsRight();
	}

	public List<FoodMealCustomized> findByFoodMealCustomized() throws ResourceNotFoundException {
		if (foodRepository.findByFoodMealCustomized().isEmpty()) {
			logger.error("Food and Meal does not retrieve any records");
			throw new ResourceNotFoundException("Food and Meal does not retrieve any records");
		}
		logger.info("Food and Meal customized successfully...");
		return foodRepository.findByFoodMealCustomized();
	}

	public List<Food> getAverageSizeByName() throws ResourceNotFoundException {
		if (foodRepository.getAverageSizeByName().isEmpty()) {
			throw new ResourceNotFoundException("Does Not Fetched Average Serving Size Food Name in Food Entity");
		}
		return foodRepository.getAverageSizeByName();
	}

	public List<Food> getAverageCaloriesByName() throws ResourceNotFoundException {
		if (foodRepository.getAverageCaloriesByName().isEmpty()) {
			throw new ResourceNotFoundException(
					"Could Not Found Average Calories Using HAVING CLAUSE In Food Entity..");
		}
		return foodRepository.getAverageCaloriesByName();
	}

	public Double findAverageProteins() throws ResourceNotFoundException {
		if (foodRepository.findAverageProteins() == null) {
			throw new ResourceNotFoundException("Does Not Fetched Average Proteins Using AGGREGATE FUNCTION");
		}
		return foodRepository.findAverageProteins();
	}

	public String findMaxSize() throws ResourceNotFoundException {
		if (foodRepository.findMaxSize() == null) {
			throw new ResourceNotFoundException("Could not calculate maximum serving size in food");
		}
		return foodRepository.findMaxSize();
	}

	public Double findMinFat() throws ResourceNotFoundException {
		if (foodRepository.findMinFat() == null) {
			throw new ResourceNotFoundException("Does Not Fetched Minimum Fat Using AGGREGATE FUNCTION");
		}
		return foodRepository.findMinFat();
	}

	public Double findCountFood() throws ResourceNotFoundException {
		if (foodRepository.findCountFood() == null) {
			throw new ResourceNotFoundException("Does Not Fetched Total Number Of Food Items Using AGGREGATE FUNCTION");
		}
		return foodRepository.findCountFood();
	}
}
