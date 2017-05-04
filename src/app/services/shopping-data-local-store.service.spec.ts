import { TestBed, inject } from '@angular/core/testing';

import { ShoppingDataLocalStoreService } from './shopping-data-local-store.service';

describe('ShoppingDataLocalStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingDataLocalStoreService]
    });
  });

  it('should ...', inject([ShoppingDataLocalStoreService], (service: ShoppingDataLocalStoreService) => {
    expect(service).toBeTruthy();
  }));
});
