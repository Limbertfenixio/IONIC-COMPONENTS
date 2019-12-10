import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  constructor() { }

  // Decharamos la variable fechaNaci de tipo date para obtener la fecha actual
  fechaNaci: Date = new Date();
  // Declaramos las variable customPickerOptions para pasar un arreglo de opciones personalizados
  customPickerOptions;
  customDate;

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: ( event ) => {
          console.log('Clicked Save!');
          console.log(event);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    } 
  }

  cambioFecha(event){
    console.log('ionChange', event);
  }
}
