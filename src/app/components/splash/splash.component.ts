import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
    /*setTimeout( () => {
      this.modalCtrl.dismiss();
    }, 5000)*/
  }

}
