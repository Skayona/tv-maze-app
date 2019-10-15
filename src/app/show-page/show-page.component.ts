import { Component, OnInit, Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { IShow } from '../models/show';
import { TvMazeService } from 'src/services/tv-maze.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { MenuItem } from 'primeng/api';

@Injectable()
export class ShowService {
  private show: Subject<IShow> = new BehaviorSubject<IShow>(null);

  get show$() {
    return this.show.asObservable();
  }

  addData(show: IShow) {
    this.show.next(show);
  }
}

@Component({
  selector: 'app-show-page',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.scss'],
  providers: [ShowService]

})
export class ShowPageComponent implements OnInit {
  show$: Observable<IShow>;

  menuItems: MenuItem[];

  constructor(
    private tvMazeService: TvMazeService,
    private activatedRoute: ActivatedRoute,
    private showService: ShowService
  ) {
    this.menuItems = [
      {label: 'Main', routerLink: 'main'},
      {label: 'Episodes', routerLink: 'episodes'}
    ];

    this.show$ = activatedRoute.params.pipe(
      switchMap(({ showId }) => tvMazeService.getShow(showId)),
      tap((show) => {
        showService.addData(show);
        this.setLastVisitedShowList(show);
      })
    );
  }

  get lastVisitedShowList(): IShow[] {
    const lastVisitedShowList = window.localStorage.getItem('tvMaze-last-visited');
    return JSON.parse(lastVisitedShowList);
  }

  setLastVisitedShowList(show: IShow) {
    const lastVisitedShow = {
      id: show.id,
      name: show.name,
      image: show.image,
      rating: show.rating
    };

    let lastVisitedShowList = this.lastVisitedShowList || [];

    lastVisitedShowList = lastVisitedShowList.reduce((res, visitedShow) => {
      if (res.find((resSHow) => resSHow.id === visitedShow.id)) {
        return res;
      }

      return [...res, visitedShow];
    }, [lastVisitedShow]);

    if (lastVisitedShowList.length > 6) {
      lastVisitedShowList.pop();
    }

    window.localStorage.setItem('tvMaze-last-visited', JSON.stringify(lastVisitedShowList));
  }

  ngOnInit() { }

}
