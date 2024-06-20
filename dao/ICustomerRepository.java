package com.demo.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.demo.entity.Customer;
import com.demo.entity.Employee;

@EnableJpaRepositories
@Repository
public interface ICustomerRepository extends JpaRepository<Customer, Long> {

	Optional<Customer> findOneByEmailAndPassword(String email, String password);

	Customer findByEmail(String email);
}
