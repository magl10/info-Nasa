import { Component, OnInit } from '@angular/core';
import { NasaService } from '../../services/nasa.service'
import { Apod } from '../../models/Apods'

@Component({
  selector: 'app-apods',
  templateUrl: './apods.component.html',
  styleUrls: ['./apods.component.css']
})
export class ApodsComponent implements OnInit {
  apod:Apod[] = [];
  private finishPage = 5;
  private actualPage: number;

  constructor(public APOD:NasaService) {
    this.actualPage = 1;
   }
  
onScroll() {
    if (this.actualPage < this.finishPage) {
      this.ejecutaPeticion();
      this.actualPage ++;
    } else {
      console.log('No more lines. Finish page!');
    }
  }
  ejecutaPeticion(){
    
    this.APOD.getApod()
    .subscribe(
      apod =>{
        
        this.apod  = apod;
      },
      err => console.log(err)
    )
  }

  ngOnInit(): void {
    this.ejecutaPeticion();
  }

}
