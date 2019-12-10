import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Component[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //Obtenemos los datos del servicio de tipo observable
    this.componentes = this.dataService.getMenuOpt();
  }

}
