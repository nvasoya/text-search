import { TestBed } from '@angular/core/testing';

import { TextSearchService } from './text-search.service';

describe('TextSearchService', () => {
  let service: TextSearchService;
  let textSource: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 0 match for invalid source text', () => {
    var result = service.Search(null, 'test');
    expect(result.length).toBe(0);
  });

  it('should return 0 match for invalid search text', () => {
    var result = service.Search(textSource, null);
    expect(result.length).toBe(0);
  });

  it('should return 0 match', () => {
    var result = service.Search(textSource, '123 45');
    expect(result.length).toBe(0);
  });

  it('should return 1 match at index 12', () => {
    var result = service.Search(textSource, 'dolor sit');
    expect(result.length).toBe(1);
    expect(result).toContain(12);
  });

  it('should return multiple match at index 0, 105, 304', () => {
    var result = service.Search(textSource, 'lore');
    expect(result.length).toBe(3);
    expect(result).toContain(0);
    expect(result).toContain(105);
    expect(result).toContain(304);
  });

  it('should return multiple match at index 0, 105, 304(case sensitive search test)', () => {
    var result = service.Search(textSource, 'LORE');
    expect(result.length).toBe(3);
    expect(result).toContain(0);
    expect(result).toContain(105);
    expect(result).toContain(304);
  });

  
});
