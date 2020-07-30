import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeDataComponent } from './welcome-data.component';

describe('WelcomeDataComponent', () => {
  let component: WelcomeDataComponent;
  let fixture: ComponentFixture<WelcomeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
