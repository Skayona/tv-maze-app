import { Component, OnInit } from '@angular/core';
import { TvMazeService } from 'src/services/tv-maze.service';
import { ShowService } from '../show-page/show-page.component';
import { Observable } from 'rxjs';
import { IEpisode } from '../models/episode';
import { switchMap, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-episodes-page',
  templateUrl: './episodes-page.component.html',
  styleUrls: ['./episodes-page.component.scss']
})
export class EpisodesPageComponent implements OnInit {
  episodes$: Observable<IEpisode[]>;
  seasonsList$: Observable<number[]>;

  episodes: IEpisode[];

  constructor(
    private showService: ShowService,
    private tvMazeService: TvMazeService
  ) { }

  getEpisodesInSeason(season: number): IEpisode[] {
    return this.episodes.filter((episode) => episode.season === season);
  }

  ngOnInit() {
    this.episodes$ = this.showService.show$.pipe(
      switchMap(({ id }) => this.tvMazeService.getEpisodes(id)),
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
}
