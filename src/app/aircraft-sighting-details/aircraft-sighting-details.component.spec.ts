import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftSightingDetailsComponent } from './aircraft-sighting-details.component';

describe('AircraftSightingDetailsComponent', () => {
  let component: AircraftSightingDetailsComponent;
  let fixture: ComponentFixture<AircraftSightingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircraftSightingDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftSightingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
