import { TestBed, inject } from '@angular/core/testing';

import { ShoppingDataService } from './shopping-data.service';

describe('ShoppingDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingDataService]
    });
  });

  it('should ...', inject([ShoppingDataService], (service: ShoppingDataService) => {
    expect(service).toBeTruthy();
  }));
});
