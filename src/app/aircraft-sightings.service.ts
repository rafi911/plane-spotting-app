import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AircraftSighting } from './models/aircraft-sighting.model';

@Injectable({
  providedIn: 'root'
})
export class AircraftSightingsService {

  private readonly apiUrl = 'https://localhost:7294/api/AircraftSighting';

  constructor(private http: HttpClient) { }

  getAircraftSightings(): Observable<AircraftSighting[]> {
    return this.http.get<AircraftSighting[]>(this.apiUrl);
  }

  getAircraftSighting(id: any): Observable<AircraftSighting> {
    return this.http.get<AircraftSighting>(`${this.apiUrl}/${id}`);
  }

  addAircraftSighting(sighting: AircraftSighting): Observable<AircraftSighting> {
    return this.http.post<AircraftSighting>(this.apiUrl, sighting);
  }

  updateAircraftSighting(sighting: AircraftSighting): Observable<AircraftSighting> {
    return this.http.put<AircraftSighting>(`${this.apiUrl}/${sighting.id}`, sighting);
  }

  deleteAircraftSighting(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
  search(query: string): Observable<AircraftSighting[]> {
    return this.http.get<AircraftSighting[]>(`${this.apiUrl}/search?query=${query}`);
  }
}
