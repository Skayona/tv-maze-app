import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendedShowComponent } from './recomended-show.component';

describe('RecomendedShowComponent', () => {
  let component: RecomendedShowComponent;
  let fixture: ComponentFixture<RecomendedShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomendedShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendedShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
