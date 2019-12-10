import { ModalController, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  data = {
    nombre : '',
    apellido : '',
    sucursal : ''
  }

  constructor(private modalCtrl: ModalController, private loadCtrl: LoadingController ) { }

  ngOnInit() {}

  loadForm(){
    console.log(this.data)
    this.presentLoading();
    this.modalCtrl.dismiss();
  }

  async presentLoading(){
    const loading = await this.loadCtrl.create({
      duration: 1500
    });

    return await loading.present();
  }

}
