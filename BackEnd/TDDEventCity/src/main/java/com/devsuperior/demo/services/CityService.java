package com.devsuperior.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.devsuperior.demo.dto.CityDTO;
import com.devsuperior.demo.entities.City;
import com.devsuperior.demo.repositories.CityRepository;
import com.devsuperior.demo.services.exceptions.DatabaseException;
import com.devsuperior.demo.services.exceptions.ResourceNotFoundException;

@Service
public class CityService {

	@Autowired
	private CityRepository repository;

	public List<CityDTO> findAll() {
		return repository.findAll(Sort.by(Sort.Direction.ASC, "name")).stream().map(city -> new CityDTO(city)).toList();
	}

	public CityDTO insert(CityDTO cityDTO) {
		City city = new City();
		city.setName(cityDTO.getName());
		return new CityDTO(repository.save(city));
	}

	public void delete(Long id) {
		if (!repository.existsById(id)) {
			throw new ResourceNotFoundException("Resource Not Found");
		}
		try {
			repository.deleteById(id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Error Database");
		}
	}
}
