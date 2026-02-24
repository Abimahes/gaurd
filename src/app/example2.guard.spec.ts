import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { example2Guard } from './example2.guard';

describe('example2Guard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => example2Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
