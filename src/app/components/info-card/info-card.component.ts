import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  @Input() image: string;
  @Input() name: string;
  @Input() summary: string;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
