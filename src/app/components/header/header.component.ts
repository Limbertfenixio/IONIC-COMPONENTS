// Importamos el metodo Input de Angular
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  // Declaramos la variable titulo de tipo string
  @Input() titulo: string;

  constructor() { }

  ngOnInit() {}

}
