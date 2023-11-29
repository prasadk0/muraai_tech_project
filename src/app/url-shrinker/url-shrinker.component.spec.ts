import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlShrinkerComponent } from './url-shrinker.component';

describe('UrlShrinkerComponent', () => {
  let component: UrlShrinkerComponent;
  let fixture: ComponentFixture<UrlShrinkerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrlShrinkerComponent]
    });
    fixture = TestBed.createComponent(UrlShrinkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
