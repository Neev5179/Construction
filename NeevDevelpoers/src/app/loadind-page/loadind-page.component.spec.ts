import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadindPageComponent } from './loadind-page.component';

describe('LoadindPageComponent', () => {
  let component: LoadindPageComponent;
  let fixture: ComponentFixture<LoadindPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadindPageComponent]
    });
    fixture = TestBed.createComponent(LoadindPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
