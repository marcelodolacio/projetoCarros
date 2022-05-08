import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
declare const google:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  dados:any
  options: any;
  element:any;

  @ViewChild('mapElement') mapElement:any
  constructor(){
    this.dados =[{nome:'Marcelo', cidade:'Brasilia'},{nome:'Renata', cidade:'Planaltina'}, {nome:'Nilson', cidade:'São Paulo'}];

  }
  ngOnInit() {
    
    
  }
  ngAfterViewInit() {
        this.element = new google.maps.Map(this.mapElement.nativeElement, {
        center: {lat: -15.7801, lng:-47.9292},
        zoom: 14
       
      })
    
  }
  buscaMapa(elemento:any){
    console.log('euuuu', elemento)
  
  }

}
