import { Component, OnInit } from '@angular/core';
import { TextSearchService } from './text-search.service';

@Component({
  selector: 'app-text-search',
  templateUrl: './text-search.component.html',
  styleUrls: ['./text-search.component.css']
})
export class TextSearchComponent implements OnInit {
  public textSource: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  public textSearch: string = "dolor";
  public searchResult:string;

  constructor(private textSearchService: TextSearchService) {
  }

  ngOnInit(): void {
  }


  SearchIndex() {
    this.searchResult = '';
    var result = this.textSearchService.Search(this.textSource, this.textSearch);
    this.searchResult = result.join(', ');       
  }
}
