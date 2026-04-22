import { Routes } from '@angular/router';
import {BookListComponent} from "./books/components/book-list/book-list.component";
import {bookListResolver} from "./books/resolvers/book-list.resolver";
import { ɵisBoundToModule } from '@angular/core';
import { BookDetailsComponent } from './books/components/book-details/book-details.component';
import { bookResolver } from './books/resolvers/book.resolver';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/books'
  },
  {
    path: 'books',
    component: BookListComponent,
    resolve: {
      books: bookListResolver
    }
  },
  {
    path: 'books/:bookId/reviews',
    component: BookDetailsComponent,
    resolve:{
      book: bookResolver
    }
  }
];
