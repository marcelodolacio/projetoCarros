import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Poi } from '../app/interface/poi';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }
  recupaPoi() {
    return this.http.get<Poi>('http://localhost:3000/poi');    
  }
}
