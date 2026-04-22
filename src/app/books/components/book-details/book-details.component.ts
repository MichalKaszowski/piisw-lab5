import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Book } from '../../model/book';
import { Review } from '../../model/review';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'bs-book-details',
  standalone: true,
  imports: [RouterLink, ReviewComponent],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {

  readonly book: Book;
  readonly reviews: Review[];
    constructor(private readonly activatedRoute: ActivatedRoute) {
    this.book = this.activatedRoute.snapshot.data['book'];
    this.reviews = this.activatedRoute.snapshot.data['reviews']
  }
}
