import { Component, OnInit, Input } from '@angular/core';
import { IScheduledShow } from '@models/schedule-show';

@Component({
  selector: 'app-schedule-show',
  templateUrl: './schedule-show.component.html',
  styleUrls: ['./schedule-show.component.scss']
})
export class ScheduleShowComponent implements OnInit {
  @Input() scheduledShow: IScheduledShow;

  constructor() { }

  ngOnInit() {
  }

}
