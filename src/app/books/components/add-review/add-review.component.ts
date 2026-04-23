import { Component, inject, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReviewsService } from '../../services/reviews.service';
import { Review } from '../../model/review';

@Component({
  selector: 'bs-add-review',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-review.component.html',
  styleUrl: './add-review.component.scss'
})
export class AddReviewComponent {
  reviewService = inject(ReviewsService);
  bookId = input.required<number>();
  reviewAdded = output<Review>();

  reviewForm = new FormGroup({
    author: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required])
  });

  get author() { return this.reviewForm.get('author')!; }
  get title() { return this.reviewForm.get('title')!; }
  get content() { return this.reviewForm.get('content')!; }

  onSubmit(){

    if (this.reviewForm.valid){
    const addedReview: Partial<Review> ={
      ...this.reviewForm.value,
      forBook: this.bookId()
    } as Partial<Review>

    this.reviewService.saveReview(addedReview).subscribe({
        next: (savedReview) => {
          this.reviewAdded.emit(savedReview); // Powiadomienie rodzica
          this.reviewForm.reset(); // Czyszczenie formularza
        }
      });

  }


  }
}
