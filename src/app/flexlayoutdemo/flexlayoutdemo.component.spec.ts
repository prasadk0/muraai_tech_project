import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexlayoutdemoComponent } from './flexlayoutdemo.component';

describe('FlexlayoutdemoComponent', () => {
  let component: FlexlayoutdemoComponent;
  let fixture: ComponentFixture<FlexlayoutdemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlexlayoutdemoComponent]
    });
    fixture = TestBed.createComponent(FlexlayoutdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
