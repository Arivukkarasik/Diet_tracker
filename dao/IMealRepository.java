package com.demo.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.entity.Food;
import com.demo.entity.Meal;

@Repository
public interface IMealRepository extends JpaRepository<Meal, Integer> {


}
