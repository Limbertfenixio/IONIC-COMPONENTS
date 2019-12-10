import { DataService } from './../../services/data.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

   /* Creamos un array de tipo Componente que es una interfaz y vaciamos los objetos 
     que este tiene podemos crear mas de un objeto de este tipo separandolo por comoas y entre llaves*/
  componentes : Observable<Component[]>

  constructor(private menuCtrl: MenuController, private dataService: DataService) { }

  ngOnInit() {
    //Obtenemos los datos del servicio de tipo observable
    this.componentes = this.dataService.getMenuOpt();
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

 

}

