import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ISeason } from '@models/season';
import { TvMazeService } from '@services/tv-maze.service';

@Component({
  selector: 'app-seasons-page',
  templateUrl: './seasons-page.component.html',
  styleUrls: ['./seasons-page.component.scss']
})
export class SeasonsPageComponent implements OnInit {
  seasonsList$: Observable<ISeason[]>;

  constructor(
    private tvMazeService: TvMazeService,
    private activatedRoute: ActivatedRoute
  ) {
    this.seasonsList$ = activatedRoute.parent.params.pipe(
      switchMap(({ showId }) => tvMazeService.getSeasons(showId))
    );
  }

  ngOnInit() { }

}
