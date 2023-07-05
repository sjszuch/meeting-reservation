import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaltimeslotComponent } from './caltimeslot.component';

describe('CaltimeslotComponent', () => {
  let component: CaltimeslotComponent;
  let fixture: ComponentFixture<CaltimeslotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaltimeslotComponent]
    });
    fixture = TestBed.createComponent(CaltimeslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
