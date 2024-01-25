import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallaryCopComponent } from './gallary-cop.component';

describe('GallaryCopComponent', () => {
  let component: GallaryCopComponent;
  let fixture: ComponentFixture<GallaryCopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GallaryCopComponent]
    });
    fixture = TestBed.createComponent(GallaryCopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
