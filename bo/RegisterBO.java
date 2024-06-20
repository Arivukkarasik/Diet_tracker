package com.demo.bo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.demo.dao.IRegisterRepository;
import com.demo.entity.Register;

@Component
public class RegisterBO {
	
	@Autowired
	IRegisterRepository registerRepository;
	
	public Register addRegister(Register register) {
		if(register.getFirstName().length()<2 && register.getFirstName().isBlank()) {
			System.out.println("First name is empty..");
		}
		else if(register.getLastName().matches(".*\\d.*")) {
			System.out.println("Last name is not string type");
		}
	else if (register.getPassword().length() < 8) {
		System.out.println("Password must be atleast 8 characters..");
	}
	else if(register.getEmail().matches("^[A-Za-z0-9+_.-]+@(.+)$")) {
		System.out.println("Email should not be correct format.");
	}
		
		return registerRepository.save(register);
	}

}
