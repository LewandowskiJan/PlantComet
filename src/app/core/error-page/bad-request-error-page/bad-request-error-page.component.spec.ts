import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadRequestErrorPageComponent } from './bad-request-error-page.component';

describe('BadRequestErrorPageComponent', () => {
  let component: BadRequestErrorPageComponent;
  let fixture: ComponentFixture<BadRequestErrorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadRequestErrorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadRequestErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
