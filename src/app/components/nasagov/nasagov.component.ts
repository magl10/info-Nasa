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

  }
  moon(){
    this.q='MOON';
    console.log(this.q);
  }
  lunarSuface(){
    this.q='LUNAR%SURFACE';
  }
  lunarBases(){
    this.q='LUNAR%BASES';
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
