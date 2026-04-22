import { Component, input } from '@angular/core';
import { Review } from '../../model/review';

@Component({
  selector: 'bs-review',
  standalone: true,
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
  review = input.required<Review>()
}
