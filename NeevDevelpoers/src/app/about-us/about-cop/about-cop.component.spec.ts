import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCopComponent } from './about-cop.component';

describe('AboutCopComponent', () => {
  let component: AboutCopComponent;
  let fixture: ComponentFixture<AboutCopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutCopComponent]
    });
    fixture = TestBed.createComponent(AboutCopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
