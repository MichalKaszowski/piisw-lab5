import {inject} from '@angular/core';
import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from '@angular/router';
import {BooksService} from '../services/books.service';
import {Book} from '../model/book';

export const bookResolver: ResolveFn<Book> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const bookId = route.paramMap.get('bookId')!;
  return inject(BooksService).findBookById(bookId);
};
