import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Poi } from '../app/interface/poi';
import { Posicao } from './interface/posicao';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  //RESPONSAVEL PELA REQUISICAO HTTP PARA RECUPERAR POI'S
  recupaPoi() {
    return this.http.get<Poi>('http://localhost:3000/poi');
  }

  //RESPONSAVEL PELA REQUISICAO HTTP PARA RECUPERAR CARROS
  recupaPosicaoCarro() {
    return this.http.get<Posicao>('http://localhost:3000/carros');
  }
}
