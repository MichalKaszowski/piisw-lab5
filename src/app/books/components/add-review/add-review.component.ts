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
    description: new FormControl('', [Validators.required]),
    rate: new FormControl(5, [Validators.required,
      Validators.min(1),
      Validators.max(5)
    ])
  });

  get author() { return this.reviewForm.get('author')!; }
  get title() { return this.reviewForm.get('title')!; }
  get description() { return this.reviewForm.get('description')!; }
  get rate() { return this.reviewForm.get('rate')!; }


  onSubmit(){
    const addedReview: Partial<Review> ={
      ...this.reviewForm.value,
      forBook: this.bookId()
    } as Partial<Review>

    this.reviewService.saveReview(addedReview).subscribe({
        next: (savedReview) => {
          this.reviewAdded.emit(savedReview); 
          this.reviewForm.reset(); 
        }
      });
  }
}
