import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftSightingsListComponent } from './aircraft-sightings-list.component';

describe('AircraftSightingsListComponent', () => {
  let component: AircraftSightingsListComponent;
  let fixture: ComponentFixture<AircraftSightingsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircraftSightingsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftSightingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
