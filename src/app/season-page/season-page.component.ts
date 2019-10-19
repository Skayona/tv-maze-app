import { Component, OnInit } from '@angular/core';
import { ShowService } from '../show-page/show-page.component';
import { Observable } from 'rxjs';
import { IEpisode } from '../models/episode';
import { switchMap, map, tap } from 'rxjs/operators';
import { TvMazeService } from '../services/tv-maze.service';

@Component({
  selector: 'app-season-page',
  templateUrl: './season-page.component.html',
  styleUrls: ['./season-page.component.scss']
})
export class SeasonPageComponent implements OnInit {
  episodes$: Observable<IEpisode[]>;
  seasonsList$: Observable<number[]>;

  episodes: IEpisode[];

  constructor(
    private showService: ShowService,
    private tvMazeService: TvMazeService
  ) {
    this.episodes$ = showService.show$.pipe(
      switchMap(({ id }) => tvMazeService.getEpisodes(id)),
      map((episodes) => episodes.reverse()),
      tap((episodes) => this.episodes = episodes)
    );

    this.seasonsList$ = this.episodes$.pipe(
      map((episodes) => {
        return episodes.reduce((res, episode) => {
          return res.find((season) => season === episode.season ) ? res : [...res, episode.season];
        }, []);
      })
    );
  }

  getEpisodesInSeason(season: number): IEpisode[] {
    return this.episodes.filter((episode) => episode.season === season);
  }

  ngOnInit() { }

}
