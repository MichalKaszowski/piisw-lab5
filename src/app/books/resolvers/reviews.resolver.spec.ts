import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { reviewsResolver } from './reviews.resolver';

describe('reviewsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => reviewsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
