package com.example.main;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.apache.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.demo.dao.FoodCustomized;
import com.demo.dao.FoodMealCustomized;
import com.demo.entity.Food;
import com.demo.entity.Meal;
import com.demo.rest.SampleApplication;

import com.demo.service.FoodDetailsService;

import net.bytebuddy.build.ToStringPlugin.Exclude;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
@EnableJpaAuditing
@ComponentScan("com.demo")
@EntityScan(basePackages = { "com.demo.entity" })
@EnableJpaRepositories("com.demo.dao")
public class DietTracker1Application {

	// static Logger logger =
	// LoggerFactory.getLogger(DietTracker1Application.class);
	private static final Logger logger = Logger.getLogger(SampleApplication.class);

	public static void main(String[] args) {
		ApplicationContext ctx = SpringApplication.run(DietTracker1Application.class, args);
//		Exclude password_file_name;
		logger.info("Application Started....");
		//FoodDetailsService service = ctx.getBean(FoodDetailsService.class);
		// EmployeeImpl employeeService = ctx.getBean(EmployeeImpl.class);
		// task1..

//		Food food = new Food();
//		food.setName("Almonds");
//		food.setSize("25g");
//		food.setCalories(89.7);
//		food.setCarbs(90.3);
//		food.setProteins(89.2);
//		food.setFat(8.9);
		// service.addFood(food);

		// task2..
//		Meal meal = new Meal();
//		meal.setName("Apple Juice");
//		meal.setDate("2023-07-07");
//		meal.setQuantity(70.5);
//		meal.setTime("10AM");
//		Food food1 = new Food();
//		food1.setFoodId(1);
//
//		meal.setFood(food1);
		// service.addMeal(meal);

		// task3...
		// Creating two meals
//		Meal meal1 = new Meal();
//		meal1.setName("Sandwich");
//		meal1.setDate("2023-07-08");
//		meal1.setQuantity(100.5);
//		meal1.setTime("12AM");
//
//		Meal meal2 = new Meal();
//		meal2.setName("Aloe Vera Juice");
//		meal2.setDate("2023-07-09");
//		meal2.setQuantity(50.5);
//		meal2.setTime("7AM");

		// Creating One Food
//		Food food2 = new Food();
//		food2.setName("Pista");
//		food2.setSize("30g");
//		food2.setCalories(99.9);
//		food2.setCarbs(87.7);
//		food2.setProteins(67.9);
//		food2.setFat(7.8);

		// Associating Meals to Food Entity
//		meal1.setFood(food2);
//		meal2.setFood(food2);

		// Associating Food with Meal
//		List<Meal> meal3 = new ArrayList<Meal>();
//		meal3.add(meal1);
//		meal3.add(meal2);
//
//		food2.setMeal(meal3);
//
//		System.out.println("Adding Food Items!!!!!");
		// service.addFood(food2);

//		Meal meal4 = new Meal();
//		meal4.setName("Orange Juice");
//		meal4.setDate("2023-07-10");
//		meal4.setQuantity(85.6);
//		meal4.setTime("12.30AM");
//
//		Food food4 = new Food();
//		food4.setFoodId(1);
//		meal4.setFood(food4);
//
//		Food food5 = new Food();
//		food5.setName("Liver");
//		food5.setSize("50g");
//		food5.setCalories(100.6);
//		food5.setCarbs(150.9);
//		food5.setProteins(98.8);
//		food5.setFat(7.5);

		// service.transactionDemo(food5, meal4);

//		List<Food> list = service.findFoodById(3); 
//		System.out.println("Food Based on Id----> " + list);
//
//		List<Food> listNames = service.findByFoodName("e");
//		System.out.println("Food Based on Food Name-----> " + listNames);

//		List<FoodCustomized> foodCustomized = service.findByFoodNameCustomized("Pi");
//		for(FoodCustomized foodCustom : foodCustomized) {
//			System.out.println("Food Customized Data-----> " +foodCustom.getName()+" - "+foodCustom.getSize());
//		}

		// Named Query
//		System.out.println("Food Data Order By Name: "+service.findAllOrderByName());

		// Inner Join
//		List<Food> foodList = service.findFoodWithMeals();
//		System.out.println("Food with Meals Inner Joins: "+foodList);

		// Left Outer Join
//		List<Food> foodListLeft = service.findFoodWithMealsLeft();
//		System.out.println("Food with Meals Left Outer Join: "+foodListLeft);

//	List<Food> foodListRight = service.findFoodWithMealsRight();
//	System.out.println("Food with Meals Right Outer Join: "+foodListRight);
		// Customized Join query
//		List<FoodMealCustomized> foodMealList = service.findByFoodMealCustomized();
//		for (FoodMealCustomized foodMealCustom : foodMealList) {
//			System.out.println("Customized Joined Data By using Joins---> " + foodMealCustom.getFoodName() + " - "
//					+ foodMealCustom.getServingSize() + " - " + foodMealCustom.getMealName() + " - "
//					+ foodMealCustom.getMealTime());
//		}

		// GROUP BY query
//	List<String[]> foodList = service.getAverageSizeByName();
//	System.out.println("Averge Size group by food name: "+foodList);
//	
	}

}
