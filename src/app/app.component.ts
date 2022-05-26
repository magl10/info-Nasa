import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  private showGoUpButton: boolean;

  constructor(){
    this.showGoUpButton = false;
  }

  scrollTop() {
    document.documentElement.scrollTop = 0;
  }

  title = 'info-Nasa';
  ngOnInit():void{}
}
