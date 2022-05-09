import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {GMapModule} from 'primeng/gmap';
// import { MapsComponent } from './maps/maps.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete'; 
import { AgmCoreModule } from '@agm/core';
import {ImageModule} from 'primeng/image';
import {ToolbarModule} from 'primeng/toolbar';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    // MapsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule,
    GMapModule,
    GooglePlaceModule,
    ImageModule,
    ToolbarModule,
    InputTextModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBSbUSjaFFRK336-uv7CIDd9bDHCTZM-Ek',
      libraries: ['places']
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
