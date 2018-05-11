import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherChoiceComponent } from './weatherChoice.component';

describe('WeatherChoiceComponent', () => {
  let component: WeatherChoiceComponent;
  let fixture: ComponentFixture<WeatherChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherChoiceComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
