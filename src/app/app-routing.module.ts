import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApodsComponent } from './components/apods/apods.component';
import { NasagovComponent } from './components/nasagov/nasagov.component';

const routes: Routes = [
  { path:'', component: NasagovComponent },
  { path:'home', component: NasagovComponent },
  { path:'apod', component: ApodsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
