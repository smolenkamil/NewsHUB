import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderArticleComponent } from './sliderArticle.component';

describe('SliderArticleComponent', () => {
  let component: SliderArticleComponent;
  let fixture: ComponentFixture<SliderArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderArticleComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
