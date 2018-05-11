import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLogInComponent } from './btnLogin.component';

describe('BtnLogInComponent', () => {
  let component: BtnLogInComponent;
  let fixture: ComponentFixture<BtnLogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnLogInComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
