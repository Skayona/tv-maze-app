import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IEpisode } from '../models/episode';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap, pluck } from 'rxjs/operators';
import { IShow } from '../models/show';
import { TvMazeService } from '../services/tv-maze.service';

@Component({
  selector: 'app-episode-page',
  templateUrl: './episode-page.component.html',
  styleUrls: ['./episode-page.component.scss']
})
export class EpisodePageComponent implements OnInit, OnDestroy {
  episode$: Observable<IEpisode>;
  episodeSubscription: Subscription;

  episode: IEpisode;
  show: IShow;
  prevEpisode: number;
  nextEpisode: number;

  constructor(
    private tvMazeService: TvMazeService,
    private activatedRoute: ActivatedRoute,
  ) {
    activatedRoute.params.subscribe(console.log);
    this.episode$ = activatedRoute.params.pipe(
      switchMap(({ episodeId }) => tvMazeService.getEpisode(episodeId))
    );
  }

  getEpisodeNumber(link: { href: string }): number {
    if (!link || !link.href) {
      return null;
    }
    const reNum = new RegExp(/\d*$/);
    const matched = link.href.match(reNum);
    return matched && +matched[0];
  }

  ngOnInit() {
    this.episodeSubscription = this.episode$.subscribe((episode) => {
      this.episode = episode;
      this.show = episode._embedded.show;
      const nextEpisode = this.show._links.nextepisode;
      const prevEpisode = this.show._links.previousepisode;
      this.prevEpisode = this.getEpisodeNumber(prevEpisode);
      this.nextEpisode = this.getEpisodeNumber(nextEpisode);
    });
  }

  ngOnDestroy() {
    this.episodeSubscription.unsubscribe();
  }

}
