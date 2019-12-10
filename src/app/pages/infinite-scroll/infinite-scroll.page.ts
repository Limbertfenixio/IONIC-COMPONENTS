import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  //Seleccionamos el comoponente IonInfiniteScroll para poder manejar sus propiedades
  @ViewChild(IonInfiniteScroll, null) infiniteScroll : IonInfiniteScroll;
  data : any[] = Array(20);
  constructor() { }

  ngOnInit() {
  }

  /**
   * Evento de infinite scroll que se encarga de cargar los datos 
   * @param event 
   */
  loadData(event){
    //Si los datos son mas de 50 
    if(this.data.length > 50){
      //Completamos en infinite Scroll
      event.target.complete();
      //Desabilitamos el infinite scroll
      this.infiniteScroll.disabled = true;
      //Terminamos la funcion
      return;
    }

    setTimeout( () => {
      const nuevoArr = Array(20);
      //Agregamos mas elementos al arreglo
      this.data.push( ...nuevoArr);
      //Completamos el infinite scroll
      event.target.complete();
    }, 1000) 
  }
}
