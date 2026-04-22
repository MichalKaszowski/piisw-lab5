import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Book } from '../../model/book';

@Component({
  selector: 'bs-book-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {

  readonly book: Book;
    constructor(private readonly activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.data['books/:bookId/reviews'])
    this.book = this.activatedRoute.snapshot.data['books/:bookId/reviews'];
  }
}
