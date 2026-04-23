import { Component, inject } from '@angular/core';
import { Book } from '../../model/book';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { BooksService } from '../../services/books.service';

@Component({
    selector: 'bs-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss'],
    standalone: true,
    imports: [RouterLink, ReactiveFormsModule]
})
export class BookListComponent {

  bookService = inject(BooksService);
  
  books: Book[];

  titleSearch = new FormControl('');
  constructor(private readonly activatedRoute: ActivatedRoute) {
    this.books = this.activatedRoute.snapshot.data['books'];
  }

  ngOnInit(){
    this.titleSearch.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged()
           
    ).subscribe((searchTerm) => {
      const query = searchTerm || '';
      this.bookService.searchBook(query).subscribe(books => this.books = books)
    })
  }
}
