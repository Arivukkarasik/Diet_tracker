package com.demo.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.entity.Register;

@Repository
public interface IRegisterRepository extends JpaRepository<Register, Integer>{
	
	Optional<Register> findByFirstName(String firstName);
	//Optional<Register> findByName(String name);

}
