package com.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.demo.dao.ICustomerRepository;
import com.demo.dto.CusLoginDTO;
import com.demo.dto.CustomerDTO;
import com.demo.entity.Customer;

@Service
public class CustomerIMPL implements CustomerService {

	@Autowired
	private ICustomerRepository customerRepo;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public String addCustomer(CustomerDTO customerDTO) {
		Customer customer = new Customer(customerDTO.getCustomerId(), customerDTO.getCustomerName(),
				customerDTO.getPhoneNumber(), customerDTO.getStateName(), customerDTO.getCountryName(),
				customerDTO.getPincode(), customerDTO.getGender(), customerDTO.getEmail(),
				this.passwordEncoder.encode(customerDTO.getPassword()));
		customerRepo.save(customer);
		return customer.getCustomerName() + " is added..";
	}

	CustomerDTO customerDTO;

	@Override
	public CusLoginMessage loginCustomer(CusLoginDTO cusLoginDTO) {
		String msg = "";
		Customer customer1 = customerRepo.findByEmail(cusLoginDTO.getEmail());
//		if(customer1 == null) {
//			return new CusLoginMessage("Email is required",false);
//		}
	  if (customer1 != null) {
			String password = cusLoginDTO.getPassword();
			String encodedPassword = customer1.getPassword();
			Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
			if (isPwdRight) {
				Optional<Customer> customer = customerRepo.findOneByEmailAndPassword(cusLoginDTO.getEmail(),
						encodedPassword);
				if (customer.isPresent()) {
					return new CusLoginMessage("Login Success", true);
				} else {
					return new CusLoginMessage("Login Failed", false);
				}
			} else {
				return new CusLoginMessage("password Not Match", false);
			}
		} 

		 else {
			return new CusLoginMessage("Email not exits", false);
		}
		
	}

}
