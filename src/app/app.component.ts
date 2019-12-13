import { SplashComponent } from './components/splash/splash.component';
import { Component } from '@angular/core';

import { Platform , ModalController} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private modalCtrl: ModalController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //this.presentModal(); 
    });
  }

  /*async presentModal(){
    const modal = await this.modalCtrl.create({
      component: SplashComponent,
      cssClass : 'fu'
    })
    return await modal.present();
  }*/
}
