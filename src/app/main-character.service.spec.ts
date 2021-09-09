import { TestBed } from '@angular/core/testing';

import { MainCharacterService } from './main-character.service';

describe('MainCharacterService', () => {
  let service: MainCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
