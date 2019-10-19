import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IEpisode } from '@models/episode';
import { TvMazeService } from '@services/tv-maze.service';

@Component({
  selector: 'app-season-page',
  templateUrl: './season-page.component.html',
  styleUrls: ['./season-page.component.scss']
})
export class SeasonPageComponent implements OnInit {
  episodesList$: Observable<IEpisode[]>;

  constructor(
    private tvMazeService: TvMazeService,
    private activatedRoute: ActivatedRoute
  ) {
    this.episodesList$ = activatedRoute.params.pipe(
      switchMap(({ seasonId }) => tvMazeService.getEpisodes(seasonId))
    );
   }


  ngOnInit() { }

}
