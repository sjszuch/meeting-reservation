import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekdayComponent } from './weekday.component';

describe('WeekdayComponent', () => {
  let component: WeekdayComponent;
  let fixture: ComponentFixture<WeekdayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeekdayComponent]
    });
    fixture = TestBed.createComponent(WeekdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
