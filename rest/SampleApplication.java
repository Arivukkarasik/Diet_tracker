package com.demo.rest;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.dao.FoodCustomized;
import com.demo.dao.FoodMealCustomized;
import com.demo.dao.IFoodRepository;
import com.demo.dto.CusLoginDTO;
import com.demo.dto.CustomerDTO;
import com.demo.dto.EmployeeDTO;
import com.demo.dto.LoginDTO;
import com.demo.entity.Food;
import com.demo.entity.Meal;
import com.demo.exception.InternetServerException;
import com.demo.exception.ResourceNotFoundException;
import com.demo.response.ResponseObject;
import com.demo.service.CusLoginMessage;
import com.demo.service.CustomerService;
import com.demo.service.EmployeeService;
import com.demo.service.FoodDetailsService;
import com.demo.service.LoginMesage;

@RestController
//@CrossOrigin("http://localhost:3000")
@CrossOrigin("*")
@RequestMapping("/Food")
public class SampleApplication {

	@Autowired
	FoodDetailsService service;
	
	@Autowired
	IFoodRepository foodRepository;

	 @Autowired
	    private EmployeeService employeeService;
	 
	 @Autowired
	 private CustomerService customerService;
	
	 
	 private static final Logger logger = Logger.getLogger(SampleApplication.class);

	@RequestMapping("/sayHello")
	public String sayHello() {
		return "Say Hello";
	}

	// Parameter passing method
	@RequestMapping("/sayHelloUser")
	public String sayHelloUser(@RequestParam(value = "name", defaultValue = "arivu") String name,
			@RequestParam(value = "phone", required = false) String phone) {
		return "Say Hello to  " + name + " Phone " + phone;
	}

	@RequestMapping("/sayHelloAll/{empid}/{rollid}")
	public String sayHelloAll(@PathVariable("empid") int id, @PathVariable("rollid") int rollid) {
		return "Say Hello to Employee----> " + id + " Roll Id---> " + rollid;
	}

	@RequestMapping("/GreetingUser")
	public GreetingMessage greetingUser() {
		GreetingMessage msg = new GreetingMessage();
		msg.setGreeting("***Say Hello***");
		msg.setName("Thalapathy");
		return msg;
	}

	@RequestMapping("/GreetingUserName")
	public GreetingMessage greetingUser(@RequestParam(value = "name", defaultValue = "arivu") String name,
			@RequestParam(value = "msg") String message) {
		GreetingMessage msg = new GreetingMessage();
		msg.setGreeting(message);
		msg.setName(name);
		return msg;
	}

	@RequestMapping("/GreetingVOUsersName")
	public GreetingMessage greetingUser(GreetingMessage msg) {
		msg.setName(msg.getName().toUpperCase());
		msg.setGreeting(msg.getGreeting().toUpperCase());
		return msg;
	}

	@RequestMapping("/searchUsers")
	public List<Users> searchUsers(String searchString) {
		System.out.println(searchString);
		List<Users> list = new ArrayList<Users>();

		Users user = new Users();
		user.setName("ammu");
		user.setAge(21);

		Users user1 = new Users();
		user1.setName("kayal");
		user1.setAge(20);

		list.add(user);
		list.add(user1);
		return list;
	}

	@RequestMapping(value = "/searchUserMap")
	public Map<String, Users> searchUsersMap(String searchString) {
		Map<String, Users> map = new HashMap<String, Users>();
		Users user = new Users();
		user.setAge(21);
		user.setName("sai");
		Users user1 = new Users();
		user1.setAge(22);
		user1.setName("suvetha");

		map.put(user.getName(), user);
		map.put(user1.getName(), user1);
		return map;
	}

	@PostMapping("/searchUsersByPost")
	public List<Users> searchUsersByPost(@RequestBody String searchString) {
		System.out.println("Post Request Send----->" + searchString);
		List<Users> list = new ArrayList<Users>();

		Users user = new Users();
		user.setAge(21);
		user.setName("kayal");

		Users user1 = new Users();
		user1.setAge(22);
		user1.setName("arivu");

		list.add(user);
		list.add(user1);
		return list;
	}

	@RequestMapping(value = "/createGreeting", method = RequestMethod.POST)
	public GreetingMessage createGreeting(@RequestBody GreetingMessage msg) {
		System.out.println("Message: " + msg.getGreeting());
		System.out.println("Name: " + msg.getName());
		msg.setGreeting("Happy New Year!!!");
		return msg;
	}

	@PostMapping("/addFood")
	public ResponseObject addFood(@RequestBody Food food) throws InternetServerException {
		ResponseObject responseObject = new ResponseObject();
		responseObject = service.addFood(food);
		if (responseObject.getSuccessMessage() != null) {
			System.out.println(responseObject.getSuccessMessage());
		} else if (responseObject.getSuccessMessage() == null) {
			System.out.println(responseObject.getFailureMessage());
		}
		return responseObject;
	}

	@PostMapping("/updateFood")
	public ResponseObject updateFood(@RequestBody Food food) {
//	@RequestMapping (value="/fetchById", method =RequestMethod.POST)
//	public ResponseObject updateFood(@RequestParam int foodId) throws InternetServerException {
		ResponseObject responseObject = new ResponseObject();
		responseObject = service.updateFood(food);
		if (responseObject.getSuccessMessage() != null) {
			System.out.println(responseObject.getSuccessMessage());
		} else if (responseObject.getSuccessMessage() == null) {
			System.out.println(responseObject.getFailureMessage());
		}
		return responseObject;

	}
	
//	@PutMapping("/update/{id}")
//	Food updateFood (@RequestBody Food newFood, @PathVariable Integer id) {
//		return foodRepository.findById(id)
//				.map(food -> {
//					food.setName(newFood.getName());
//					food.setSize(newFood.getSize());
//					food.setCalories(newFood.getCalories());
//					food.setCarbs(newFood.getCarbs());
//					food.setProteins(newFood.getProteins());
//					food.setFat(newFood.getFat());
//					return foodRepository.save(food);
//				}).orElseThrow(()->new ResourceNotFoundException(id));
//	}
	

//	@RequestMapping(value = "/findByCustomerName", method = RequestMethod.GET)
//	public ResponseObject findByCustomerNameCustomized(String customerName) {
//		logger.info("Find By Customer Name");
//		ResponseObject response = customerService.findByCustomerNameCustomized(customerName);
//		if (response.getSuccessMessage() != null) {
//			System.out.println(response.getSuccessMessage());
//			System.out.println(response.getCustomized());
//		} else if (response.getSuccessMessage() == null) {
//			System.out.println(response.getFailureMessage());
//		}
//
//		return response;
//
//	}

	
	@RequestMapping (value="/fetchById", method =RequestMethod.GET)
	public ResponseObject fetchById(@RequestParam int foodId) {
//	@GetMapping("/fetchById/{id}")
//public ResponseObject fetchById(@PathVariable int id) {
		ResponseObject responseObject = new ResponseObject();
		responseObject = service.findById(foodId);
		if (responseObject.getFoodDtoList() != null) {
			System.out.println(responseObject.getSuccessMessage());
			System.out.println(responseObject.getFoodDtoList());
		} else if (responseObject.getFoodDtoList() == null) {
			System.out.println(responseObject.getFailureMessage());
		}
		return responseObject;
	}

	@GetMapping("/fetchAllFoods")
	public ResponseObject fetchAllFoods() {
		ResponseObject responseObject = new ResponseObject();
		responseObject = service.findAllFoods();
		if (responseObject.getFoodDtoList() != null) {
			System.out.println(responseObject.getSuccessMessage());
			System.out.println(responseObject.getFoodDtoList());
		} else if (responseObject.getFoodDtoList() == null) {
			System.out.println(responseObject.getFailureMessage());
		}
		return responseObject;
	}

	@PostMapping("/addMeal")
	public ResponseObject addMeal(@RequestBody Meal meal) throws InternetServerException {
		ResponseObject responseObject = new ResponseObject();
		responseObject = service.addMeal(meal);
		if (responseObject.getSuccessMessage() != null) {
			System.out.println(responseObject.getSuccessMessage());
		} else if (responseObject.getFailureMessage() == null) {
			System.out.println(responseObject.getFailureMessage());
		}
		return responseObject;

	}

	@PutMapping("/updateMeal")
	public ResponseObject updateMeal(@RequestBody Meal meal) throws InternetServerException {
		ResponseObject responseObject = new ResponseObject();
		responseObject = service.updateMeal(meal);
		if (responseObject.getSuccessMessage() != null) {
			System.out.println(responseObject.getSuccessMessage());
		} else if (responseObject.getSuccessMessage() == null) {
			System.out.println(responseObject.getFailureMessage());
		}
		return responseObject;

	}

		@GetMapping("/fetchByIdMeal/{id}")
	public ResponseObject fetchByIdMeal(@PathVariable int id) {
		ResponseObject responseObject = new ResponseObject();
		responseObject = service.findByIdMeal(id);
		if (responseObject.getMealList() != null) {
			System.out.println(responseObject.getSuccessMessage());
			System.out.println(responseObject.getMealList());
		} else if (responseObject.getMealList() == null) {
			System.out.println(responseObject.getFailureMessage());
		}
		return responseObject;
	}

	@GetMapping("/fetchAllMeals")
	public ResponseObject fetchAllMeals() {
		ResponseObject responseObject = new ResponseObject();
		responseObject = service.findAllMeals();
		if (responseObject.getMealDtoList() != null) {
			System.out.println(responseObject.getSuccessMessage());
			System.out.println(responseObject.getMealDtoList());
		} else if (responseObject.getMealDtoList() == null) {
			System.out.println(responseObject.getFailureMessage());
		}
		return responseObject;
	}


	@RequestMapping (value="/findFoodByIdGreater", method =RequestMethod.GET)
	public ResponseObject findFoodByIdGreater(@RequestParam int foodId) {
//	@GetMapping("/findFoodByIdGreater/{id}")
//	public ResponseObject findFoodByIdGreater(@PathVariable int id) {
		ResponseObject responseObject = new ResponseObject();
		responseObject = service.findFoodByIdGreater(foodId);
		if (responseObject.getFoodList() != null) {
			System.out.println(responseObject.getSuccessMessage());
			System.out.println(responseObject.getFoodList());
		} else if (responseObject.getFoodList() == null) {
			System.out.println(responseObject.getFailureMessage());
		}
		return responseObject;
	}

	@RequestMapping (value="/findFoodByName", method =RequestMethod.GET)
	public ResponseObject findFoodByName(@RequestParam String name) {
//	@GetMapping("/findFoodByName/{name}")
//	public ResponseObject findFoodByName(@PathVariable String name) {
		ResponseObject responseObject = new ResponseObject();
		responseObject = service.findByFoodName(name);
		if (responseObject.getFoodList() != null) {
			System.out.println(responseObject.getSuccessMessage());
			System.out.println(responseObject.getFoodList());
		} else if (responseObject.getFoodList() == null) {
			System.out.println(responseObject.getFailureMessage());
		}
		return responseObject;
	}

//	@RequestMapping(value = "/findByFoodNameCustomized", method = RequestMethod.GET)
//	public List<FoodCustomized> findByFoodNameCustomized( @RequestParam String name) {
//		return service.findByFoodNameCustomized(name);
//	}
	
	@RequestMapping(value = "/findByFoodNameCustomized", method = RequestMethod.GET)
	public ResponseObject findByFoodNameCustomized(String name) {
		logger.info("Find By Food Name");
		ResponseObject response = service.findByFoodNameCustomized(name);
		if (response.getSuccessMessage() != null) {
			System.out.println(response.getSuccessMessage());
			//System.out.println(response.getCustomizedList());
		} else if (response.getSuccessMessage() == null) {
			System.out.println(response.getFailureMessage());
		}

		return response;

	}
	@GetMapping("/findAllOrderByName")
	public ResponseObject findAllOrderByName() {
		ResponseObject responseObject = new ResponseObject();
		responseObject = service.findAllOrderByName();
		if (responseObject.getFoodList() != null) {
			System.out.println(responseObject.getSuccessMessage());
			System.out.println(responseObject.getCustomizedList());
		} else if (responseObject.getFoodList() == null) {
			System.out.println(responseObject.getFailureMessage());
		}
		return responseObject;
	}

	// INNER JOIN
	@GetMapping("/findFoodWithMeals")
	public ResponseObject findFoodWithMeals() {
		ResponseObject responseObject = new ResponseObject();
		responseObject = service.findFoodWithMeals();
		if (responseObject.getFoodList() != null) {
			System.out.println(responseObject.getSuccessMessage());
			System.out.println(responseObject.getFoodList());
		} else if (responseObject.getFoodList() == null) {
			System.out.println(responseObject.getFailureMessage());
		}
		return responseObject;
	}

	@GetMapping("/findFoodWithMealsLeft")
	public ResponseObject findFoodWithMealsLeft() {
		ResponseObject responseObject = new ResponseObject();
		responseObject = service.findFoodWithMealsLeft();
		if (responseObject.getFoodList() != null) {
			System.out.println(responseObject.getSuccessMessage());
			System.out.println(responseObject.getFoodList());
		} else if (responseObject.getFoodList() == null) {
			System.out.println(responseObject.getFailureMessage());
		}
		return responseObject;
	}

	@GetMapping("/findFoodWithMealsRight")
	public ResponseObject findFoodWithMealsRight() {
		ResponseObject responseObject = new ResponseObject();
		responseObject = service.findFoodWithMealsRight();
		if (responseObject.getFoodList() != null) {
			System.out.println(responseObject.getSuccessMessage());
			System.out.println(responseObject.getFoodList());
		} else if (responseObject.getFoodList() == null) {
			System.out.println(responseObject.getFailureMessage());
		}
		return responseObject;

	}

	@GetMapping("/findByFoodMealCustomized")
	public List<FoodMealCustomized> findByFoodMealCustomized() {
		return service.findByFoodMealCustomized();
	}

	// GROUP BY QUERY
	// Error 500-Internal Server Error
	@GetMapping("/getAverageSizeByName")
	public ResponseObject getAverageSizeByName() {
		ResponseObject responseObject = new ResponseObject();
		responseObject = service.getAverageSizeByName();
		if (responseObject.getFoodList() != null) {
			System.out.println(responseObject.getSuccessMessage());
			System.out.println(responseObject.getFoodList());
		} else if (responseObject.getFoodList() == null) {
			System.out.println(responseObject.getFailureMessage());
		}
		return responseObject;
	}
	// GROUP BY QUERY
//	@RequestMapping(value = "/getAverageSizeByName", method = RequestMethod.GET)
//	public List<Object[]> getAverageSizeByName() {
//		return service.getAverageSizeByName();
//	}

	// HAVING CLAUSE
	// Error 500-Internal Server Error
	@GetMapping("/getAverageCaloriesByName")
	public ResponseObject getAverageCaloriesByName() {
		ResponseObject responseObject = new ResponseObject();
		responseObject = service.getAverageCaloriesByName();
		if (responseObject.getFoodList() != null) {
			System.out.println(responseObject.getSuccessMessage());
			System.out.println(responseObject.getFoodList());
		} else if (responseObject.getFoodList() == null) {
			System.out.println(responseObject.getFailureMessage());
		}
		return responseObject;
	}

	// AGGREGATE FUNCTION
	@GetMapping("/findAverageProteins")
	public ResponseObject findAverageProteins() {
		ResponseObject responseObject = new ResponseObject();
		responseObject = service.findAverageProteins();
		if (responseObject.getSuccessMessage() != null) {
			System.out.println(responseObject.getSuccessMessage());
		} else if (responseObject.getSuccessMessage() == null) {
			System.out.println(responseObject.getFailureMessage());
		}
		return responseObject;
	}

	@GetMapping("/findMaxSize")
	public ResponseObject findMaxSize() {
		ResponseObject responseObject = new ResponseObject();
		responseObject = service.findMaxSize();
		if (responseObject.getSuccessMessage() != null) {
			System.out.println(responseObject.getSuccessMessage());
		} else if (responseObject.getSuccessMessage() == null) {
			System.out.println(responseObject.getFailureMessage());
		}
		return responseObject;
	}

	@GetMapping("/findMinFat")
	public ResponseObject findMinFat() {
		ResponseObject responseObject = new ResponseObject();
		responseObject = service.findMinFat();
		if (responseObject.getFoodList() != null) {
			System.out.println(responseObject.getSuccessMessage());
		} else if (responseObject.getFoodList() == null) {
			System.out.println(responseObject.getFailureMessage());
		}
		return responseObject;
	}

	@GetMapping("/findCountFood")
	public ResponseObject findCountFood() {
		ResponseObject responseObject = new ResponseObject();
		responseObject = service.findCountFood();
		if (responseObject.getSuccessMessage() != null) {
			System.out.println(responseObject.getSuccessMessage());
		} else if (responseObject.getSuccessMessage() == null) {
			System.out.println(responseObject.getFailureMessage());
		}
		return responseObject;
	}
//	@PutMapping("/food/{id}")
//	Food updateFood1(@RequestBody Food newFood, @PathVariable Integer id) {
//		return foodRepository.findById(id)
//				.map(food -> {
//	
//					food.setFoodId(newFood.getFoodId());
//					food.setName(newFood.getName());
//					food.setSize(newFood.getSize());
//					food.setCalories(newFood.getCalories());
//					food.setCarbs(newFood.getCarbs());
//					food.setProteins(newFood.getProteins());
//					food.setFat(newFood.getFat());
//					return foodRepository.save(food);
//				}).orElseThrow(() -> new ResourceNotFoundException(id) );
//	}
	
	@PutMapping("/food")
	Food updateFood1(@RequestBody Food newFood, @PathVariable Integer id) {
		return foodRepository.findById(id)
				.map(food -> {
	
					food.setFoodId(newFood.getFoodId());
					food.setName(newFood.getName());
					food.setSize(newFood.getSize());
					food.setCalories(newFood.getCalories());
					food.setCarbs(newFood.getCarbs());
					food.setProteins(newFood.getProteins());
					food.setFat(newFood.getFat());
					return foodRepository.save(food);
				}).orElseThrow(() -> new ResourceNotFoundException(id) );
	}
	
	  @DeleteMapping("/food/{id}")
	    String deleteFood(@PathVariable Integer id){
	        if(!foodRepository.existsById(id)){
	            throw new ResourceNotFoundException(id);
	        }
	        foodRepository.deleteById(id);
	        return  "Food with id "+id+" has been deleted success.";
	    }
	  @GetMapping("/food/{id}")
	    Food getFoodById(@PathVariable Integer id) {
	        return foodRepository.findById(id)
	                .orElseThrow(() -> new ResourceNotFoundException(id));
	    }
	  
	  @PostMapping(path="api/v1/employee/save")
	    public String saveEmployee(@RequestBody EmployeeDTO employeeDTO)
	    {
	        String id = employeeService.addEmployee(employeeDTO);
	        return id;
	    }
	    @PostMapping(path = "api/v1/employee/login")
	    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO)
	    {
	        LoginMesage loginMesage = employeeService.loginEmployee(loginDTO);
	        return ResponseEntity.ok(loginMesage);
	    }
	    @PostMapping(path="api/v1/customer/save")
	    public String saveCustomer(@RequestBody CustomerDTO customerDTO)
	    {
	        String id = customerService.addCustomer(customerDTO);
	        return id;
	    }
	    @PostMapping(path = "api/v1/customer/login")
	    public ResponseEntity<?> loginCustomer(@RequestBody CusLoginDTO cusLoginDTO)
	    {
	        CusLoginMessage cusLoginMesage = customerService.loginCustomer(cusLoginDTO);
	        return ResponseEntity.ok(cusLoginMesage);
	    }

}