import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  usuario = {
    nombre : '',
    email : '',
    password : '',
    telefono : '',
    descripcion : ''
  }
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.usuario);
  }

}
