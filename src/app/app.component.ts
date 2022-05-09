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
  dadosCarros:  any;
  url:any;
  listaCarrosFiltrada:any[] = [];

  @ViewChild('mapElement') mapElement:any
  constructor(private http : HttpClient, private service : AppServiceService){
  
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
   
    this.buscaPosicoesCarros(elemento);
  }

  buscaPosicoesCarros(elemento:any) {
    this.listaCarrosFiltrada = [];
    this.service.recupaPosicaoCarro().subscribe(posicao => {
      console.log(posicao);
      this.dadosCarros = posicao;
      this.dadosCarros.forEach((item:any,index:any) =>{ 
          if(elemento.raio >= this.calcCrow(elemento.latitude, elemento.longitude,item.latitude,item.longitude)){
            // console.log('menor',this.calcCrow(elemento.latitude, elemento.longitude,item.latitude,item.longitude));
            this.listaCarrosFiltrada.push(item);
            // console.log(this.listaCarrosFiltrada);
          }
      })
      this.pontoSelecionado = true;
      console.log(this.listaCarrosFiltrada.length);
      console.log(this.listaCarrosFiltrada);
    });

    
  }
  calculateDistance(poi:any,carro:any){
 this.calcCrow(1,1,1,1);
  }


   calcCrow(lat1:any, lon1:any, lat2:any, lon2:any) 
  {
    var R = 6371; // km
    var dLat = this.toRad(lat2-lat1);
    var dLon = this.toRad(lon2-lon1);
    var lat1:any = this.toRad(lat1);
    var lat2:any = this.toRad(lat2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    return d *1000;
  }

  // Converts numeric degrees to radians
  toRad(Value:any) 
  {
      return Value * Math.PI / 180;
  }

}
