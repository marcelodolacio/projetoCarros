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
  arrayAgupado: any;
  nome:any
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
            this.listaCarrosFiltrada.push(item); 
          }
      })

    this.arrayAgupado = this.listaCarrosFiltrada.reduce((group, product) => {
      const { placa } = product;
      group[placa] = group[placa] ?? [];
      group[placa].push(product);
      return group;
    }, {});

    
      this.teste();
      this.pontoSelecionado = true;
  });

  
  }

  teste(){
 
    this.listaCarrosFiltrada = [];
    
    for(let i = 0; i<Object.keys(this.arrayAgupado).length;i++){
      console.log(i,'iiii');
      let nome = Object.getOwnPropertyNames(this.arrayAgupado)[i];
      console.log('nomeee',nome)
      let number:any =this.arrayAgupado[nome].length
      let hora1:any = new Date(this.arrayAgupado[nome][i].data_posicao)
      let hora2:any = new Date(this.arrayAgupado[nome][number-1].data_posicao)
       console.log(hora1);
       console.log(hora2)
       console.log(Math.abs(hora2 - hora1 )/ 3600000)
       this.listaCarrosFiltrada.push({placa: nome, hora:this.timeConvert(Math.abs(hora2 - hora1 )/ 3600000)})

    }

  }
   timeConvert(n:number) {
    var num = n;
    var hours = (num );
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return  rhours + " hora(s) e " + rminutes + " minuto(s).";
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
