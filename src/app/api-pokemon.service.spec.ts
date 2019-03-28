import { TestBed } from '@angular/core/testing';

import { ApiPokemonService } from './api-pokemon.service';

describe('ApiPokemonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiPokemonService = TestBed.get(ApiPokemonService);
    expect(service).toBeTruthy();
  });
});
