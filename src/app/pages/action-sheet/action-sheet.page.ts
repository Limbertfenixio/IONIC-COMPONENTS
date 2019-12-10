import { Component, OnInit } from '@angular/core';
// Importamos el ActionSheetController 
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  // Declaramos que usaremos el servicio del ActionSheetController
  constructor(public actionSheetController: ActionSheetController) { }

  // Hacemos que el metodo presentActionSheet() se ejecute de forma asincrona
  async presentActionSheet() {
    // Con la porpiedad await le decimos al metodo que espere hasta que se cree el actionSheetController
    const actionSheet = await this.actionSheetController.create({
      // Cabezera del ActionSheet
      header: 'Albums',
      // La propiedad backdropDismiss Si es true, la hoja de acción se cerrará cuando se haga clic en el fondo.
      backdropDismiss: false,
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        cssClass: "rojo",
        // Es un evento que se ejecuta cuando se hace click en el boton
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    // Le decimos a la funcion que presente el actionSheet
    await actionSheet.present();
  }

  ngOnInit() {
  }

}
