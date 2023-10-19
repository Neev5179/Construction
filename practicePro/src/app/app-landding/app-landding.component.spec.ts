import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLanddingComponent } from './app-landding.component';

describe('AppLanddingComponent', () => {
  let component: AppLanddingComponent;
  let fixture: ComponentFixture<AppLanddingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppLanddingComponent]
    });
    fixture = TestBed.createComponent(AppLanddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
