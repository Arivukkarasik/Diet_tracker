package com.demo.service;

import com.demo.dto.CusLoginDTO;
import com.demo.dto.CustomerDTO;
import com.demo.dto.EmployeeDTO;
import com.demo.dto.LoginDTO;

public interface CustomerService {

	String addCustomer(CustomerDTO customerDTO);
    CusLoginMessage loginCustomer(CusLoginDTO cusLoginDTO);
}
