import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaterForecastComponent } from './weater-forecast.component';

describe('WeaterForecastComponent', () => {
  let component: WeaterForecastComponent;
  let fixture: ComponentFixture<WeaterForecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeaterForecastComponent]
    });
    fixture = TestBed.createComponent(WeaterForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
