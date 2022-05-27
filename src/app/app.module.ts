import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
 
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModules } from './material.modules';
import { ApodsComponent } from './components/apods/apods.component';
import { NasagovComponent } from './components/nasagov/nasagov.component';


@NgModule({
  declarations: [
    AppComponent,
    ApodsComponent,
    NasagovComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    MaterialModules,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
