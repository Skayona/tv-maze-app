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

  items: MenuItem[];

  constructor(
    private tvMazeService: TvMazeService,
    private activatedRoute: ActivatedRoute,
    private showService: ShowService
  ) {
    this.items = [
      {label: 'Main', routerLink: 'main'},
      {label: 'Episodes', routerLink: 'episodes'}
    ];
  }

  ngOnInit() {
    this.show$ = this.activatedRoute.params.pipe(
      switchMap(({ showId }) => this.tvMazeService.getShow(showId)),
      tap((show) => this.showService.addData(show))
    );
  }

}
