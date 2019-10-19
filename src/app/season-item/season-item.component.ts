import { Component, OnInit, Input } from '@angular/core';
import { ISeason } from '../models/season';

@Component({
  selector: 'app-season-item',
  templateUrl: './season-item.component.html',
  styleUrls: ['./season-item.component.scss']
})
export class SeasonItemComponent implements OnInit {
  @Input() season: ISeason;

  constructor() { }

  ngOnInit() {
  }

}
