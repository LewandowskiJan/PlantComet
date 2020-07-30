import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantCometComponent } from './plant-comet.component';

describe('PlantCometComponent', () => {
  let component: PlantCometComponent;
  let fixture: ComponentFixture<PlantCometComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantCometComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantCometComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
