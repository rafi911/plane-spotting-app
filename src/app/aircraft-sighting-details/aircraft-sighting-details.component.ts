import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AircraftSightingsService } from '../aircraft-sightings.service';
import { AircraftSighting } from '../models/aircraft-sighting.model';
@Component({
  selector: 'app-aircraft-sighting-details',
  templateUrl: './aircraft-sighting-details.component.html',
  styleUrls: ['./aircraft-sighting-details.component.scss']
})
export class AircraftSightingDetailsComponent {
  sighting!: AircraftSighting;

  constructor(
    private route: ActivatedRoute,
    private aircraftSightingService: AircraftSightingsService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.aircraftSightingService.getAircraftSighting(id).subscribe(sighting => {
        this.sighting = sighting;
      });
    });
  }
}
