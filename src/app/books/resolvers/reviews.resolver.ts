import { ResolveFn } from '@angular/router';
import { Review } from '../model/review';
import { ReviewsService } from '../services/reviews.service';
import { inject } from '@angular/core';

export const reviewsResolver: ResolveFn<Review[]> = (route, state) => {
  const bookId = route.paramMap.get('bookId')!;
  return inject(ReviewsService).getReviewsForBook(bookId);
};
