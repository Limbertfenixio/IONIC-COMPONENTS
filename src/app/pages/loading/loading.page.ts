import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(private loadCtrl: LoadingController) { }

  ngOnInit() {
  }

  async showLoading(){
    //Creamos el loading
    const loading = await this.loadCtrl.create({
      message: 'Cargando..',
      duration: 2000,
      translucent: true,
      spinner: 'bubbles'
    });

    //Presentamos el loading
    await loading.present();

    // Obtenemos los datos cuando el load termina
    const {role, data} = await loading.onDidDismiss();
    console.log(role);
    console.log(data);
  }

}
