import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
declare const google:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  dados:any [];
  options: any;
  element:any;
  let:any
  long:any
  pontoSelecionado=false;
  dadosCarros:  any []

  @ViewChild('mapElement') mapElement:any
  constructor(){
    this.dados =[{nome:'Praça do Relógio', cidade:'Brasilia',lat: -15.7801, lng:-47.9292},{nome:'Pedra fundamental', cidade:'Planaltina',lat: -16.6799, lng:-49.255}, {nome:'Sé', cidade:'São Paulo'}];
    this.dadosCarros =[
      {nome:'hb20', marca:'hyundai', cidade:'Brasilia',lat: -15.7801, lng:-47.9292 , tempo:'25 dias'},
      {nome:'Gol', marca:'VW', cidade:'Goiania',lat: -15.7801, lng:-47.9292 , tempo:'12 dias'},
      {nome:'Mobi', marca:'Fiat', cidade:'Taguatinga',lat: -15.7801, lng:-47.9292 , tempo:'10 dias'}
  ];
  }
  ngOnInit() {

    
  }
  ngAfterViewInit(): void {
    
  }
  nha() {
        this.element = new google.maps.Map(this.mapElement.nativeElement, {
        center: {lat: this.let, lng:this.long},
        zoom: 14
       
      })
      new google.maps.Marker({
        position:{lat: -15.7801, lng:-47.9292},
        title: "Hello World!",
      });
      console.log(this.element,"elemento")
       this.pontoSelecionado = true;
    
  }
  buscaMapa(elemento:any){
    console.log('euuuu', elemento)
    this.let=elemento.lat
    this.long=elemento.lng
    this.nha();
    
  
  }

}
