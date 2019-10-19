import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainShowInfoComponent } from './main-show-info.component';

describe('MainShowInfoComponent', () => {
  let component: MainShowInfoComponent;
  let fixture: ComponentFixture<MainShowInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainShowInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainShowInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
