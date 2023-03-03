import { TestBed } from '@angular/core/testing';

import { FavoriteRepositoryService } from './favorite-repository.service';

describe('FavoriteRepositoryService', () => {
  let service: FavoriteRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
