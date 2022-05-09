import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
declare const google:any
import { HttpClient } from '@angular/common/http';
import { AppServiceService } from './app-service.service';
import { Poi } from '../app/interface/poi';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  dados:any ;
  options: any;
  element:any;
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  pontoSelecionado=false;
  dadosCarros:  any []
  url:any;

  @ViewChild('mapElement') mapElement:any
  constructor(private http : HttpClient, private service : AppServiceService){
    
    this.dadosCarros =[
      {nome:'hb20', marca:'hyundai', cidade:'Brasilia',lat: -15.7801, lng:-47.9292 , tempo:'25 dias'},
      {nome:'Gol', marca:'VW', cidade:'Goiania',lat: -15.7801, lng:-47.9292 , tempo:'12 dias'},
      {nome:'Mobi', marca:'Fiat', cidade:'Taguatinga',lat: -15.7801, lng:-47.9292 , tempo:'10 dias'}
  ];
  }
  ngOnInit() {
      this.getCharacters();  
  }
  ngAfterViewInit(): void {
    
  }

  getCharacters() {
    this.service.recupaPoi().subscribe(products => {
      console.log(products);
      this.dados = products
    });
     

    
  }

  applyFilterGlobal($event: any, stringVal: any, dt: any) {
    dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }


  buscaMapa(elemento:any){
    this.pontoSelecionado = false;
    console.log('euuuu', elemento)
    this.lat=elemento.latitude
    this.lng=elemento.longitude
    this.pontoSelecionado = true;
    
  
  }

}
