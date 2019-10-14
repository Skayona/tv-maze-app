import { Component, OnInit, Input } from '@angular/core';
import { IEpisode } from '../models/episode';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss']
})
export class EpisodeListComponent implements OnInit {
  @Input() episodeList: IEpisode[];

  constructor() { }

  ngOnInit() {
  }

}
