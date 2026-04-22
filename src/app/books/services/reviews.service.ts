import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../model/review';
import { Observable } from 'rxjs';


const reviewsApiPrefix = '/api/reviews';


@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private readonly http: HttpClient) {}

    getReviewsForBook(bookId: string): Observable<Review[]> {
      return this.http.get<Review[]>(reviewsApiPrefix, {
        params:{
          forBook: bookId
        }
      });
    }
}
