import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Apod } from '../models/Apods'
import { nasaModel } from '../models/NasaModel'

@Injectable({
  providedIn: 'root'
})

export class NasaService {
  private urlApod:string='https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=6';
  //private urlNasa:string='https://images-api.nasa.gov/search/?q=';

  constructor(private http:HttpClient) {

  }

  getApod(){
    return this.http.get<Apod[]>(this.urlApod);
  }

  getNasa(q:string){
   // this.urlNasa+=q;
    return this.http.get<nasaModel[]>(`/search/?q=${q}`);
  }
}
