import { PopoverComponent } from './../../components/popover/popover.component';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async showPopover( event ){
    //Cremos el component popover pasandole los argumentos
    const popover = await this.popoverCtrl.create({
      component: PopoverComponent,
      event: event,
      mode: 'ios',
      backdropDismiss: false
    });

    //Mostramos el popover
    await popover.present();

    //Cuando se cierre el popover recibimos la data desde el popover
    const { data } = await popover.onWillDismiss();
    console.log(data);
  }

}
