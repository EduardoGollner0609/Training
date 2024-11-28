package com.devsuperior.movieflix.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

	Page<Movie> findByGenreOrderByTitle(Genre genre, Pageable pageable);

	Page<Movie> findAllByOrderByTitleAsc(Pageable pageable);
}
