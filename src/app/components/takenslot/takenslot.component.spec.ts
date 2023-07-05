import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakenslotComponent } from './takenslot.component';

describe('TakenslotComponent', () => {
  let component: TakenslotComponent;
  let fixture: ComponentFixture<TakenslotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakenslotComponent]
    });
    fixture = TestBed.createComponent(TakenslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
