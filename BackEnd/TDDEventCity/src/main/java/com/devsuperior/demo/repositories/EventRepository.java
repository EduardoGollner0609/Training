package com.devsuperior.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.demo.entities.City;

public interface EventRepository extends JpaRepository<City, Long> {

}
