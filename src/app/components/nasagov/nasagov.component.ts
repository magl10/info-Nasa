import { Component, OnInit } from '@angular/core';
import { NasaService } from '../../services/nasa.service'
import { nasaModel } from '../../models/NasaModel'

@Component({
  selector: 'app-nasagov',
  templateUrl: './nasagov.component.html',
  styleUrls: ['./nasagov.component.css']
})
export class NasagovComponent implements OnInit {
  nasa:nasaModel[] = [];
  q:string='MOON'
  constructor(public NASA:NasaService) { }


  apolo(){
    this.q='APOLLO%11%FLIGHT';
    console.log(this.q);
    this.ejecutaPeticion();
    console.log(this.q);
    console.log(this.nasa);
  }
  moon(){
    this.q='MOON';
    this.ejecutaPeticion();
    console.log(this.q);
    console.log(this.nasa);

  }
  lunarSuface(){
    this.q='LUNAR%SURFACE';
    this.ejecutaPeticion();
    console.log(this.q);
    console.log(this.nasa);
  }
  lunarBases(){
    this.q='LUNAR%BASES';
    this.ejecutaPeticion();
    console.log(this.q);
    console.log(this.nasa);
  }
  ejecutaPeticion(){
    
    this.NASA.getNasa(this.q)
    .subscribe(
      info =>{
        
        this.nasa  = info;
        console.log(this.nasa);
      },
      err => console.log(err)
    )
  }
  ngOnInit(): void {
    this.ejecutaPeticion();

  }

}
