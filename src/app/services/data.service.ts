import { HttpClient } from '@angular/common/http';
import { Injectable, Component } from '@angular/core';
import { delay } from 'rxjs/operators';
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

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAlbums(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getHeroes(){
    return this.http.get('/assets/data/post.json');
  }

  getHeroesDelay(){
    return this.http.get('/assets/data/post.json').pipe( delay(3000) );
  }
}
