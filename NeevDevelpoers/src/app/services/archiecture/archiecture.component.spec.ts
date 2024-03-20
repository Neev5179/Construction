import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiectureComponent } from './archiecture.component';

describe('ArchiectureComponent', () => {
  let component: ArchiectureComponent;
  let fixture: ComponentFixture<ArchiectureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchiectureComponent]
    });
    fixture = TestBed.createComponent(ArchiectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
