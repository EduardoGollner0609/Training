package com.devsuperior.movieflix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.devsuperior.movieflix.dto.MovieCardDTO;
import com.devsuperior.movieflix.dto.MovieDetailsDTO;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.repositories.GenreRepository;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class MovieService {

	@Autowired
	private MovieRepository repository;

	@Autowired
	private GenreRepository genreRepository;

	public MovieDetailsDTO findById(Long id) {
		Movie movie = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Não encontrado"));
		return new MovieDetailsDTO(movie);
	}

	public Page<MovieCardDTO> findAllPaged(String genreId, Pageable pageable) {
		if (genreId.equals("0")) {
			Page<Movie> movies = repository.findAllByOrderByTitleAsc(pageable);
			return movies.map(movie -> new MovieCardDTO(movie));
		} else {
			Genre genre = genreRepository.findById(Long.parseLong(genreId))
					.orElseThrow(() -> new ResourceNotFoundException("Genero não encontrado"));
			Page<Movie> movies = repository.findByGenreOrderByTitle(genre, pageable);
			return movies.map(movie -> new MovieCardDTO(movie));
		}
	}

}
