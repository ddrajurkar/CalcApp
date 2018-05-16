import { TestBed, inject } from '@angular/core/testing';

import { WordsearchService } from './wordsearch.service';

describe('WordsearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordsearchService]
    });
  });

  it('should be created', inject([WordsearchService], (service: WordsearchService) => {
    expect(service).toBeTruthy();
  }));
});
