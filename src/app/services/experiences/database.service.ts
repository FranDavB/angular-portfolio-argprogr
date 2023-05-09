// Servicio para CRUD //

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { About, Experiences } from '../../interfaces/interfaces';

import { map } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  private apiExperienceUrl = "http://localhost:8080/api";
   private apiPrueba = "http://localhost:3000";

   // ABOUT //

 
   // EXPERIENCES //

  
  
   getExperience(): Observable<Experiences[]> {
    return this.http.get<Experiences[]>(this.apiPrueba + "/experience");
  }

  addExperience(newExperience: Experiences): Observable<Experiences>{
    return this.http.post<Experiences>(this.apiPrueba + "/experience", newExperience, httpOptions).pipe(map(
      response => response as Experiences
    ))
  }

  editExperience(experience: Experiences) : Observable<Experiences> {
    const url = `${this.apiPrueba}/experience/${experience.id}`;
    return this.http.put<Experiences>(url,experience,httpOptions).pipe(map(
      response => response as Experiences
    ))
  }
  
  deleteExperience(experience: Experiences ): Observable<Experiences> {
    const url = `${this.apiPrueba}/experience/${experience.id}`
    return this.http.delete<Experiences>(url);
  }
}
