import { HttpClient } from '@angular/common/http';
import { Injectable, Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  /**
   * Funcion de servicio que se encarga de hacer una peticion get al arreglo json del menu de opciones
   * @return retorna un arrgle de tipo Component[]
   */
  getMenuOpt(){
    return this.http.get<Component[]>('/assets/data/menu.json');
  }
}
