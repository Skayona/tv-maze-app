import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IShow } from '../models/show';
import { switchMap, map } from 'rxjs/operators';
import { TvMazeService } from '../services/tv-maze.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  searchResults$: Observable<IShow[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tvMazeService: TvMazeService,
  ) {
    this.searchResults$ = activatedRoute.queryParams.pipe(
      switchMap(({ query }) => tvMazeService.getShowsFromSearch(query)),
      map((list) => list.map((res) => res.show))
    );
  }

  ngOnInit() {
  }

}
