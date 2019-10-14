import { TestBed } from '@angular/core/testing';

import { TvMazeService } from './tv-maze.service';

describe('ScheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TvMazeService = TestBed.get(TvMazeService);
    expect(service).toBeTruthy();
  });
});
