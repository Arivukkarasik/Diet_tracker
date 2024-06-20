package com.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.demo.bo.FoodBO;
import com.demo.bo.MealBO;
import com.demo.dao.FoodCustomized;
import com.demo.dao.FoodMealCustomized;
import com.demo.dto.FoodDTO;
import com.demo.dto.MealDTO;
import com.demo.entity.Food;
import com.demo.entity.Meal;
import com.demo.exception.BadRequestException;
import com.demo.exception.InternetServerException;
import com.demo.exception.ResourceNotFoundException;
import com.demo.response.ResponseObject;

@Service
public class FoodDetailsService {

	@Autowired
	FoodBO foodBo;

	@Autowired
	MealBO mealBo;

	private static final Logger logger = Logger.getLogger(FoodDetailsService.class);

	public ResponseObject addFood(Food food) {
		ResponseObject responseObject = new ResponseObject();

		FoodDTO foodDto = new FoodDTO();

		try {
			logger.info("Add food method getting intialized..");
			Food addFood = foodBo.addFood(food);

			if (foodBo.addFood(food) != null) {
				foodDto.setFoodId(addFood.getFoodId());
				foodDto.setName(addFood.getName());
				foodDto.setSize(addFood.getSize());
				foodDto.setCalories(addFood.getCalories());
				foodDto.setCarbs(addFood.getCarbs());
				foodDto.setProteins(addFood.getProteins());
				foodDto.setFat(addFood.getFat());
				responseObject.setFoodDto(foodDto);

				responseObject.setSuccessMessage("Food details adding successfully..");
				logger.info(food.getFoodId() + " Recorded added..");
			} else {
				responseObject.setFailureMessage("Failed to add food to the database..");
				logger.error("Failed to add a new food. Please contact the admin group..");
			}
		}

		catch (InternetServerException e) {
			responseObject.setFailureMessage("Food fat is too heavy so it is not healthy food.");
			logger.debug("Food fat is too heavy so it is not nutrient food..", e);
		} catch (BadRequestException e) {
			responseObject.setFailureMessage("Food name is empty so fill the food name in proper case..");
			logger.error("Food name is empty so fill the food name in proper case..", e);
		} catch (ResourceNotFoundException e) {
			responseObject.setFailureMessage("Food name is not string type please check this field.");
			logger.error("Food name is not string type please check this field.", e);
		}
		return responseObject;
	}

	public ResponseObject findById(int id) {
		ResponseObject responseObject = new ResponseObject();
		Food fetchFood = new Food();
		FoodDTO foodDto = new FoodDTO();
		List<FoodDTO> foodDtoList = new ArrayList<>();
		try {
			logger.info("Find by id method started..");
			fetchFood = foodBo.findByFood(id);
			foodDto.setFoodId(fetchFood.getFoodId());
			foodDto.setName(fetchFood.getName());
			foodDto.setSize(fetchFood.getSize());
			foodDto.setCalories(fetchFood.getCalories());
			foodDto.setCarbs(fetchFood.getCarbs());
			foodDto.setProteins(fetchFood.getProteins());
			foodDto.setFat(fetchFood.getFat());
			foodDto.setCreatedAt(fetchFood.getCreatedAt());
			foodDto.setUpdatedAt(fetchFood.getUpdateAt());
			foodDtoList.add(foodDto);
			responseObject.setFoodDtoList(foodDtoList);
			responseObject.setSuccessMessage("Food id " + id + " is fetched successfully..");
			logger.info(id + " is fetched successfully..");
		} catch (ResourceNotFoundException e) {
			responseObject.setFailureMessage("Error when occuring fetching by id: " + id + " is not found");
			logger.error(e);
		}
		return responseObject;
	}

	public ResponseObject findAllFoods() {
		ResponseObject responseObject = new ResponseObject();
		List<Food> foodList = new ArrayList<>();
		List<FoodDTO> foodDtoList = new ArrayList<>();
		try {
			logger.info("Find All Method Started..");
			foodList = foodBo.findAllFoods();
			for (Food fetchFood : foodList) {
				FoodDTO foodDto = new FoodDTO();
				foodDto.setFoodId(fetchFood.getFoodId());
				foodDto.setName(fetchFood.getName());
				foodDto.setSize(fetchFood.getSize());
				foodDto.setCalories(fetchFood.getCalories());
				foodDto.setCarbs(fetchFood.getCarbs());
				foodDto.setProteins(fetchFood.getProteins());
				foodDto.setFat(fetchFood.getFat());
				foodDto.setCreatedAt(fetchFood.getCreatedAt());
				foodDto.setUpdatedAt(fetchFood.getUpdateAt());
				foodDtoList.add(foodDto);

			}

			responseObject.setFoodDtoList(foodDtoList);
			responseObject.setSuccessMessage("Food Items Fetched Successfully..");
			logger.info("Food Items are Successfully Fetched...");
		} catch (Exception e) {
			responseObject.setFailureMessage("Error when occuring fetched by food items..");
			logger.error("Error when occuring fetched by food items..", e);
		}
		return responseObject;
	}

	public ResponseObject updateFood(Food food) {
		ResponseObject responseObject = new ResponseObject();
		FoodDTO foodDto = new FoodDTO();
		try {
			logger.info("Update Food method getting intialized...");
			Food updateFood = foodBo.updateFood(food);
			if (updateFood != null) {
				foodDto.setFoodId(updateFood.getFoodId());
				foodDto.setName(updateFood.getName());
				foodDto.setSize(updateFood.getSize());
				foodDto.setCalories(updateFood.getCalories());
				foodDto.setCarbs(updateFood.getCarbs());
				foodDto.setProteins(updateFood.getProteins());
				foodDto.setFat(updateFood.getFat());
				foodDto.setCreatedAt(updateFood.getCreatedAt());
				foodDto.setUpdatedAt(updateFood.getUpdateAt());
				responseObject.setFoodDto(foodDto);
				responseObject.setSuccessMessage("Food Updated Successfully...");
				logger.info("Food Id: " + food.getFoodId() + " is updated successfully!!!");
			} else {
				responseObject.setFailureMessage("Failed to updated food details..");
				logger.error("Failed to update food items in the database..");
			}
		} catch (Exception e) {
			responseObject.setFailureMessage("Food detail updating process failed..");
			logger.error("Food detail updating process failed", e);
		}
		return responseObject;
	}

	public ResponseObject addMeal(Meal meal) {
		ResponseObject responseObject = new ResponseObject();
		Meal meal1 = new Meal();
		try {
			Food response = foodBo.findByFood(meal.getFood().getFoodId());
			logger.info("Add meal method displayed..");
			Meal addMeal = mealBo.addMeal(meal);
			if (mealBo.addMeal(meal) != null) {
				meal1.setMealId(addMeal.getMealId());
				meal1.setName(addMeal.getName());
				meal1.setQuantity(addMeal.getQuantity());
				meal1.setDate(addMeal.getDate());
				meal1.setTime(addMeal.getTime());
				meal1.setFood(response);
				responseObject.setSuccessMessage("Meal details adding successfullu..");
				logger.info(meal.getMealId() + " Record added..");
			}

		} catch (BadRequestException e) {
			responseObject.setFailureMessage("Meal Name is empty so fill the meal name in proper case..");
			logger.error("Meal Name is empty so fill the meal name in proper case..", e);

		} catch (InternetServerException e) {
			responseObject.setFailureMessage("Meal name is not string type please check this field.");
			logger.debug("Meal name is not string type please check this field.", e);
		}

		return responseObject;
	}

	public ResponseObject findByIdMeal(int id) {
		ResponseObject responseObject = new ResponseObject();
		Meal fetchMeal = new Meal();
		List<Meal> mealList = new ArrayList<>();
		Meal meal = new Meal();
		try {
			logger.info("Find By Id Method Started...");
			fetchMeal = mealBo.fetchByMeal(id);
			meal.setMealId(fetchMeal.getMealId());
			meal.setName(fetchMeal.getName());
			meal.setQuantity(fetchMeal.getQuantity());
			meal.setDate(fetchMeal.getDate());
			meal.setTime(fetchMeal.getTime());
			meal.setCreatedAt(fetchMeal.getCreatedAt());
			meal.setUpdateAt(fetchMeal.getUpdateAt());
			mealList.add(meal);
			responseObject.setMealList(mealList);
			responseObject.setSuccessMessage("Meal id: " + id + " is fetched successfully..");
			logger.info(id + " is fetched successfully..");
		} catch (ResourceNotFoundException e) {
			responseObject.setFailureMessage(
					"Error when occuring fetching by id: " + id + " is not found in the database...");
			logger.error(e);
		}
		return responseObject;
	}

	public ResponseObject findAllMeals() {
		ResponseObject responseObject = new ResponseObject();
		List<Meal> mealList = new ArrayList<>();

		List<MealDTO> mealDtoList = new ArrayList<MealDTO>();
		try {
			logger.info("Find All Meal Method Started..");
			mealList = mealBo.findAllMeals();
			for (Meal fetchMeal : mealList) {
				MealDTO mealDto = new MealDTO();
				mealDto.setMealId(fetchMeal.getMealId());
				mealDto.setName(fetchMeal.getName());
				mealDto.setQuantity(fetchMeal.getQuantity());
				mealDto.setDate(fetchMeal.getDate());
				mealDto.setTime(fetchMeal.getTime());
				mealDto.setCreatedAt(fetchMeal.getCreatedAt());
				mealDto.setUpdateAt(fetchMeal.getUpdateAt());
				mealDtoList.add(mealDto);
			}

			responseObject.setMealDtoList(mealDtoList);
			responseObject.setSuccessMessage("Meal Items Fetched Successfully..");
		} catch (Exception e) {
			responseObject.setFailureMessage("Food Details Does Not Exist In The Database...");
			logger.error("Food Details Does Not Exist In The Database...", e);
		}
		return responseObject;
	}

	public ResponseObject updateMeal(Meal meal) {
		ResponseObject responseObject = new ResponseObject();
		Meal meal1 = new Meal();
		try {
			logger.info("Update Meal Method Getting Intialized...");
			Meal updateMeal = mealBo.updateMeal(meal);
			if (updateMeal != null) {
				meal1.setMealId(updateMeal.getMealId());
				meal1.setName(updateMeal.getName());
				meal1.setQuantity(updateMeal.getQuantity());
				meal1.setDate(updateMeal.getDate());
				meal1.setTime(updateMeal.getTime());
				meal1.setCreatedAt(updateMeal.getCreatedAt());
				meal1.setUpdateAt(updateMeal.getUpdateAt());
				responseObject.setMeal(meal1);
				responseObject.setSuccessMessage("Meal Items Updated Successfully!!!");
				logger.info("Meal Id: " + meal.getMealId() + " is updated successfully");
			} else {
				responseObject.setFailureMessage("Failed to update meal details in the database..");
				logger.error("Failed to update meal details in the database..");
			}
		} catch (Exception e) {
			responseObject.setFailureMessage("Meal detail updating process failed. Please call the admin");
			logger.error("Meal detail updating process failed. Please call the admin", e);
		}
		return responseObject;
	}
//	@Transactional(propagation = Propagation.REQUIRED)
//	public void transactionDemo(Food food, Meal meal) {
//		System.out.println("Food Add-----Before");
//		foodBo.addFood(food);
//
//		System.out.println("Food Add-----After");
//
//		System.out.println("Meals Add-----Before");
//		mealBo.addMeal(meal);
//
//		System.out.println("Meals Add----After");
//	}

	public ResponseObject findFoodByIdGreater(int id) {
		ResponseObject responseObject = new ResponseObject();
		List<Food> findFood = new ArrayList<Food>();
		try {
			logger.info("Find food by id greater than " + id);
			findFood = foodBo.findFoodByIdGreater(id);
			responseObject.setFoodList(findFood);
			responseObject.setSuccessMessage("Food details fetched by id:" + id + " greater than values");
		} catch (ResourceNotFoundException e) {
			logger.error("Food details does not exist id:" + id + " greater than values", e);
			responseObject.setFailureMessage("Food details does not exist id:" + id + " greater than values");
		}
		return responseObject;
	}

	public ResponseObject findByFoodName(String name) {
		ResponseObject responseObject = new ResponseObject();
		List<Food> findFoodName = new ArrayList<Food>();
		try {
			logger.info("Find food by name using LIKE OPERATER the occurance letter is:" + name);
			findFoodName = foodBo.findByFoodName(name);
			responseObject.setFoodList(findFoodName);
			responseObject.setSuccessMessage("Food details fetched by name:" + name + " using LIKE operator");
		} catch (ResourceNotFoundException e) {
			logger.error("Food details does not exist name:" + name + " in the entity", e);
			responseObject.setFailureMessage("Food details does not exist name:" + name + " in the entity");

		}
		return responseObject;
	}

//	public List<FoodCustomized> findByFoodNameCustomized(String name) {
//		return foodBo.findByFoodNameCutomized(name);
//	}

	public ResponseObject findByFoodNameCustomized(String name) {
		logger.info("CustomerName Customized is Triggered");
		ResponseObject responseObject = new ResponseObject();
		try {
			List<FoodCustomized> list = foodBo.findByFoodNameCutomized(name);
			if (list != null) {
				for (FoodCustomized customized : list) {
					customized.getName();
					customized.getSize();
					customized.getCalories();
					customized.getProteins();
					customized.getFat();
					}
			}
			logger.info(list);
			logger.info("Food name is customized successfully");
			responseObject.setSuccessMessage("Food name is customized successfully");
			responseObject.setCustomizedList(list);
			
		} catch (InternetServerException e) {
			logger.error("Food Name is failure" + e);
			responseObject.setFailureMessage(e.getMessage());
		}
		return responseObject;
	}

//	public ResponseObject findByCustomerNameCustomized(final String customerame) {
//		logger.info("CustomerName Customized is Triggered");
//		ResponseObject responseObject = new ResponseObject();
//
//		try {
//			List<CustomerCustomized> list = customerBo.findByCustomerNameCustomized(customerame);
//
//			if (list != null) {
//				for (CustomerCustomized customized : list) {
//					customized.getState();
////					customized.getCustomerId();
//					customized.getCity();
//					customized.getCustomerName();
//					customized.getEmail();
//				}
//			}
//
//			logger.info(list);
//			logger.info("Customer name is Successfull");
//			responseObject.setSuccessMessage("Customer name is Successfull");
//			responseObject.setCustomized(list);
//
//		} catch (CustomerInternalServerException e) {
//			logger.error("Customer Name is failure" + e);
//			responseObject.setFailureMessage(e.getMessage());
//		}
//		return responseObject;
//	}

	public ResponseObject findAllOrderByName() {
		ResponseObject responseObject = new ResponseObject();
		List<Food> findOrderName = new ArrayList<>();
		try {
			logger.info("Find food name fetched by order");
			findOrderName = foodBo.findAllOrderByName();
			responseObject.setFoodList(findOrderName);
			responseObject.setSuccessMessage("Food Names Ordered by Descending Order Using Named Query");
		} catch (ResourceNotFoundException e) {
			logger.error("Descending order not worked for fetching name by order..", e);
			responseObject.setFailureMessage("Descending order not worked for fetching name by order..");
		}
		return responseObject;
	}

	// INNER JOIN
	public ResponseObject findFoodWithMeals() {
		ResponseObject responseObject = new ResponseObject();
		List<Food> findFoodWithMeals = new ArrayList<>();
		try {
			logger.info("Find Food With Meals..");
			findFoodWithMeals = foodBo.findFoodWithMeals();
			responseObject.setFoodList(findFoodWithMeals);
			responseObject.setSuccessMessage("To Fetched Food With Meals For Performing INNER JOIN");
		} catch (ResourceNotFoundException e) {
			logger.error("Does Not Fetched Food With Meals Using INNER JOIN", e);
			responseObject.setFailureMessage("Does Not Fetched Food With Meals Using INNER JOIN");
		}
		return responseObject;
	}

	public ResponseObject findFoodWithMealsLeft() {
		ResponseObject responseObject = new ResponseObject();
		List<Food> foodWithMealLeft = new ArrayList<>();
		try {
			logger.info("Find Food With Meals Using LEFT OUTER JOIN");
			foodWithMealLeft = foodBo.findFoodWithMealsLeft();
			responseObject.setFoodList(foodWithMealLeft);
			responseObject.setSuccessMessage("To Fetched Food With Meals For Performing LEFT OUTER JOIN");
		} catch (ResourceNotFoundException e) {
			logger.error("Does Not Fetched Food With Meals Using LEFT OUTER JOIN", e);
			responseObject.setFailureMessage("Food entity does not perform LEFT OUTER JOIN to Meal entity.");
		}
		return responseObject;
	}

	public ResponseObject findFoodWithMealsRight() {
		ResponseObject responseObject = new ResponseObject();
		List<Food> foodWithMealRight = new ArrayList<>();
		try {
			logger.info("Find Food With Meals Using RIGHT OUTER JOIN");
			foodWithMealRight = foodBo.findFoodWithMealsRight();
			responseObject.setFoodList(foodWithMealRight);
			responseObject.setSuccessMessage("To Fetched Food With Meals For Performing RIGHT OUTER JOIN");
		} catch (ResourceNotFoundException e) {
			logger.error("Does Not Fetched Food With Meals Using RIGHT OUTER JOIN", e);
			responseObject.setFailureMessage("Food entity does not perform RIGHT OUTER JOIN to Meal entity.");
		}
		return responseObject;
	}

	public List<FoodMealCustomized> findByFoodMealCustomized() {
		return foodBo.findByFoodMealCustomized();
	}

	public ResponseObject getAverageSizeByName() {
		ResponseObject responseObject = new ResponseObject();
		List<Food> findAvgSize = new ArrayList<>();
		try {
			logger.info("Find Average Size In Food Entity");
			findAvgSize = foodBo.getAverageSizeByName();
			// responseObject.setFoodList(findAvgSize);
			// responseObject.setSuccessMessage("To Fetched Average Serving Size Food
			// name");
		} catch (ResourceNotFoundException e) {
			logger.error("Does Not Fetched Average Serving Size Food Name ", e);
			// responseObject.setFailureMessage("Does Not Fetched Average Serving Size Food
			// Name in Food Entity");
		}
		return responseObject;
	}

	public ResponseObject getAverageCaloriesByName() {
		ResponseObject responseObject = new ResponseObject();
		List<Food> avgCalories = new ArrayList<>();
		try {
			logger.info("Find Average Calories By Food Name");
			avgCalories = foodBo.getAverageCaloriesByName();
			responseObject.setFoodList(avgCalories);
			responseObject.setSuccessMessage("To Fetched Calories By Food Name Using HAVING CLAUSE");
		} catch (ResourceNotFoundException e) {
			logger.error("Does Not Fetched Average Calories Using HAVING CLAUSE", e);
			responseObject.setFailureMessage("Could Not Found Average Calories Using HAVING CLAUSE In Food Entity..");
		}
		return responseObject;
	}

	public ResponseObject findAverageProteins() {
		ResponseObject responseObject = new ResponseObject();
		Double avgProteins;
		try {
			logger.info("Find Average Proteins In Food Entity..");
			avgProteins = foodBo.findAverageProteins();
			responseObject.setSuccessMessage(
					"To Fetched Average Proteins is " + avgProteins + " In Food Entity Using AGGREGATE FUNCTION..");
		} catch (ResourceNotFoundException e) {
			logger.error("Does Not Fetched Average Proteins Using AGGREGATE FUNCTION", e);
			responseObject.setFailureMessage("Does Not Fetched Average Proteins Using AGGREGATE FUNCTION");
		}
		return responseObject;

	}

	public ResponseObject findMaxSize() {
		ResponseObject responseObject = new ResponseObject();
		String findMaxSize;
		try {
			logger.info("Find Maximum Serving Size In Food Entity..");
			findMaxSize = foodBo.findMaxSize();
			responseObject.setSuccessMessage(
					"To Fetched Maximum Size is " + findMaxSize + " In Food Entity Using AGGREGATE FUNCTION..");
		} catch (Exception e) {
			logger.error("Does Not Fetched Maximum Size Using AGGREGATE FUNCTION", e);
			responseObject.setFailureMessage("Does Not Fetched Maximum Size Using AGGREGATE FUNCTION");
		}
		return responseObject;
	}

	public ResponseObject findMinFat() {
		ResponseObject responseObject = new ResponseObject();
		Double minFat;
		try {
			logger.info("Find Minimum Fat In Food Entity..");
			minFat = foodBo.findMinFat();
			responseObject.setSuccessMessage(
					"To Fetched Minimum Fat is " + minFat + " Food Entity Using AGGREGATE FUNCTION..");
		} catch (Exception e) {
			logger.error("Does Not Fetched Minimum Fat Using AGGREGATE FUNCTION", e);
			responseObject.setFailureMessage("Does Not Fetched Minimum Fat Using AGGREGATE FUNCTION");
		}
		return responseObject;
	}

	public ResponseObject findCountFood() {
		ResponseObject responseObject = new ResponseObject();
		Double countFood;
		try {
			logger.info("Find Total Number Of Food Items");
			countFood = foodBo.findCountFood();
			responseObject.setSuccessMessage(
					"To Fetched Total Number is " + countFood + " Food Items Using AGGREGATE FUNCTION..");
		} catch (Exception e) {
			logger.error("Does Not Fetched Total Number Of Food Items Using AGGREGATE FUNCTION", e);
			responseObject.setFailureMessage("Does Not Fetched Total Number Of Food Items Using AGGREGATE FUNCTION");
		}
		return responseObject;
	}
}
