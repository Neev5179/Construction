import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCopComponent } from './project-cop.component';

describe('ProjectCopComponent', () => {
  let component: ProjectCopComponent;
  let fixture: ComponentFixture<ProjectCopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectCopComponent]
    });
    fixture = TestBed.createComponent(ProjectCopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
