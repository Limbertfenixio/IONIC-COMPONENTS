import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async toast1(){
    const toast = await this.toastCtrl.create({
      header: 'Eliminado!',
      message: 'El objeto se ha elminado con exito',
      duration: 2000,
      animated: true,
      closeButtonText: 'okey',
      showCloseButton: true
    })

    return await toast.present();
  }

  async toast2(){
    const toast = await this.toastCtrl.create({
      header: 'Eliminado!',
      message: 'El objeto se ha elminado con exito',
      duration: 2000,
      position: 'middle',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    })

    return await toast.present();
  }

  async toast3(){
    const toast = await this.toastCtrl.create({
      header: 'Eliminado!',
      message: 'El objeto se ha elminado con exito',
      duration: 2000,
      animated: true,
      color: 'danger',
      position: 'top',
      translucent: true
    })

    return await toast.present();
  }
}
