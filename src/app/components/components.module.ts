import { SplashComponent } from './splash/splash.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

import { IonicModule } from '@ionic/angular';
// IMportamos el componente
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    // IMportamos el modulo de ionic para poder hacer uso de sus componentes
    IonicModule,
    RouterModule,
    FormsModule
  ],
  // Exportarmos el componente para que pueda ser usado por otras paginas
  exports: [
    HeaderComponent,
    MenuComponent,
    ModalComponent
  ]
})
export class ComponentsModule { }
