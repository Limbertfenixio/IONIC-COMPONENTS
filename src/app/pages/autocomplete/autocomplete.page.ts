import { Ciudad } from './../../class/interface';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.page.html',
  styleUrls: ['./autocomplete.page.scss'],
})
export class AutocompletePage implements OnInit {

  ciudadCtrl = new FormControl();
  filteredCiudades: Observable<Ciudad[]>;

  ciudades : Ciudad[] = [
    {
      nombre: 'La Paz',
      pais: 'Bolivia'
    },
    {
      nombre: 'Sucre',
      pais:'Bolivia'
    },
    {
      nombre: 'Santa Cruz',
      pais: 'Bolivia'
    }
  ];


  constructor() { 
    //Obtenemos un Observable que devuelve los ultimos cambios y lo pasamos por el pipe para la busqueda si no existen coincidencias se devuelve el array completo
    this.filteredCiudades = this.ciudadCtrl.valueChanges.pipe(startWith(''), map(ciudad => ciudad ? this._filteredCiudades(ciudad): this.ciudades.slice())) 
  }

  ngOnInit() {
  }

  _filteredCiudades(value: string): Ciudad[]{
    //Convertimos el valor en minusculas
    const filterValue = value.toLowerCase();

    //Retornamos el filtro de busqueda
    return this.ciudades.filter(ciudad => ciudad.nombre.toLowerCase().indexOf(filterValue) === 0);
  }
}
