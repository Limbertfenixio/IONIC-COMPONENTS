import { Component, OnInit } from '@angular/core';
// Importamos el AlertController
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  // Declaramos una variable de tipo AlertController en el constructor para usar sus servicios
  constructor(public alertCtrl: AlertController) { }

  //Declaramos una variable de tipo string para almacenar lo que el usuario ponga en el input
  titulo : String;

  /*
    Metodo asincrono que mostrara un alert simple en pantalla
  */
  async presentAlert() {
    // Esperamos a que se cree el alertCtrl
    const alert = await this.alertCtrl.create(
      {
        header: 'Alert',
        subHeader: 'Subtitle',
        message: 'This is an alert message.',
        // Podemos especificar muchos botones separados de comas
        buttons: [{
          text: 'Cancel',
          // El role cancel ara que el alert termine
          role: 'cancel',
          // Clase css que tendra el boton
          cssClass: 'seconday',
          // Metodo que se ejecutara cuando se haga click en el boton cancel
          handler: (blash) =>{
            console.log('Cancelar')
          }
        },
        {
          text: 'OK',
          cssClass: 'seconday',
          handler: (blash) =>{
            console.log('Ok')
        } 
        }]
      }
    );
    // Presentamos el alert en pantalla
    await alert.present();
  }

  /*
    Metodo asincrono que mostrara un alert con un input en pantalla
  */
  async inputAlert() {
    // Esperamos a que el alertCtrl se cree 
    const input = await this.alertCtrl.create({
      header: 'Prompt!',
      // Introducimos un elemento de entrada de usuario con la propiedad inputs[]
      inputs: [
        {
          // Nombre de variable que recibira el texto de entrada
          name: 'txtTitulo',
          // Tipo de input puede ser password, date , etc
          type: 'text',
          // Texto placeholder a mostrar en el input
          placeholder: 'Escriba su nombre aqui'
        }],
      // Botones a mostrar en el alert con la propiedad buttons[]
      buttons: [{
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'seconday',
          handler: (blash) =>{
            console.log('Cancelar')
          }
        },
        {
          text: 'OK',
          cssClass: 'seconday',
          handler: (data) =>{
            console.log('Ok' , data)
            // Cuando el usuario pulse ok se ejecuta el metodo handler y recibimos el data y lo asignamos a la variable titulo
            this.titulo = data.txtTitulo;
        } 
      }]
    })
    // Mostramos el alert en pantalla 
    await input.present();
  }

  ngOnInit() {
  }

}
