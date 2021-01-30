import { TestBed } from '@angular/core/testing';

import { KeepInTouchGuard } from './keep-in-touch.guard';

describe('KeepInTouchGuard', () => {
  let guard: KeepInTouchGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(KeepInTouchGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
