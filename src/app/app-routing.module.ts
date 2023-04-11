import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSightingComponent } from './add-sighting/add-sighting.component';
import { AircraftSightingDetailsComponent } from './aircraft-sighting-details/aircraft-sighting-details.component';
import { AircraftSightingsListComponent } from './aircraft-sightings-list/aircraft-sightings-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: AircraftSightingsListComponent },
  { path: 'detail/:id', component: AircraftSightingDetailsComponent },
  { path: 'add', component: AddSightingComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
