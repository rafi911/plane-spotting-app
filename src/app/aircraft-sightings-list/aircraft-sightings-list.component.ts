import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AircraftSightingsService } from '../aircraft-sightings.service';
import { AircraftSighting } from '../models/aircraft-sighting.model';

@Component({
  selector: 'app-aircraft-sightings-list',
  templateUrl: './aircraft-sightings-list.component.html',
  styleUrls: ['./aircraft-sightings-list.component.scss']
})

export class AircraftSightingsListComponent implements OnInit {

  aircraftSightings!: AircraftSighting[];
  displayedColumns: string[] = ['make', 'model', 'registration', 'location', 'sightingDate', 'actions'];
  dataSource: MatTableDataSource<AircraftSighting>;
  searchControl = new FormControl('');
  constructor
  (
    private aircraftSightingService: AircraftSightingsService,
    private router: Router,
    private toastr: ToastrService
  ) 
  {
    this.dataSource = new MatTableDataSource<AircraftSighting>([]);
  }

  ngOnInit(): void {
    
    this.loadSightings();
  }


  deleteSighting(sightingId: number) {
    this.aircraftSightingService.deleteAircraftSighting(sightingId).subscribe(() => {    
      this.toastr.success('Sighting deleted successfully.');
      this.loadSightings();
    });
  }
  loadSightings() {
    this.aircraftSightingService.getAircraftSightings().subscribe((sightings:AircraftSighting[]) => {
      console.log(sightings);
      this.dataSource.data = [];
      this.dataSource.data = sightings;
    });
  }
  navigateToAddSighting() {
    this.router.navigate(['/add-sighting']);
  }

  searchSightings(): void {
    const searchTerm = this.searchControl.value;
    if(!searchTerm){
      this.loadSightings();
      return
    }
    this.aircraftSightingService.search(searchTerm!)
      .subscribe(sightings =>{
        this.dataSource.data = [];
        this.aircraftSightings = sightings;
        this.dataSource.data = sightings;
      });
  }
}