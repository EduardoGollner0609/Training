package com.devsuperior.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.devsuperior.demo.dto.EventDTO;
import com.devsuperior.demo.entities.City;
import com.devsuperior.demo.entities.Event;
import com.devsuperior.demo.repositories.CityRepository;
import com.devsuperior.demo.repositories.EventRepository;
import com.devsuperior.demo.services.exceptions.ResourceNotFoundException;

@Service
public class EventService {

	@Autowired
	private EventRepository repository;
	@Autowired
	private CityRepository cityRepository;

	public EventDTO insert(EventDTO eventDTO) {
		Event event = new Event();
		copyDtoToEntity(event, eventDTO);
		return new EventDTO(repository.save(event));
	}

	public EventDTO update(Long id, EventDTO eventDTO) {
		Event event = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Resource Not Found"));
		copyDtoToEntity(event, eventDTO);
		return new EventDTO(event);
	}

	public Page<EventDTO> findAllPaged(Pageable pageable) {
		return repository.findAll(pageable).map(event -> new EventDTO(event));
	}

	private void copyDtoToEntity(Event event, EventDTO eventDTO) {
		event.setName(eventDTO.getName());
		event.setUrl(eventDTO.getUrl());
		event.setDate(eventDTO.getDate());

		City city = cityRepository.findById(eventDTO.getCityId())
				.orElseThrow(() -> new ResourceNotFoundException("Resource Not Found"));
		event.setCity(city);
	}
}
