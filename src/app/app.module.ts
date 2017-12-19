/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
/* Components */
import { AppComponent } from './app.component';
import { ChartJsComponent } from './shared/chartjs/chartjs.component';
/* Services */
import { DarkSkyWeatherService } from './services/index';

@NgModule({
  declarations: [
    AppComponent,
    ChartJsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ DarkSkyWeatherService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
