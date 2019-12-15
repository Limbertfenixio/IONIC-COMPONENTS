import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albums : any[] = [];
  textoBusqueda : any = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //Obtenemos los datos del servicio
    this.dataService.getAlbums().subscribe( albums => {
      this.albums = albums;
    });

  }

  Buscar(event){
    //Asignamos a la variable el dato recogido por el evento
    this.textoBusqueda = event.detail.value;
  }

}
