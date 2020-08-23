import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextSearchService {

  constructor() { }

  Search(sourceText: string, searchText: string): any {
    let result = [];

    if (sourceText && searchText) {
      let regex = RegExp(searchText, 'gi');
      let searchTextLength = searchText.length;

      let temp;
      while ((temp = regex.exec(sourceText)) != null) {
        result.push(regex.lastIndex - searchTextLength);
      }
    }
    
    return result;
  }

  RemoveExtraSpace(sourceText: string): any {
    return sourceText.replace(/\s\s+/g, ' ');
  }
}
