import { Component, OnInit, Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { IShow } from '../models/show';
import { TvMazeService } from '../services/tv-maze.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ShowService } from '../show-page/show-page.component';



@Component({
  selector: 'app-main-show-info',
  templateUrl: './main-show-info.component.html',
  styleUrls: ['./main-show-info.component.scss'],
})
export class MainShowInfoComponent implements OnInit {
  show$: Observable<IShow>;

  constructor(
    private showService: ShowService,
    private activatedRoute: ActivatedRoute
  ) {
    this.show$ = showService.show$;
  }

  ngOnInit() {
  }

}
