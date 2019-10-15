import { Component, OnInit } from '@angular/core';
import { TvMazeService } from 'src/services/tv-maze.service';
import { Observable } from 'rxjs';
import { IScheduledShow } from '../models/schedule-show';
import { IShow } from '../models/show';
import { map } from 'rxjs/operators';
import { Genres } from '../models/genres';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  scheduledShow$: Observable<IScheduledShow>;
  reccomendedShow$: Observable<IShow>;
  randomGenreShows$: Observable<IShow[]>;

  reccomendedShowId: number;
  randomGenre: string;

  constructor(
    private tvMazeService: TvMazeService
  ) {
    this.reccomendedShowId = 6771;

    this.scheduledShow$ = tvMazeService.getScheduledShow(this.showDate);
    this.reccomendedShow$ = tvMazeService.getReccomendedShow(this.reccomendedShowId);
    this.randomGenreShows$ = tvMazeService.getscheduledAll().pipe(
      map((shows) => {
        const maxIndex = Object.keys(Genres).filter((key) => key === '0' || Number(key)).length;
        const genreIndex = this.randomInteger(0, maxIndex);
        this.randomGenre = Genres[genreIndex];
        // filtering shows by genre and unique id
        const filteredShows = shows
          .map((filteredShow) => filteredShow._embedded.show)
          .filter((show) => {
            return show.genres.find((genre) => genre.toLowerCase() === this.randomGenre);
          })
          .reduce((res, show) => {
            const hasShowCoincidence = res.find((resShow) => resShow.id === show.id);
            return hasShowCoincidence ? res : [
              ...res, show
            ];
          }, [])
          .slice(0, 6);
        return filteredShows;
      })
    );
  }

  get showDate(): string {
    const today = new Date();
    return `${ today.getFullYear() }-${ today.getMonth() + 1 }-${ today.getDate() }`;
  }

  get lastVisitedShowList(): IShow[] {
    const lastVisitedShowList = window.localStorage.getItem('tvMaze-last-visited');
    return JSON.parse(lastVisitedShowList);
  }

  randomInteger(min, max) {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  ngOnInit() { }
}
