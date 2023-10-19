import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveComponent } from './responsive.component';

describe('ResponsiveComponent', () => {
  let component: ResponsiveComponent;
  let fixture: ComponentFixture<ResponsiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsiveComponent]
    });
    fixture = TestBed.createComponent(ResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
