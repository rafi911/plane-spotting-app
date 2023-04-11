import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AircraftSightingsService } from '../aircraft-sightings.service';
import { AircraftSighting } from '../models/aircraft-sighting.model';

@Component({
  selector: 'app-add-sighting',
  templateUrl: './add-sighting.component.html',
  styleUrls: ['./add-sighting.component.scss']
})
export class AddSightingComponent {
  public sightingForm!: FormGroup;

  constructor
  (
    private aircraftSightingService: AircraftSightingsService, 
    private formBuilder: FormBuilder, 
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.sightingForm = this.formBuilder.group({
      make: ['', [Validators.required, Validators.maxLength(128)]],
      model: ['', [Validators.required, Validators.maxLength(128)]],
      registration: ['', [Validators.required, this.registrationValidator()]],
      location: ['', [Validators.required, Validators.maxLength(128)]],
      dateTimeSeen: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.sightingForm.valid) {
      const newSighting: AircraftSighting = this.sightingForm.value;
      this.aircraftSightingService.addAircraftSighting(newSighting).subscribe(
        () => {
          this.toastr.success('Sighting added successfully!', 'Success');
          this.router.navigate(['/list']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  
  registrationValidator() {
    return Validators.pattern(/^[A-Za-z]{1,2}-[A-Za-z0-9]{1,5}$/);
  }
}
