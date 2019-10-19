import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IScheduledShow } from 'src/app/models/schedule-show';
import { Observable } from 'rxjs';
import { map, find } from 'rxjs/operators';
import { IShow } from 'src/app/models/show';
import { IEpisode } from 'src/app/models/episode';
import { ISeason } from '../models/season';
import { ISearchResult } from '../models/search-result';

@Injectable({
  providedIn: 'root'
})
export class TvMazeService {
  api: string;

  constructor(
    private http: HttpClient
  ) {
    this.api = environment.API;
  }

  getscheduledAll(): Observable<IScheduledShow[]> {
    return this.http.get<IScheduledShow[]>(`${ this.api }/schedule/full`);
  }

  getScheduledShow(date: string): Observable<IScheduledShow> {
    return this.http.get<IScheduledShow[]>(`${ this.api }/schedule?date=${ date }`).pipe(
      map((shows) => {
        return shows.find((show) => {
          const showDate = new Date(`${ show.airdate }T${ show.airtime }`).getTime();
          const currentDate = new Date().getTime();
          return showDate > currentDate;
        });
      })
    );
  }

  getReccomendedShow(showId: number): Observable<IShow> {
    return this.http.get<IShow>(`${ this.api }/shows/${ showId }`);
  }

  getShow(showId: number): Observable<IShow> {
    return this.http.get<IShow>(`${ this.api }/shows/${ showId }`);
  }

  getSeasons(showId: number) {
    return this.http.get<ISeason[]>(`${ this.api }/shows/${ showId }/seasons`);
  }

  getEpisodes(seasonId: number): Observable<IEpisode[]> {
    return this.http.get<IEpisode[]>(`${ this.api }/seasons/${ seasonId }/episodes`);
  }

  getEpisode(episodeId: number): Observable<IEpisode> {
    return this.http.get<IEpisode>(`${ this.api }/episodes/${ episodeId }?embed=show`);
  }

  getShowsFromSearch(query: string): Observable<ISearchResult[]> {
    return this.http.get<ISearchResult[]>(`${ this.api }/search/shows?q=${ query }`);
  }
}
