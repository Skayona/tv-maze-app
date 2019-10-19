import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TvMazeService } from '../services/tv-maze.service';
import { IShow } from '../models/show';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  query: string;
  searchResult: IShow[];
  showSearchResults: boolean;

  constructor(
    public auth: AuthService,
    private tvMazeService: TvMazeService
  ) {
    this.query = '';
    this.searchResult = [];
    this.showSearchResults = false;
  }

  searchShows() {
    const subscriber = this.tvMazeService.getShowsFromSearch(this.query).pipe(
      map((list) => {
        const searchResult = list.splice(0, 5);
        return searchResult.map((res) => res.show);
      })
    ).subscribe((res) => {
      this.showSearchResults = true;
      this.searchResult = res;
      subscriber.unsubscribe();
    });
  }

  clearSearchResults() {
    this.showSearchResults = false;
    this.query = '';
    this.searchResult = [];
  }

  ngOnInit() { }
}
