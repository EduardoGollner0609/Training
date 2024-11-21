package com.devsuperior.demo.controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.devsuperior.demo.dto.EventDTO;
import com.devsuperior.demo.services.EventService;

import jakarta.validation.Valid;

@RestController
@RequestMapping(value = "/events")
public class EventController {

	@Autowired
	private EventService service;

	@GetMapping
	public ResponseEntity<Page<EventDTO>> findAllPaged(Pageable pageable) {
		return ResponseEntity.ok(service.findAllPaged(pageable));
	}

	@PostMapping
	public ResponseEntity<EventDTO> insert(@Valid @RequestBody EventDTO eventDTO) {
		eventDTO = service.insert(eventDTO);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(eventDTO.getId())
				.toUri();
		return ResponseEntity.created(uri).body(eventDTO);
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<EventDTO> update(@PathVariable Long id, @Valid @RequestBody EventDTO eventDTO) {
		eventDTO = service.update(id, eventDTO);
		return ResponseEntity.ok(eventDTO);
	}
}
