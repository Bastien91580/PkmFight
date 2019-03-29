import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiPokemonService } from './api-pokemon.service';

describe('ApiPokemonService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ApiPokemonService = TestBed.get(ApiPokemonService);
    expect(service).toBeTruthy();
  });
});
