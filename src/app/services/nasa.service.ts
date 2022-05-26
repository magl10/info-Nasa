import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Apod } from '../models/Apods'

@Injectable({
  providedIn: 'root'
})

export class NasaService {
  url:string='https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=6';
  constructor(private http:HttpClient) {

  }

  getApod(){
    return this.http.get<Apod[]>(this.url);
  }
}
