import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCopComponent } from './services-cop.component';

describe('ServicesCopComponent', () => {
  let component: ServicesCopComponent;
  let fixture: ComponentFixture<ServicesCopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesCopComponent]
    });
    fixture = TestBed.createComponent(ServicesCopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
