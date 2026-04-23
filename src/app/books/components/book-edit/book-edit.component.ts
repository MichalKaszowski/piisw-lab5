import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Book } from '../../model/book';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'bs-book-edit',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.scss'
})
export class BookEditComponent {
  bookService = inject(BooksService);
  readonly book: Book;

  bookForm: FormGroup;
    constructor(private readonly activatedRoute: ActivatedRoute) {
    this.book = this.activatedRoute.snapshot.data['book'];
    this.bookForm = new FormGroup({
      title:  new FormControl(this.book.title, [
      Validators.required,
      Validators.maxLength(50),
    ]),
      author: new FormControl(this.book.author, [
      Validators.required,
      Validators.maxLength(50),
    ]),
      description: new FormControl(this.book.description, [
      Validators.maxLength(1000),
    ]),
      year: new FormControl(this.book.year, [
      Validators.required,
      Validators.min(1000),
      Validators.max(2023)
    ]),
   });
  }

  get title() { return this.bookForm.get('title'); }
  get author() { return this.bookForm.get('author'); }
  get year() { return this.bookForm.get('year'); }
  get description() { return this.bookForm.get('description'); }

  saveBook(){
    this.bookService.saveBook(this.book.id, this.bookForm.value).subscribe()
  }
  cancel(){}
}

