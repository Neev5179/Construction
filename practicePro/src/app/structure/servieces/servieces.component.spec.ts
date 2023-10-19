import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiecesComponent } from './servieces.component';

describe('ServiecesComponent', () => {
  let component: ServiecesComponent;
  let fixture: ComponentFixture<ServiecesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiecesComponent]
    });
    fixture = TestBed.createComponent(ServiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
