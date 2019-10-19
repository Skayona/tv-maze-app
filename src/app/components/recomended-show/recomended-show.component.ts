import { Component, OnInit, Input } from '@angular/core';
import { IShow } from '@models/show';

@Component({
  selector: 'app-recomended-show',
  templateUrl: './recomended-show.component.html',
  styleUrls: ['./recomended-show.component.scss']
})
export class RecomendedShowComponent implements OnInit {
  @Input() show: IShow;

  constructor() { }

  ngOnInit() {
  }

}
