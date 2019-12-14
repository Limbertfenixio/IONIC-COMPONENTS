import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {

  personajes = ['ringo','bob','patricio','asdasd'];
  constructor() { }

  ngOnInit() {
  }

  doReorder( event ){
    //elminamos el elemento del arreglo
    const itemOrder = this.personajes.splice( event.detail.from, 1 )[0];
    //Insertamos el elemento en la posición final
    this.personajes.splice( event.detail.to, 0 , itemOrder )
    //Completamos los cambios
    event.detail.complete();
    console.log(this.personajes)
  }

}
