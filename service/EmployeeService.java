package com.demo.service;

import org.springframework.stereotype.Component;

import com.demo.dto.EmployeeDTO;
import com.demo.dto.LoginDTO;

//@Component
public interface EmployeeService {

	 String addEmployee(EmployeeDTO employeeDTO);
	    LoginMesage loginEmployee(LoginDTO loginDTO);
	
}
