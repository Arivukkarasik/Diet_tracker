package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.demo.entity.Food;

@Repository
public interface IFoodRepository extends JpaRepository<Food, Integer> {

	// Custom Query
	@Query(value = "select f from Food f where f.foodId> :foodId1")
	List<Food> fetchFoodByIdGreater(@Param("foodId1") int id);

	@Query(value = "select f from Food f where f.name LIKE %:name1%")
	List<Food> findByFoodName(@Param("name1") String name);

	// Fetches few columns from Food
//	@Query("select f.size as size,f.name as name from Food f where f.name=:name1")
//	List<FoodCustomized> findByFoodNameCustomized(@Param("name1") String name);
 
	@Query("select f.size as size,f.name as name, f.calories as calories, f.proteins as proteins, f.fat as fat "
			+ "from Food f where f.name LIKE %:name1%")
	List<FoodCustomized> findByFoodNameCustomized(@Param("name1") String name);

	// NamedQuery
	List<Food> findAllOrderByNameDescending();

	// Inner Join
	@Query("select f from Food f JOIN Meal m on f.foodId=m.food")
	List<Food> findFoodWithMeals();

	// Left Outer Join
	@Query("select f from Food f LEFT OUTER JOIN Meal m on f.foodId=m.food")
	List<Food> findFoodWithMealsLeft();

	// Right Outer Join
	@Query("select f from Food f RIGHT OUTER JOIN Meal m on f.foodId=m.food")
	List<Food> findFoodWithMealsRight();

	// Customized data by join
	@Query("select f.name as foodName, f.size as servingSize,m.name as mealName, m.time as mealTime from Food f JOIN Meal m on f.foodId=m.food")
	List<FoodMealCustomized> findByFoodMealCustomized();

	// GROUP BY QUERY
	@Query(value = "select f.name as name, AVG(f.size) as avgSize FROM  Food as f GROUP BY f.name")
	List<Food> getAverageSizeByName();

	// HAVING CLAUSE
	@Query(value = "select f.name as name, AVG(f.calories) as cal from Food as f group by f.name having avg(f.calories)>90")
	List<Food> getAverageCaloriesByName();

	// Aggregate function
	@Query("SELECT AVG(f.proteins) FROM Food f")
	Double findAverageProteins();

	@Query("SELECT MAX(f.size) FROM Food f")
	String findMaxSize();

	@Query("SELECT MIN(f.fat) FROM Food f")
	Double findMinFat();

	@Query("SELECT COUNT(f.foodId) FROM Food f")
	Double findCountFood();

}
