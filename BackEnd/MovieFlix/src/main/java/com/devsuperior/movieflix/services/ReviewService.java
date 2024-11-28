package com.devsuperior.movieflix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.ReviewRepository;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository repository;

	@Autowired
	private UserService userService;

	public ReviewDTO insert(ReviewDTO reviewDTO) {
		Review review = new Review();
		copyDtoToEntity(review, reviewDTO);
		return new ReviewDTO(repository.save(review));
	}

	private void copyDtoToEntity(Review review, ReviewDTO reviewDTO) {
		Movie movie = new Movie();
		movie.setId(reviewDTO.getMovieId());
		review.setMovie(movie);

		User user = new User();
		user.setId(userService.getProfile().getId());
		user.setEmail(userService.getProfile().getEmail());
		user.setName(userService.getProfile().getName());

		review.setUser(user);

		review.setText(reviewDTO.getText());
	}
}
