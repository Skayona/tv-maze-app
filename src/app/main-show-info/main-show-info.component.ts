import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IShow } from '../models/show';
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
  ) {
    this.show$ = showService.show$;
  }

  ngOnInit() {
  }

}
