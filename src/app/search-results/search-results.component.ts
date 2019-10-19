import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { IShow } from '../models/show';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() searchResult: IShow[];
  @Input() query: string;

  @Output() clearResults: EventEmitter<any> = new EventEmitter();

  constructor(
    private elRef: ElementRef
  ) {
    this.searchResult = [];
    this.query = '';
  }

  clearSearchResults() {
    this.clearResults.emit();
  }

  @HostListener('document:click', ['$event.target'])
  clickout(event) {
    if (!this.elRef.nativeElement.contains(event)) {
      this.clearResults.emit();
    }
  }

  ngOnInit() {
  }

}
